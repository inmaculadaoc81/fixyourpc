export const SITE = {
  name: 'MsTech',
  fullName: 'MSITech Servicio Técnico MSI',
  domain: 'https://www.fixyourpc.es',
  tagline: 'Servicio técnico especializado en MSI en Madrid',
  description:
    'Reparación de portátiles y sobremesa MSI en Madrid. Diagnóstico gratuito en menos de 24h, piezas originales y garantía de 6 meses. Recogida a domicilio en toda la Península.',
  gaMeasurementId: 'G-X3KQHR8YV8',
} as const;

export const CONTACT = {
  // Mismo número para información y para los botones de llamada.
  phone: '+34 910 05 47 18',
  phoneHref: 'tel:+34910054718',
  whatsappNumber: '+34 649 97 01 28',
  whatsappHref: 'https://api.whatsapp.com/send?phone=+34649970128',
  whatsappHrefWithText: (text: string) =>
    `https://api.whatsapp.com/send?phone=+34649970128&text=${encodeURIComponent(text)}`,
  pickupHref: 'https://sis.redsys.es/tiendaWeb/item/NDk4OzI%3D',
  calComEmbedSrc: 'https://cal.com/kelatos/30min?embed=true&theme=light',
  calComHref: 'https://cal.com/kelatos/30min',
  address: {
    street: 'C. de Joaquín María López, 26',
    postalCode: '28015',
    city: 'Madrid',
    district: 'Chamberí',
    country: 'España',
    full: 'C. de Joaquín María López, 26, 28015 Madrid, España',
  },
  parking: 'Aparcamiento público a pocos metros de C. de Blasco de Garay, 61',
  metro: 'Metro Islas Filipinas (L7) · Canal (L2)',
  hours: {
    weekdays: '09:30 – 18:00 h',
    weekend: 'Cerrado',
    display: ['Lunes a viernes: 09:30 – 18:00', 'Sábados, domingos y días festivos estamos cerrados'],
  },
  googleBusinessHref: 'https://maps.app.goo.gl/CMeGGACNaf5b25XU8',
  youtubeHref: 'https://www.youtube.com/channel/UCaxAqLD9Mk5gvzqoDedlWSA',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6973023978803!2d-3.7114464!3d40.4377011!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0xd4229bf1c4e162d%3A0xb04a07b76b6d5ff8!2sMSITech%20Servicio%20T%C3%A9cnico%20MSi!5e0!3m2!1ses-419!2ses!4v1787264824206!5m2!1ses-419!2ses',
} as const;

export type NavItem = { label: string; href: string };

// One-page site: the header only ever links to in-page anchors.
export const NAV: NavItem[] = [
  { label: '¿Qué te pasa?', href: '#problemas' },
  { label: 'Tus datos', href: '#datos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Recogida', href: '#recogida' },
  { label: 'Opiniones', href: '#confianza' },
  { label: 'Cita', href: '#cita' },
  { label: 'Guía', href: '#guia' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];
