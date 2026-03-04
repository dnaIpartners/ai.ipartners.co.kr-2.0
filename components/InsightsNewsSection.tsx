import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface InsightsNewsSectionProps {
  onNavigate: (page: string) => void;
}

const articles = [
  {
    id: 1,
    category: 'INSIGHT',
    date: '2026.03.04',
    title: '2026 디지털 트렌드 리포트: AI 에이전트의 진화',
    excerpt: '생성형 AI를 넘어 자율적으로 작업을 수행하는 AI 에이전트가 가져올 비즈니스 환경의 변화와 대응 전략을 분석합니다.',
  },
  {
    id: 2,
    category: 'NEWS',
    date: '2026.02.18',
    title: '아이파트너즈, 자체 AI 플랫폼 \'i-PIE\' 고도화 완료',
    excerpt: '프로젝트 산출물과 인사이트를 통합 관리하고 AI로 검색/활용할 수 있는 i-PIE 플랫폼의 2.0 업데이트가 완료되었습니다.',
  },
  {
    id: 3,
    category: 'INSIGHT',
    date: '2026.01.25',
    title: 'UX/UI 디자인에서의 생성형 AI 활용 가이드',
    excerpt: '디자인 리서치부터 프로토타이핑까지, 실무 디자이너들이 즉시 활용할 수 있는 단계별 AI 프롬프트와 팁을 소개합니다.',
  }
];

export default function InsightsNewsSection({ onNavigate }: InsightsNewsSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="relative flex flex-col items-center text-center mb-16">
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Insights & News</h3>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 md:mb-0">
            최신 인사이트와<br className="hidden md:block" /> 아이파트너즈 소식
          </h2>
          <div className="md:absolute md:right-0 md:bottom-2">
            <button 
              onClick={() => onNavigate('insights-news')}
              className="flex items-center gap-2 text-sm font-bold hover:text-blue-600 transition-colors group pb-2 w-fit"
            >
              VIEW ALL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Article List */}
        <div className="border-t-2 border-black">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => onNavigate('insights-news')}
                className="w-full text-left group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b border-gray-200 hover:bg-white transition-colors px-4 -mx-4 md:px-6 md:-mx-6 rounded-xl"
              >
                {/* Meta Info */}
                <div className="w-full md:w-48 flex-shrink-0 flex flex-row md:flex-col gap-4 md:gap-1">
                  <span className="text-xs font-bold text-blue-600 tracking-widest">{article.category}</span>
                  <span className="text-sm text-gray-500 font-mono">{article.date}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors break-keep">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base line-clamp-2 break-keep">
                    {article.excerpt}
                  </p>
                </div>

                {/* Action Icon */}
                <div className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
