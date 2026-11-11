import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { bauhausAudio } from '../utils/audio.ts';

interface FinalCtaSectionProps {
  onOpenTickets: () => void;
  onOpenAtelier: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenTickets, onOpenAtelier }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    bauhausAudio.playClick('heavy');
    setSubmitted(true);
  };

  return (
    <section className="relative bg-[#F0C020] text-[#121212] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] overflow-hidden select-none">
      {/* Corner 1: Large Decorative Red Circle at 50% opacity */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#D02020] opacity-50 border-4 border-[#121212] pointer-events-none" />

      {/* Corner 2: Large Decorative Blue Rotated Square (45deg) at 50% opacity */}
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#1040C0] opacity-50 border-4 border-[#121212] rotate-45 pointer-events-none" />

      {/* Background Dot Grid for Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 bg-[#121212] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest border-2 border-white shadow-[3px_3px_0px_0px_black]">
          <span>DROP 04 POP-UP · VICTORIA ISLAND & ABUJA</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#121212] text-balance">
          STEP INTO THE LAGOS ARCHIVE.
        </h2>

        <p className="mt-6 text-base sm:text-xl font-medium text-[#121212] max-w-2xl mx-auto leading-relaxed">
          Reserve your VIP pass to our Victoria Island flagship showroom and listening session, or design your own custom stencil tag in the Yaba Graphic Lab.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={() => {
              bauhausAudio.playClick('heavy');
              onOpenTickets();
            }}
            className="px-8 py-4 bg-[#D02020] text-white font-black text-sm sm:text-base uppercase tracking-wider border-2 lg:border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020]/90 transition-all cursor-pointer flex items-center gap-3 whitespace-nowrap shrink-0"
          >
            <span>RSVP Lagos Pop-Up Pass</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              onOpenAtelier();
            }}
            className="px-8 py-4 bg-white text-[#121212] font-black text-sm sm:text-base uppercase tracking-wider border-2 lg:border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#E0E0E0] transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Launch Graphic Lab</span>
          </button>
        </div>

        {/* Early Drop WhatsApp / Email List Box */}
        <div className="mt-12 max-w-md mx-auto p-4 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_black]">
          <span className="block text-xs font-black uppercase tracking-widest text-[#121212] mb-3">
            JOIN THE PRIVATE DROP 05 EARLY ACCESS LIST
          </span>

          {submitted ? (
            <div className="p-3 bg-[#E8F5E9] border-2 border-[#121212] text-xs font-bold uppercase text-[#121212] flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#D02020]" />
              <span>Locked In · You get the private link 2 hours early</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL FOR PRIVATE DROP LINK"
                className="flex-1 px-3 py-2 bg-[#F0F0F0] border-2 border-[#121212] text-xs font-bold uppercase tracking-wider text-[#121212] placeholder-[#121212]/50 focus:outline-none focus:bg-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#121212] text-white text-xs font-bold uppercase tracking-widest border-2 border-[#121212] hover:bg-[#D02020] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Join List
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
