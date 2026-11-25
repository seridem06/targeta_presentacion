# Tarjeta de presentación digital

Tarjeta personal de Eusebio Frank Oviedo Turpo con código QR.

## Estructura
```
index.html
css/styles.css
js/main.js
assets/qr.svg
tools/generar_qr.py
```

## Ver en VS Code
Abre la carpeta y usa la extensión **Live Server** (clic derecho en `index.html` > Open with Live Server).

## Publicar (GitHub Pages)
Copia esta carpeta como `tarjeta/` dentro del repo `seridem06.github.io`:
```
git add tarjeta
git commit -m "Agrega tarjeta digital"
git push
```
Quedará en https://seridem06.github.io/tarjeta/ , que es la URL que ya codifica el QR.

## Cambiar la URL del QR
```
pip install segno
python tools/generar_qr.py https://nueva-url
```
