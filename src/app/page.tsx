import Link from 'next/link';
import AudioModule from '@/components/AudioModule';
import Countdown from '@/components/Countdown';
import Hero from '@/components/Hero';
import OpeningSequence from '@/components/OpeningSequence';
import RSVPModule from '@/components/RSVPModule';
import TechGrid from '@/components/TechGrid';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <TechGrid />

      <div className="fixed inset-0 bg-gradient-to-b from-carbon-950 via-carbon-900 to-carbon-950 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,255,0.16),transparent_50%)] -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(192,0,255,0.14),transparent_45%)] -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_35%,rgba(10,10,10,0.85)_100%)] -z-10" />

      <div className="relative z-10">
        <AudioModule />
        <OpeningSequence>
          <Hero />
          <Countdown />
          <RSVPModule />

          <section className="relative z-10 px-4 pb-16">
            <div className="w-full max-w-5xl mx-auto">
              <div className="glass-panel p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                <div className="coord-label mb-2">UBICACION</div>
                <div className="text-steel-200 font-medium text-lg">
                  Mapa embebido con la ubicacion.
                </div>
              </div>
              <Link
                href="/ubicacion"
                className="btn-primary text-base sm:text-lg px-6 py-3"
              >
                Ver mi ubicacion
              </Link>
              </div>
            </div>
          </section>

        <footer className="relative z-10 py-8 px-4 text-center">
          <div className="coord-label">
            Hecho x GHAELIKERR
          </div>
        </footer>
        </OpeningSequence>
      </div>
    </main>
  );
}
