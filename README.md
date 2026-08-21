# MSITech — landing one-page (fixyourpc.es)

Landing de una sola página para MSITech (servicio técnico especializado en MSI, Madrid),
construida con Next.js (App Router), TypeScript y Tailwind CSS. Enfocada en los problemas
y preocupaciones reales del cliente (no en un listado de modelos o servicios).

## Estructura

```
app/
  page.tsx        Toda la landing (importa las secciones de components/home)
  [slug]/         Redirección 301 a "/" para cualquier URL antigua no reconocida
  api/contact/    Envío del formulario por SMTP
  sitemap.ts      Sitemap de una sola URL
  robots.ts
components/
  home/           Secciones de la landing (Hero, Problemas, Datos, Cómo funciona,
                  Recogida, Confianza, Google/YouTube, Cal.com, Contacto)
  *.tsx           Header, Footer, formulario, chatbot, WhatsApp, mapa, FAQ, etc.
lib/
  site-config.ts   Datos del negocio (teléfono, WhatsApp, dirección, enlaces)
  home-content.ts  Todo el copy de la landing
```

## Navegación

Es una sola página; el menú usa anclas (`#problemas`, `#datos`, `#como-funciona`,
`#recogida`, `#confianza`, `#cita`, `#faq`, `#contacto`). Las URLs antiguas de la
migración anterior (posts de blog, páginas de servicio/idioma) redirigen con 301 a "/"
o a la sección equivalente (`/contacto` → `/#contacto`, `/blog` → `/#problemas`).

## Formulario de contacto

`/api/contact` envía el email por SMTP (Nodemailer) usando variables de entorno — nunca
credenciales en el código. Copia `.env.example` a `.env.local` y rellena:

```
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=xxxxxxxxxxxxxxxx
CONTACT_EMAIL=soporte@kelatos.com
```

En Vercel: Project Settings → Environment Variables. `SMTP_PASS` solo se lee vía
`process.env` dentro de `/api/contact`, nunca se expone al frontend.

## Cal.com

La sección de cita (`#cita`) embebe `https://cal.com/kelatos/30min?embed=true&theme=light`
directamente en un iframe (no es un simple botón/enlace).

## Google Analytics

ID configurado en `lib/site-config.ts` (`SITE.gaMeasurementId`): `G-X3KQHR8YV8`.

## Chatbot y WhatsApp

El chatbot (`components/Chatbot.tsx`) reutiliza la integración de n8n (mismo webhook),
con el mensaje inicial adaptado a MSI. El botón de WhatsApp flotante usa un icono SVG
propio y está posicionado para no solaparse con el chatbot.

## Desarrollo

```
npm install
npm run dev
npm run build
```

## Notas

- No se afirma en ningún sitio que MSITech sea servicio técnico oficial de MSI.
- No se han inventado cifras, reseñas ni estadísticas: los 3 testimonios y los hechos de
  la sección de confianza son los reales ya publicados por el negocio.
- El contenido migrado de la versión multi-página anterior (1.729 posts de blog, ~61
  páginas de servicio/idioma/producto) se retiró del proyecto al pasar a landing de una
  sola página; si se necesita recuperar ese contenido más adelante, hay que volver a
  extraerlo de la web original.
