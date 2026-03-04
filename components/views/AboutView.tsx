
import React, { useRef } from 'react';
import WebGLBackground from '../WebGLBackground';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const AnimatedChar = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const color = useTransform(progress, range, ["#001641", "#FFFFFF"]);
  return (
    <motion.span style={{ color }}>
      {char}
    </motion.span>
  );
};

const capabilities = [
  {
    id: '01',
    title: 'AI Transformation',
    description: '기업의 비즈니스 모델과 내부 프로세스에 최신 AI 기술을 완벽히 내재화합니다. 비효율적인 반복 작업을 제거하고, 지능형 워크플로우를 구축하여 압도적인 생산성 향상과 비즈니스 혁신을 이끌어냅니다.',
    services: ['AI 도입 컨설팅', '지능형 워크플로우 구축', '업무 자동화 (RPA)', 'AI 기반 서비스 기획']
  }
];

// Reusable trendy AI diagram component
const AITrendyDiagram = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,51,255,0.15)_0%,transparent_60%)] blur-2xl pointer-events-none"></div>

      <svg viewBox="0 0 400 400" className="w-full h-full text-white/30 overflow-visible">
        {/* Grid background */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          </pattern>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0033FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />

        {/* Connecting Lines */}
        <motion.path
          d="M 200 200 L 100 100 M 200 200 L 320 120 M 200 200 L 280 300 M 200 200 L 80 280 M 100 100 L 320 120 M 320 120 L 280 300 M 280 300 L 80 280 M 80 280 L 100 100"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Orbiting dashed circle */}
        <motion.circle
          cx="200" cy="200" r="140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 12"
          initial={{ rotate: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ rotate: 360 }}
          viewport={{ once: false }}
          transition={{ 
            opacity: { duration: 2 },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" }
          }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Nodes */}
        {[
          { cx: 200, cy: 200, r: 8, delay: 0 }, // Center
          { cx: 100, cy: 100, r: 5, delay: 0.5 },
          { cx: 320, cy: 120, r: 6, delay: 0.7 },
          { cx: 280, cy: 300, r: 5, delay: 0.9 },
          { cx: 80, cy: 280, r: 6, delay: 1.1 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx} cy={node.cy} r={node.r}
            fill={i === 0 ? "#0033FF" : "white"}
            className={i === 0 ? "drop-shadow-[0_0_15px_rgba(0,51,255,0.8)]" : "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: node.delay, type: "spring" }}
          />
        ))}

        {/* Data particles moving along lines */}
        <circle r="2" fill="#0033FF" className="drop-shadow-[0_0_5px_#0033FF]">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 100 100 L 200 200" />
        </circle>
        <circle r="2" fill="#0033FF" className="drop-shadow-[0_0_5px_#0033FF]">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 320 120 L 200 200" />
        </circle>
        <circle r="2" fill="#0033FF" className="drop-shadow-[0_0_5px_#0033FF]">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 280 300 L 200 200" />
        </circle>
        <circle r="2" fill="#0033FF" className="drop-shadow-[0_0_5px_#0033FF]">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 80 280 L 200 200" />
        </circle>
      </svg>

      {/* Floating Glassmorphic Labels */}
      <FloatingLabel text="Data Processing" top="15%" left="5%" delay={1} />
      <FloatingLabel text="Machine Learning" top="20%" right="0%" delay={1.2} />
      <FloatingLabel text="Automation" bottom="15%" right="10%" delay={1.4} />
      <FloatingLabel text="Insight" bottom="20%" left="0%" delay={1.6} />
    </div>
  );
};

const FloatingLabel = ({ text, top, left, right, bottom, delay }: { text: string, top?: string, left?: string, right?: string, bottom?: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay }}
    className="absolute px-3 py-1.5 rounded-md border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono text-white/80 tracking-wider"
    style={{ top, left, right, bottom }}
  >
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#0033FF] animate-pulse"></div>
      {text}
    </div>
  </motion.div>
);

const AboutView: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 50%"]
  });

  const text1 = "아이파트너즈의 AX는 사람을 줄이지 않고 키웁니다. ";
  const text2 = "전 구성원을 '비즈니스 아키텍트'로 성장시켜 흔들림 없는 최상의 프로젝트 품질을 완성합니다.";
  const totalChars = text1.length + text2.length;

  return (
    <div className="bg-transparent min-h-screen relative overflow-x-hidden font-sans text-white">
      
      {/* Global Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-10"></div>

      {/* WebGL Scroll Reactive Background */}
      <WebGLBackground />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.2] mb-8 text-white break-keep">
              AI는 사람을 대신하는 것이 아니라,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">역량을 한 단계 위로</span><br />
              끌어올리는 것입니다.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium tracking-tight max-w-3xl break-keep leading-relaxed">
              1년차가 5년차의 시야를 갖고, 5년차가 10년차의 깊이를 갖습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO TEXT SECTION --- */}
      <section className="py-32 md:py-48 bg-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#00A3FF] uppercase mb-12">Our Mission</h3>
            <h2 ref={textRef} className="text-[22px] md:text-[43px] lg:text-[64px] font-bold mb-12 leading-[1.3] tracking-tight break-keep text-gray-400"> 
              <span>
                {text1.split('').map((char, i) => {
                  const start = i / totalChars;
                  const end = start + (1 / totalChars);
                  return <AnimatedChar key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
                })}
              </span>
              <br className="hidden md:block" />
              {text2.split('').map((char, i) => {
                const start = (text1.length + i) / totalChars;
                const end = start + (1 / totalChars);
                return <AnimatedChar key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
              })}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-7xl break-keep leading-relaxed font-light">        
             지능형 워크플로우 안에서는 실무진의 경력 한계가 사라집니다. 주니어 컨설턴트는 AI의 방대한 데이터 분석력을 활용해 단숨에 시니어급의 거시적인 프로젝트 시야를 확보합니다. 소모적인 반복 작업에서 해방된 시니어 컨설턴트는 고객사의 비즈니스 맥락을 깊이 있게 해석하고 차별화된 전략 수립에 온전히 집중하여, 실질적인 비즈니스 성과와 프로젝트 업무 품질의 비약적인 향상을 이끌어냅니다.
            </p>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION (Dark Theme with Diagrams) --- */}
      <section className="bg-black/60 backdrop-blur-md text-white relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-32">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#0033FF] uppercase mb-4">Business Areas</h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Capabilities</h2>
          </div>

          <div className="flex flex-col space-y-48">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={cap.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
              >
                {/* Left: Animated Diagram */}
                <div className="w-full lg:w-1/2">
                  <AITrendyDiagram />
                </div>

                {/* Right: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
                  {/* Subtle warm glow behind text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08)_0%,transparent_60%)] pointer-events-none -z-10 blur-3xl"></div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                    {cap.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed break-keep text-lg md:text-xl mb-10 font-light">
                    {cap.description}
                  </p>
                  
                  {/* Pills/Tags */}
                  <div className="flex flex-wrap gap-3">
                    {cap.services.map((service, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-5 py-2.5 rounded-full border border-white/20 text-sm text-gray-300 font-medium tracking-wide bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-colors"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 bg-black/80 backdrop-blur-md relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">Innovate?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              아이파트너즈와 함께 새로운 디지털 경험을 만들어갈 준비가 되셨나요? 지금 바로 문의해주세요.
            </p>
            <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide hover:bg-[#0033FF] hover:text-white transition-colors duration-300 group">
              CONTACT US
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutView;
