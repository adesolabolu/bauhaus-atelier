import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types/bauhaus.ts';
import { bauhausAudio } from '../utils/audio.ts';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'How fast is delivery within Lagos, across Nigeria, and to the Diaspora?',
      answer: 'Orders placed before 2:00 PM WAT in Lagos (Victoria Island, Ikoyi, Lekki, Ikeja, Yaba, Surulere) are delivered same-day via our dedicated dispatch riders. Orders to Abuja, Port Harcourt, Ibadan, and Enugu arrive within 24–48 hours via DHL Domestic. International orders to London, New York, Toronto, and Accra ship via DHL Express in 3–4 business days.',
      category: 'Logistics & Dispatch',
    },
    {
      id: 'faq-2',
      question: 'Can I pay in Naira (Paystack / Bank Transfer / USSD) as well as USD or GBP?',
      answer: 'Yes. We accept instant Naira payments via Paystack (Naira cards, NIP Bank Transfer, and USSD) as well as international Visa, Mastercard, and Apple Pay in USD and GBP for diaspora collectors. Showroom visitors in Victoria Island can also pay via POS or instant transfer.',
      category: 'Payments',
    },
    {
      id: 'faq-3',
      question: 'Where is the Victoria Island Flagship & Pop-Up Showroom located?',
      answer: 'Our flagship space and object gallery is located off Akin Adesola Street in Victoria Island, Lagos, with our production print and tailoring lab on Herbert Macaulay Way in Yaba. Use the "Pop-Up Pass" button at the top of the page to RSVP for weekend drop sessions or book a private fitting.',
      category: 'Showroom',
    },
    {
      id: 'faq-4',
      question: 'How do I care for natural Abeokuta Adire indigo and hand-loomed Aso-Oke pieces?',
      answer: 'Because we use living natural Elu indigo vats and heavyweight hand-woven Aso-Oke strips, wash cold inside-out with mild soap or dry-clean only. Never tumble-dry or bleach. Like raw selvedge denim, your Adire panels will develop a unique personal patina over years of wear.',
      category: 'Garment Care',
    },
    {
      id: 'faq-5',
      question: 'Do you restock capsules once a Drop sells out?',
      answer: 'Never. Every Bauhaus Lagos release is strictly limited—typically 150 numbered garments per silhouette and 25 to 100 numbered furniture or lighting objects. Once a piece sells out, its stencil is retired to our archive.',
      category: 'Archival Policy',
    },
  ];

  const toggleFaq = (id: string) => {
    bauhausAudio.playClick('snappy');
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#F0F0F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#121212] text-white px-3 py-1 text-xs font-black uppercase tracking-widest">
            <span>COLLECTOR & CLIENT GUIDE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212]">
            DISPATCH, SIZING & SHOWROOM FAQ
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-[#121212]/80 leading-relaxed">
            Everything you need to know about Lagos same-day dispatch, Naira & international payments, and visiting our Victoria Island space.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-4 border-[#121212] shadow-[6px_6px_0px_0px_black]'
                    : 'bg-white border-4 border-[#121212] shadow-[4px_4px_0px_0px_black]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer select-none ${
                    isOpen
                      ? 'bg-[#D02020] text-white'
                      : 'bg-white text-[#121212] hover:bg-[#F8F8F8]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="font-black text-lg sm:text-xl uppercase tracking-tight pr-4 leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`w-10 h-10 shrink-0 border-2 border-black flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'bg-[#F0C020] text-black rotate-180' : 'bg-white text-black'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[3]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="bg-[#FFF9C4] text-[#121212] p-5 sm:p-6 border-t-4 border-[#121212] transition-all">
                    <p className="text-sm sm:text-base font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#121212]/30 flex items-center justify-between text-xs font-mono font-bold text-[#121212]/70">
                      <span>GUIDE · {faq.category.toUpperCase()}</span>
                      <span>VICTORIA ISLAND · LAGOS</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
