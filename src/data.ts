import { BonusItem, FaqItem } from './types';

export const BONUSES: BonusItem[] = [
  {
    id: 'hooks',
    tag: 'BONUS 1',
    title: '100 HOOKS FACELESS',
    desc: 'Deja de pensar cómo empezar cada publicación.',
    image: 'https://i.imgur.com/ule7XVJ.png',
    samples: [
      '“3 hábitos que te están costando $1,000 al mes sin que te des cuenta...”',
      '“Si pudiera empezar de cero en Instagram hoy, esto es exactamente lo que haría...”',
      '“La razón por la que el 95% de las cuentas temáticas nunca generan su primera venta...”',
      '“Guarda este video si quieres automatizar tus ingresos trabajando 45 min al día...”',
      '“Deja de cometer este error común en tus Reels si tienes menos de 1,000 seguidores...”'
    ]
  },
  {
    id: 'ideas',
    tag: 'BONUS 2',
    title: '50 IDEAS DE CONTENIDO FACELESS',
    desc: 'Deja de preguntarte qué publicar.',
    image: 'https://i.imgur.com/TfBwtgR.png',
    samples: [
      'Carrusel: Las 5 herramientas de IA gratuitas para crear 30 días de contenido en 2 horas.',
      'Reel Estético: Timelapse de trabajo en laptop + texto reflexivo sobre disciplina financiera.',
      'Carrusel Educativo: Desglose paso a paso de un embudo simple por mensaje directo (DM).',
      'Reel Comparativo: Lo que cree la gente vs. La realidad de monetizar una cuenta faceless.',
      'Carrusel Guía: Checklist de 7 puntos para auditar tu biografía antes de lanzar una oferta.'
    ]
  },
  {
    id: 'cta',
    tag: 'BONUS 3',
    title: '50 CTA QUE CONVIERTEN',
    desc: 'Dile a tu audiencia qué hacer después.',
    image: 'https://i.imgur.com/L8ny9oh.png',
    samples: [
      '“Comenta la palabra ‘SISTEMA’ y te envío la guía completa directo a tus mensajes privados.”',
      '“Toca el enlace en mi biografía para descargar la plantilla antes de que cierre el acceso.”',
      '“Guarda este post para aplicarlo en tu próxima sesión de creación de contenido.”',
      '“Envía un mensaje con ‘7DÍAS’ para acceder al entrenamiento paso a paso hoy mismo.”',
      '“Comparte esto con alguien que necesite empezar a monetizar su conocimiento.”'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Necesito experiencia en Instagram?',
    answer: 'No. El sistema comienza desde los fundamentos.'
  },
  {
    question: '¿Tengo que mostrar mi cara?',
    answer: 'No. Está diseñado para cuentas faceless.'
  },
  {
    question: '¿Necesito seguidores?',
    answer: 'No necesitas empezar con una audiencia grande.'
  },
  {
    question: '¿Puedo hacerlo desde el celular?',
    answer: 'Sí. Gran parte del sistema puede ejecutarse desde smartphone.'
  }
];
