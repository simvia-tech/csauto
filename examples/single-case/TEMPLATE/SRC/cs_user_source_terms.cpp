/*============================================================================
 * Immersed Boundary Method (IBM) – Fixed cylinder penalization
 *
 * This file implements a volume-penalization IBM for a **fixed** cylinder
 * using a **sharp (Heaviside)** solid indicator.
 *
 * Three user-defined functions are provided:
 *
 *   1. cs_user_parameters      – create the scalar field "Ki" for output
 *   2. cs_user_extra_operations – fill Ki = K0 * chi at every time step
 *   3. cs_user_source_terms    – apply the penalization source terms to
 *                                the velocity equation
 *
 * Penalization form (for each velocity component j):
 *
 *   S_imp[j][j] -= K0 * chi * V_i          (implicit, drives u_f to 0)
 *   S_exp[j]    += K0 * chi * V_i * u_s[j] (explicit, drives u_f to u_s)
 *
 * Combined effect inside the solid:  S = K0 * chi * V_i * (u_s - u_f)
 *
 * Targeted code_saturne version: 9.0
 *============================================================================*/

#include "cs_defs.h"

#include <math.h>

#include "cs_headers.h"

/*----------------------------------------------------------------------------*/

BEGIN_C_DECLS

/*============================================================================
 * Static module-level constants
 *============================================================================*/

/* ========================================================================
 * Cylinder geometry (fixed in space)
 * ======================================================================== */

static const cs_real_t _cyl_x = 0.5;   /* x-coordinate of the centre [m] */
static const cs_real_t _cyl_y = 0.02;   /* y-coordinate of the centre [m] */
static const cs_real_t _cyl_d = 0.02;   /* diameter  [m]                   */
static const cs_real_t _cyl_r = 0.01;  /* radius    [m]  (= D/2)          */

/* ========================================================================
 * Penalization coefficient  [1/s]
 *   (DOE placeholder – replaced before compilation)
 * ======================================================================== */

static const cs_real_t _k0 = {K0};

/*============================================================================
 * Private helper functions
 *============================================================================*/

/*----------------------------------------------------------------------------*/
/*!
 * \brief  Compute the sharp solid indicator (Heaviside mask).
 *
 * Returns 1.0 if the point (x, y) is inside the cylinder, 0.0 otherwise.
 *
 * \param[in]  x   x-coordinate of the evaluation point
 * \param[in]  y   y-coordinate of the evaluation point
 *
 * \return  chi  solid indicator in {0, 1}
 */
/*----------------------------------------------------------------------------*/

static inline cs_real_t
_compute_mask(cs_real_t  x,
              cs_real_t  y)
{
  const cs_real_t dx = x - _cyl_x;
  const cs_real_t dy = y - _cyl_y;
  const cs_real_t r  = sqrt(dx * dx + dy * dy);

  return (r <= _cyl_r) ? 1.0 : 0.0;
}

/*============================================================================
 * Public user-defined functions
 *============================================================================*/

/*----------------------------------------------------------------------------*/
/*!
 * \brief  Create the cell-based scalar field "Ki" and enable its volumetric
 *         post-processing output.
 *
 * "Ki" stores the local penalization coefficient K0 * chi so that the
 * solid region can be visualised in ParaView / EnSight.
 *
 * \param[in,out]  domain  pointer to the computational domain
 */
/*----------------------------------------------------------------------------*/

void
cs_user_parameters(cs_domain_t  *domain)
{
  CS_NO_WARN_IF_UNUSED(domain);

  /* ------------------------------------------------------------------
   * 1. Create the field if it does not already exist
   * ------------------------------------------------------------------ */

  cs_field_t *f_ki = cs_field_by_name_try("Ki");

  if (f_ki == NULL) {
    f_ki = cs_field_create("Ki",
                           CS_FIELD_PROPERTY,
                           CS_MESH_LOCATION_CELLS,
                           1,       /* dimension (scalar) */
                           false);  /* not interleaved    */
  }

  /* ------------------------------------------------------------------
   * 2. Activate volumetric post-processing for this field
   * ------------------------------------------------------------------ */

  const int k_post_vis = cs_field_key_id("post_vis");
  cs_field_set_key_int_bits(f_ki, k_post_vis, CS_POST_ON_LOCATION);
}

