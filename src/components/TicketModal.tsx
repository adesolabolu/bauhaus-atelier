import React, { useState } from 'react';
import { X, Check, Ticket, Download } from 'lucide-react';
import { bauhausAudio } from '../utils/audio.ts';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [venue, setVenue] = useState<'dessau' | 'weimar' | 'berlin'>('dessau');
  const [ticketType, setTicketType] = useState<'standard' | 'archival' | 'atelier'>('archival');
  const [date, setDate] = useState('2026-11-21');
  const [attendeeName, setAttendeeName] = useState('Ayo Balogun');
  const [count, setCount] = useState(2);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const venues = {
    dessau: { name: 'Victoria Island Flagship Showroom', city: 'Akin Adesola, VI Lagos', year: 'WAT / LAGOS', passId: 'EKO-VI-26' },
    weimar: { name: 'Yaba Screenprint & Loom Factory', city: 'Herbert Macaulay, Yaba', year: 'OPEN PRESS', passId: 'EKO-YAB-26' },
    berlin: { name: 'Maitama Collector Pop-Up', city: 'Gana Street, Abuja', year: 'ABUJA TOUR', passId: 'ABJ-MAI-26' },
  };

  const currentVenue = venues[venue];

  const tierNaira = ticketType === 'standard' ? 0 : ticketType === 'archival' ? 25000 : 120000;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    bauhausAudio.playClick('heavy');
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-2xl bg-white border-4 border-[#121212] shadow-[12px_12px_0px_0px_black] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#D02020] text-white p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#121212]">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-white border-2 border-[#121212]" />
            <h3 className="font-black text-lg sm:text-xl uppercase tracking-tighter">
              DROP 04 POP-UP & SHOWROOM ACCESS PASS
            </h3>
          </div>
          <button
            onClick={() => {
              bauhausAudio.playClick('snappy');
              onClose();
            }}
            className="p-1.5 bg-white text-black border-2 border-[#121212] hover:bg-[#F0C020] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isBooked ? (
            /* Confirmed Lagos Pop-Up Pass */
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#F0C020] border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] flex items-center justify-center mb-4">
                <Check className="w-8 h-8 stroke-[3] text-black" />
              </div>

              <span className="text-xs font-mono font-bold bg-[#121212] text-white px-3 py-1 uppercase tracking-widest">
                GUESTLIST CONFIRMED · SHOW AT DOOR
              </span>

              <h4 className="text-3xl font-black uppercase tracking-tight text-[#121212] mt-3">
                LAGOS POP-UP PASS ISSUED
              </h4>

              {/* Physical Constructivist Ticket Slip */}
              <div className="w-full mt-6 bg-[#F0F0F0] border-4 border-[#121212] shadow-[6px_6px_0px_0px_black] p-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1040C0] text-white flex items-center justify-center font-mono font-black text-xs rotate-45 translate-x-4 -translate-y-4">
                  VIP
                </div>

                <div className="flex justify-between items-start border-b-2 border-[#121212] pb-4">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#D02020]">
                      BAUHAUS LAGOS · DROP 04
                    </div>
                    <div className="text-xl font-black uppercase text-[#121212]">
                      {currentVenue.name}
                    </div>
                    <div className="text-xs font-bold text-[#121212]/70 uppercase">
                      {currentVenue.city} · {currentVenue.year}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xs font-bold text-[#121212] tabular-nums">
                      PASS ID: {currentVenue.passId}-{(Math.random() * 900 + 100).toFixed(0)}
                    </div>
                    <div className="text-xs font-bold text-[#1040C0] uppercase tabular-nums">
                      {count} GUEST(S)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-xs font-bold uppercase">
                  <div>
                    <span className="text-[#121212]/60 block text-[10px]">COLLECTOR NAME</span>
                    <span>{attendeeName}</span>
                  </div>
                  <div>
                    <span className="text-[#121212]/60 block text-[10px]">SESSION DATE</span>
                    <span className="tabular-nums">{date}</span>
                  </div>
                  <div>
                    <span className="text-[#121212]/60 block text-[10px]">ACCESS TIER</span>
                    <span>
                      {ticketType === 'standard'
                        ? 'GENERAL POP-UP'
                        : ticketType === 'archival'
                        ? 'EARLY DROP + ZINE'
                        : 'PRIVATE FITTING'}
                    </span>
                  </div>
                </div>

                {/* Barcode graphic */}
                <div className="mt-6 pt-4 border-t-2 border-[#121212] flex items-center justify-between">
                  <div className="flex gap-1 h-8 items-end">
                    {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6].map((w, i) => (
                      <div
                        key={i}
                        className="bg-black"
                        style={{ width: `${w * 1.5}px`, height: `${20 + (i % 5) * 2}px` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] font-bold">EKO-DROP-04-2026</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    bauhausAudio.playClick('high');
                    window.print();
                  }}
                  className="px-6 py-3 bg-[#121212] text-white font-bold text-xs uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#D02020] transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Save / Print Pass</span>
                </button>
                <button
                  onClick={() => {
                    bauhausAudio.playClick('snappy');
                    setIsBooked(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-white text-[#121212] font-bold text-xs uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-[#E0E0E0] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBooking} className="flex flex-col gap-6">
              {/* Location Selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#121212] mb-2">
                  1. Select Nigerian Showroom or Pop-Up Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { key: 'dessau', name: 'Victoria Island', tag: 'Flagship Showroom' },
                    { key: 'weimar', name: 'Yaba Factory', tag: 'Open Screenprint Lab' },
                    { key: 'berlin', name: 'Maitama Abuja', tag: 'Weekend Pop-Up' },
                  ].map((v) => (
                    <button
                      key={v.key}
                      type="button"
                      onClick={() => {
                        bauhausAudio.playClick('snappy');
                        setVenue(v.key as 'dessau' | 'weimar' | 'berlin');
                      }}
                      className={`p-3 text-left border-2 border-[#121212] cursor-pointer transition-all ${
                        venue === v.key
                          ? 'bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_black]'
                          : 'bg-[#F0F0F0] text-[#121212] hover:bg-[#E0E0E0]'
                      }`}
                    >
                      <div className="font-black text-xs uppercase">{v.name}</div>
                      <div className={`text-[10px] uppercase font-bold mt-1 ${venue === v.key ? 'text-white/80' : 'text-[#121212]/60'}`}>
                        {v.tag}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pass Tier */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#121212] mb-2">
                  2. Select Access Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { key: 'standard', name: 'General RSVP', price: 'FREE', perk: 'Showroom + Listening Set' },
                    { key: 'archival', name: 'Early Drop Pass', price: '₦25,000', perk: 'First Pick + Print Zine 04' },
                    { key: 'atelier', name: 'Private Fitting', price: '₦120,000', perk: 'Custom Adire Jacket Credit' },
                  ].map((tier) => (
                    <button
                      key={tier.key}
                      type="button"
                      onClick={() => {
                        bauhausAudio.playClick('snappy');
                        setTicketType(tier.key as 'standard' | 'archival' | 'atelier');
                      }}
                      className={`p-3 text-left border-2 border-[#121212] cursor-pointer transition-all ${
                        ticketType === tier.key
                          ? 'bg-[#F0C020] text-black shadow-[3px_3px_0px_0px_black]'
                          : 'bg-[#F0F0F0] text-[#121212] hover:bg-[#E0E0E0]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-black text-xs uppercase">{tier.name}</span>
                        <span className="font-mono font-bold text-xs tabular-nums">{tier.price}</span>
                      </div>
                      <div className="text-[10px] font-bold text-[#121212]/70 uppercase mt-1">
                        {tier.perk}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Attendee Name & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#121212] mb-1">
                    Collector Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F0F0F0] border-2 border-[#121212] text-xs font-bold uppercase focus:outline-none focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#121212] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F0F0F0] border-2 border-[#121212] text-xs font-bold uppercase focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              {/* Number of Passes */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#121212] mb-1">
                  Guests in Party
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => {
                        bauhausAudio.playClick('snappy');
                        setCount(n);
                      }}
                      className={`w-10 h-10 border-2 border-[#121212] font-black text-sm flex items-center justify-center cursor-pointer transition-all tabular-nums ${
                        count === n
                          ? 'bg-[#D02020] text-white shadow-[2px_2px_0px_0px_black]'
                          : 'bg-white text-[#121212] hover:bg-[#E0E0E0]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t-2 border-[#121212] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#121212]/70 uppercase block">TOTAL AMOUNT (REDEEMABLE AT DROP)</span>
                  <span className="text-2xl font-black text-[#121212] font-mono tabular-nums">
                    {tierNaira === 0 ? 'FREE RSVP' : `₦${(count * tierNaira).toLocaleString()}`}
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#D02020] text-white font-black text-xs uppercase tracking-widest border-2 border-[#121212] shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020]/90 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Confirm Guestlist Pass</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
