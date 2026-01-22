import type { EstadoAsistencia } from '@/config/event';

const STORAGE_KEYS = {
  NOMBRE: 'rave_invitation_nombre',
  ESTADO: 'rave_invitation_estado',
} as const;

export const storage = {
  /**
   * Guarda el nombre del usuario
   */
  setNombre: (nombre: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.NOMBRE, nombre);
    }
  },

  /**
   * Recupera el nombre del usuario
   */
  getNombre: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.NOMBRE);
    }
    return null;
  },

  /**
   * Guarda el estado de asistencia
   */
  setEstado: (estado: EstadoAsistencia): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.ESTADO, estado);
    }
  },

  /**
   * Recupera el estado de asistencia
   */
  getEstado: (): EstadoAsistencia | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.ESTADO) as EstadoAsistencia | null;
    }
    return null;
  },

  /**
   * Limpia todos los datos guardados
   */
  clear: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.NOMBRE);
      localStorage.removeItem(STORAGE_KEYS.ESTADO);
    }
  },
};
