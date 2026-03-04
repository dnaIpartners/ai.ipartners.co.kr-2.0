
import React, { useState } from 'react';
import { getAIResponse } from '../geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [history, setHistory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    
    // Pass current input and previous history to the service
    const result = await getAIResponse(input, history);
    const aiText = result || "죄송합니다, 답변을 생성할 수 없습니다.";
    
    setResponse(aiText);
    
    // Update history for the next turn
    setHistory(prev => `${prev}\nUser: ${input}\nAI: ${aiText}`);
    
    // Clear input for next answer
    setInput('');
    setIsLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              READY TO DISCUSS <br />
              <span className="text-gray-500">YOUR NEXT PROJECT?</span>
            </h2>
            <p className="text-gray-400 font-light text-lg">
              IPARTNERS의 AI 비즈니스 어드바이저에게 당신의 비즈니스 고민을 물어보세요. 
              최적의 디지털 전략을 제안해 드립니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={response ? "답변을 입력해주세요..." : "어떤 비즈니스 영역의 디지털 전환이 필요하신가요?"}
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-white py-4 text-xl outline-none transition-all placeholder:text-white/20"
                autoFocus={!!response}
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-0 bottom-4 text-white hover:translate-x-2 transition-transform disabled:opacity-50"
              >
                {isLoading ? '...' : '↗'}
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-4 text-xs font-black tracking-widest uppercase text-white/40">
            <a href="mailto:project@ipartners.co.kr" className="hover:text-white transition-colors">PROJECT REQUEST → project@ipartners.co.kr</a>
            <a href="tel:+82220172513" className="hover:text-white transition-colors">T. +82-2-2017-2513</a>
          </div>
        </div>

        <div className="relative min-h-[400px] flex flex-col">
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          ) : response ? (
            <div className="flex-1 bg-white/5 p-8 rounded-sm backdrop-blur-lg border border-white/10 animate-fade-in flex flex-col justify-between">
              <div>
                <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 block">AI Consultant says:</span>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-200 whitespace-pre-line">
                  "{response}"
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[10px] tracking-[0.2em] font-black uppercase text-white/40">AI-STRATEGY-ADVISOR v1.0</p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-white/10 p-12 text-center group cursor-default">
              <p className="text-white/20 text-lg group-hover:text-white/40 transition-colors uppercase font-black">
                Awaiting your business inquiry...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
