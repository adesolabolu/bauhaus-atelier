import React, { useState, useRef } from 'react';
import { Trash2, RotateCw, Download, Grid } from 'lucide-react';
import { PosterShape } from '../types/bauhaus.ts';
import { bauhausAudio } from '../utils/audio.ts';

const PRESET_COMPOSITIONS: Record<string, { name: string; title: string; subtitle: string; bg: string; shapes: PosterShape[] }> = {
  kandinsky: {
    name: '01. Eko Danfo Yellow',
    title: 'EKO FOR SHOW',
    subtitle: 'DROP 04 · VICTORIA ISLAND LAGOS',
    bg: '#F0F0F0',
    shapes: [
      { id: '1', type: 'circle', x: 25, y: 35, size: 40, rotation: 0, color: '#D02020', opacity: 0.95 },
      { id: '2', type: 'triangle', x: 65, y: 60, size: 45, rotation: 0, color: '#F0C020', opacity: 0.95 },
      { id: '3', type: 'square', x: 65, y: 25, size: 30, rotation: 45, color: '#1040C0', opacity: 0.9 },
      { id: '4', type: 'diagonal-bar', x: 45, y: 50, size: 70, rotation: -35, color: '#121212', opacity: 1 },
      { id: '5', type: 'ring', x: 25, y: 75, size: 25, rotation: 0, color: '#121212', opacity: 1 },
    ],
  },
  bayer: {
    name: '02. Abeokuta Indigo',
    title: 'ADIRE ELEKO',
    subtitle: 'ITOKU DYE GUILD · 500GSM COTTON',
    bg: '#FFFFFF',
    shapes: [
      { id: '1', type: 'square', x: 50, y: 45, size: 55, rotation: 45, color: '#1040C0', opacity: 1 },
      { id: '2', type: 'circle', x: 50, y: 45, size: 35, rotation: 0, color: '#D02020', opacity: 1 },
      { id: '3', type: 'semicircle', x: 30, y: 65, size: 30, rotation: 90, color: '#F0C020', opacity: 0.9 },
      { id: '4', type: 'diagonal-bar', x: 50, y: 85, size: 80, rotation: 0, color: '#121212', opacity: 1 },
    ],
  },
  moholy: {
    name: '03. Surulere Nights',
    title: 'ALTÉ SOUND LAB',
    subtitle: 'YABA · SURULERE · MIDNIGHT SESSION',
    bg: '#121212',
    shapes: [
      { id: '1', type: 'circle', x: 40, y: 40, size: 50, rotation: 0, color: '#F0C020', opacity: 0.85 },
      { id: '2', type: 'ring', x: 55, y: 50, size: 45, rotation: 0, color: '#FFFFFF', opacity: 0.9 },
      { id: '3', type: 'diagonal-bar', x: 40, y: 40, size: 85, rotation: 45, color: '#D02020', opacity: 0.9 },
      { id: '4', type: 'square', x: 70, y: 30, size: 25, rotation: 0, color: '#1040C0', opacity: 0.9 },
    ],
  },
};

