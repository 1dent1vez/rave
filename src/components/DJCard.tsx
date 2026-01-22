'use client';

import React from 'react';

/**
 * Tarjeta del DJ
 * Muestra información del DJ que estará en vivo esta noche
 */
export default function DJCard() {
  return (
    <div className="glass-panel p-4 sm:p-6 border-2 border-neon-magenta/30 tech-border animate-slide-up" style={{ animationDelay: '0.4s' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="coord-label">EN VIVO ESTA NOCHE</div>
        <div className="flex items-center gap-2 px-2 sm:px-3 py-1 border border-neon-magenta/50 bg-neon-magenta/10">
          <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
          <span className="text-xs font-mono text-neon-magenta uppercase tracking-wider">LIVE</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* Icono de DJ */}
        <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-neon-magenta to-neon-purple flex items-center justify-center flex-shrink-0 shadow-lg shadow-neon-magenta/50">
          <svg className="w-10 h-10 sm:w-8 sm:h-8 text-carbon-950" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        {/* Info del DJ */}
        <div className="flex-1 text-center sm:text-left">
          <div className="text-neon-magenta font-bold text-2xl sm:text-xl mb-1 neon-glow">
            ARK         </div>
          <div className="text-steel-400 text-sm font-mono mb-2">
            DJ // PRODUCER
          </div>
          <div className="text-steel-500 text-xs sm:text-sm">
            Set en vivo · No vamos a volver
          </div>
        </div>
      </div>
      
      {/* Visualizador de audio decorativo */}
      <div className="mt-4 pt-4 border-t border-steel-700/30">
        <div className="flex gap-1 h-10 sm:h-12 items-end justify-center">
          {Array.from({ length: 32 }).map((_, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-neon-magenta to-neon-purple rounded-t opacity-60"
              style={{ 
                height: `${Math.sin(i * 0.5) * 50 + 50}%`,
                animation: `pulse ${1 + Math.random()}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
