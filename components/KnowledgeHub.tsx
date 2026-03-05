import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const aiKeywords = [
  "UI Prompt", "Prompt Eng.", "UX Prompt", "Fine-tuning", "Data Pipeline",
  "UX/UI AI", "Machine Learning", "i-PIE", "IPARTNERS",
  "AI Agents", "Knowledge Graph", "Vector DB", "Generative AI",
  "근식", "Deep Learning"
];

export default function KnowledgeHub() {
  // Generate floating prompt documents
  const documents = Array.from({ length: 45 }).map((_, i) => {
    // Start from a much wider area (outside the container)
    const startY = -30 - Math.random() * 40; // -30% to -70%
    const startX = -50 + Math.random() * 200; // -50% to 150%
    
    // Midpoint to create a curved path towards the center
    const midY = 10 + Math.random() * 40; // 10% to 50%
    const midX = 20 + Math.random() * 60; // 20% to 80%
    
    return {
      id: i,
      startY: `${startY}%`,
      startX: `${startX}%`,
      midY: `${midY}%`,
      midX: `${midX}%`,
      delay: Math.random() * 8, // Spread out the start times
      duration: 4.8 + Math.random() * 4.8, // 4.8 to 9.6 seconds (20% slower)
      scale: 0.5 + Math.random() * 0.4,
      startRotate: (Math.random() - 0.5) * 120, // More rotation
      text: aiKeywords[i % aiKeywords.length]
    };
  });

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-16">
          
          {/* Top Content */}
          <div className="w-full max-w-[980px] z-20 text-center flex flex-col items-center">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">KNOWLEDGE</h3>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase text-center break-keep"
            > 
              프로젝트 경험과 AI 활용 노하우.<br className="hidden md:block" />
              디지털 자산으로 완성<br className="hidden md:block" />
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-10 break-keep max-w-2xl"
            >
              아이파트너즈의 모든 산출물과 인사이트가 축적되는 i-PIE Knowledge Hub. <br className="hidden md:block" />언제 어디서나 필요한 지식을 빠르게 탐색하고 활용하세요.
            </motion.p>
          </div>

          {/* Bottom Content - Folder Animation Area */}
          <div className="w-full max-w-4xl relative h-[400px] md:h-[500px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full h-full flex items-center justify-center relative"
            >
              {/* Background Glow */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 rounded-full bg-[#0033FF]/10 blur-3xl"
              />

              {/* Floating Prompt Documents */}
              {documents.map((doc) => (
                <motion.div
                  key={doc.id}
                  initial={{ top: doc.startY, left: doc.startX, x: "-50%", opacity: 0, scale: doc.scale, rotate: doc.startRotate }}
                  animate={{ 
                    top: [doc.startY, doc.midY, '75%'], 
                    left: [doc.startX, doc.midX, '50%'],
                    x: ["-50%", "-50%", "-50%"],
                    opacity: [0, 1, 1, 0],
                    scale: [doc.scale, doc.scale, doc.scale * 0.2],
                    rotate: [doc.startRotate, doc.startRotate / 2, 0]
                  }}
                  transition={{ 
                    duration: doc.duration, 
                    repeat: Infinity, 
                    delay: doc.delay, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                  className="absolute w-24 h-16 bg-white rounded-md shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col z-10 overflow-hidden"
                >
                  <div className="h-4 bg-gray-50 border-b border-gray-100 flex items-center px-1.5 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0033FF]/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center bg-white/50 backdrop-blur-sm px-1 text-center">
                    <span className="text-[9px] font-bold text-gray-600 leading-tight">{doc.text}</span>
                  </div>
                </motion.div>
              ))}

              {/* Main Folder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50, x: "-50%" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="absolute bottom-8 left-1/2 md:bottom-12 z-20"
              >
                <div className="relative w-[260px] h-[180px] md:w-[300px] md:h-[200px]">
                  {/* Folder Back Tab */}
                  <div className="absolute top-0 left-0 w-1/3 h-10 bg-gray-100 border-t border-l border-r border-gray-200 rounded-t-xl"></div>
                  
                  {/* Folder Back Body */}
                  <div className="absolute top-8 left-0 right-0 bottom-0 bg-gray-50 border border-gray-200 rounded-xl shadow-inner"></div>
                  
                  {/* Inner Papers (Data Sheets) */}
                  <div className="absolute top-4 left-4 right-4 bottom-10 bg-white rounded-t-xl shadow-sm border border-gray-100 flex flex-col gap-2 p-4">
                     <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                     <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
                     <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="absolute top-8 left-8 right-8 bottom-10 bg-gray-50 rounded-t-xl shadow-sm border border-gray-200"></div>
                  
                  {/* Folder Front Body (Glassmorphism) */}
                  <div className="absolute top-16 left-0 right-0 bottom-0 bg-white/80 backdrop-blur-md rounded-xl shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border border-white flex items-end justify-between p-5">
                    
                    {/* Tech Clasp / Indicator (Replaces Zipper) */}
                    <div className="absolute top-4 bottom-4 left-6 w-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                       <motion.div 
                         animate={{ y: ['-100%', '300%'] }}
                         transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                         className="w-full h-1/3 bg-[#0033FF] shadow-[0_0_8px_rgba(0,51,255,0.8)] rounded-full"
                       />
                    </div>

                    {/* Label */}
                    <a 
                      href="https://ai.ipartners.co.kr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-8 bg-white/90 px-3 py-1.5 rounded-md border border-gray-100 shadow-sm text-[#0033FF] font-bold text-xs md:text-sm tracking-wide hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      ai.ipartners.co.kr
                    </a>
                  </div>

                  {/* Floating Badge */}
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100 z-30"
                  >
                    <span className="text-[#0033FF] font-black text-xl md:text-2xl">AI</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
