import React from 'react';

const DigitalAssetSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white text-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
            IPARTNERS DX
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          프로젝트 경험과 AI 활용 노하우.<br />
          디지털 자산으로 완성
        </h2>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-20">
          다양한 산업 분야의 프로젝트 수행 경험과 최신 AI 기술을 결합하여,<br />
          고객의 비즈니스 가치를 극대화하는 디지털 자산을 구축합니다.
        </p>

        {/* Graphic Area */}
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
          
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center z-20">
            <div className="w-16 h-2 bg-blue-600 rounded-full mb-4"></div>
            <div className="w-24 h-2 bg-gray-200 rounded-full mb-2"></div>
            <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
            <div className="absolute -bottom-4 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md">
              IPARTNERS AI
            </div>
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-20">
            <path d="M50% 50% L30% 20%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50% 50% L70% 30%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50% 50% L20% 60%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50% 50% L80% 70%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50% 50% L40% 80%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Floating Nodes */}
          <div className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 text-[10px] font-bold text-gray-600 animate-[float_4s_ease-in-out_infinite]">
            Data Analysis
          </div>
          <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 text-[10px] font-bold text-gray-600 animate-[float_5s_ease-in-out_infinite_1s]">
            UX/UI Design
          </div>
          <div className="absolute top-[60%] left-[20%] -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 text-[10px] font-bold text-gray-600 animate-[float_6s_ease-in-out_infinite_2s]">
            AI Modeling
          </div>
          <div className="absolute top-[70%] left-[80%] -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 text-[10px] font-bold text-gray-600 animate-[float_4.5s_ease-in-out_infinite_0.5s]">
            Cloud Architecture
          </div>
          <div className="absolute top-[80%] left-[40%] -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 text-[10px] font-bold text-gray-600 animate-[float_5.5s_ease-in-out_infinite_1.5s]">
            Service Operation
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
          100% { transform: translate(-50%, -50%) translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default DigitalAssetSection;
