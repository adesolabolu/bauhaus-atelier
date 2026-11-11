import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 'gropius',
      quote: 'The weight of the Danfo Aso-Oke work jacket is unreal. I wore my numbered piece from a midnight listening session in Victoria Island straight to Paris Fashion Week—five showroom buyers stopped me on the street to ask which house engineered it.',
      name: 'Teniola Balogun',
      role: 'Creative Director & Stylist · Lagos / London',
      era: 'Drop 03 & Drop 04 Collector (#014/150)',
      initials: 'TB',
      accentColor: '#D02020',
      avatarBg: 'bg-[#D02020]',
    },
    {
      id: 'klee',
      quote: 'As an architect designing residences in Ikoyi, finding locally forged furniture that isn’t colonial reproduction was impossible until the Eko B3 Chair. The tension between cold chrome steel and deep Abeokuta indigo denim is masterclass industrial design.',
      name: 'Femi Adeyemi',
      role: 'Principal Architect · Lagoon Brutalist Studio, Ikoyi',
      era: 'Commissioned 6 Eko B3 Lounge Chairs',
      initials: 'FA',
      accentColor: '#1040C0',
      avatarBg: 'bg-[#1040C0]',
    },
    {
      id: 'kandinsky',
      quote: 'The Nepa-Zero WG24 cordless brass lamp is the smartest object in my Lekki apartment. When the grid trips during a late-night studio mix, the lamp doesn’t even flicker—just 48 hours of warm opal glow on solid Benin brass.',
      name: 'Santi Osagie',
      role: 'Record Producer & Sound Designer · Lekki Phase 1',
      era: 'Verified Owner · Nepa-Zero WG24 (#042/100)',
      initials: 'SO',
      accentColor: '#F0C020',
      avatarBg: 'bg-[#F0C020]',
    },
    {
      id: 'mies',
      quote: 'Ordered from Abuja on a Tuesday morning via Paystack Naira transfer and DHL delivered my crate by Wednesday afternoon. The packaging alone—stamped constructivist board with the weaver’s guild card—belongs in a gallery.',
      name: 'Zainab Danjuma',
      role: 'Contemporary Art Collector & Curator · Maitama, Abuja',
      era: 'Full Harmattan Capsule Collector',
      initials: 'ZD',
      accentColor: '#121212',
      avatarBg: 'bg-[#121212]',
    },
  ];

  return (
    <section className="bg-[#F0F0F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-4 border-[#121212] mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-[#D02020] border border-[#121212]" />
              <span className="font-bold text-xs uppercase tracking-widest text-[#121212]">
                VOICES OF THE VANGUARD
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212]">
              COLLECTORS ACROSS LAGOS & DIASPORA
            </h2>
          </div>
          <div className="text-xs font-mono font-bold uppercase text-[#121212]/70 bg-white px-3 py-1 border-2 border-[#121212] shadow-[3px_3px_0px_0px_black]">
            VERIFIED ARCHIVE HOLDERS
          </div>
        </div>

        {/* 2x2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => {
            return (
              <div
                key={t.id}
                className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
              >
                {/* Quote Icon in White Bordered Box */}
                <div className="w-12 h-12 bg-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-[#121212] stroke-[2.5]" />
                </div>

                <blockquote className="text-base sm:text-lg font-bold tracking-tight text-[#121212] leading-relaxed">
                  "{t.quote}"
                </blockquote>

                {/* Author row with Circular Crop Avatar with Grayscale Filter & Hover:grayscale-0 */}
                <div className="mt-8 pt-6 border-t-2 border-[#121212] flex items-center gap-4">
                  <div className="relative">
                    <div
                      style={{ backgroundColor: t.accentColor }}
                      className={`w-14 h-14 rounded-full border-3 border-[#121212] shadow-[3px_3px_0px_0px_black] flex items-center justify-center font-black text-lg grayscale group-hover:grayscale-0 transition-all duration-300 ${
                        t.accentColor === '#F0C020' ? 'text-black' : 'text-white'
                      }`}
                    >
                      <span>{t.initials}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-black text-base uppercase tracking-wider text-[#121212]">
                      {t.name}
                    </h3>
                    <p className="text-xs font-medium text-[#121212]/70">
                      {t.role}
                    </p>
                    <span className="text-[10px] font-mono font-bold text-[#D02020] uppercase">
                      {t.era}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
