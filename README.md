# Enrutados Landing

Landing estática para presentar Enrutados: una app Android que decide rutas,
comida, parking y visitas mediante perfiles, scoring visible y comprobación en
mapa.

## Abrir en local

No necesita instalación. Puedes abrir `index.html` directamente en el navegador.

Para servirla en local:

```bash
python3 -m http.server 5177
```

Después abre:

```text
http://127.0.0.1:5177
```

## Estructura

```text
.
├── index.html
├── styles.css
├── script.js
└── assets/
```

## Despliegue recomendado

El proyecto está preparado para GitHub Pages:

1. En GitHub, entra en `Settings`.
2. Abre `Pages`.
3. Selecciona la rama `main`.
4. Usa la carpeta raíz `/`.

## Contenido

- Hero con marca Enrutados.
- Verticales de decisión: moverse, comer, aparcar y visitar.
- Capturas reales de la app.
- Explicación del scoring visible.
- Bloque técnico con contratos separados.
