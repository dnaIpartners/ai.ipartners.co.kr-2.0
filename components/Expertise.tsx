
import React from 'react';
import { SERVICES } from '../constants';

const Expertise: React.FC = () => {
  return (
    <div className="bg-[#111] text-white py-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
         <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
               Core <br/> Competence
            </h2>
            <p className="mt-8 md:mt-0 text-gray-400 max-w-sm text-right leading-relaxed font-light">
               We combine strategy, creativity, and technology to deliver comprehensive AI solutions.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
            {SERVICES.map((service, idx) => (
               <div key={service.id} className="bg-[#111] p-10 md:p-12 hover:bg-[#1a1a1a] transition-colors group h-full flex flex-col justify-between min-h-[300px]">
                  <div>
                     <span className="text-xs font-mono text-blue-500 mb-6 block">0{idx + 1}</span>
                     <h3 className="text-3xl font-black tracking-tighter uppercase mb-8 leading-none group-hover:translate-x-2 transition-transform">
                        {service.title}
                     </h3>
                  </div>
                  
                  <div>
                     <ul className="space-y-2 mb-8">
                        {service.subItems.map(item => (
                           <li key={item} className="text-sm text-gray-500 font-medium group-hover:text-gray-300 transition-colors">
                              - {item}
                           </li>
                        ))}
                     </ul>
                     <div className="w-full h-px bg-white/10 group-hover:bg-blue-600 transition-colors"></div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Expertise;
