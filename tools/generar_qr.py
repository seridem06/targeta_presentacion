"""Regenera assets/qr.svg. Uso: python tools/generar_qr.py [URL]
Requiere: pip install segno"""
import sys
import segno

URL = sys.argv[1] if len(sys.argv) > 1 else "https://seridem06.github.io/tarjeta/"
segno.make(URL, error="m").save(
    "assets/qr.svg", kind="svg", scale=1, border=2,
    dark="#0e1b2c", light="#ffffff", xmldecl=False, svgns=True, nl=False, omitsize=True,
)
print("QR generado para:", URL)
