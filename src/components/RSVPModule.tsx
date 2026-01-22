'use client';

import React, { useEffect, useState } from 'react';
import { RSVP_ESTADOS, type EstadoAsistencia } from '@/config/event';
import { storage } from '@/utils/storage';
import { openWhatsApp } from '@/utils/whatsapp';

const DEFAULT_ESTADO: EstadoAsistencia = RSVP_ESTADOS.VOY;

export default function RSVPModule() {
  const [estado, setEstado] = useState<EstadoAsistencia>(DEFAULT_ESTADO);

  useEffect(() => {
    const savedEstado = storage.getEstado();
    if (savedEstado) {
      setEstado(savedEstado);
    } else {
      storage.setEstado(DEFAULT_ESTADO);
    }
  }, []);

  const handleEstadoChange = (nuevoEstado: EstadoAsistencia) => {
    setEstado(nuevoEstado);
    storage.setEstado(nuevoEstado);
  };

  const handleConfirmar = () => {
    openWhatsApp(estado);
  };

  return (
    <section className="relative z-10 px-4 py-12 sm:py-16">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="coord-label mb-2">CONFIRMACION</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-steel-200">
            Confirma tu asistencia
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6">
          <div className="space-y-5">
            <div className="glass-panel data-scan p-4 sm:p-6">
              <div className="coord-label mb-3">ESTADO DE ASISTENCIA</div>
              <div role="radiogroup" aria-label="Estado de asistencia" className="grid grid-cols-1 gap-3">
                {Object.values(RSVP_ESTADOS).map((estadoOption) => (
                  <button
                    key={estadoOption}
                    type="button"
                    role="radio"
                    aria-checked={estado === estadoOption}
                    onClick={() => handleEstadoChange(estadoOption)}
                    className={`
                      px-4 py-3 sm:py-4 border-2 transition-all duration-300 font-medium text-base sm:text-lg
                      focus-ring text-left rounded-lg
                      ${estado === estadoOption
                        ? 'border-neon-magenta bg-neon-magenta/10 text-neon-magenta'
                        : 'border-steel-700/50 bg-carbon-800/30 text-steel-300 hover:border-steel-600'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        estado === estadoOption
                          ? 'border-neon-magenta bg-neon-magenta'
                          : 'border-steel-600'
                      }`} />
                      {estadoOption}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="glass-panel data-scan p-5 sm:p-6 h-fit">
            <div className="coord-label mb-2">WHATSAPP</div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-steel-200 mb-2">
              Confirmacion directa
            </h3>
            <button
              type="button"
              onClick={handleConfirmar}
              className="btn-primary w-full text-base sm:text-lg py-4 animate-pulse-glow"
              aria-label="Confirmar por WhatsApp"
            >
              Confirmar por WhatsApp
            </button>
            <p className="text-xs text-steel-500 mt-3">
              Se abre en una nueva pestana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
