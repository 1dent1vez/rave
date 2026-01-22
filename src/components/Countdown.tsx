'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { eventConfig } from '@/config/event';

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
};

const pad = (value: number) => String(value).padStart(2, '0');

const getCountdown = (): CountdownState => {
  const target = new Date(eventConfig.START_ISO);
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (Number.isNaN(target.getTime()) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isLive: false };
};

export default function Countdown() {
  const [state, setState] = useState<CountdownState>(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setState(getCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = useMemo(
    () => [
      { label: 'Dias', value: state.days },
      { label: 'Horas', value: state.hours },
      { label: 'Minutos', value: state.minutes },
      { label: 'Segundos', value: state.seconds },
    ],
    [state],
  );

  return (
    <section className="relative z-10 px-4 pb-6 sm:pb-10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="glass-panel data-scan p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="coord-label">CUENTA REGRESIVA</div>
            <span className="status-chip">
              <span className={`w-2 h-2 rounded-full ${state.isLive ? 'bg-neon-magenta' : 'bg-steel-600'}`} />
              {state.isLive ? 'En curso' : 'Activo'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {items.map((item) => (
              <div key={item.label} className="border border-steel-700/50 rounded-lg p-3 bg-carbon-800/30">
                <div className="text-2xl sm:text-3xl font-bold font-display text-steel-200">
                  {pad(item.value)}
                </div>
                <div className="text-xs text-steel-500 font-mono mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="text-xs text-steel-500 mt-4">
            {state.isLive ? 'La fiesta ya inicio.' : `Inicio: ${eventConfig.FECHA_TEXTO} / ${eventConfig.HORA_TEXTO}`}
          </div>
        </div>
      </div>
    </section>
  );
}
