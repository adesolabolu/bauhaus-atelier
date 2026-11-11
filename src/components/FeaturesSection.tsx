import React, { useState } from 'react';
import { Hammer, Lamp, Type, Scissors, Paintbrush, Building, ArrowUpRight } from 'lucide-react';
import { WorkshopItem } from '../types/bauhaus.ts';
import { bauhausAudio } from '../utils/audio.ts';

interface FeaturesSectionProps {
  onSelectWorkshop: (workshop: WorkshopItem) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onSelectWorkshop }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'form' | 'material'>('all');

  const workshops: (WorkshopItem & { icon: React.ReactNode; tag: 'form' | 'material' })[] = [
    {
      id: 'metal',
      title: 'Abeokuta Adire & Indigo Lab',
      master: 'Alhaja Bisi & Tunde Bakare · Master Dyers',
      yearIntroduced: 'Itoku Guild',
      description: 'Fermenting natural Elu (Lonchocarpus cyanescens) indigo vats and hand-painting cassava-paste Adire Eleko resist geometry onto 14oz raw Nigerian bull denim.',
      focus: 'Cassava Paste Resist, Elu Indigo Vats, Raw Bull Denim',
      shape: 'circle',
      color: '#D02020',
      tag: 'material',
      icon: <Paintbrush className="w-6 h-6 text-[#D02020]" />,
    },
    {
      id: 'wood',
      title: 'Iseyin Aso-Oke Loom Works',
      master: 'Adebayo Oke · Master Weaver',
      yearIntroduced: 'Oyo Loom',
      description: 'Weaving narrow-strip Etu, Sanyan, and Alaari Aso-Oke panels on traditional double-heddle looms, tailored into boxy workwear jackets and utility cargos.',
      focus: 'Hand-Loomed Aso-Oke, Boxy Overshirts, Utility Cargos',
      shape: 'square',
      color: '#1040C0',
      tag: 'material',
      icon: <Scissors className="w-6 h-6 text-[#1040C0]" />,
    },
    {
      id: 'print',
      title: 'Yaba Heavyweight Print Press',
      master: 'Chidi Nwosu · Creative Director',
      yearIntroduced: 'Yaba Studio',
      description: 'High-density plastisol, puff-ink typography, and archival Danfo brutalist graphics hand-pulled onto custom-milled 500GSM drop-shoulder tees and hoodies.',
      focus: '500GSM Graphic Tees, Puff-Ink Hoodies, Eko Lookbooks',
      shape: 'triangle',
      color: '#F0C020',
      tag: 'form',
      icon: <Type className="w-6 h-6 text-[#121212]" />,
    },
    {
      id: 'weave',
      title: 'Benin Brass & Coral Foundry',
      master: 'Osaze Igbinedion · Igun Street Caster',
      yearIntroduced: 'Benin City',
      description: 'Lost-wax sand casting solid brass belt buckles, agbada toggle clasps, zipper pulls, and geometric signet rings rooted in centuries-old Edo metalwork.',
      focus: 'Lost-Wax Brass Hardware, Signet Rings, Coral Clasps',
      shape: 'circle',
      color: '#D02020',
      tag: 'form',
      icon: <Lamp className="w-6 h-6 text-[#D02020]" />,
    },
    {
      id: 'mural',
      title: 'Victoria Island Object Lab',
      master: 'Kemi Adesina · Industrial Architect',
      yearIntroduced: 'VI Atelier',
      description: 'Welding seamless chrome tubular steel with seasoned Nigerian Iroko hardwood and indigo canvas slings to craft collectible Afro-constructivist furniture.',
      focus: 'Tubular Steel & Iroko Chairs, Cordless Lamps, Stools',
      shape: 'square',
      color: '#1040C0',
      tag: 'form',
      icon: <Hammer className="w-6 h-6 text-[#1040C0]" />,
    },
    {
      id: 'stage',
      title: 'Surulere Skate & Sonic Division',
      master: 'Dapo Ojo · Sound & Street Director',
      yearIntroduced: 'Surulere',
      description: 'Pressing hardwearing Iroko veneer skate decks, heavyweight DJ record bags, and nocturnal capsule pieces built for the Lagos Alté and Afrobeats underground.',
      focus: 'Iroko Skate Decks, Vinyl Record Crates, Sound Capsules',
      shape: 'triangle',
      color: '#F0C020',
      tag: 'material',
      icon: <Building className="w-6 h-6 text-[#121212]" />,
    },
  ];

  const filteredWorkshops = activeFilter === 'all'
    ? workshops
    : workshops.filter((w) => w.tag === activeFilter);

  return (
    <section id="workshops" className="bg-[#F0F0F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-4 border-[#121212] mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-[#D02020] border border-[#121212]" />
              <span className="font-bold text-xs uppercase tracking-widest text-[#121212]">
                THE SIX NIGERIAN ATELIERS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212]">
              HERITAGE CRAFT MEETS STREETWEAR
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-2 bg-white p-1.5 border-2 border-[#121212] shadow-[4px_4px_0px_0px_black]">
            <button
              onClick={() => { bauhausAudio.playClick('snappy'); setActiveFilter('all'); }}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#121212] text-white'
                  : 'text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              All Ateliers
            </button>
            <button
              onClick={() => { bauhausAudio.playClick('snappy'); setActiveFilter('material'); }}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === 'material'
                  ? 'bg-[#1040C0] text-white'
                  : 'text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              Textiles & Indigo
            </button>
            <button
              onClick={() => { bauhausAudio.playClick('snappy'); setActiveFilter('form'); }}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === 'form'
                  ? 'bg-[#D02020] text-white'
                  : 'text-[#121212] hover:bg-[#E0E0E0]'
              }`}
            >
              Objects & Brass
            </button>
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredWorkshops.map((workshop, idx) => {
            return (
              <div
                key={workshop.id}
                className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 flex flex-col justify-between relative group hover:-translate-y-2 transition-transform duration-200"
              >
                {/* Geometric corner shape decoration */}
                <div className="absolute top-4 right-4">
                  {workshop.shape === 'circle' && (
                    <div className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-[#121212]" />
                  )}
                  {workshop.shape === 'square' && (
                    <div className="w-5 h-5 rounded-none bg-[#1040C0] border-2 border-[#121212]" />
                  )}
                  {workshop.shape === 'triangle' && (
                    <div className="w-5 h-5 clip-triangle bg-[#F0C020] border-2 border-[#121212]" />
                  )}
                </div>

                <div>
                  {/* Icon in white bordered box with hard shadow */}
                  <div className="w-14 h-14 bg-white border-2 border-[#121212] shadow-[4px_4px_0px_0px_black] flex items-center justify-center mb-6">
                    {workshop.icon}
                  </div>

                  <div className="text-xs font-black uppercase tracking-widest text-[#121212]/60 mb-1">
                    0{idx + 1}. ATELIER · ORIGIN: {workshop.yearIntroduced}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#121212]">
                    {workshop.title}
                  </h3>

                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D02020]">
                    {workshop.master}
                  </div>

                  <p className="mt-4 text-sm font-medium text-[#121212]/90 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>

                {/* Card Footer / Action */}
                <div className="mt-6 pt-4 border-t-2 border-[#121212] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#121212]/70 uppercase">
                    {workshop.focus.split(',')[0]}
                  </span>
                  <button
                    onClick={() => {
                      bauhausAudio.playClick('snappy');
                      onSelectWorkshop(workshop);
                    }}
                    className="p-2 bg-[#F0F0F0] border-2 border-[#121212] group-hover:bg-[#F0C020] transition-colors cursor-pointer"
                    aria-label={`View details for ${workshop.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#121212]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
