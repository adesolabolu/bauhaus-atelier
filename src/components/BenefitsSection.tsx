import React from 'react';
import { Check } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const tenets = [
    {
      title: '100% NIGERIAN ORIGIN',
      subtitle: 'LOOMED, DYED & SEWN AT HOME',
      text: 'We refuse to export raw African cotton just to import overpriced European luxury. Every yard of Aso-Oke, vat of indigo, and brass clasp is forged in Nigeria.',
    },
    {
      title: 'DANFO & BRUTALIST GEOMETRY',
      subtitle: 'VISUAL LANGUAGE OF EKO',
      text: 'Lagos is already constructivist—from high-contrast yellow-and-black Danfo stripes to National Theatre concrete. We translate that street electricity into wearable architecture.',
    },
    {
      title: '500GSM TROPICAL WEIGHT',
      subtitle: 'BUILT TO OUTLIVE TRENDS',
      text: 'No flimsy fast-fashion blanks that lose their collar after two washes. Our heavyweight breathable weaves hold crisp, boxy volume in both Lagos heat and London winter.',
    },
    {
      title: 'FAIR EQUITY FOR GUILDS',
      subtitle: 'DIRECT ARTISAN ROYALTIES',
      text: 'Our master dyers in Abeokuta, weavers in Iseyin, and casters in Benin City are credited by name on every garment label and share directly in capsule royalties.',
    },
    {
      title: 'NUMBERED ARCHIVAL RUNS',
      subtitle: 'ZERO RESTOCKS EVER',
      text: 'When a capsule of 150 jackets or 25 lounge chairs sells out, the stencils are retired to our Victoria Island archive. You own a numbered piece of Nigerian design history.',
    },
    {
      title: 'TOTAL LIVING CULTURE',
      subtitle: 'GARMENTS · FURNITURE · SOUND',
      text: 'Streetwear does not stop at a hoodie. Our house unites heavyweight apparel, tubular steel and Iroko furniture, cordless lighting, and Surulere vinyl sound culture.',
    },
  ];

  return (
    <section id="manifesto" className="bg-[#D02020] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#121212] text-white px-3 py-1 text-xs font-black uppercase tracking-widest border border-white">
            <span>THE LAGOS NEO-CRAFT MANIFESTO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight text-balance">
            SIX CODES OF THE HOUSE
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-white/90 leading-relaxed">
            "We are not looking for Western validation. When you unite ancestral Nigerian craft guilds with uncompromising industrial geometry, the world comes to Lagos."
          </p>
        </div>

        {/* 2x3 Grid with Yellow Circular Check Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tenets.map((tenet, idx) => {
            return (
              <div
                key={tenet.title}
                className="bg-[#121212] text-white border-4 border-white shadow-[8px_8px_0px_0px_white] p-6 sm:p-8 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
              >
                <div>
                  {/* Mandatory Yellow Circular Check Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#F0C020] border-2 border-[#121212] text-black shadow-[3px_3px_0px_0px_white] flex items-center justify-center mb-6">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>

                  <div className="text-[10px] font-black uppercase tracking-widest text-[#F0C020] mb-1">
                    0{idx + 1}. HOUSE CODE
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                    {tenet.title}
                  </h3>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#F0C020] mt-1 mb-4">
                    {tenet.subtitle}
                  </div>

                  <p className="text-sm font-medium text-white/80 leading-relaxed">
                    {tenet.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/30 flex items-center justify-between text-xs font-mono font-bold text-white/70">
                  <span>BAUHAUS LAGOS</span>
                  <span>EST. VICTORIA ISLAND</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
