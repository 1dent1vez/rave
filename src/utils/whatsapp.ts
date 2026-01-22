import { eventConfig, type EstadoAsistencia } from '@/config/event';

/**
 * Genera la URL de WhatsApp con el mensaje prellenado
 * @param nombre - Nombre del usuario
 * @param estado - Estado de asistencia
 * @returns URL completa de WhatsApp
 */
export function generateWhatsAppURL(nombre: string, estado: EstadoAsistencia): string {
  const { WHATSAPP_NUMERO, WHATSAPP_TEMPLATE } = eventConfig;
  
  // Reemplazar placeholders en el template
  const mensaje = WHATSAPP_TEMPLATE
    .replace('{name}', nombre)
    .replace('{status}', estado);
  
  // Codificar el mensaje para URL
  const mensajeCodificado = encodeURIComponent(mensaje);
  
  // Construir URL de WhatsApp
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${mensajeCodificado}`;
}

/**
 * Abre WhatsApp en una nueva ventana
 * @param nombre - Nombre del usuario
 * @param estado - Estado de asistencia
 */
export function openWhatsApp(nombre: string, estado: EstadoAsistencia): void {
  const url = generateWhatsAppURL(nombre, estado);
  window.open(url, '_blank', 'noopener,noreferrer');
}
