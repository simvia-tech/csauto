#!/usr/bin/env python

###
### This file is generated automatically by SALOME v9.15.0 with dump python functionality
###

import sys
import salome

salome.salome_init()
import salome_notebook

###
### GEOM component
###

import GEOM
from salome.geom import geomBuilder
import math
import SALOMEDS


geompy = geomBuilder.New()

O = geompy.MakeVertex(0, 0, 0)
OX = geompy.MakeVectorDXDYDZ(1, 0, 0)
OY = geompy.MakeVectorDXDYDZ(0, 1, 0)
OZ = geompy.MakeVectorDXDYDZ(0, 0, 1)
box = geompy.MakeBoxDXDYDZ(1, 1, 1)
x_0 = geompy.CreateGroup(box, geompy.ShapeType["FACE"])
geompy.UnionIDs(x_0, [3])
x_H = geompy.CreateGroup(box, geompy.ShapeType["FACE"])
geompy.UnionIDs(x_H, [13])
y_0 = geompy.CreateGroup(box, geompy.ShapeType["FACE"])
geompy.UnionIDs(y_0, [23])
y_H = geompy.CreateGroup(box, geompy.ShapeType["FACE"])
geompy.UnionIDs(y_H, [27])
z_0 = geompy.CreateGroup(box, geompy.ShapeType["FACE"])
geompy.UnionIDs(z_0, [31])
z_H = geompy.CreateGroup(box, geompy.ShapeType["FACE"])
geompy.UnionIDs(z_H, [33])
all_edges = geompy.CreateGroup(box, geompy.ShapeType["EDGE"])
geompy.UnionIDs(all_edges, [5, 8, 10, 12, 15, 18, 20, 22, 25, 26, 29, 30])
[x_0, x_H, y_0, y_H, z_0, z_H, all_edges] = geompy.GetExistingSubObjects(box, False)
Auto_group_for_Sub_mesh_1 = geompy.CreateGroup(box, geompy.ShapeType["FACE"])
geompy.UnionList(Auto_group_for_Sub_mesh_1, [x_0, x_H, y_0, y_H, z_0, z_H])
geompy.addToStudy( O, 'O' )
geompy.addToStudy( OX, 'OX' )
geompy.addToStudy( OY, 'OY' )
geompy.addToStudy( OZ, 'OZ' )
geompy.addToStudy( box, 'box' )
geompy.addToStudyInFather( box, x_0, 'x=0' )
geompy.addToStudyInFather( box, x_H, 'x=H' )
geompy.addToStudyInFather( box, y_0, 'y=0' )
geompy.addToStudyInFather( box, y_H, 'y=H' )
geompy.addToStudyInFather( box, z_0, 'z=0' )
geompy.addToStudyInFather( box, z_H, 'z=H' )
geompy.addToStudyInFather( box, all_edges, 'all_edges' )
geompy.addToStudyInFather( box, Auto_group_for_Sub_mesh_1, 'Auto_group_for_Sub-mesh_1' )

###
### SMESH component
###

import  SMESH, SALOMEDS
from salome.smesh import smeshBuilder

smesh = smeshBuilder.New()

Mesh_1 = smesh.Mesh(box,'Mesh_1')
NETGEN_1D_2D_3D = Mesh_1.Tetrahedron(algo=smeshBuilder.NETGEN_1D2D3D)
NETGEN_3D_Parameters_1 = NETGEN_1D_2D_3D.Parameters()
NETGEN_3D_Parameters_1.SetMaxSize( 0.173205 )
NETGEN_3D_Parameters_1.SetMinSize( 0.00173205 )
NETGEN_3D_Parameters_1.SetSecondOrder( 0 )
NETGEN_3D_Parameters_1.SetOptimize( 1 )
NETGEN_3D_Parameters_1.SetFineness( 2 )
NETGEN_3D_Parameters_1.SetChordalError( -1 )
NETGEN_3D_Parameters_1.SetChordalErrorEnabled( 0 )
NETGEN_3D_Parameters_1.SetUseSurfaceCurvature( 1 )
NETGEN_3D_Parameters_1.SetFuseEdges( 1 )
NETGEN_3D_Parameters_1.SetQuadAllowed( 1 )
NETGEN_3D_Parameters_1.SetCheckChartBoundary( 8 )
x_0_1 = Mesh_1.GroupOnGeom(x_0,'x=0',SMESH.FACE)
x_H_1 = Mesh_1.GroupOnGeom(x_H,'x=H',SMESH.FACE)
y_0_1 = Mesh_1.GroupOnGeom(y_0,'y=0',SMESH.FACE)
y_H_1 = Mesh_1.GroupOnGeom(y_H,'y=H',SMESH.FACE)
z_0_1 = Mesh_1.GroupOnGeom(z_0,'z=0',SMESH.FACE)
z_H_1 = Mesh_1.GroupOnGeom(z_H,'z=H',SMESH.FACE)
all_edges_1 = Mesh_1.GroupOnGeom(all_edges,'all_edges',SMESH.EDGE)
Quadrangle_2D = Mesh_1.Quadrangle(algo=smeshBuilder.QUADRANGLE,geom=Auto_group_for_Sub_mesh_1)
Quadrangle_Parameters_1 = Quadrangle_2D.QuadrangleParameters(smeshBuilder.QUAD_QUADRANGLE_PREF,-1,[],[],None,smeshBuilder.QUAD_QUADRANGLE_PREF,-1,[],[])
Regular_1D = Mesh_1.Segment(geom=all_edges)
Number_of_Segments_1 = Regular_1D.NumberOfSegments(10)
isDone = Mesh_1.Compute()
Mesh_1.CheckCompute()
[ x_0_1, x_H_1, y_0_1, y_H_1, z_0_1, z_H_1, all_edges_1 ] = Mesh_1.GetGroups()
box_1 = Mesh_1.GroupOnGeom(box,'box',SMESH.VOLUME)
Sub_mesh_1 = Quadrangle_2D.GetSubMesh()
Sub_mesh_2 = Regular_1D.GetSubMesh()


## Set names of Mesh objects
smesh.SetName(Sub_mesh_1, 'Sub-mesh_1')
smesh.SetName(box_1, 'box')
smesh.SetName(NETGEN_3D_Parameters_1, 'NETGEN 3D Parameters_1')
smesh.SetName(y_H_1, 'y=H')
smesh.SetName(z_0_1, 'z=0')
smesh.SetName(Mesh_1.GetMesh(), 'Mesh_1')
smesh.SetName(Quadrangle_Parameters_1, 'Quadrangle Parameters_1')
smesh.SetName(x_0_1, 'x=0')
smesh.SetName(x_H_1, 'x=H')
smesh.SetName(Sub_mesh_2, 'Sub-mesh_2')
smesh.SetName(z_H_1, 'z=H')
smesh.SetName(all_edges_1, 'all_edges')
smesh.SetName(Regular_1D.GetAlgorithm(), 'Regular_1D')
smesh.SetName(y_0_1, 'y=0')
smesh.SetName(NETGEN_1D_2D_3D.GetAlgorithm(), 'NETGEN 1D-2D-3D')
smesh.SetName(Number_of_Segments_1, 'Number of Segments_1')
smesh.SetName(Quadrangle_2D.GetAlgorithm(), 'Quadrangle_2D')