/*----------------------------------------------------------------------------*/
/*!
 * \brief  Fill the "Ki" field at every time step.
 *
 * A bounding box pre-filter avoids computing sqrt for cells that
 * are obviously outside the cylinder region.
 *
 * \param[in,out]  domain  pointer to the computational domain
 */
/*----------------------------------------------------------------------------*/

void
cs_user_extra_operations(cs_domain_t  *domain)
{
  CS_NO_WARN_IF_UNUSED(domain);

  /* ------------------------------------------------------------------
   * 1. Retrieve the Ki field (exit gracefully if absent)
   * ------------------------------------------------------------------ */

  cs_field_t *f_ki = cs_field_by_name_try("Ki");

  if (f_ki == NULL)
    return;

  /* ------------------------------------------------------------------
   * 2. Mesh quantities
   * ------------------------------------------------------------------ */

  const cs_lnum_t    n_cells  = cs_glob_mesh->n_cells;
  const cs_real_3_t *cell_cen
    = (const cs_real_3_t *)cs_glob_mesh_quantities->cell_cen;

  cs_real_t *ki = f_ki->val;

  /* ------------------------------------------------------------------
   * 3. Bounding box for early rejection
   *    10 % margin around the cylinder radius for safety.
   * ------------------------------------------------------------------ */

  const cs_real_t margin = _cyl_r * 1.1;

  const cs_real_t xmin = _cyl_x - margin;
  const cs_real_t xmax = _cyl_x + margin;
  const cs_real_t ymin = _cyl_y - margin;
  const cs_real_t ymax = _cyl_y + margin;

  /* ------------------------------------------------------------------
   * 4. Loop over cells – compute Ki = K0 * chi
   * ------------------------------------------------------------------ */

  for (cs_lnum_t i = 0; i < n_cells; i++) {

    const cs_real_t x = cell_cen[i][0];
    const cs_real_t y = cell_cen[i][1];

    /* Quick bounding-box rejection */
    if (x < xmin || x > xmax || y < ymin || y > ymax) {
      ki[i] = 0.0;
      continue;
    }

    const cs_real_t chi = _compute_mask(x, y);
    ki[i] = _k0 * chi;   /* either K0 or 0 */
  }
}

/*----------------------------------------------------------------------------*/
/*!
 * \brief  Apply volume-penalization source terms to the velocity equation.
 *
 * For every cell inside the solid (chi = 1):
 *
 *   $S_imp,jj -= K_0 \, V_i$
 *   $S_exp,j  += K_0 \, V_i \, u_{s,j}$
 *
 * A summary log is printed once at the final time step (rank 0 only).
 *
 * \param[in]      domain  pointer to the computational domain
 * \param[in]      f_id    field id of the variable being solved
 * \param[in,out]  st_exp  explicit part of the source term  (vector)
 * \param[in,out]  st_imp  implicit part of the source term  (3×3 tensor)
 */
/*----------------------------------------------------------------------------*/

