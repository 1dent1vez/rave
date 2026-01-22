'use client';

import React from 'react';
import { eventConfig } from '@/config/event';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 pt-16 pb-10">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex justify-between text-xs font-mono text-steel-600 mb-8 animate-fade-in">
          <div>INVITACION_ID: RAVE-01</div>
          <div>CANAL: WHATSAPP</div>
          <div className="hidden sm:block">{eventConfig.FECHA_TEXTO}</div>
        </div>

        <div className="glass-panel data-scan p-8 md:p-12 mb-6 animate-fade-in">
          <div className="mb-4">
            <span className="status-chip">
              <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
              ACTIVO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 text-gradient glitch-trigger">
            {eventConfig.EVENTO_TITULO}
          </h1>

          <p className="text-lg md:text-xl text-steel-400 font-light">
            Invitacion digital para celebrar a {eventConfig.FESTEJADO_NOMBRE}
          </p>
          <p className="text-base md:text-lg text-steel-500 font-light mt-1">
            Rave privado. Acceso por confirmacion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel p-4 sm:p-6 tech-border">
            <div className="coord-label mb-2">FECHA</div>
            <div className="text-steel-200 font-medium text-base sm:text-lg">
              {eventConfig.FECHA_TEXTO}
            </div>
            <div className="text-neon-magenta font-mono text-xl sm:text-2xl mt-1">
              {eventConfig.HORA_TEXTO}
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 tech-border">
            <div className="coord-label mb-2">UBICACION</div>
            <div className="text-steel-200 font-medium text-base sm:text-lg">
              {eventConfig.UBICACION_TITULO}
            </div>
            <div className="text-steel-500 text-sm mt-1">
              {eventConfig.UBICACION_DETALLE}
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 tech-border sm:col-span-2 lg:col-span-1">
            <div className="coord-label mb-2">ACCESO</div>
            <div className="text-steel-200 font-medium text-base sm:text-lg">
              Confirmacion previa
            </div>
            <div className="text-steel-500 text-sm mt-1">
              Invitados limitados
            </div>
          </div>
        </div>

        {eventConfig.REGLAS.length > 0 && (
          <div className="mt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-panel p-4 sm:p-6 border border-neon-magenta/20">
              <div className="coord-label mb-3">REGLAS RAPIDAS</div>
              <ul className="grid gap-2 text-sm text-steel-400">
                {eventConfig.REGLAS.map((regla) => (
                  <li key={regla} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-magenta" />
                    <span>{regla}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
