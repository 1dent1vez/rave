import { eventConfig, type EstadoAsistencia } from '@/config/event';

const buildLocation = () => {
  if (eventConfig.UBICACION_DETALLE) {
    return `${eventConfig.UBICACION_TITULO} - ${eventConfig.UBICACION_DETALLE}`;
  }
  return eventConfig.UBICACION_TITULO;
};

export const buildWhatsAppMessage = (estado: EstadoAsistencia): string => {
  const header = eventConfig.WHATSAPP_TEMPLATE.replace('{status}', estado);
  const when = `${eventConfig.FECHA_TEXTO} ${eventConfig.HORA_TEXTO}`;
  const where = buildLocation();

  return [
    header,
    eventConfig.EVENTO_TITULO,
    when,
    where,
  ].join('\n');
};

export const generateWhatsAppURL = (estado: EstadoAsistencia): string => {
  const mensaje = buildWhatsAppMessage(estado);
  const mensajeCodificado = encodeURIComponent(mensaje);
  return `https://wa.me/${eventConfig.WHATSAPP_NUMERO}?text=${mensajeCodificado}`;
};

export const openWhatsApp = (estado: EstadoAsistencia): void => {
  const url = generateWhatsAppURL(estado);
  window.open(url, '_blank', 'noopener,noreferrer');
};
