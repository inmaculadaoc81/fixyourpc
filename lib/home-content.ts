// Copy escrito para esta landing siguiendo un enfoque de problema → preocupación
// → consecuencia → solución. Los hechos (precios, plazos, garantía, zonas,
// horario, dirección) son los reales del negocio; nada de cifras o reseñas
// inventadas.

export const HERO = {
  kicker: "Reparación de portátiles y sobremesa MSI en Madrid",
  title: "Tu MSI se ha estropeado.",
  titleWorry:
    "Ahora te preocupan dos cosas: cuánto tardarás en recuperarlo y si perderás lo que llevabas dentro.",
  subtitle:
    "Antes de nada, vamos a mirarlo con calma: qué le pasa exactamente, si merece la pena repararlo y qué pasa con tus archivos. Diagnóstico gratuito, sin compromiso.",
  worries: [
    "Cuánto tiempo vas a estar sin tu equipo",
    "Si vas a perder lo que tenías guardado",
    "Si de verdad merece la pena repararlo",
  ],
  stats: [
    { value: "0€", label: "diagnóstico sin compromiso" },
    { value: "<24h", label: "tiempo medio de diagnóstico" },
    { value: "6 meses", label: "de garantía en cada reparación" },
  ],
};

export const PROBLEMS = {
  eyebrow: "¿Qué te pasa?",
  title: "¿Qué le está pasando a tu MSI?",
  subtitle: "Cuéntanos qué hace o qué ha dejado de hacer. Esto es lo que solemos ver en el día a día:",
  items: [
    {
      title: "No enciende",
      description:
        "Revisamos primero la placa base y la fuente de alimentación antes de tocar la pantalla. La mayoría de los casos de «pantalla negra» son un fallo de arranque, no del panel.",
    },
    {
      title: "Se calienta o se apaga solo",
      description:
        "Empezamos por limpiar ventiladores y renovar la pasta térmica. Si persiste, revisamos la tarjeta gráfica y, en portátiles gaming, todo el sistema de disipación.",
    },
    {
      title: "Se ha roto la pantalla",
      description:
        "Si el panel está dañado, hacemos el cambio con pieza original. Si solo parpadea o da fallos raros, puede tener arreglo sin sustituirla.",
    },
    {
      title: "La batería dura muy poco",
      description:
        "Medimos el estado real de la batería frente a la especificación de fábrica. Si no tenemos el modelo en stock, te avisamos en cuanto llegue la pieza.",
    },
    {
      title: "Va muy lento",
      description:
        "Revisamos disco, procesos de arranque y estado del SSD/HDD. Muchas veces ampliar RAM o migrar a SSD lo soluciona sin más reparación.",
    },
    {
      title: "Necesito recuperar mis datos",
      description:
        "Si el disco duro está fallando, priorizamos salvar tus archivos antes de tocar nada más. Ve a la siguiente sección, es importante.",
    },
  ],
};

export const DATA_WORRY = {
  eyebrow: "Lo que de verdad te preocupa",
  title: "Vale, tu MSI no enciende. Pero... ¿qué pasa con tus archivos?",
  paragraphs: [
    "Que un equipo no encienda no significa que hayas perdido lo que tenías guardado. Son cosas distintas: una cosa es que el equipo arranque, y otra muy distinta es que el disco esté dañado.",
    "Lo primero que hacemos es precisamente eso: determinar qué ha pasado, sin tocar nada que pueda poner en riesgo tus archivos. Si nos dices desde el principio que tus datos son lo prioritario, lo tratamos así en todo el proceso.",
  ],
  disclaimer:
    "No prometemos recuperar el 100% de los datos siempre — eso depende de cada caso. Lo que sí hacemos es priorizar tus archivos antes de cualquier otra intervención cuando nos dices que son importantes.",
};

