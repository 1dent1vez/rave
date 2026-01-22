'use client';

import React from 'react';
import { eventConfig } from '@/config/event';

/**
 * Sección hero tipo panel de sistema
 * Presenta la información del evento en formato técnico/editorial
 */
export default function Hero() {
  return (
    <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">
        {/* Header técnico */}
        <div className="mb-8 flex items-center justify-between text-xs coord-label">
          <span>EVENT_ID: #{Math.floor(Math.random() * 9999).toString().padStart(4, '0')}</span>
          <span className="hidden sm:inline">PROTOCOL: RAVE.v2</span>
          <span>{eventConfig.FECHA}</span>
        </div>
        
        {/* Título principal */}
        <div className="glass-panel p-8 md:p-12 mb-6 animate-fade-in">
          <div className="mb-4">
            <span className="status-chip">
              <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
              ACTIVO
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-gradient glitch-trigger">
            {eventConfig.EVENTO_TITULO}
          </h1>
          
          <p className="text-lg md:text-xl text-steel-400 font-light">
            Celebración de {eventConfig.FESTEJADO_NOMBRE}
            {eventConfig.FESTEJADO_EDAD && ` // ${eventConfig.FESTEJADO_EDAD} años`}
          </p>
        </div>
        
        {/* Metadatos del evento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Fecha y hora */}
          <div className="glass-panel p-4 sm:p-6 tech-border">
            <div className="coord-label mb-2">TIMESTAMP</div>
            <div className="text-steel-200 font-medium text-base sm:text-lg">
              {eventConfig.FECHA}
            </div>
            <div className="text-neon-magenta font-mono text-xl sm:text-2xl mt-1">
              {eventConfig.HORA}
            </div>
          </div>
          
          {/* Ubicación */}
          <div className="glass-panel p-4 sm:p-6 tech-border">
            <div className="coord-label mb-2">LOCATION</div>
            <div className="text-steel-200 font-medium text-base sm:text-lg">
              {eventConfig.UBICACION_TITULO}
            </div>
            <div className="text-steel-500 text-sm mt-1">
              {eventConfig.UBICACION_DETALLE}
            </div>
          </div>
          
          {/* Dress code */}
          <div className="glass-panel p-4 sm:p-6 tech-border sm:col-span-2 lg:col-span-1">
            <div className="coord-label mb-2">DRESS_CODE</div>
            <div className="text-steel-200 font-medium text-base sm:text-lg">
              {eventConfig.DRESS_CODE}
            </div>
            {eventConfig.NOTAS && (
              <div className="text-steel-500 text-sm mt-1">
                {eventConfig.NOTAS}
              </div>
            )}
          </div>
        </div>
        
        {/* TTP/TTD Badge */}
        {eventConfig.TTP_TTD && (
          <div className="mt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-panel p-4 border-2 border-neon-magenta/30 bg-neon-magenta/5">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                {/* Icono de botella */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-neon-magenta to-neon-purple flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-carbon-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <div className="text-neon-magenta font-bold text-lg sm:text-xl font-mono">
                    {eventConfig.TTP_TTD}
                  </div>
                  <div className="text-steel-400 text-xs sm:text-sm mt-0.5">
                    Trae Tu Pomo / Trae Tu Droga
                  </div>
                </div>
                
                {/* Indicador decorativo */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-neon-magenta/50 bg-neon-magenta/10 rounded">
                  <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
                  <span className="text-xs font-mono text-neon-magenta uppercase tracking-wider">POLICY</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
