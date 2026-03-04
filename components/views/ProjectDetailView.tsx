
import React from 'react';
import { Project } from '../../types';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
  backLabel?: string;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack, backLabel = "BACK TO WORKS" }) => {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <button 
              onClick={onBack}
              className="mb-8 md:mb-12 text-[10px] font-black tracking-[0.3em] uppercase hover:underline flex items-center gap-4"
            >
              ← {backLabel}
            </button>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block text-white/60">[{project.category}]</span>
            <h1 className="text-4xl md:text-6xl lg:text-[120px] font-black tracking-tighter uppercase leading-none mb-4 md:mb-8 break-words">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-40">
        <div className="grid md:grid-cols-12 gap-12 mb-24 md:mb-32">
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-4">Client</h4>
              <p className="text-lg md:text-xl font-bold uppercase">{project.client}</p>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-4">Category</h4>
              <p className="text-lg md:text-xl font-bold uppercase">{project.category}</p>
            </div>
            <div>
              <h4 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-4">Year</h4>
              <p className="text-lg md:text-xl font-bold uppercase">2023</p>
            </div>
          </div>
          <div className="md:col-span-8">
             <h2 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-8">Overview</h2>
             <p className="text-2xl md:text-5xl font-medium tracking-tighter leading-[1.2] md:leading-[1.1] mb-8 md:mb-12">
               {project.description}
             </p>
             <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
               이 프로젝트는 {project.client}의 디지털 브랜드 경험을 혁신하기 위해 진행되었습니다. 사용자 경험의 본질에 집중하여 브랜드가 전달하고자 하는 가치를 시각적으로 극대화하고, 기술적 안정성을 확보하는 데 중점을 두었습니다.
             </p>
          </div>
        </div>

        <div className="grid gap-8 mb-24 md:mb-32">
          <img src={`https://picsum.photos/seed/${project.id}-1/1600/900`} className="w-full grayscale" alt="detail 1" />
          <div className="grid md:grid-cols-2 gap-8">
            <img src={`https://picsum.photos/seed/${project.id}-2/800/800`} className="w-full grayscale" alt="detail 2" />
            <img src={`https://picsum.photos/seed/${project.id}-3/800/800`} className="w-full grayscale" alt="detail 3" />
          </div>
        </div>

        <div className="text-center py-12 md:py-20 border-t border-gray-100">
          <button 
            onClick={onBack}
            className="text-3xl md:text-6xl font-black tracking-tighter uppercase hover:text-gray-400 transition-colors"
          >
            NEXT PROJECT →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
