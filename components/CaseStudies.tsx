
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface CaseStudiesProps {
  onProjectClick: (project: Project) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onProjectClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white relative pt-24 md:pt-32">
      {/* Mobile Header (Visible only on small screens) */}
      <div className="md:hidden px-6 pb-12">
        <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">
             Works<span className="text-blue-600">.</span>
        </h2>
      </div>

      <div className="w-full grid md:grid-cols-2 min-h-screen">
         
         {/* --- LEFT COLUMN: Accordion List --- */}
         <div className="flex flex-col justify-center px-6 md:px-16 py-10 md:py-20 z-10 bg-white order-2 md:order-1">
            <div className="hidden md:block mb-24">
               <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
                  Works<span className="text-blue-600">.</span>
               </h2>
               <p className="mt-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                  Selected Projects (2023-2024)
               </p>
            </div>

            <div className="flex flex-col">
               {PROJECTS.map((project, idx) => (
                  <div 
                    key={project.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`group border-t border-gray-200 py-8 md:py-12 cursor-pointer transition-all duration-500 ${idx === PROJECTS.length - 1 ? 'border-b' : ''}`}
                  >
                     <div 
                        className="flex items-baseline justify-between mb-4"
                        onClick={() => onProjectClick(project)}
                     >
                        <div className="flex items-baseline gap-4 md:gap-8">
                           <span className={`text-xs md:text-sm font-mono transition-colors duration-300 ${activeIndex === idx ? 'text-blue-600' : 'text-gray-300'}`}>
                              {project.id}
                           </span>
                           <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tight transition-colors duration-300 ${activeIndex === idx ? 'text-black' : 'text-gray-300 group-hover:text-gray-500'}`}>
                              {project.title}
                           </h3>
                        </div>
                        
                        {/* Mobile Arrow */}
                        <span className={`md:hidden text-2xl transition-transform duration-300 ${activeIndex === idx ? 'rotate-90 text-blue-600' : 'text-gray-300'}`}>
                           →
                        </span>
                     </div>

                     {/* Accordion Content */}
                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-[3rem] md:pl-[4.5rem] grid md:grid-cols-12 gap-4">
                           <div className="md:col-span-8">
                              <p className="text-sm md:text-lg text-gray-600 font-light leading-relaxed mb-6 line-clamp-2">
                                 {project.description}
                              </p>
                              <div className="flex items-center gap-4">
                                 <span className="text-[10px] font-bold tracking-widest uppercase bg-gray-100 px-2 py-1 text-gray-500">
                                    {project.category}
                                 </span>
                                 <button 
                                    onClick={(e) => {
                                       e.stopPropagation();
                                       onProjectClick(project);
                                    }}
                                    className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-blue-600 transition-colors flex items-center gap-2"
                                 >
                                    View Case <span className="text-lg leading-none">↗</span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     {/* Mobile Image (Visible inside accordion on mobile) */}
                     <div className={`md:hidden overflow-hidden transition-all duration-500 ${activeIndex === idx ? 'max-h-[300px] mt-6' : 'max-h-0'}`}>
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* --- RIGHT COLUMN: Sticky Image Display --- */}
         <div className="hidden md:block relative h-screen sticky top-0 bg-gray-100 overflow-hidden order-1 md:order-2 border-l border-gray-100">
            {PROJECTS.map((project, idx) => (
               <div 
                  key={project.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                     activeIndex === idx 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-110 z-0'
                  }`}
               >
                  <img 
                     src={project.imageUrl} 
                     alt={project.title} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-700"></div>
                  
                  {/* Floating Info on Image */}
                  <div className={`absolute bottom-12 left-12 text-white transition-all duration-700 delay-100 ${activeIndex === idx ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-2 text-blue-400">Client</span>
                     <span className="text-2xl font-black uppercase tracking-tight">{project.client}</span>
                  </div>
               </div>
            ))}

            {/* Default State / Background (Optional) */}
            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center -z-10">
               <span className="text-gray-200 font-black text-9xl uppercase tracking-tighter opacity-20">Works</span>
            </div>
         </div>

      </div>
    </section>
  );
};

export default CaseStudies;
