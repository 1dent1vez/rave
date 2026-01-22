import Link from 'next/link';
import TechGrid from '@/components/TechGrid';
import { eventConfig } from '@/config/event';

export default function UbicacionPage() {
  return (
    <main className="relative min-h-screen">
      <TechGrid />

      <div className="fixed inset-0 bg-gradient-to-b from-carbon-950 via-carbon-900 to-carbon-950 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,255,0.16),transparent_50%)] -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(192,0,255,0.14),transparent_45%)] -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_35%,rgba(10,10,10,0.85)_100%)] -z-10" />

      <div className="relative z-10 px-4 py-16">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <div className="coord-label mb-2">UBICACION</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-steel-200">
                {eventConfig.UBICACION_TITULO}
              </h1>
              <p className="text-sm sm:text-base text-steel-500 mt-2">
                {eventConfig.UBICACION_DETALLE}
              </p>
            </div>
            <Link href="/" className="text-xs font-mono text-steel-500 hover:text-steel-300 transition-colors">
              Volver
            </Link>
          </div>

          <div className="glass-panel data-scan p-4 sm:p-6">
            <div className="coord-label mb-3">MAPA EMBEBIDO</div>
            <div className="w-full aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden border border-steel-700/50 bg-carbon-900/60">
              <iframe
                title="Mapa de ubicacion"
                src={eventConfig.MAPS_EMBED_URL}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-steel-500 mt-3">
              Si el mapa no se muestra, usa la referencia: {eventConfig.UBICACION_DETALLE || eventConfig.UBICACION_TITULO}.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
