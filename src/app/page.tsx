import Hero from '@/components/Hero';
import RSVPModule from '@/components/RSVPModule';
import TechGrid from '@/components/TechGrid';
import DJCard from '@/components/DJCard';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <TechGrid />
      
      {/* Gradiente de fondo */}
      <div className="fixed inset-0 bg-gradient-to-b from-carbon-950 via-carbon-900 to-carbon-950 -z-10" />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        
        {/* DJ Card */}
        <div className="w-full max-w-4xl mx-auto px-4 mb-8">
          <DJCard />
        </div>
        
        {/* Separador técnico */}
        <div className="w-full max-w-4xl mx-auto px-4 my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />
        </div>
        
        <RSVPModule />
        
        {/* Footer */}
        <footer className="relative z-10 py-8 px-4 text-center">
          <div className="coord-label">
            HECHO POR GHAELIKERR
          </div>
        </footer>
      </div>
    </main>
  );
}
