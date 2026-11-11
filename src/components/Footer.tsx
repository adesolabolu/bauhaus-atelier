import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { bauhausAudio } from '../utils/audio.ts';

interface FooterProps {
  onOpenTickets: () => void;
  onExploreCatalog: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTickets }) => {
  const scrollToTop = () => {
    bauhausAudio.playClick('snappy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-white border-t-4 border-[#121212] select-none">
      {/* Top Graphic Ribbon */}
      <div className="grid grid-cols-3 h-3">
        <div className="bg-[#D02020]" />
        <div className="bg-[#1040C0]" />
        <div className="bg-[#F0C020]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b-2 border-white/20">
          {/* Col 1: Brand & Manifesto (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo Mark: Red Circle, Blue Square, Yellow Triangle */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-[#D02020] border-2 border-white" />
                <div className="w-6 h-6 rounded-none bg-[#1040C0] border-2 border-white" />
                <div className="w-6 h-6 clip-triangle bg-[#F0C020] border-2 border-white" />
                <span className="font-black text-2xl tracking-tighter uppercase ml-2 text-white">
                  BAUHAUS LAGOS
                </span>
              </div>

              <p className="text-sm font-medium text-white/80 leading-relaxed max-w-sm">
                Lagos Neo-Craft & Alté Design House. Uniting Abeokuta indigo vats, Iseyin Aso-Oke looms, and Benin brass casting with 500GSM architectural streetwear and furniture.
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs font-mono font-bold text-white/60">
                <MapPin className="w-4 h-4 text-[#D02020]" />
                <span>VICTORIA ISLAND · YABA · ABEOKUTA · ABUJA</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
              <button
                onClick={() => {
                  bauhausAudio.playClick('heavy');
                  onOpenTickets();
                }}
                className="px-5 py-2.5 bg-[#D02020] text-white text-xs font-black uppercase tracking-widest border-2 border-white shadow-[3px_3px_0px_0px_white] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#D02020]/90 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                RSVP Lagos Pop-Up Pass
              </button>
            </div>
          </div>

          {/* Col 2: Nigerian Craft Ateliers (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-[#F0C020] mb-4">
              NIGERIAN ATELIERS
            </h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-white/80">
              <li>
                <a href="#workshops" className="hover:text-[#F0C020] transition-colors">
                  01. Abeokuta Indigo Lab
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#F0C020] transition-colors">
                  02. Iseyin Aso-Oke Looms
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#F0C020] transition-colors">
                  03. Yaba 500GSM Print Press
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#F0C020] transition-colors">
                  04. Benin Brass Foundry
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#F0C020] transition-colors">
                  05. VI Steel & Iroko Lab
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#F0C020] transition-colors">
                  06. Surulere Sound & Skate
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: House Index (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-xs uppercase tracking-widest text-[#1040C0] mb-4 bg-white px-2 py-0.5 inline-block text-black">
              HOUSE INDEX
            </h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-white/80">
              <li>
                <a href="#vorkurs" className="hover:text-white transition-colors">
                  Loom-to-Street
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Drop 04 Capsule
                </a>
              </li>
              <li>
                <a href="#atelier" className="hover:text-white transition-colors">
                  Custom Tag Lab
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-white transition-colors">
                  House Manifesto
                </a>
              </li>
              <li>
                <a href="#chronik" className="hover:text-white transition-colors">
                  Eko Zine Issues
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Lagos Dispatch FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Scroll Up (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <div>
              <div className="w-12 h-12 border-2 border-white p-2 rotate-45 mb-4 hidden lg:flex items-center justify-center">
                <span className="text-[10px] font-black -rotate-45">EKO</span>
              </div>
              <div className="text-[11px] font-mono text-white/60 uppercase">
                FORGED IN NIGERIA
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 lg:mt-0 p-3 bg-white text-black border-2 border-white shadow-[3px_3px_0px_0px_white] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#F0C020] transition-colors cursor-pointer flex items-center gap-2 text-xs font-black uppercase tracking-wider whitespace-nowrap shrink-0"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[3]" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/60">
          <div>
            © {new Date().getFullYear()} Bauhaus Lagos Neo-Craft Collective (Victoria Island & Yaba). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase">
            <span className="text-[#D02020]">CORAL</span>
            <span>·</span>
            <span className="text-[#1040C0]">INDIGO</span>
            <span>·</span>
            <span className="text-[#F0C020]">DANFO</span>
            <span>·</span>
            <span>IROKO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
