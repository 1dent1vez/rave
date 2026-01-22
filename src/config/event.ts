/**
 * Configuración del evento
 * Edita estos valores para personalizar la invitación
 */

export const eventConfig = {
  // Información del festejado
  FESTEJADO_NOMBRE: "Jair Conde",
  FESTEJADO_EDAD: 26,
  
  // Detalles del evento
  EVENTO_TITULO: "RAVE ROOM SESSION",
  FECHA: "2026.01-23",
  HORA: "19:00",
  UBICACION_TITULO: "Mi cuarto",
  UBICACION_DETALLE: "Coordenadas disponibles al confirmar",
  DRESS_CODE: "Neon / Tech Wear / Dark Mode",
  NOTAS: "Lo siento BB, pero esta noche es para bailar",
  TTP_TTD: "TTP / TTD", // Trae Tu Pomo / Trae Tu Droga
  
  // Configuración de WhatsApp
  WHATSAPP_NUMERO: "527294509882", // Formato internacional sin + ni espacios
  WHATSAPP_TEMPLATE: "Hola! Soy {name}. Confirmación para RAVE ROOM: {status}",
  
  // Textos UI
  CTA_LABEL: "Confirmar por WhatsApp",
  
  // Estados de asistencia
  ESTADOS: {
    VOY: "VOY",
    TAL_VEZ: "TAL VEZ",
    NO_PUEDO: "NO PUEDO",
  }
} as const;

export type EstadoAsistencia = typeof eventConfig.ESTADOS[keyof typeof eventConfig.ESTADOS];