export const WHAT_NOT_TO_DO = {
  title: "Si tus archivos son importantes, antes de nada:",
  items: [
    "No reinstales el sistema operativo sin saber qué ha pasado.",
    "No inicialices ni formatees el disco o el SSD.",
    "Si se ha mojado, no sigas intentando encenderlo.",
    "Dinos desde el primer mensaje que tus datos son prioritarios.",
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: "Cómo funciona",
  title: "Así de sencillo",
  subtitle: "Sin vueltas. Así reducimos la incertidumbre desde el primer minuto.",
  steps: [
    { title: "Nos cuentas qué pasa", description: "Por WhatsApp, teléfono o formulario. Cuéntanoslo con tus palabras." },
    { title: "Revisamos el problema", description: "Diagnóstico gratuito, normalmente en menos de 24 horas laborables." },
    { title: "Te explicamos las opciones y decides", description: "Presupuesto cerrado, sin sorpresas. Reparas solo si tú quieres." },
  ],
};

export const PICKUP = {
  eyebrow: "Recogida a domicilio",
  title: "Tu equipo está roto. No hace falta que tu día también lo esté.",
  paragraphs: [
    "No tienes que coger el equipo, buscar aparcamiento y perder la mañana. Solicitas la recogida, nosotros vamos a por él, lo revisamos y te contamos las opciones.",
    "Recogida y entrega disponible en Chamberí, Moncloa, Salamanca, Chamartín, Tetuán, Chueca, Argüelles y el resto de la Península.",
  ],
  steps: ["Solicitas la recogida", "Recibimos el equipo", "Lo revisamos", "Te explicamos las opciones"],
};

export const TRUST = {
  eyebrow: "Antes de confiar en nosotros",
  title: "Lo que cuentan quienes ya han pasado por aquí",
  facts: [
    "Diagnóstico y presupuesto gratuitos, sin compromiso",
    "Piezas originales MSI cuando hay que sustituir algo",
    "Garantía de 6 meses en reparación y piezas",
    "No somos servicio técnico oficial de MSI ni atendemos equipos en garantía de fábrica",
  ],
  items: [
    {
      quote:
        "Mi portátil MSI no arrancaba y pensaba que tendría que comprar uno nuevo. En MsTech localizaron la avería enseguida, repararon el equipo y además salvaron mis archivos. El trato fue cercano y muy profesional.",
      author: "Marta S.",
      source: "Reseña en Google",
    },
    {
      quote:
        "Buscaba un servicio técnico especializado en MSI en Madrid que fuera rápido y serio. En MsTech me explicaron el problema, el precio y el tiempo estimado desde el primer momento. Todo claro, sin sorpresas y con muy buen resultado.",
      author: "Luis A.",
      source: "Reseña en Google",
    },
    {
      quote:
        "Utilicé el servicio de recogida y entrega a domicilio y fue muy cómodo. Repararon mi portátil MSI, cambiaron el disco y mejoraron muchísimo su rendimiento. Muy satisfecha con la atención recibida.",
      author: "María G.",
      source: "Reseña en Google",
    },
  ],
};

export const GOOGLE_BUSINESS_BLOCK = {
  title: "Antes de confiar en nosotros, mira lo que dicen quienes ya han venido.",
  cta: "Lee las opiniones de nuestros clientes",
};

export const YOUTUBE_BLOCK = {
  title: "Antes de decirte que sabemos hacerlo, preferimos enseñártelo.",
  subtitle: "Reparaciones y casos reales en nuestro canal.",
  cta: "Ver el canal",
};

export const CAL_BLOCK = {
  eyebrow: "¿Prefieres dejarlo agendado?",
  title: "Reserva una cita de 30 minutos",
  subtitle: "Elige el día y la hora que mejor te venga. Sin llamadas, sin esperas.",
};

export const FAQS = {
  eyebrow: "Preguntas frecuentes",
  title: "Las dudas que de verdad tiene la gente",
  items: [
    {
      question: "¿Cuánto tiempo voy a estar sin mi equipo?",
      answer:
        "El diagnóstico suele estar listo en menos de 24 horas laborables. A partir de ahí, el tiempo de reparación depende de si tenemos la pieza en stock o hay que pedirla.",
    },
    {
      question: "¿Voy a perder mis archivos?",
      answer:
        "Que el equipo no encienda no significa que hayas perdido tus datos. Primero identificamos qué ha pasado; si nos dices que tus archivos son prioritarios, lo tratamos así desde el primer momento.",
    },
    {
      question: "¿Merece la pena repararlo?",
      answer:
        "Te damos un diagnóstico y un presupuesto cerrado antes de tocar nada, para que decidas tú con toda la información. Sin sorpresas después.",
    },
    {
      question: "¿Puedo enviarlo sin ir en persona?",
      answer:
        "Sí. Tenemos recogida y entrega a domicilio en Madrid y en el resto de la Península, para que no tengas que desplazarte.",
    },
    {
      question: "¿Tengo que saber exactamente qué modelo tengo?",
      answer:
        "No hace falta. Cuéntanos qué le pasa con tus palabras y nosotros nos encargamos de identificar el modelo y la pieza que necesita.",
    },
    {
      question: "¿Qué hago si se ha mojado?",
      answer:
        "No intentes encenderlo de nuevo. Cuéntanoslo cuanto antes: cuanto menos se manipule un equipo mojado, más opciones hay de salvarlo.",
    },
    {
      question: "¿Es MSITech servicio técnico oficial de MSI?",
      answer:
        "No. No somos servicio técnico oficial y no cubrimos equipos en garantía de fábrica. Reparamos averías que la garantía oficial no cubre o una vez que esta ha caducado.",
    },
    {
      question: "¿Qué garantía tiene la reparación?",
      answer:
        "6 meses en la reparación y en las piezas sustituidas. Si el problema reaparece en ese plazo, lo solucionamos sin coste adicional.",
    },
  ],
};

export const FORM_CONTENT = {
  eyebrow: "Contacto",
  title: "Cuéntanos qué ha pasado",
  subtitle: "Rellena el formulario y te respondemos en 5 minutos.",
};

export const EQUIPMENT_OPTIONS = ["Portátil MSI", "Sobremesa MSI", "Monitor MSI", "Otro"];
