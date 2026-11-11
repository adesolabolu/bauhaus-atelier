import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { BauhausLogo } from './BauhausIllustrations.tsx';
import { bauhausAudio } from '../utils/audio.ts';

interface NavbarProps {
  onOpenTickets: () => void;
  onOpenAtelier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTickets, onOpenAtelier }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    bauhausAudio.enabled = nextState;
    if (nextState) {
      bauhausAudio.playClick('high');
    }
  };

  const handleNavClick = (href: string) => {
    bauhausAudio.playClick('snappy');
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F0F0F0] border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark with Geometric 3-shape Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            bauhausAudio.playClick('heavy');
          }}
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#121212] whitespace-nowrap shrink-0"
        >
          <BauhausLogo size={22} />
          <span className="font-black text-2xl sm:text-3xl tracking-tighter uppercase text-[#121212] group-hover:text-[#D02020] transition-colors">
            BAUHAUS LAGOS
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-[#121212]">
          <a
            href="#workshops"
            onClick={(e) => { e.preventDefault(); handleNavClick('#workshops'); }}
            className="hover:text-[#D02020] hover:underline decoration-4 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Ateliers
          </a>
          <a
            href="#vorkurs"
            onClick={(e) => { e.preventDefault(); handleNavClick('#vorkurs'); }}
            className="hover:text-[#1040C0] hover:underline decoration-4 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Loom to Street
          </a>
          <a
            href="#catalog"
            onClick={(e) => { e.preventDefault(); handleNavClick('#catalog'); }}
            className="hover:text-[#D02020] hover:underline decoration-4 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Drop 04
          </a>
          <a
            href="#atelier"
            onClick={(e) => { e.preventDefault(); handleNavClick('#atelier'); }}
            className="hover:text-[#1040C0] hover:underline decoration-4 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Graphic Lab
          </a>
          <a
            href="#manifesto"
            onClick={(e) => { e.preventDefault(); handleNavClick('#manifesto'); }}
            className="hover:text-[#D02020] hover:underline decoration-4 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            House Codes
          </a>
          <a
            href="#chronik"
            onClick={(e) => { e.preventDefault(); handleNavClick('#chronik'); }}
            className="hover:text-[#1040C0] hover:underline decoration-4 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Eko Zine
          </a>
        </nav>

        {/* Zone 3: Primary action + Sound toggle + Mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mechanical Sound Effect Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Studio Sound: ON' : 'Studio Sound: OFF'}
            className="p-2 border-2 border-[#121212] bg-white text-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            aria-label="Toggle sound effects"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-[#D02020]" /> : <VolumeX className="w-5 h-5 text-[#121212]" />}
          </button>

          {/* Primary Action Button (Red) */}
          <button
            onClick={() => {
              bauhausAudio.playClick('heavy');
              onOpenTickets();
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#D02020] text-white font-bold text-xs uppercase tracking-widest border-2 border-[#121212] shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020]/90 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Pop-Up Pass
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2.5 bg-white border-2 border-[#121212] shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F0F0F0] border-t-4 border-b-4 border-[#121212] px-6 py-6 flex flex-col gap-4 shadow-[0px_8px_0px_0px_black]">
          <div className="flex items-center gap-2 pb-2 border-b-2 border-[#121212]">
            <BauhausLogo size={18} />
            <span className="font-black text-xs tracking-widest uppercase text-[#121212]">
              VICTORIA ISLAND · YABA · ABEOKUTA
            </span>
          </div>
          <div className="flex flex-col gap-3 font-black text-xl uppercase tracking-tight">
            <a
              href="#workshops"
              onClick={(e) => { e.preventDefault(); handleNavClick('#workshops'); }}
              className="py-1 hover:text-[#D02020] transition-colors"
            >
              01. Nigerian Craft Ateliers
            </a>
            <a
              href="#vorkurs"
              onClick={(e) => { e.preventDefault(); handleNavClick('#vorkurs'); }}
              className="py-1 hover:text-[#1040C0] transition-colors"
            >
              02. Loom-to-Street Process
            </a>
            <a
              href="#catalog"
              onClick={(e) => { e.preventDefault(); handleNavClick('#catalog'); }}
              className="py-1 hover:text-[#D02020] transition-colors"
            >
              03. Drop 04 Capsule & Objects
            </a>
            <a
              href="#atelier"
              onClick={(e) => { e.preventDefault(); handleNavClick('#atelier'); }}
              className="py-1 hover:text-[#1040C0] transition-colors"
            >
              04. Custom Graphic Lab
            </a>
            <a
              href="#manifesto"
              onClick={(e) => { e.preventDefault(); handleNavClick('#manifesto'); }}
              className="py-1 hover:text-[#D02020] transition-colors"
            >
              05. Six Codes of the House
            </a>
            <a
              href="#chronik"
              onClick={(e) => { e.preventDefault(); handleNavClick('#chronik'); }}
              className="py-1 hover:text-[#1040C0] transition-colors"
            >
              06. Eko Zine & Essays
            </a>
            <a
              href="#faq"
              onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}
              className="py-1 hover:text-[#121212] transition-colors"
            >
              07. Dispatch & Sizing FAQ
            </a>
          </div>

          <div className="pt-4 border-t-2 border-[#121212] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTickets();
              }}
              className="w-full py-3 bg-[#D02020] text-white font-bold text-sm uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              RSVP Lagos Pop-Up Pass
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAtelier();
              }}
              className="w-full py-3 bg-[#F0C020] text-black font-bold text-sm uppercase tracking-wider border-2 border-[#121212] shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Launch Graphic Lab
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
