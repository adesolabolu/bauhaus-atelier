import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { WorkshopItem } from '../types/bauhaus.ts';
import { bauhausAudio } from '../utils/audio.ts';

interface WorkshopModalProps {
  workshop: WorkshopItem | null;
  onClose: () => void;
  onOpenTickets: () => void;
}

export const WorkshopModal: React.FC<WorkshopModalProps> = ({ workshop, onClose, onOpenTickets }) => {
  if (!workshop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-2xl bg-white border-4 border-[#121212] shadow-[12px_12px_0px_0px_black] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div
          style={{ backgroundColor: workshop.color }}
          className="text-white p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#121212]"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white border-2 border-[#121212]" />
            <h3 className={`font-black text-lg sm:text-xl uppercase tracking-tighter ${workshop.color === '#F0C020' ? 'text-black' : 'text-white'}`}>
              {workshop.title}
            </h3>
          </div>
          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              onClose();
            }}
            className="p-1.5 bg-white text-black border-2 border-[#121212] hover:bg-black hover:text-white cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b-2 border-[#121212]">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D02020] block">
                MASTER ARTISANS & DIRECTORS
              </span>
              <span className="text-lg font-black uppercase text-[#121212]">
                {workshop.master}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#121212]/60 block">
                GUILD LOCATION
              </span>
              <span className="font-mono font-black text-lg text-[#1040C0]">
                {workshop.yearIntroduced}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#121212] mb-2">
              CRAFT LINEAGE & STREETWEAR APPLICATION
            </h4>
            <p className="text-base font-medium text-[#121212] leading-relaxed">
              {workshop.description}
            </p>
          </div>

          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#D02020] mb-2">
              SIGNATURE CAPSULE OUTPUTS
            </h4>
            <div className="text-sm font-bold text-[#121212]">
              {workshop.focus}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F0F0F0] border-t-4 border-[#121212] flex items-center justify-between">
          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              onClose();
            }}
            className="px-4 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider border-2 border-[#121212] hover:bg-[#E0E0E0] cursor-pointer whitespace-nowrap shrink-0"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenTickets();
            }}
            className="px-6 py-2 bg-[#D02020] text-white font-black text-xs uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#D02020]/90 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Book Showroom Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
