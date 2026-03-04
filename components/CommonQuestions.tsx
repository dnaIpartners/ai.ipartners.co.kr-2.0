
import React, { useState } from 'react';

const questions = [
  {
    question: "생성형 AI 도입, 어디서부터 시작해야 하나요?",
    answer: "기업의 현재 데이터 인프라와 비즈니스 니즈를 정밀하게 분석하는 것에서 시작합니다. ROI(투자 수익률)를 극대화할 수 있는 핵심 영역을 식별하고, PoC 모델 개발부터 실제 서비스 파이프라인 구축까지 단계별 AX 로드맵을 제안해 드립니다."
  },
  {
    question: "프롬프트 엔지니어링 서비스의 구체적인 범위는?",
    answer: "프롬프트 엔지니어링은 '맥락 설계' 기술입니다. LLM이 브랜드의 톤앤매너를 학습하고 할루시네이션 없이 정확한 답변을 내놓도록 제약 조건과 예시 데이터를 구조화하여, 일관된 품질의 고도화된 AI 결과물을 제공합니다."
  },
  {
    question: "기업 내부 데이터를 보안 문제 없이 활용할 수 있나요?",
    answer: "보안은 최우선 과제입니다. Private Cloud 환경이나 On-Premise 구축을 지원하며, RAG(검색 증강 생성) 아키텍처를 통해 기업 내부의 보안 문서만을 참조하여 답변하도록 설계합니다. PII 마스킹 기술로 데이터 프라이버시를 철저히 보호합니다."
  },
  {
    question: "기존 운영 중인 웹사이트나 앱에도 AI 기능을 붙일 수 있나요?",
    answer: "가능합니다. 기존 레거시 시스템을 전면 개편하지 않고도, API 기반의 마이크로서비스 형태로 AI 모듈을 유연하게 연동할 수 있습니다. 챗봇, 추천, 콘텐츠 생성 등 다양한 기능을 플러그인 형태로 추가하여 AX를 즉각적으로 혁신합니다."
  },
  {
    question: "AI 프로젝트 구축 기간은 통상적으로 얼마나 소요되나요?",
    answer: "프로젝트의 복잡도에 따라 다릅니다. 기본적인 API 연동 및 MVP 개발은 약 2~4주, 기업 맞춤형 모델 파인튜닝 및 대규모 데이터 파이프라인 구축을 포함한 전체 플랫폼 개발은 통상적으로 3개월에서 6개월 정도 소요됩니다."
  }
];

const CommonQuestions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-12 md:pt-16 pb-24 md:pb-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
           
           {/* Left Column: Header */}
           <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-4">
                 <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                 <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">FAQ</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-8">
                 Common <br/> Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed break-keep max-w-md">
                 AI 도입의 복잡성으로 인해 고민이 많으신가요? <br className="hidden lg:block"/>
                 자주 묻는 핵심 질문들을 확인해보세요.
              </p>
           </div>

           {/* Right Column: Questions List (Single Column) */}
           <div className="lg:col-span-7 w-full">
              <div className="flex flex-col border-t border-gray-200">
                 {questions.map((item, idx) => (
                    <div key={idx} className="group border-b border-gray-200">
                       <button 
                         onClick={() => toggleQuestion(idx)}
                         className="w-full py-8 md:py-10 flex justify-between items-start text-left hover:text-blue-600 transition-colors"
                       >
                          <div className="flex gap-5 md:gap-8 pr-6">
                             <span className="text-sm font-mono text-gray-300 group-hover:text-blue-600 transition-colors mt-2 min-w-[20px]">0{idx + 1}</span>
                             <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight word-keep-all break-keep">
                                {item.question}
                             </span>
                          </div>
                          <span className={`text-3xl font-light text-gray-300 group-hover:text-blue-600 transform transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-45' : ''}`}>
                             +
                          </span>
                       </button>
                       <div 
                         className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}
                       >
                          <div className="pl-12 md:pl-16 pr-4 md:pr-12">
                             <p className="text-lg text-gray-600 font-light leading-relaxed word-keep-all break-keep">
                                {item.answer}
                             </p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
