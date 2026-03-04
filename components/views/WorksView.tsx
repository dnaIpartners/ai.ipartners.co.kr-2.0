
import React from 'react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

interface WorksViewProps {
  onProjectClick: (p: Project) => void;
}

const WorksView: React.FC<WorksViewProps> = ({ onProjectClick }) => {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex justify-between items-end">
          <h1 className="text-6xl md:text-[140px] font-black tracking-tighter uppercase leading-[0.85]">
            ALL <br />
            WORKS <span className="text-gray-200">©</span>
          </h1>
          <div className="text-right hidden md:block">
            <p className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase">Archive / 2020-2024</p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-black tracking-tighter leading-none">{project.title}</h3>
                  <span className="text-[10px] font-mono">[{project.id}]</span>
                </div>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksView;
