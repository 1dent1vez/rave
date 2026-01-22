import type { EstadoAsistencia } from '@/config/event';

const STORAGE_KEYS = {
  ESTADO: 'rave_invitation_estado',
} as const;

export const storage = {
  setEstado: (estado: EstadoAsistencia): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.ESTADO, estado);
    }
  },

  getEstado: (): EstadoAsistencia | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.ESTADO) as EstadoAsistencia | null;
    }
    return null;
  },

  clear: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.ESTADO);
    }
  },
};
