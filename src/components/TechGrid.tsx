'use client';

import React from 'react';

/**
 * Grid tecnico decorativo de fondo
 * Crea un patron de lineas finas tipo blueprint/sistema
 */
export default function TechGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />

      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-magenta/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-neon-purple/10 blur-3xl" />

      <div className="absolute top-4 left-4 coord-label">
        LAT: 19.4326
      </div>
      <div className="absolute top-4 right-4 coord-label">
        LON: 99.1332
      </div>
      <div className="absolute bottom-4 left-4 coord-label">
        SYS: INVITACION.ONLINE
      </div>
      <div className="absolute bottom-4 right-4 coord-label">
        v1.0
      </div>
    </div>
  );
}
