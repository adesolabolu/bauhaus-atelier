import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 'stat-1',
      number: '500',
      unit: 'GSM',
      label: 'HEAVYWEIGHT TEXTILES',
      subtext: 'Kano cotton jersey, 14oz bull denim & hand-loomed Aso-Oke',
      shape: 'circle',
    },
    {
      id: 'stat-2',
      number: '48',
      unit: 'ARTISANS',
      label: 'MASTER CRAFT GUILDS',
      subtext: 'Abeokuta indigo dyers, Iseyin weavers & Benin brass casters',
      shape: 'square',
    },
    {
      id: 'stat-3',
      number: '1,400+',
      unit: 'PIECES',
      label: 'NUMBERED ARCHIVAL RUNS',
      subtext: 'Small-batch capsules—never restocked once sold out',
      shape: 'rotated-square',
    },
    {
      id: 'stat-4',
      number: '24',
      unit: 'HOURS',
      label: 'LAGOS RIDER DISPATCH',
      subtext: 'Same-day VI/Lekki/Ikeja delivery + 72hr DHL Worldwide',
      shape: 'triangle',
    },
  ];

  return (
    <section className="bg-[#F0C020] border-b-4 border-[#121212] select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-[#121212]">
          {stats.map((stat, index) => {
            return (
              <div
                key={stat.id}
                className="p-8 sm:p-10 flex flex-col items-center sm:items-start justify-between relative group hover:bg-[#F0C020]/90 transition-colors"
              >
                {/* Top geometric badge containing the number */}
                <div className="flex items-center gap-4 mb-4">
                  {stat.shape === 'circle' && (
                    <div className="w-14 h-14 rounded-full bg-[#D02020] border-3 border-[#121212] shadow-[3px_3px_0px_0px_black] flex items-center justify-center text-white font-black text-xs">
                      {index + 1}
                    </div>
                  )}
                  {stat.shape === 'square' && (
                    <div className="w-14 h-14 rounded-none bg-[#1040C0] border-3 border-[#121212] shadow-[3px_3px_0px_0px_black] flex items-center justify-center text-white font-black text-xs">
                      {index + 1}
                    </div>
                  )}
                  {stat.shape === 'rotated-square' && (
                    <div className="w-14 h-14 bg-[#121212] border-3 border-white shadow-[3px_3px_0px_0px_black] rotate-45 flex items-center justify-center text-[#F0C020] font-black text-xs">
                      <span className="-rotate-45">{index + 1}</span>
                    </div>
                  )}
                  {stat.shape === 'triangle' && (
                    <div className="w-14 h-14 clip-triangle bg-white border-3 border-[#121212] shadow-[3px_3px_0px_0px_black] flex items-center justify-center text-[#121212] font-black text-xs pt-3">
                      <span>{index + 1}</span>
                    </div>
                  )}
                  <span className="font-bold text-xs uppercase tracking-widest text-[#121212]/80">
                    0{index + 1} · HOUSE STANDARD
                  </span>
                </div>

                {/* Big Stat Number */}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-[#121212] tabular-nums">
                    {stat.number}
                  </span>
                  <span className="font-black text-sm uppercase tracking-wider text-[#121212]">
                    {stat.unit}
                  </span>
                </div>

                {/* Label and Subtext */}
                <div className="mt-4 border-t-2 border-[#121212] pt-3 w-full">
                  <h3 className="font-black text-sm uppercase tracking-wider text-[#121212]">
                    {stat.label}
                  </h3>
                  <p className="text-xs font-medium text-[#121212]/90 mt-1 leading-snug">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
