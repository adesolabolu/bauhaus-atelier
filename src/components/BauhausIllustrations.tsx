import React from 'react';

/**
 * Pure geometric constructivist Bauhaus vector illustrations
 * Adapted for Bauhaus Lagos Neo-Craft & Alté Design House
 */

export const BauhausLogo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => {
  return (
    <div className={`flex items-center gap-1.5 shrink-0 ${className}`}>
      {/* Circle - Coral Red */}
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="rounded-full bg-[#D02020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] transition-transform duration-200 hover:scale-110"
        title="Coral Red"
      />
      {/* Square - Elu Indigo */}
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="rounded-none bg-[#1040C0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] transition-transform duration-200 hover:scale-110"
        title="Abeokuta Indigo"
      />
      {/* Triangle - Danfo Yellow */}
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="clip-triangle bg-[#F0C020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] transition-transform duration-200 hover:scale-110 flex items-center justify-center relative"
        title="Danfo Yellow"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 stroke-[#121212] stroke-[8] fill-[#F0C020]">
          <polygon points="50,10 92,90 8,90" />
        </svg>
      </div>
    </div>
  );
};

export const HeroGeometricComposition: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-[#1040C0] overflow-hidden border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] flex items-center justify-center group select-none">
      {/* Dot Grid overlay */}
      <div className="absolute inset-0 bg-dot-grid-white opacity-25" />

      {/* Diagonal background constructivist stripes */}
      <div className="absolute -top-12 -right-12 w-64 h-8 bg-[#F0C020] border-2 border-[#121212] rotate-45 shadow-[4px_4px_0px_0px_black]" />
      <div className="absolute top-1/4 -left-20 w-80 h-10 bg-[#121212] rotate-[-25deg]" />

      {/* Large Yellow Overlapping Circle */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#F0C020] border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] transition-transform duration-300 group-hover:scale-105" />

      {/* Large Red Rotated Square (45 deg) */}
      <div className="absolute top-12 right-8 sm:right-16 w-44 h-44 sm:w-56 sm:h-56 bg-[#D02020] border-4 border-[#121212] rotate-45 shadow-[8px_8px_0px_0px_black] transition-transform duration-300 group-hover:rotate-[50deg]" />

      {/* Stark White Centered Square with Centered Triangle & Black Ring */}
      <div className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] flex items-center justify-center p-4">
        {/* Inner concentric ring */}
        <div className="absolute inset-4 rounded-full border-4 border-[#121212]" />

        {/* Triangle inside */}
        <svg viewBox="0 0 100 100" className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <polygon points="50,15 90,85 10,85" fill="#D02020" stroke="#121212" strokeWidth="6" />
        </svg>

        {/* Diagonal black line through composition */}
        <div className="absolute w-[140%] h-1.5 bg-[#121212] rotate-[-45deg] pointer-events-none" />
      </div>

      {/* Bauhaus Architectural Grid Lines */}
      <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-[#121212]/30 pointer-events-none" />
      <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#121212]/30 pointer-events-none" />

      {/* Constructivist Stamp */}
      <div className="absolute bottom-6 right-6 bg-[#121212] text-white px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-white shadow-[3px_3px_0px_0px_white]">
        ADIRE · ASO-OKE · EKO 2026
      </div>
    </div>
  );
};

export const GeometricFaceSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] p-6 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-10" />

      <svg viewBox="0 0 300 340" className="w-full h-auto max-w-[280px]">
        {/* Outer Head Oval / Shape */}
        <ellipse cx="150" cy="170" rx="100" ry="130" fill="none" stroke="#121212" strokeWidth="8" />

        {/* Split Left Hemisphere in Primary Red */}
        <path d="M 150,40 A 100,130 0 0,0 150,300 Z" fill="#D02020" stroke="#121212" strokeWidth="6" opacity="0.9" />

        {/* Sharp Constructivist Bisecting Vertical Axis */}
        <line x1="150" y1="20" x2="150" y2="320" stroke="#121212" strokeWidth="8" />

        {/* Left Eye: Geometric Concentric Circles */}
        <circle cx="105" cy="130" r="26" fill="#F0C020" stroke="#121212" strokeWidth="6" />
        <circle cx="105" cy="130" r="10" fill="#121212" />

        {/* Right Eye: Sharp Blue Square */}
        <rect x="175" y="105" width="48" height="48" fill="#1040C0" stroke="#121212" strokeWidth="6" />
        <circle cx="199" cy="129" r="8" fill="#FFFFFF" />

        {/* Diagonal Eyebrow Rule */}
        <line x1="80" y1="85" x2="225" y2="100" stroke="#121212" strokeWidth="8" strokeLinecap="square" />

        {/* Constructivist Triangular Nose */}
        <polygon points="150,140 185,210 150,210" fill="#F0C020" stroke="#121212" strokeWidth="6" />

        {/* Mouth: Bold Black Horizontal Rectangular Bar & Red Accent */}
        <rect x="110" y="240" width="80" height="16" fill="#121212" />
        <line x1="90" y1="248" x2="210" y2="248" stroke="#121212" strokeWidth="4" />
        <circle cx="150" cy="275" r="12" fill="#D02020" stroke="#121212" strokeWidth="4" />
      </svg>

      <div className="mt-4 text-center">
        <span className="font-black text-xs uppercase tracking-widest text-[#121212] bg-[#F0C020] px-2 py-0.5 border border-[#121212]">
          FIG 01. ORI MASK GEOMETRY
        </span>
      </div>
    </div>
  );
};