void
cs_user_source_terms(cs_domain_t  *domain,
                     int           f_id,
                     cs_real_t    *st_exp,
                     cs_real_t    *st_imp)
{
  CS_NO_WARN_IF_UNUSED(domain);

  /* ========================================================================
   * 0.  Early exit: act only on the velocity field
   * ======================================================================== */

  const cs_field_t *f = cs_field_by_id(f_id);

  if (f != CS_F_(vel))
    return;

  /* ========================================================================
   * 1.  Retrieve mesh and time information
   * ======================================================================== */

  const cs_lnum_t    n_cells  = cs_glob_mesh->n_cells;
  const cs_real_t   *cell_vol = cs_glob_mesh_quantities->cell_vol;

  const cs_real_3_t *cell_cen
    = (const cs_real_3_t *)cs_glob_mesh_quantities->cell_cen;

  /* Cylinder velocity (fixed cylinder => zero) */
  const cs_real_t u_cyl[3] = {0.0, 0.0, 0.0};

  /* ========================================================================
   * 2.  Cast source-term arrays to vector / tensor form
   * ======================================================================== */

  cs_real_3_t  *s_exp = (cs_real_3_t  *)st_exp;
  cs_real_33_t *s_imp = (cs_real_33_t *)st_imp;

  /* ========================================================================
   * 3.  Bounding box for early cell rejection (10 % safety margin)
   * ======================================================================== */

  const cs_real_t margin = _cyl_r * 1.1;

  const cs_real_t xmin = _cyl_x - margin;
  const cs_real_t xmax = _cyl_x + margin;
  const cs_real_t ymin = _cyl_y - margin;
  const cs_real_t ymax = _cyl_y + margin;

  /* ========================================================================
   * 4.  Loop over cells – penalization source terms
   * ======================================================================== */

  cs_real_t local_vol_chi    = 0.0;
  cs_lnum_t n_cells_penalized = 0;

  for (cs_lnum_t i = 0; i < n_cells; i++) {

    const cs_real_t x = cell_cen[i][0];
    const cs_real_t y = cell_cen[i][1];

    /* Quick bounding-box rejection */
    if (x < xmin || x > xmax || y < ymin || y > ymax)
      continue;

    /* Evaluate solid indicator */
    const cs_real_t chi = _compute_mask(x, y);

    if (chi < 0.5)   /* Heaviside: chi is 0 or 1 */
      continue;

    /* ---- Accumulate statistics ---- */

    const cs_real_t vi = cell_vol[i];

    local_vol_chi += vi;
    n_cells_penalized++;

    /* ---- Implicit part: diagonal of the 3×3 tensor ---- */

    s_imp[i][0][0] -= _k0 * vi;
    s_imp[i][1][1] -= _k0 * vi;
    s_imp[i][2][2] -= _k0 * vi;

    /* ---- Explicit part: vector ---- */

    s_exp[i][0] += _k0 * vi * u_cyl[0];
    s_exp[i][1] += _k0 * vi * u_cyl[1];
    s_exp[i][2] += _k0 * vi * u_cyl[2];
  }

  /* ========================================================================
   * 5.  Summary log at the final time step
   *
   *  Compares the penalized volume  sum(V_i * chi)  with the theoretical
   *  cylinder cross-section area  pi * R^2  (2-D per unit depth).
   * ======================================================================== */

  static bool logged = false;

  const cs_time_step_t *ts = cs_get_glob_time_step();

  bool is_final = false;

  if (ts != NULL && ts->nt_max > 0) {
    if (ts->nt_cur >= ts->nt_max)
      is_final = true;
  }
  else if (ts != NULL && ts->t_max > 0.0) {
    if (ts->t_cur >= ts->t_max)
      is_final = true;
  }

  if (is_final && !logged && cs_log_default_is_active()) {

    /* Parallel reduction of local counters */
    cs_real_t glob_vol = local_vol_chi;
    cs_parall_sum(1, CS_REAL_TYPE, &glob_vol);

    cs_gnum_t glob_ncells = n_cells_penalized;
    cs_parall_sum(1, CS_GNUM_TYPE, &glob_ncells);

    /* Theoretical cross-section area (2-D) */
    const cs_real_t v_theo = 3.14159265358979 * _cyl_r * _cyl_r;

    cs_log_printf
      (CS_LOG_DEFAULT,
       "\n========== IBM cylinder (SHARP INTERFACE) ==========\n"
       "  K0                = %g\n"
       "  Penalized cells   = %llu\n"
       "  sum(Vi*chi)       = %14.7e\n"
       "  V_theoretical     = %14.7e\n"
       "  Ratio V/V_theo    = %14.7f\n"
       "====================================================\n\n",
       (double)_k0,
       (unsigned long long)glob_ncells,
       (double)glob_vol,
       (double)v_theo,
       (double)(glob_vol / v_theo));

    logged = true;
  }
}

/*----------------------------------------------------------------------------*/

END_C_DECLS