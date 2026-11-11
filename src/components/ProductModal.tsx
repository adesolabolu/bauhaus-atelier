import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { CatalogItem } from '../types/bauhaus.ts';
import { WassilyChairSvg, WagenfeldLampSvg, BrandtTeapotSvg, DessauBuildingSvg } from './BauhausIllustrations.tsx';
import { bauhausAudio } from '../utils/audio.ts';

interface ProductModalProps {
  item: CatalogItem | null;
  onClose: () => void;
  onReservePass: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose, onReservePass }) => {
  if (!item) return null;

  const renderGraphic = () => {
    switch (item.id) {
      case 'wassily':
        return <WassilyChairSvg className="w-full h-64" />;
      case 'wagenfeld':
        return <WagenfeldLampSvg className="w-full h-64" />;
      case 'brandt-tea':
        return <BrandtTeapotSvg className="w-full h-64" />;
      case 'dessau-building':
        return <DessauBuildingSvg className="w-full h-64" />;
      default:
        return <WassilyChairSvg className="w-full h-64" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-3xl bg-white border-4 border-[#121212] shadow-[12px_12px_0px_0px_black] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#1040C0] text-white p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#121212]">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#F0C020] border-2 border-[#121212]" />
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase block text-white/80">
                DROP 04 ARCHIVAL DOSSIER · {item.priceDisplay}
              </span>
              <h3 className="font-black text-lg sm:text-xl uppercase tracking-tighter">
                {item.name}
              </h3>
            </div>
          </div>
          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              onClose();
            }}
            className="p-1.5 bg-white text-black border-2 border-[#121212] hover:bg-[#D02020] hover:text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Blueprint Visual Frame */}
          <div className="border-4 border-[#121212] bg-[#F0F0F0] p-4 relative">
            <div className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-[#121212] text-white px-2 py-0.5">
              ATELIER ELEVATION & PROPORTION
            </div>
            {renderGraphic()}
          </div>

          {/* Core Monograph Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D02020] mb-2">
                CRAFT & DESIGN NOTES
              </h4>
              <p className="text-sm font-medium text-[#121212] leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 p-3 bg-[#FFF9C4] border-2 border-[#121212] text-xs font-medium text-[#121212]">
                <span className="font-black block uppercase mb-1">Lagos Showroom & Global Dispatch</span>
                {item.provenance}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#1040C0] mb-2">
                GARMENT & OBJECT SPECIFICATIONS
              </h4>
              <div className="bg-[#F0F0F0] border-2 border-[#121212] p-4 space-y-2.5 text-xs">
                <div>
                  <span className="font-bold uppercase text-[#121212]/60 block text-[10px]">Lead Designer & Guild</span>
                  <span className="font-black uppercase text-[#121212]">{item.designer}</span>
                </div>
                <div>
                  <span className="font-bold uppercase text-[#121212]/60 block text-[10px]">Capsule Release</span>
                  <span className="font-mono font-bold text-[#121212] tabular-nums">Drop 04 ({item.year})</span>
                </div>
                <div>
                  <span className="font-bold uppercase text-[#121212]/60 block text-[10px]">Nigerian Atelier</span>
                  <span className="font-bold uppercase text-[#121212]">{item.workshop}</span>
                </div>
                <div>
                  <span className="font-bold uppercase text-[#121212]/60 block text-[10px]">Materials & Textile Weight</span>
                  <span className="font-medium text-[#121212]">{item.materials}</span>
                </div>
                <div>
                  <span className="font-bold uppercase text-[#121212]/60 block text-[10px]">Edition Size & Dimensions</span>
                  <span className="font-mono font-bold text-[#121212] tabular-nums">{item.dimensions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-[#F0F0F0] border-t-4 border-[#121212] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              bauhausAudio.playClick('high');
              window.print();
            }}
            className="px-5 py-2.5 bg-white text-[#121212] font-black text-xs uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#E0E0E0] cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Spec Sheet</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onReservePass();
            }}
            className="px-6 py-2.5 bg-[#D02020] text-white font-black text-xs uppercase tracking-widest border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#D02020]/90 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Reserve at Victoria Island Showroom</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
