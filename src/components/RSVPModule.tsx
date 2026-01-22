'use client';

import React, { useState, useEffect } from 'react';
import { eventConfig, type EstadoAsistencia } from '@/config/event';
import { storage } from '@/utils/storage';
import { openWhatsApp } from '@/utils/whatsapp';
import UserToken from './UserToken';

/**
 * Módulo RSVP completo
 * Maneja input de nombre, selector de estado, preview y confirmación por WhatsApp
 */
export default function RSVPModule() {
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState<EstadoAsistencia | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  // Cargar datos guardados al montar
  useEffect(() => {
    const savedNombre = storage.getNombre();
    const savedEstado = storage.getEstado();
    
    if (savedNombre) setNombre(savedNombre);
    if (savedEstado) setEstado(savedEstado);
  }, []);

  // Validar nombre
  const validateNombre = (value: string): boolean => {
    if (value.length < 2) {
      setError('El nombre debe tener al menos 2 caracteres');
      return false;
    }
    if (value.length > 24) {
      setError('El nombre no puede exceder 24 caracteres');
      return false;
    }
    setError('');
    return true;
  };

  // Manejar cambio de nombre
  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, ' '); // Evitar espacios dobles
    setNombre(value);
    
    if (value) {
      validateNombre(value);
      storage.setNombre(value);
    }
  };

  // Manejar cambio de estado
  const handleEstadoChange = (nuevoEstado: EstadoAsistencia) => {
    setEstado(nuevoEstado);
    storage.setEstado(nuevoEstado);
  };

  // Manejar confirmación
  const handleConfirmar = () => {
    if (!nombre || !estado) return;
    
    if (validateNombre(nombre)) {
      openWhatsApp(nombre, estado);
    }
  };

  const isValid = nombre.length >= 2 && nombre.length <= 24 && estado !== null;

  return (
    <section className="relative z-10 px-4 py-12 sm:py-16">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="coord-label mb-2">RSVP_MODULE</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-steel-200">
            Confirma tu asistencia
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Formulario */}
          <div className="space-y-4 sm:space-y-6">
            {/* Input nombre */}
            <div className="glass-panel p-4 sm:p-6">
              <label htmlFor="nombre" className="block coord-label mb-3">
                TU NOMBRE
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={handleNombreChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Ingresa tu nombre"
                className="input-field text-base sm:text-lg"
                maxLength={24}
                aria-describedby={error ? 'nombre-error' : undefined}
              />
              {error && (
                <p id="nombre-error" className="mt-2 text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
              <div className="mt-2 text-xs text-steel-600">
                {nombre.length}/24 caracteres
              </div>
            </div>

            {/* Selector de estado */}
            <div className="glass-panel p-4 sm:p-6">
              <div className="coord-label mb-3">ESTADO DE ASISTENCIA</div>
              <div className="grid grid-cols-1 gap-3">
                {Object.values(eventConfig.ESTADOS).map((estadoOption) => (
                  <button
                    key={estadoOption}
                    onClick={() => handleEstadoChange(estadoOption)}
                    className={`
                      px-4 py-3 sm:py-4 border-2 transition-all duration-300 font-medium text-base sm:text-lg
                      focus-ring text-left
                      ${estado === estadoOption
                        ? 'border-neon-magenta bg-neon-magenta/10 text-neon-magenta'
                        : 'border-steel-700/50 bg-carbon-800/30 text-steel-300 hover:border-steel-600'
                      }
                    `}
                    aria-pressed={estado === estadoOption}
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

            {/* Botón de confirmación */}
            <button
              onClick={handleConfirmar}
              disabled={!isValid}
              className="btn-primary w-full text-base sm:text-lg py-4"
              aria-label={eventConfig.CTA_LABEL}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {eventConfig.CTA_LABEL}
              </span>
            </button>

            {!isValid && nombre && (
              <p className="text-sm text-steel-500 text-center">
                {!estado ? 'Selecciona tu estado de asistencia' : 'Completa tu nombre'}
              </p>
            )}
          </div>

          {/* Preview - User Token */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="coord-label mb-3">PREVIEW</div>
            {nombre ? (
              <UserToken 
                nombre={nombre} 
                estado={estado} 
                isActive={isFocused || isValid}
              />
            ) : (
              <div className="glass-panel p-8 sm:p-12 text-center">
                <div className="text-steel-600 mb-2">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-steel-500 text-sm">
                  Ingresa tu nombre para generar tu credencial
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
