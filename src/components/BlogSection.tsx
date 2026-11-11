import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ArticleItem } from '../types/bauhaus.ts';
import { bauhausAudio } from '../utils/audio.ts';

interface BlogSectionProps {
  onReadArticle: (article: ArticleItem) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onReadArticle }) => {
  const articles: ArticleItem[] = [
    {
      id: 'wassily-revolution',
      title: 'From Danfo Buses to Bauhaus: Why Yellow, Black & Bold Stencils Own Lagos',
      date: 'November 2026',
      author: 'Chidi Nwosu',
      readTime: '5 min read',
      excerpt: 'Long before European textbooks arrived in Yaba, Lagos transit culture mastered high-contrast industrial graphic design. How Danfo typography and route stencils shaped Drop 04.',
      tag: 'VISUAL CULTURE',
      imageShape: 'rounded-full',
      svgType: 'wassily',
    },
    {
      id: 'dessau-curtain-wall',
      title: 'Inside the Indigo Vats of Abeokuta: Why Natural Elu Beats Synthetic Denim',
      date: 'October 2026',
      author: 'Alhaja Bisi & Kemi Adesina',
      readTime: '7 min read',
      excerpt: 'We spent six months in Itoku Market calibrating cassava-paste resist stencils with 14oz raw Kano cotton so our indigo garments age with living depth over decades.',
      tag: 'TEXTILE SCIENCE',
      imageShape: 'rounded-none',
      svgType: 'dessau',
    },
    {
      id: 'universal-typeface',
      title: 'The New Yaba & VI Vanguard: Building Global Luxury Without Leaving Nigeria',
      date: 'September 2026',
      author: 'Tunde Bakare',
      readTime: '6 min read',
      excerpt: 'For decades, African designers were told they needed a Milan or Paris atelier to charge full value. Why the new generation is building vertically integrated factories at home.',
      tag: 'INDUSTRY MANIFESTO',
      imageShape: 'rounded-full',
      svgType: 'sphere',
    },
    {
      id: 'brandt-breakthrough',
      title: 'Igun Street to Victoria Island: Casting Streetwear Hardware in Benin Brass',
      date: 'August 2026',
      author: 'Osaze Igbinedion',
      readTime: '8 min read',
      excerpt: 'Instead of importing generic zinc zippers, we partnered with hereditary bronze and brass casters in Benin City to sand-cast every buckle, snap, and lamp stem.',
      tag: 'BENIN METALWORK',
      imageShape: 'rounded-none',
      svgType: 'abstract',
    },
  ];

  return (
    <section id="chronik" className="bg-[#1040C0] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-4 border-[#121212] mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 clip-triangle bg-[#F0C020] border border-[#121212]" />
              <span className="font-bold text-xs uppercase tracking-widest text-[#F0C020]">
                EKO ZINE & CULTURAL MONOGRAPHS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white">
              STORIES FROM THE LAGOON
            </h2>
          </div>
          <div className="text-xs font-mono font-bold uppercase text-white bg-[#121212] px-3 py-1.5 border-2 border-white shadow-[3px_3px_0px_0px_white]">
            ISSUE 04 · HARMATTAN PRINT
          </div>
        </div>

        {/* 2x2 Grid with Alternating rounded-full / rounded-none and Grayscale to Color hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => {
            const isFullRounded = article.imageShape === 'rounded-full';

            return (
              <div
                key={article.id}
                className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-200"
              >
                <div>
                  {/* Image Treatment Container */}
                  <div className="w-full h-48 bg-[#F0F0F0] border-2 border-[#121212] flex items-center justify-center p-4 mb-6 overflow-hidden relative">
                    <div
                      className={`w-36 h-36 border-4 border-[#121212] shadow-[4px_4px_0px_0px_black] flex items-center justify-center overflow-hidden transition-all duration-300 grayscale group-hover:grayscale-0 ${
                        isFullRounded ? 'rounded-full bg-[#D02020]' : 'rounded-none bg-[#F0C020]'
                      }`}
                    >
                      {article.svgType === 'wassily' && (
                        <div className="text-center p-2">
                          <div className="w-12 h-12 border-3 border-[#121212] rounded-none bg-white rotate-45 mx-auto mb-1 flex items-center justify-center">
                            <span className="font-mono text-xs font-black -rotate-45">EKO</span>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">DANFO</span>
                        </div>
                      )}
                      {article.svgType === 'dessau' && (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white p-2">
                          <div className="w-full h-8 bg-[#1040C0] border border-black mb-1" />
                          <div className="w-full h-8 bg-[#D02020] border border-black" />
                          <span className="font-black text-[10px] tracking-widest uppercase mt-1">ADIRE</span>
                        </div>
                      )}
                      {article.svgType === 'sphere' && (
                        <div className="text-center p-2">
                          <span className="text-3xl font-black text-white uppercase">500g</span>
                          <div className="text-[10px] font-bold text-white uppercase tracking-widest mt-1">YABA MILL</div>
                        </div>
                      )}
                      {article.svgType === 'abstract' && (
                        <div className="w-full h-full bg-[#121212] flex items-center justify-center p-2">
                          <div className="w-14 h-14 rounded-full border-4 border-[#F0C020] flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#D02020] clip-triangle" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="absolute top-2 right-2 text-[10px] font-mono font-bold bg-[#121212] text-white px-2 py-0.5 border border-white">
                      ZINE 0{idx + 1}
                    </div>
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs font-bold text-[#121212]/70 uppercase tracking-wider mb-2">
                    <span className="text-[#D02020]">{article.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212] group-hover:text-[#1040C0] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium text-[#121212]/80 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Bottom: Author & Read Essay Button */}
                <div className="mt-8 pt-4 border-t-2 border-[#121212] flex items-center justify-between">
                  <div className="text-xs font-bold uppercase text-[#121212]">
                    By <span className="underline decoration-2">{article.author}</span>
                  </div>

                  <button
                    onClick={() => {
                      bauhausAudio.playClick('snappy');
                      onReadArticle(article);
                    }}
                    className="px-4 py-2 bg-[#121212] text-white text-xs font-bold uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020] transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <span>Read Feature</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
