import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { HeroGeometricComposition } from './BauhausIllustrations.tsx';
import { bauhausAudio } from '../utils/audio.ts';

interface HeroProps {
  onOpenTickets: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTickets, onExploreCatalog }) => {
  return (
    <section className="relative bg-[#F0F0F0] border-b-4 border-[#121212] overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      {/* Decorative large constructivist geometric circle corner shape */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full border-4 border-[#121212] bg-[#F0C020]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        {/* Cultural Archival Strip */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <span className="bg-[#121212] text-white px-3 py-1 font-black text-xs uppercase tracking-widest border border-[#121212]">
            LAGOS NEO-CRAFT & ALTÉ DESIGN HOUSE
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121212]">
            VICTORIA ISLAND · YABA · ABEOKUTA
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold text-[#D02020]">
            [DROP 04 · HARMATTAN 2026]
          </span>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Massive Constructivist Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-[#121212] select-none text-balance">
              MADE IN <span className="text-[#D02020]">LAGOS.</span> BUILT FOR THE WORLD.
            </h1>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white border-2 lg:border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] relative">
              {/* Corner accent circle */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#F0C020] border-2 border-[#121212]" />
              <p className="text-base sm:text-lg font-medium text-[#121212] leading-relaxed">
                We fuse centuries-old Abeokuta indigo vat dyeing, Iseyin hand-loomed Aso-Oke, and Benin lost-wax brass casting with 500GSM streetwear silhouettes and brutalist furniture. No fast-fashion replicas—every garment and object is numbered and forged in Nigeria.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  bauhausAudio.playClick('heavy');
                  onOpenTickets();
                }}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D02020] text-white font-bold text-sm sm:text-base uppercase tracking-wider border-2 lg:border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] sm:shadow-[6px_6px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020]/90 transition-all cursor-pointer flex items-center gap-3 whitespace-nowrap shrink-0"
              >
                <span>RSVP Lagos Pop-Up Pass</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  bauhausAudio.playClick('snappy');
                  onExploreCatalog();
                }}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#121212] font-bold text-sm sm:text-base uppercase tracking-wider border-2 lg:border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] sm:shadow-[6px_6px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#E0E0E0] transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Layers className="w-5 h-5 text-[#1040C0]" />
                <span>Explore Drop 04</span>
              </button>
            </div>

            {/* Credo metadata strip */}
            <div className="mt-10 pt-6 border-t-2 border-[#121212] flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#121212]">
              <span>500GSM NIGERIAN COTTON</span>
              <span className="text-[#121212]/40">·</span>
              <span>NATURAL ELU INDIGO VATS</span>
              <span className="text-[#121212]/40">·</span>
              <span>SAME-DAY LAGOS & DHL GLOBAL</span>
            </div>
          </div>

          {/* Right Column: Hero Blue Panel with Bauhaus Overlapping Composition (5 cols) */}
          <div className="lg:col-span-5">
            <HeroGeometricComposition />
          </div>
        </div>
      </div>
    </section>
  );
};