export const WassilyChairSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative bg-white border-2 lg:border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute top-2 left-2 text-[10px] font-black tracking-widest uppercase bg-[#121212] text-white px-1.5 py-0.5">
        EKO B3 · INDIGO & IROKO
      </div>
      <svg viewBox="0 0 320 260" className="w-full h-auto max-w-[280px]">
        {/* Ground shadow plane */}
        <polygon points="40,240 280,240 250,250 20,250" fill="#E0E0E0" />

        {/* Steel Tubular Frame (Chrome lines) */}
        <path d="M 50,230 L 220,230 A 15,15 0 0,0 235,215 L 235,130" fill="none" stroke="#121212" strokeWidth="10" strokeLinecap="square" />
        <path d="M 50,230 L 220,230 A 15,15 0 0,0 235,215 L 235,130" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="square" />

        <path d="M 90,215 L 260,215 A 15,15 0 0,0 275,200 L 275,115" fill="none" stroke="#121212" strokeWidth="8" strokeLinecap="square" />

        {/* Slanted Back uprights */}
        <line x1="70" y1="225" x2="110" y2="60" stroke="#121212" strokeWidth="10" strokeLinecap="square" />
        <line x1="70" y1="225" x2="110" y2="60" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="square" />

        <line x1="120" y1="210" x2="155" y2="50" stroke="#121212" strokeWidth="8" strokeLinecap="square" />

        {/* Armrest Frame */}
        <path d="M 105,95 L 245,115 L 245,180" fill="none" stroke="#121212" strokeWidth="9" strokeLinecap="square" />
        <path d="M 105,95 L 245,115 L 245,180" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square" />

        {/* Indigo Denim Slings - Backrest */}
        <polygon points="105,70 150,60 145,115 100,125" fill="#1040C0" stroke="#121212" strokeWidth="2" />
        <polygon points="100,135 145,125 140,165 95,175" fill="#121212" stroke="#121212" strokeWidth="2" />

        {/* Indigo Denim Sling - Seat */}
        <polygon points="90,180 230,195 215,210 75,195" fill="#1040C0" stroke="#121212" strokeWidth="2" />

        {/* Armrest pads */}
        <polygon points="115,92 235,110 235,118 115,100" fill="#121212" />

        {/* Accent indicator */}
        <circle cx="270" cy="50" r="14" fill="#D02020" stroke="#121212" strokeWidth="3" />
      </svg>
      <div className="w-full flex justify-between items-center text-xs mt-2 border-t-2 border-[#121212] pt-1">
        <span className="font-bold uppercase tracking-wider">VI Object Lab</span>
        <span className="font-mono text-[#D02020] font-black">₦850,000</span>
      </div>
    </div>
  );
};

