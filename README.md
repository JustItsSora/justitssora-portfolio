# JustItsSora · Portafolio

Portafolio personal de **JustItsSora**, desarrollador de software en Linux.
Una sola página con paneles de cristal, menú móvil a pantalla completa y todo el
contenido en un único archivo de configuración.

Desplegado en Vercel y construido con Next.js (App Router), TypeScript y
Tailwind CSS. Basado en la plantilla de portafolio de **Ayle** (MIT).

## Contenido

- Todo el texto, enlaces, imágenes y listas viven en `config/site.ts`.
- Los colores y el tema (rojo `#E6224D` y verde `#34E0A1` de Capri) están en
  `app/globals.css`, `components/layout/Background.tsx` y en las clases Tailwind.
- Los iconos son SVG en línea en `components/ui/Icon.tsx`.

## Desarrollo

Requiere Node.js 18.17 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Build

El proyecto usa `output: "export"`, así que genera un sitio estático:

```bash
npm run build   # deja el sitio en out/
```

## Deploy

```bash
vercel --prod
```

## Créditos

Plantilla original: Ayle (MIT). Arte y personaje: Capri, de Lachy
(https://github.com/lachydotmcg/capri-desktop).
