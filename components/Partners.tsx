
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-white border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Trusted <br/> Partners
           </h2>
           <p className="text-sm font-bold uppercase tracking-widest text-gray-400 max-w-md text-right mt-8 md:mt-0">
              Collaborating with industry leaders to define the standard of AI Experience.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {PARTNERS.map((partner) => (
            <div 
              key={partner.name}
              className="bg-white aspect-[3/2] flex items-center justify-center p-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:z-10 relative hover:shadow-xl"
            >
              <span className="text-lg md:text-xl font-black tracking-tighter text-gray-800 uppercase text-center">
                {partner.name}
              </span>
            </div>
          ))}
          
          <div className="bg-[#f8f8f8] aspect-[3/2] flex flex-col items-center justify-center p-8 text-center gap-4 hover:bg-black hover:text-white transition-colors cursor-pointer group">
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white/60">Your Brand</span>
             <span className="text-xl font-black uppercase tracking-tight">Become a Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
