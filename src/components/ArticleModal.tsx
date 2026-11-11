import React from 'react';
import { X } from 'lucide-react';
import { ArticleItem } from '../types/bauhaus.ts';
import { bauhausAudio } from '../utils/audio.ts';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-3xl bg-white border-4 border-[#121212] shadow-[12px_12px_0px_0px_black] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#121212] text-white p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#121212]">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#D02020] border border-white" />
            <span className="text-xs font-mono tracking-widest uppercase text-white/80">
              EKO ZINE ARCHIVE · {article.tag}
            </span>
          </div>
          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              onClose();
            }}
            className="p-1.5 bg-white text-black border-2 border-[#121212] hover:bg-[#F0C020] cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-6">
          <div className="flex items-center gap-3 text-xs font-bold text-[#121212]/70 uppercase">
            <span className="text-[#D02020]">{article.tag}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#121212] leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-3 py-3 border-y-2 border-[#121212] text-xs font-bold uppercase text-[#121212]">
            <div className="w-8 h-8 rounded-full bg-[#1040C0] text-white flex items-center justify-center font-black">
              {article.author.charAt(0)}
            </div>
            <div>
              <span>Written By: {article.author}</span>
              <span className="block text-[10px] text-[#121212]/60 font-mono">BAUHAUS LAGOS EDITORIAL COLLECTIVE</span>
            </div>
          </div>

          <div className="prose prose-neutral max-w-none text-[#121212] space-y-4 text-sm sm:text-base leading-relaxed">
            <p className="font-bold text-lg leading-snug">
              {article.excerpt}
            </p>

            <p>
              Walk down Broad Street on Lagos Island or through Itoku Market in Abeokuta and you see an uncompromising visual language at work. From the razor-sharp diagonal hazard stripes on yellow Danfo buses to the mathematical grid of Yoruba Adire Eleko stencils, Nigerian visual culture has always favored bold geometry and tactile honesty.
            </p>

            {/* Constructivist Pullquote */}
            <div className="my-8 p-6 bg-[#F0C020] border-4 border-[#121212] shadow-[6px_6px_0px_0px_black]">
              <div className="text-xs font-black uppercase tracking-widest text-[#121212] mb-2">
                HOUSE CREDO
              </div>
              <blockquote className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212]">
                "Our heritage is not a museum relic—it is an industrial blueprint for how modern Lagos dresses, builds, and lives."
              </blockquote>
            </div>

            <p>
              By bringing Abeokuta indigo dyers, Iseyin Aso-Oke weavers, and Benin City brass casters directly into our Yaba and Victoria Island design lab, we create garments and objects that carry both ancestral weight and contemporary street authority.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F0F0F0] border-t-4 border-[#121212] flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-[#121212]/70 uppercase">
            VICTORIA ISLAND · YABA · ABEOKUTA · BENIN CITY
          </span>
          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              onClose();
            }}
            className="px-6 py-2 bg-[#121212] text-white font-bold text-xs uppercase tracking-wider border-2 border-[#121212] hover:bg-[#D02020] cursor-pointer whitespace-nowrap shrink-0"
          >
            Finished Reading
          </button>
        </div>
      </div>
    </div>
  );
};
