'use client';

import React from 'react';

/**
 * Grid técnico decorativo de fondo
 * Crea un patrón de líneas finas tipo blueprint/sistema
 */
export default function TechGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {/* Grid vertical */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '80px 80px'
           }} 
      />
      
      {/* Grid horizontal */}
      <div className="absolute inset-0"
           style={{
             backgroundImage: `linear-gradient(0deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '80px 80px'
           }}
      />
      
      {/* Líneas de acento */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />
      
      {/* Coordenadas decorativas */}
      <div className="absolute top-4 left-4 coord-label">
        LAT: 19.MOJABI
      </div>
      <div className="absolute top-4 right-4 coord-label">
        LONG: 99.GHOST
      </div>
      <div className="absolute bottom-4 left-4 coord-label">
        SYS: DATA.ONLINE
      </div>
      <div className="absolute bottom-4 right-4 coord-label">
        v2023.DATA
      </div>
    </div>
  );
}
