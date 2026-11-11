import React from 'react';
import { Compass, Eye, Palette, Building2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'RAW COTTON & LOOM',
      curator: 'Iseyin & Kano Mills',
      desc: 'We source long-staple Nigerian cotton milled to 500GSM and narrow-strip Aso-Oke woven on double-heddle looms to our exact geometric tension.',
      icon: <Compass className="w-5 h-5" />,
      color: '#D02020',
    },
    {
      step: '02',
      title: 'INDIGO VAT & RESIST',
      curator: 'Abeokuta Dye Pits',
      desc: 'Panels are hand-stenciled with zinc plates or cassava paste (Adire Eleko) and dipped into fermented natural Elu indigo vats under tropical sun.',
      icon: <Palette className="w-5 h-5" />,
      color: '#1040C0',
    },
    {
      step: '03',
      title: 'CUT, SEW & BRASS',
      curator: 'Yaba Garment Factory',
      desc: 'Master tailors construct boxy architectural silhouettes, finished with solid lost-wax brass zippers, rivets, and clasps cast in Benin City.',
      icon: <Eye className="w-5 h-5" />,
      color: '#F0C020',
    },
    {
      step: '04',
      title: 'SERIAL STAMP & DROP',
      curator: 'Victoria Island Flagship',
      desc: 'Every garment and furniture piece is individually numbered, stamped with its artisan guild mark, and dispatched across Lagos and worldwide.',
      icon: <Building2 className="w-5 h-5" />,
      color: '#121212',
    },
  ];

  return (
    <section id="vorkurs" className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#121212] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <span>LOOM-TO-STREET SUPPLY CHAIN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212] text-balance">
            HOW EVERY CAPSULE IS FORGED
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-[#121212]/80 leading-relaxed">
            Zero outsourced fast-fashion factories. Every garment and object travels through our four-stage Nigerian production chain before receiving its archive number.
          </p>
        </div>

        {/* 4-Column Step Progression with 45° Rotated Number Badges & Counter-Rotated Content */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-1 bg-[#121212] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              return (
                <div
                  key={item.step}
                  className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] p-6 sm:p-8 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-200"
                >
                  {/* Step Container: DELIBERATE 45° ROTATION WITH COUNTER-ROTATED INNER CONTENT */}
                  <div className="relative mb-8">
                    <div
                      style={{ backgroundColor: item.color }}
                      className="w-16 h-16 border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[50deg]"
                    >
                      <div className="-rotate-45 flex flex-col items-center justify-center">
                        <span className={`font-black text-lg tabular-nums ${item.color === '#F0C020' ? 'text-black' : 'text-white'}`}>
                          {item.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-black uppercase tracking-widest text-[#D02020] mb-2">
                    {item.curator}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#121212]/80 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t-2 border-[#121212] w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121212]">
                    {item.icon}
                    <span>STAGE 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
