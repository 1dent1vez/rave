/**
 * Configuracion del evento
 * Edita estos valores para personalizar la invitacion
 */

export const eventConfig = {
  EVENTO_TITULO: "RAVE ROOM SESSION",
  FESTEJADO_NOMBRE: "Jair Conde",
  FECHA_TEXTO: "Viernes 23 de enero",
  HORA_TEXTO: "7:00 PM",
  START_ISO: "2026-01-23T19:00:00-06:00",

  UBICACION_TITULO: "Mi cuarto",
  UBICACION_DETALLE: "Metepec, acceso por mensaje",

  REGLAS: [
    "Quiero que llegues puntual",
    "Te pido respeto al espacio",
    "Yo cuido la luz, sin flashes directos",
    "Quiero que te hidrates",
  ],

  TTP_TTD: "TTP / TTD",

  WHATSAPP_NUMERO: "527294509882",
  WHATSAPP_TEMPLATE: "Confirmo mi asistencia: {status}",

  MAPS_EMBED_URL:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d941.7287535554547!2d-99.55792273048588!3d19.24253526505507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE0JzMzLjEiTiA5OcKwMzMnMjYuMiJX!5e0!3m2!1ses!2smx!4v1769064050973!5m2!1ses!2smx",

  AUDIO: {
    SRC: "/audio/rave-loop.wav",
    LABEL: "Audio rave",
    NOTE: "Loop original sin derechos, vibe industrial rave",
  },

  PALETA: {
    FONDO: "rgb(10, 10, 10)",
    TEXTO: "rgb(170, 170, 170)",
    ACENTO: "rgb(255, 0, 255)",
    BORDE: "rgb(74, 74, 74)",
    PANEL: "rgb(18, 18, 18)",
    BLUR: "12px",
  },
} as const;

export const RSVP_ESTADOS = {
  VOY: "Voy",
  TAL_VEZ: "Tal vez",
  NO_PUEDO: "No puedo",
} as const;

export type EstadoAsistencia = typeof RSVP_ESTADOS[keyof typeof RSVP_ESTADOS];
