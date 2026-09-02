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

## Banner de cookies

`components/CookieBanner.tsx` (nuevo, no existía). Aceptar / Rechazar / enlace a la
política de privacidad (`https://kelatos.com/privacy-policy/`), usa `localStorage` para
recordar la elección, montado en `app/layout.tsx` junto al resto de widgets globales.

## Schema.org

`app/page.tsx` ya incluía LocalBusiness + Service + FAQPage. Se ha completado
LocalBusiness con `areaServed` y `sameAs` (Google Business + YouTube), que faltaban.

## Sección Guía

`components/home/GuideSection.tsx` (nuevo, `id="guia"`, enlazado en el menú), con
contenido propio sobre averías habituales en equipos MSI y cómo se plantea el
diagnóstico. El contenido vive en `lib/home-content.ts` (`GUIDE`).

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

## Revisión (checklist de la familia Kelatos, esta pasada)

- Ya estaba bien: Google Analytics (coincide con el código proporcionado), redirección
  301 de URLs antiguas (`app/[slug]/page.tsx`, equivalente al `middleware.mjs` del resto
  de la familia), teléfono consistente (un único número para caja de información y
  botones, según comentario explícito en `site-config.ts`), formulario con SMTP +
  nodemailer.
- Añadido: banner de cookies, `areaServed`/`sameAs` en el schema LocalBusiness, sección
  "Guía", borde blanco del botón del chat (faltaba en `.chat-window-toggle`), H1
  reescrito (corto, afirmativo, sin interrogación ni condicionales, incluye la marca):
  "Tu MSI no funciona. Lo reparamos y protegemos tus archivos." — con tamaño de fuente
  aumentado (`text-4xl sm:text-5xl` → `text-5xl sm:text-6xl lg:text-7xl`).
- Validado con `npm run build` (Next.js) y `npx eslint` sobre todos los archivos
  tocados; ambos pasan sin errores.

## Revisión adicional (checklist unificado de la familia, a petición del cliente — repo 43/48)

- Verificado: `calComEmbedSrc` en `site-config.ts` ya incluye
  `attendeePhoneNumber` y `overlayCalendar`.
- Verificado: el correo `soporte@kelatos.com` no aparece visible en ningún componente.
- Verificado: `whatsappHrefWithText` ya usa "¡Hola MSITECH!" en todos los CTA
  (Hero, ContactInfoBox, ProblemsSection, WhatsAppButton).
- Verificado: `MobileNav.tsx` ya cierra el menú al pulsar cualquier enlace
  (`onClick={onClose}` en cada `Link`).
- Verificado: sin iconos ni imágenes con proporciones fijas incorrectas.
- Verificado: el H1 usa `text-5xl` (Tailwind, 48px) como tamaño base para móvil,
  con `sm:text-6xl lg:text-7xl` en pantallas mayores; ya coincide con el estándar
  de 48px en móvil de la familia.
- Verificado: `CTAButton.tsx` ya usa `rounded-full` con estados hover propios en
  las cinco variantes (red/black/whatsapp/outline/outline-light).
- Verificado: este repo no usa el patrón de franja de insignias bajo el H1
  (familia Dyson); no aplica la reubicación.
- Nota: el H1 documentado en la revisión anterior ("Tu MSI no funciona...") ya
  no es el actual; `lib/home-content.ts` usa un síntoma específico ("Tu MSI se
  apaga solo o no arranca."), que no repite la plantilla genérica.
- Sin cambios de código en este repo: todos los puntos del checklist ya estaban
  aplicados.

## Revisión adicional (nueva regla de menú móvil, a petición del cliente)

- Verificado: `MobileNav.tsx` se renderiza vía `createPortal` directamente en
  `document.body` como overlay `fixed inset-0` a pantalla completa, no como un
  desplegable en el flujo normal del documento dentro de `<header>`. Por esa
  arquitectura, la franja amarilla de aviso de independencia
  (`bg-amber-400` dentro de `<header>`) no puede solaparse ni ser empujada por
  el menú móvil al abrirse — es el mismo bug que se corrigió en el resto de la
  familia, pero aquí no se manifiesta por el diseño del componente.
- Verificado: `<header>` ya usa `sticky top-0`; se mantiene fijo/pegado arriba
  al hacer scroll.
- Sin cambios de código en este repo.