export const BauhausPosterStudio: React.FC = () => {
  const [shapes, setShapes] = useState<PosterShape[]>(PRESET_COMPOSITIONS.kandinsky.shapes);
  const [headline, setHeadline] = useState('EKO FOR SHOW');
  const [subline, setSubline] = useState('DROP 04 · VICTORIA ISLAND LAGOS');
  const [posterBg, setPosterBg] = useState('#F0F0F0');
  const [selectedShapeId, setSelectedShapeId] = useState<string>('1');
  const [showGrid, setShowGrid] = useState(true);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const selectedShape = shapes.find((s) => s.id === selectedShapeId) || shapes[0];

  const handleSelectPreset = (key: string) => {
    bauhausAudio.playClick('heavy');
    const preset = PRESET_COMPOSITIONS[key];
    if (preset) {
      setShapes(preset.shapes);
      setHeadline(preset.title);
      setSubline(preset.subtitle);
      setPosterBg(preset.bg);
      if (preset.shapes.length > 0) {
        setSelectedShapeId(preset.shapes[0].id);
      }
    }
  };

  const handleAddShape = (type: PosterShape['type']) => {
    bauhausAudio.playClick('snappy');
    const colors = ['#D02020', '#1040C0', '#F0C020', '#121212'];
    const newShape: PosterShape = {
      id: Date.now().toString(),
      type,
      x: 30 + Math.floor(Math.random() * 40),
      y: 30 + Math.floor(Math.random() * 40),
      size: 30,
      rotation: type === 'square' || type === 'diagonal-bar' ? 45 : 0,
      color: colors[shapes.length % colors.length],
      opacity: 1,
    };
    setShapes([...shapes, newShape]);
    setSelectedShapeId(newShape.id);
  };

  const updateSelectedShape = (partial: Partial<PosterShape>) => {
    if (!selectedShape) return;
    setShapes(
      shapes.map((s) => (s.id === selectedShape.id ? { ...s, ...partial } : s))
    );
  };

  const removeSelectedShape = () => {
    if (!selectedShape || shapes.length <= 1) return;
    bauhausAudio.playClick('heavy');
    const remaining = shapes.filter((s) => s.id !== selectedShape.id);
    setShapes(remaining);
    setSelectedShapeId(remaining[0].id);
  };

  const handleExportSvg = () => {
    bauhausAudio.playClick('high');
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `bauhaus_lagos_graphic_${Date.now()}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="atelier" className="bg-[#F0F0F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-4 border-[#121212] mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 clip-triangle bg-[#F0C020] border border-[#121212]" />
              <span className="font-bold text-xs uppercase tracking-widest text-[#121212]">
                YABA SCREENPRINT & GRAPHIC LAB
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212]">
              CUSTOM DROP TAG COMPOSER
            </h2>
          </div>

          {/* Cultural Presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#121212] mr-2 hidden sm:inline">
              Lagos Presets:
            </span>
            {Object.entries(PRESET_COMPOSITIONS).map(([key, item]) => (
              <button
                key={key}
                onClick={() => handleSelectPreset(key)}
                className="px-3 py-1.5 bg-white text-[#121212] text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#E0E0E0] cursor-pointer whitespace-nowrap shrink-0"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Grid: Canvas on Left, Controls on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Live Graphic Tee / Poster Canvas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-[500px] aspect-[3/4] bg-white border-4 border-[#121212] shadow-[10px_10px_0px_0px_black] relative overflow-hidden select-none">
              <svg
                ref={svgRef}
                viewBox="0 0 400 533"
                className="w-full h-full"
                style={{ backgroundColor: posterBg }}
              >
                {/* Optional Constructivist Guide Lines */}
                {showGrid && (
                  <g opacity="0.15">
                    <line x1="0" y1="0" x2="400" y2="533" stroke="#121212" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="400" y1="0" x2="0" y2="533" stroke="#121212" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="200" y1="0" x2="200" y2="533" stroke="#121212" strokeWidth="2" />
                    <line x1="0" y1="266" x2="400" y2="266" stroke="#121212" strokeWidth="2" />
                  </g>
                )}

                {/* Render All Geometric Shapes in Order */}
                {shapes.map((s) => {
                  const cx = (s.x / 100) * 400;
                  const cy = (s.y / 100) * 533;
                  const r = (s.size / 100) * 200;
                  const isSelected = selectedShape && selectedShape.id === s.id;

                  return (
                    <g
                      key={s.id}
                      onClick={() => {
                        bauhausAudio.playClick('snappy');
                        setSelectedShapeId(s.id);
                      }}
                      className="cursor-pointer"
                      transform={`rotate(${s.rotation} ${cx} ${cy})`}
                    >
                      {s.type === 'circle' && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={r}
                          fill={s.color}
                          stroke="#121212"
                          strokeWidth={isSelected ? 6 : 4}
                          opacity={s.opacity}
                        />
                      )}

                      {s.type === 'square' && (
                        <rect
                          x={cx - r}
                          y={cy - r}
                          width={r * 2}
                          height={r * 2}
                          fill={s.color}
                          stroke="#121212"
                          strokeWidth={isSelected ? 6 : 4}
                          opacity={s.opacity}
                        />
                      )}

                      {s.type === 'triangle' && (
                        <polygon
                          points={`${cx},${cy - r} ${cx + r},${cy + r} ${cx - r},${cy + r}`}
                          fill={s.color}
                          stroke="#121212"
                          strokeWidth={isSelected ? 6 : 4}
                          opacity={s.opacity}
                        />
                      )}

                      {s.type === 'diagonal-bar' && (
                        <rect
                          x={cx - r * 1.5}
                          y={cy - 12}
                          width={r * 3}
                          height={24}
                          fill={s.color}
                          stroke="#121212"
                          strokeWidth={isSelected ? 6 : 4}
                          opacity={s.opacity}
                        />
                      )}

                      {s.type === 'semicircle' && (
                        <path
                          d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy} Z`}
                          fill={s.color}
                          stroke="#121212"
                          strokeWidth={isSelected ? 6 : 4}
                          opacity={s.opacity}
                        />
                      )}

                      {s.type === 'ring' && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={r}
                          fill="none"
                          stroke={s.color}
                          strokeWidth={r / 3}
                          opacity={s.opacity}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Typography Overlay: Asymmetric Constructivist Lettering */}
                <g className="pointer-events-none select-none">
                  {/* Top Bar Label */}
                  <rect x="25" y="25" width="14" height="14" fill="#D02020" stroke="#121212" strokeWidth="2" />
                  <text
                    x="48"
                    y="36"
                    fill={posterBg === '#121212' ? '#FFFFFF' : '#121212'}
                    fontSize="9"
                    fontWeight="900"
                    letterSpacing="3"
                  >
                    BAUHAUS LAGOS · NEO-CRAFT COLLECTIVE
                  </text>

                  {/* Main Display Headline */}
                  <text
                    x="25"
                    y="460"
                    fill={posterBg === '#121212' ? '#FFFFFF' : '#121212'}
                    fontSize="28"
                    fontWeight="900"
                    letterSpacing="-1"
                  >
                    {headline}
                  </text>

                  {/* Subline */}
                  <text
                    x="25"
                    y="485"
                    fill={posterBg === '#121212' ? '#F0C020' : '#D02020'}
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="2"
                  >
                    {subline}
                  </text>

                  {/* Bottom Rule */}
                  <line
                    x1="25"
                    y1="498"
                    x2="375"
                    y2="498"
                    stroke={posterBg === '#121212' ? '#FFFFFF' : '#121212'}
                    strokeWidth="3"
                  />
                  <text
                    x="25"
                    y="515"
                    fill={posterBg === '#121212' ? '#CCCCCC' : '#121212'}
                    fontSize="8"
                    fontWeight="700"
                    letterSpacing="1"
                  >
                    ADIRE · ASO-OKE · 500GSM · FORGED IN NIGERIA
                  </text>
                </g>
              </svg>
            </div>

            {/* Poster Canvas Actions */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={handleExportSvg}
                className="px-5 py-2.5 bg-[#D02020] text-white font-bold text-xs uppercase tracking-widest border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020]/90 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download Print Stencil (.SVG)</span>
              </button>

              <button
                onClick={() => {
                  bauhausAudio.playClick('snappy');
                  setShowGrid(!showGrid);
                }}
                className={`px-4 py-2.5 font-bold text-xs uppercase tracking-widest border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  showGrid ? 'bg-[#F0C020] text-black' : 'bg-white text-black'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>{showGrid ? 'Loom Grid: ON' : 'Loom Grid: OFF'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Controls (5 cols) */}
          <div className="lg:col-span-5 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 flex flex-col gap-6">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-[#D02020] mb-1">
                YABA SCREENPRINT PRESS
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212]">
                STENCIL & DYE CONTROLS
              </h3>
            </div>

            {/* Add Geometric Element Palette */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#121212] mb-2">
                1. Add Stencil Stamp
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleAddShape('circle')}
                  className="py-2.5 px-3 bg-[#F0F0F0] hover:bg-[#E0E0E0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-[#D02020] border border-black" />
                  <span>Sun Disc</span>
                </button>
                <button
                  onClick={() => handleAddShape('square')}
                  className="py-2.5 px-3 bg-[#F0F0F0] hover:bg-[#E0E0E0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <div className="w-3.5 h-3.5 bg-[#1040C0] border border-black" />
                  <span>Loom Block</span>
                </button>
                <button
                  onClick={() => handleAddShape('triangle')}
                  className="py-2.5 px-3 bg-[#F0F0F0] hover:bg-[#E0E0E0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <div className="w-3.5 h-3.5 clip-triangle bg-[#F0C020] border border-black" />
                  <span>Chevron</span>
                </button>
                <button
                  onClick={() => handleAddShape('diagonal-bar')}
                  className="py-2.5 px-3 bg-[#F0F0F0] hover:bg-[#E0E0E0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <div className="w-4 h-1 bg-[#121212] rotate-45" />
                  <span>Danfo Stripe</span>
                </button>
                <button
                  onClick={() => handleAddShape('semicircle')}
                  className="py-2.5 px-3 bg-[#F0F0F0] hover:bg-[#E0E0E0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span className="text-base leading-none">◓</span>
                  <span>Calabash</span>
                </button>
                <button
                  onClick={() => handleAddShape('ring')}
                  className="py-2.5 px-3 bg-[#F0F0F0] hover:bg-[#E0E0E0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-black" />
                  <span>Brass Ring</span>
                </button>
              </div>
            </div>

            {/* Selected Element Adjustments */}
            {selectedShape && (
              <div className="p-4 bg-[#F0F0F0] border-2 border-[#121212] flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#121212]">
                    Active Layer: {selectedShape.type}
                  </span>
                  <button
                    onClick={removeSelectedShape}
                    disabled={shapes.length <= 1}
                    className="p-1.5 bg-white border border-[#121212] hover:bg-[#D02020] hover:text-white transition-colors cursor-pointer disabled:opacity-40"
                    title="Remove Layer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Color Selector */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                    Pigment & Dye Vat
                  </span>
                  <div className="flex items-center gap-2">
                    {[
                      { name: 'Benin Coral Red', hex: '#D02020' },
                      { name: 'Abeokuta Elu Indigo', hex: '#1040C0' },
                      { name: 'Lagos Danfo Yellow', hex: '#F0C020' },
                      { name: 'Charcoal Black', hex: '#121212' },
                      { name: 'Raw Kano Cotton', hex: '#FFFFFF' },
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => {
                          bauhausAudio.playClick('snappy');
                          updateSelectedShape({ color: col.hex });
                        }}
                        style={{ backgroundColor: col.hex }}
                        className={`w-8 h-8 border-2 border-[#121212] shadow-[2px_2px_0px_0px_black] cursor-pointer transition-transform ${
                          selectedShape.color === col.hex ? 'scale-115 ring-2 ring-black' : 'hover:scale-105'
                        }`}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Position X / Y */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#121212] mb-1 tabular-nums">
                      Axis X ({selectedShape.x}%)
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={selectedShape.x}
                      onChange={(e) => updateSelectedShape({ x: Number(e.target.value) })}
                      className="w-full accent-[#D02020] cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#121212] mb-1 tabular-nums">
                      Axis Y ({selectedShape.y}%)
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={selectedShape.y}
                      onChange={(e) => updateSelectedShape({ y: Number(e.target.value) })}
                      className="w-full accent-[#D02020] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Scale & Rotation */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#121212] mb-1 tabular-nums">
                      Scale ({selectedShape.size})
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="70"
                      value={selectedShape.size}
                      onChange={(e) => updateSelectedShape({ size: Number(e.target.value) })}
                      className="w-full accent-[#1040C0] cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#121212] mb-1 tabular-nums">
                      Rotation ({selectedShape.rotation}°)
                    </label>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          bauhausAudio.playClick('snappy');
                          updateSelectedShape({ rotation: (selectedShape.rotation + 45) % 360 });
                        }}
                        className="w-full py-1 bg-white border border-[#121212] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-[#E0E0E0] cursor-pointer"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>+45°</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Typography & Background Controls */}
            <div className="border-t-2 border-[#121212] pt-4 flex flex-col gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121212] mb-1">
                  Garment Tag Headline
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 bg-[#F0F0F0] border-2 border-[#121212] font-black uppercase text-sm tracking-tight focus:outline-none focus:bg-white"
                  maxLength={28}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121212] mb-1">
                  Atelier Edition Line
                </label>
                <input
                  type="text"
                  value={subline}
                  onChange={(e) => setSubline(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 bg-[#F0F0F0] border-2 border-[#121212] font-bold uppercase text-xs tracking-wider focus:outline-none focus:bg-white"
                  maxLength={40}
                />
              </div>

              {/* Canvas Background Color */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                  Base Cotton / Dye Ground
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { label: 'Unbleached Cotton', val: '#F0F0F0' },
                    { label: 'Chalk White', val: '#FFFFFF' },
                    { label: 'Danfo Yellow', val: '#F0C020' },
                    { label: 'Elu Indigo', val: '#1040C0' },
                    { label: 'Coral Red', val: '#D02020' },
                    { label: 'Lagos Midnight', val: '#121212' },
                  ].map((bg) => (
                    <button
                      key={bg.val}
                      onClick={() => {
                        bauhausAudio.playClick('snappy');
                        setPosterBg(bg.val);
                      }}
                      style={{ backgroundColor: bg.val }}
                      className={`w-7 h-7 border-2 border-[#121212] cursor-pointer shadow-[2px_2px_0px_0px_black] ${
                        posterBg === bg.val ? 'ring-2 ring-black scale-110' : ''
                      }`}
                      title={bg.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
