import React, { useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { CatalogItem } from '../types/bauhaus.ts';
import { WassilyChairSvg, WagenfeldLampSvg, BrandtTeapotSvg, DessauBuildingSvg, GeometricFaceSvg } from './BauhausIllustrations.tsx';
import { bauhausAudio } from '../utils/audio.ts';

interface ProductDetailSectionProps {
  onOpenProductModal: (item: CatalogItem) => void;
  onOpenTickets: () => void;
}

export const ProductDetailSection: React.FC<ProductDetailSectionProps> = ({ onOpenProductModal, onOpenTickets }) => {
  const catalogItems: CatalogItem[] = [
    {
      id: 'wassily',
      name: 'Eko B3 — Adire & Chrome Lounge Chair',
      designer: 'Kemi Adesina × Abeokuta Indigo Guild',
      year: 2026,
      workshop: 'Victoria Island Object Lab',
      materials: 'Seamless chrome-plated tubular steel, 14oz Elu indigo bull-denim slings, seasoned Nigerian Iroko hardwood armrests.',
      dimensions: 'Edition of 25 · 79 × 79 × 73 cm',
      description: 'An Afro-constructivist reimagining of the tubular club chair. Heavyweight bull denim hand-dyed in Abeokuta’s fermented Elu indigo pits is suspended under structural tension across a cold-drawn steel frame.',
      provenance: 'First exhibited during ART X Lagos; available for private viewing at our Victoria Island flagship.',
      category: 'furniture',
      priceDisplay: '₦850,000 · $540 USD',
    },
    {
      id: 'wagenfeld',
      name: 'Nepa-Zero WG24 — Cordless Brass Lamp',
      designer: 'Osaze Igbinedion & Yaba Lab',
      year: 2026,
      workshop: 'Benin Brass & Yaba Engineering',
      materials: 'Hand-blown frosted glass globe, Igun Street lost-wax brushed brass stem, 48-hour integrated USB-C lithium cell.',
      dimensions: 'Edition of 100 · 36 cm × 18 cm',
      description: 'Engineered specifically for Lagos nights. A warm, museum-grade architectural table lamp with a concealed high-density lithium battery that stays illuminated for 48 hours whether grid power is on or off.',
      provenance: 'Cast on Igun Street in Benin City and assembled in Yaba; includes braided Danfo-yellow USB-C charging cable.',
      category: 'lighting',
      priceDisplay: '₦295,000 · $190 USD',
    },
    {
      id: 'brandt-tea',
      name: 'MT49 — Hibiscus Zobo & Tea Infuser',
      designer: 'Igun Brass Guild × Bauhaus Lagos',
      year: 2026,
      workshop: 'Benin Metalwork Atelier',
      materials: 'Food-grade silver-lined hammered brass, carved Cross River ebony thermal handle, geometric perforated strainer.',
      dimensions: 'Edition of 50 · 7.5 cm × 15 cm',
      description: 'A radical reduction of the ceremonial pouring vessel into pure hemisphere, cross-plinth, and offset ebony D-handle. Engineered for slow-steeping spiced hibiscus Zobo or loose-leaf West African botanicals.',
      provenance: 'Each vessel is stamped on the base with the Benin caster’s individual guild mark and serial number.',
      category: 'metalwork',
      priceDisplay: '₦180,000 · $115 USD',
    },
    {
      id: 'dessau-building',
      name: 'The Danfo Boxy Work Jacket & Cargo Set',
      designer: 'Chidi Nwosu & Iseyin Weavers',
      year: 2026,
      workshop: 'Iseyin Loom & Yaba Cut-and-Sew',
      materials: '500GSM hand-loomed Iseyin Aso-Oke chest panels, 14oz Kano bull denim body, lost-wax Benin brass snap hardware.',
      dimensions: 'Sizes S / M / L / XL · Boxy Drop-Shoulder',
      description: 'Our signature unisex silhouette. Structured like tropical brutalist architecture, pairing hand-woven Oyo Aso-Oke strips with heavyweight Kano denim and high-visibility Danfo yellow bar-tack stitching.',
      provenance: 'Numbered edition of 150 sets worldwide; same-day rider dispatch in Lagos and 72-hour DHL Express globally.',
      category: 'furniture',
      priceDisplay: '₦245,000 · $155 USD',
    },
  ];

  const [selectedId, setSelectedId] = useState<string>('wassily');
  const activeItem = catalogItems.find((i) => i.id === selectedId) || catalogItems[0];

  const renderActiveVisual = () => {
    switch (activeItem.id) {
      case 'wassily':
        return <WassilyChairSvg className="w-full h-full min-h-[320px]" />;
      case 'wagenfeld':
        return <WagenfeldLampSvg className="w-full h-full min-h-[320px]" />;
      case 'brandt-tea':
        return <BrandtTeapotSvg className="w-full h-full min-h-[320px]" />;
      case 'dessau-building':
        return <DessauBuildingSvg className="w-full h-full min-h-[320px]" />;
      default:
        return <WassilyChairSvg className="w-full h-full min-h-[320px]" />;
    }
  };

  return (
    <section id="catalog" className="bg-[#F0F0F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-4 border-[#121212] mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-[#1040C0] border border-[#121212]" />
              <span className="font-bold text-xs uppercase tracking-widest text-[#121212]">
                DROP 04 · HARMATTAN CAPSULE 2026
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212]">
              FLAGSHIP PIECES & OBJECTS
            </h2>
          </div>

          {/* Capsule Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {catalogItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  bauhausAudio.playClick('snappy');
                  setSelectedId(item.id);
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedId === item.id
                    ? 'bg-[#D02020] text-white'
                    : 'bg-white text-[#121212] hover:bg-[#E0E0E0]'
                }`}
              >
                0{idx + 1}. {item.name.split(' — ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Blueprint & Abstract Geometric Face (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* The Active Object Blueprint Vector */}
            <div className="relative">
              {renderActiveVisual()}
            </div>

            {/* Abstract Geometric "Face" */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7">
                <GeometricFaceSvg />
              </div>
              <div className="sm:col-span-5 p-5 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_black]">
                <div className="w-4 h-4 clip-triangle bg-[#F0C020] border border-[#121212] mb-2" />
                <h4 className="font-black text-sm uppercase tracking-wider text-[#121212]">
                  YORUBA ORI × GEOMETRY
                </h4>
                <p className="text-xs font-medium text-[#121212]/80 mt-2 leading-relaxed">
                  Inspired by classical West African mask proportions and constructivist balance—engineered for unmistakable presence.
                </p>
                <div className="mt-4 pt-3 border-t-2 border-[#121212] text-[10px] font-mono font-bold text-[#1040C0]">
                  LAGOS ARCHIVAL MOTIF · 2026
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Garment/Object Dossier & Working Specs (6 cols) */}
          <div className="lg:col-span-6 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] p-6 sm:p-10 relative">
            {/* Corner Decorative Square */}
            <div className="absolute top-4 right-4 w-6 h-6 rounded-none bg-[#1040C0] border-2 border-[#121212]" />

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold bg-[#F0C020] px-2 py-0.5 border border-[#121212] text-[#121212] tabular-nums">
                {activeItem.priceDisplay}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#121212]/70">
                NUMBERED ARCHIVE RELEASE
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#121212] mt-4">
              {activeItem.name}
            </h3>

            <div className="mt-2 text-sm font-bold uppercase tracking-wider text-[#D02020] flex items-center gap-2">
              <span>ATELIER LEAD: {activeItem.designer}</span>
              <span>·</span>
              <span>DROP: {activeItem.year}</span>
            </div>

            <p className="mt-6 text-base font-medium text-[#121212] leading-relaxed">
              {activeItem.description}
            </p>

            {/* Specifications Definition List with Hairlines */}
            <div className="mt-8 border-t-2 border-b-2 border-[#121212] divide-y-2 divide-[#121212]">
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs gap-1">
                <span className="font-bold uppercase tracking-wider text-[#121212]/60">Nigerian Atelier</span>
                <span className="font-bold uppercase text-[#121212]">{activeItem.workshop}</span>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs gap-1">
                <span className="font-bold uppercase tracking-wider text-[#121212]/60">Materials & Weight</span>
                <span className="font-medium text-[#121212] sm:text-right sm:max-w-xs">{activeItem.materials}</span>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs gap-1">
                <span className="font-bold uppercase tracking-wider text-[#121212]/60">Edition & Sizing</span>
                <span className="font-mono font-bold text-[#121212] tabular-nums">{activeItem.dimensions}</span>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs gap-1">
                <span className="font-bold uppercase tracking-wider text-[#121212]/60">Provenance & Dispatch</span>
                <span className="font-medium text-[#121212] sm:text-right sm:max-w-xs">{activeItem.provenance}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  bauhausAudio.playClick('heavy');
                  onOpenProductModal(activeItem);
                }}
                className="px-6 py-3.5 bg-[#D02020] text-white font-bold text-xs uppercase tracking-widest border-2 lg:border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020]/90 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4" />
                <span>Inspect Craft Spec Sheet</span>
              </button>

              <button
                onClick={() => {
                  bauhausAudio.playClick('snappy');
                  onOpenTickets();
                }}
                className="px-6 py-3.5 bg-[#F0C020] text-[#121212] font-bold text-xs uppercase tracking-widest border-2 lg:border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#F0C020]/90 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Reserve at VI Showroom</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
