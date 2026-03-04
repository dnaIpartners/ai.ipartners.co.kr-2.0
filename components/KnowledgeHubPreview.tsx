
import React from 'react';
import { HUB_EDITORS_PICK } from '../constants';
import { NewsItem } from '../types';

interface KnowledgeHubPreviewProps {
  onNavigate: (page: any) => void;
  onArticleClick: (item: NewsItem) => void;
}

const KnowledgeHubPreview: React.FC<KnowledgeHubPreviewProps> = ({ onNavigate, onArticleClick }) => {
  // Hardcoded cover story
  const coverStory: NewsItem = {
    id: 'cover-2024-10-24',
    date: 'OCT 24, 2024',
    category: 'DEEP DIVE',
    title: 'The Latent Space',
    imageUrl: 'https://picsum.photos/seed/latent-space/900/1200',
    author: 'AX LAB',
    readTime: '8 MIN READ',
    content: `...` // Content is handled in detail view
  };

  return (
    <section className="bg-white text-black w-full pt-24 md:pt-32">
      
      {/* Top System Bar Removed */}

      {/* Main Layout: Flexbox for stability */}
      <div className="flex flex-col lg:flex-row lg:h-[750px] border-t border-black">
          
          {/* 2. LEFT: SECTION TITLE (Vertical on Desktop, Horizontal on Mobile) */}
          <div className="lg:w-24 border-b lg:border-b-0 lg:border-r border-black p-6 md:p-8 flex flex-row lg:flex-col justify-between items-center lg:items-center bg-white z-10 shrink-0">
              <div className="flex flex-col lg:h-full lg:justify-between items-start lg:items-center w-full">
                  <h2 className="text-2xl lg:text-4xl font-black tracking-tighter uppercase leading-none lg:[writing-mode:vertical-rl] lg:rotate-180 whitespace-nowrap">
                      Knowledge Hub
                  </h2>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 mt-2 lg:mt-0 lg:[writing-mode:vertical-rl] lg:rotate-180 whitespace-nowrap">
                      Insights & Trends
                  </span>
              </div>
          </div>

          {/* 3. CENTER: COVER STORY (Main Feature) */}
          <div 
            className="flex-1 border-b lg:border-b-0 lg:border-r border-black group cursor-pointer relative overflow-hidden min-h-[500px] lg:min-h-0"
            onClick={() => onArticleClick(coverStory)}
          >
              <div className="absolute inset-0 bg-gray-200">
                  <img 
                    src={coverStory.imageUrl} 
                    alt="Cover" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-90"
                  />
                  {/* Grain Overlay */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10 bg-gradient-to-b from-black/10 via-transparent to-black/80">
                  
                  {/* Top Tags */}
                  <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-2">
                          <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest w-fit">
                              Cover Story
                          </span>
                          <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest w-fit">
                              {coverStory.readTime}
                          </span>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                          <span className="text-xl">↗</span>
                      </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-blue-400 font-mono text-xs mb-2 block">{coverStory.date}</span>
                      <h3 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
                          The Latent <br/> Space<span className="text-blue-600">.</span>
                      </h3>
                      <p className="text-gray-300 max-w-lg text-sm md:text-base font-light leading-relaxed border-l-2 border-blue-600 pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                          "프롬프트 엔지니어링은 단순한 기계와의 대화가 아닙니다. 인간의 의도와 고차원 벡터 공간을 정렬하는 새로운 예술입니다."
                      </p>
                  </div>
              </div>
          </div>

          {/* 4. RIGHT: TRENDING LIST */}
          <div className="lg:w-[400px] xl:w-[450px] bg-white flex flex-col shrink-0 border-b lg:border-b-0 border-black lg:border-none">
              
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-black bg-gray-50 shrink-0">
                  <h3 className="text-xl font-black tracking-tight uppercase mb-1">Editor's Pick</h3>
                  <p className="text-xs text-gray-500 font-mono">Curated by AX Research Team</p>
              </div>

              {/* List Items Container */}
              <div className="flex-1 flex flex-col overflow-y-auto">
                  {HUB_EDITORS_PICK.slice(0, 3).map((item, idx) => (
                      <div 
                          key={item.id}
                          onClick={() => onArticleClick(item)}
                          className="group/item flex-1 border-b border-black last:border-b-0 p-6 md:p-8 cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 flex flex-col justify-center relative overflow-hidden min-h-[160px]"
                      >
                          <div className="flex justify-between items-start mb-3 relative z-10">
                              <span className="text-[10px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors uppercase">
                                  {item.category}
                              </span>
                              <span className="text-xs font-mono text-gray-400 group-hover/item:text-gray-500">
                                  0{idx + 1}
                              </span>
                          </div>
                          
                          <h4 className="text-xl md:text-2xl font-black tracking-tight uppercase leading-none mb-3 group-hover/item:translate-x-2 transition-transform duration-300 relative z-10">
                              {item.title}
                          </h4>
                          
                          <div className="flex justify-between items-center mt-auto relative z-10">
                              <span className="text-[10px] font-mono text-gray-400 group-hover/item:text-gray-500">
                                  {item.readTime}
                              </span>
                              <span className="text-lg opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-blue-500">
                                  →
                              </span>
                          </div>

                          {/* Hover Background Pattern */}
                          <div className="absolute inset-0 opacity-0 group-hover/item:opacity-10 pointer-events-none" 
                               style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
      
      {/* Newsletter Section */}
      <section className="bg-gray-100 py-24 px-6 md:px-12 border-t border-black">
         <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-serif font-bold text-xl">i</div>
                  <h3 className="text-xl font-black tracking-tighter uppercase">IPARTNERS</h3>
               </div>
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                  Weekly Prompt Engineering <br/> Insights & Styles.
               </h2>
               <div className="flex max-w-md border-b border-black pb-2">
                  <input type="email" placeholder="이메일 주소 입력" className="bg-transparent border-none px-0 py-3 flex-1 text-sm outline-none placeholder:text-gray-400 font-medium" />
                  <button className="text-black px-4 py-3 text-[10px] font-black tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">구독하기</button>
               </div>
            </div>
            {/* Small Compact Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
               <div className="relative w-full max-w-xs aspect-square overflow-hidden">
                  <img src="https://picsum.photos/seed/newsletter-ai/1200/800" alt="Newsletter" className="h-full w-full object-cover grayscale mix-blend-multiply opacity-50" />
               </div>
            </div>
         </div>
      </section>

    </section>
  );
};

export default KnowledgeHubPreview;