export const DessauBuildingSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative bg-[#F0F0F0] border-2 lg:border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute top-2 left-2 text-[10px] font-black tracking-widest uppercase bg-[#1040C0] text-white px-1.5 py-0.5">
        ASO-OKE & 14OZ DENIM SET
      </div>
      <svg viewBox="0 0 320 220" className="w-full h-auto max-w-[280px]">
        {/* Sky / Horizon */}
        <rect x="0" y="0" width="320" height="150" fill="#E6EEF8" />
        {/* Angular Structural Body */}
        <polygon points="40,190 280,190 280,50 40,70" fill="#FFFFFF" stroke="#121212" strokeWidth="5" />

        {/* Loom Grid Pattern */}
        <rect x="50" y="80" width="160" height="95" fill="#1040C0" stroke="#121212" strokeWidth="4" opacity="0.85" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v-${i}`} x1={50 + (i + 1) * 20} y1="80" x2={50 + (i + 1) * 20} y2="175" stroke="#F0C020" strokeWidth="2" opacity="0.85" />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={`h-${i}`} x1="50" y1={80 + (i + 1) * 20} x2="210" y2={80 + (i + 1) * 20} stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
        ))}

        {/* Vertical Signage: E K O  0 4 */}
        <rect x="220" y="60" width="45" height="120" fill="#D02020" stroke="#121212" strokeWidth="4" />
        <text x="242" y="84" fill="#FFFFFF" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="2">E</text>
        <text x="242" y="106" fill="#FFFFFF" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="2">K</text>
        <text x="242" y="128" fill="#FFFFFF" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="2">O</text>
        <text x="242" y="152" fill="#F0C020" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="2">0</text>
        <text x="242" y="172" fill="#F0C020" fontSize="14" fontWeight="900" textAnchor="middle" letterSpacing="2">4</text>

        {/* Concrete Ground & Sun Disc */}
        <polygon points="20,190 300,190 280,210 0,210" fill="#121212" />
        <circle cx="295" cy="40" r="16" fill="#F0C020" stroke="#121212" strokeWidth="4" />
      </svg>
      <div className="w-full flex justify-between items-center text-xs mt-2 border-t-2 border-[#121212] pt-1">
        <span className="font-bold uppercase tracking-wider">Iseyin Loom × Yaba</span>
        <span className="font-mono text-[#1040C0] font-black">₦245,000</span>
      </div>
    </div>
  );
};

export const WagenfeldLampSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative bg-white border-2 lg:border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute top-2 left-2 text-[10px] font-black tracking-widest uppercase bg-[#F0C020] text-black px-1.5 py-0.5 border border-[#121212]">
        NEPA-ZERO WG24 · 48HR CELL
      </div>
      <svg viewBox="0 0 300 260" className="w-full h-auto max-w-[260px]">
        {/* Base disc */}
        <ellipse cx="150" cy="225" rx="75" ry="18" fill="#F0F0F0" stroke="#121212" strokeWidth="7" />
        <ellipse cx="150" cy="222" rx="45" ry="10" fill="#121212" />

        {/* Benin Brass Stem */}
        <rect x="142" y="110" width="16" height="112" fill="#F0C020" stroke="#121212" strokeWidth="6" />
        <line x1="150" y1="110" x2="150" y2="222" stroke="#121212" strokeWidth="2" />

        {/* Pull cord with coral bead sphere */}
        <line x1="165" y1="120" x2="175" y2="175" stroke="#121212" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="175" cy="180" r="6" fill="#D02020" stroke="#121212" strokeWidth="2" />

        {/* Hemispherical Opal Glass Shade */}
        <path d="M 80,110 A 70,70 0 0,1 220,110 Z" fill="#FFFFFF" stroke="#121212" strokeWidth="7" />
        <ellipse cx="150" cy="110" rx="70" ry="12" fill="#F7F7F7" stroke="#121212" strokeWidth="6" />

        {/* Finial ring */}
        <circle cx="150" cy="38" r="8" fill="#121212" />

        {/* Warm glow background */}
        <circle cx="150" cy="80" r="28" fill="#F0C020" opacity="0.35" />
      </svg>
      <div className="w-full flex justify-between items-center text-xs mt-2 border-t-2 border-[#121212] pt-1">
        <span className="font-bold uppercase tracking-wider">Benin Brass & Lithium</span>
        <span className="font-mono text-[#121212] font-black">₦295,000</span>
      </div>
    </div>
  );
};

export const BrandtTeapotSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative bg-white border-2 lg:border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute top-2 left-2 text-[10px] font-black tracking-widest uppercase bg-[#D02020] text-white px-1.5 py-0.5">
        MT49 ZOBO INFUSER · IGUN ST
      </div>
      <svg viewBox="0 0 300 240" className="w-full h-auto max-w-[260px]">
        {/* Brass Hemisphere Body */}
        <path d="M 70,120 A 75,75 0 0,0 220,120 Z" fill="#E8ECEF" stroke="#121212" strokeWidth="7" />
        <line x1="70" y1="120" x2="220" y2="120" stroke="#121212" strokeWidth="7" />

        {/* Crossed Base Plinth */}
        <rect x="135" y="195" width="20" height="25" fill="#121212" />
        <line x1="110" y1="220" x2="180" y2="220" stroke="#121212" strokeWidth="8" strokeLinecap="square" />

        {/* Cross River Ebony D-Shaped Handle */}
        <path d="M 145,50 A 60,60 0 0,0 85,115" fill="none" stroke="#121212" strokeWidth="12" strokeLinecap="round" />

        {/* Geometric Pouring Spout */}
        <polygon points="215,110 255,85 245,115" fill="#121212" />

        {/* Offset Round Flat Lid */}
        <ellipse cx="145" cy="120" rx="35" ry="8" fill="#FFFFFF" stroke="#121212" strokeWidth="5" />
        <circle cx="145" cy="112" r="5" fill="#D02020" stroke="#121212" strokeWidth="2" />

        {/* Constructivist Shadow */}
        <polygon points="80,225 210,225 190,235 60,235" fill="#C0C0C0" />
      </svg>
      <div className="w-full flex justify-between items-center text-xs mt-2 border-t-2 border-[#121212] pt-1">
        <span className="font-bold uppercase tracking-wider">Igun Brass Guild</span>
        <span className="font-mono text-[#D02020] font-black">₦180,000</span>
      </div>
    </div>
  );
};
