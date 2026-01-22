'use client';

import React from 'react';
import type { EstadoAsistencia } from '@/config/event';

interface UserTokenProps {
  nombre: string;
  estado: EstadoAsistencia | null;
  isActive?: boolean;
}

/**
 * Credencial visual del usuario tipo "access badge"
 * Se ilumina cuando está activo
 */
export default function UserToken({ nombre, estado, isActive = false }: UserTokenProps) {
  if (!nombre) return null;
  
  return (
    <div 
      className={`
        glass-panel p-6 border-2 transition-all duration-500
        ${isActive 
          ? 'border-neon-magenta shadow-lg shadow-neon-magenta/30 animate-pulse-glow' 
          : 'border-steel-700/30'
        }
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="coord-label">USER_TOKEN</div>
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-neon-magenta' : 'bg-steel-600'} animate-pulse`} />
      </div>
      
      <div className="space-y-3">
        {/* Nombre */}
        <div>
          <div className="text-xs text-steel-600 font-mono mb-1">NAME</div>
          <div className={`text-xl font-bold tracking-wide ${isActive ? 'text-neon-magenta neon-glow' : 'text-steel-200'}`}>
            {nombre.toUpperCase()}
          </div>
        </div>
        
        {/* Estado */}
        {estado && (
          <div>
            <div className="text-xs text-steel-600 font-mono mb-1">STATUS</div>
            <div className="status-chip">
              <span className={`w-2 h-2 rounded-full ${
                estado === 'VOY' ? 'bg-green-500' :
                estado === 'TAL VEZ' ? 'bg-yellow-500' :
                'bg-red-500'
              }`} />
              {estado}
            </div>
          </div>
        )}
      </div>
      
      {/* Código de barras decorativo */}
      <div className="mt-4 pt-4 border-t border-steel-700/30">
        <div className="flex gap-[2px] h-8 items-end opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="flex-1 bg-steel-500"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
