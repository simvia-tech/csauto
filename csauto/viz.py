def empty_svg(width: int, height: int, message: str) -> str:
    """Return a placeholder SVG when no data is available."""
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}">'
        f'<rect x="0" y="0" width="{width}" height="{height}" fill="#f8f9fb"/>'
        f'<text x="{width / 2:.1f}" y="{height / 2:.1f}" font-size="16" text-anchor="middle" '
        f'fill="#555" font-family="Helvetica, Arial, sans-serif">{message}</text>'
        "</svg>"
    )
