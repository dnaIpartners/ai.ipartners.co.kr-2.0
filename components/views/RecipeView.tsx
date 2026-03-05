import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, ShieldCheck, Rocket } from 'lucide-react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  Edge,
  Node
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const phases = [
  {
    id: '01',
    title: 'Strategy & Analysis',
    subtitle: 'AI-Driven Insights',
    description: 'Analyzes market data and user behavior to define target audiences and project roadmap.',
    icon: Lightbulb,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    lineColor: 'border-cyan-500/50',
    glow: 'rgba(34, 211, 238, 0.5)',
    hexColor: '#22d3ee',
    tag: 'Blueprint Generated',
    lineLabel: 'Strategic Data',
    tasks: ['Market Research', 'User Personas', 'Feature Mapping']
  },
  {
    id: '02',
    title: 'UX/UI Design',
    subtitle: 'Generative Interface',
    description: 'Crafts adaptive interfaces using generative design principles for personalized experiences.',
    icon: PenTool,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    lineColor: 'border-purple-500/50',
    glow: 'rgba(168, 85, 247, 0.5)',
    hexColor: '#c084fc',
    tag: 'Figma Synced',
    lineLabel: 'Design Specs',
    tasks: ['Wireframing', 'Design System', 'Prototyping']
  },
  {
    id: '03',
    title: 'Development',
    subtitle: 'AI-Assisted Coding',
    description: 'Accelerated development cycles utilizing AI coding assistants and intelligent agents.',
    icon: Code2,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    lineColor: 'border-emerald-500/50',
    glow: 'rgba(16, 185, 129, 0.5)',
    hexColor: '#34d399',
    tag: 'Code Deployed',
    lineLabel: 'Compiled Assets',
    tasks: ['Frontend Build', 'API Integration', 'Database Setup']
  },
  {
    id: '04',
    title: 'Quality Assurance',
    subtitle: 'Automated Testing',
    description: 'Rigorous quality assurance powered by automated AI testing scripts and edge case identification.',
    icon: ShieldCheck,
    color: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    lineColor: 'border-orange-500/50',
    glow: 'rgba(249, 115, 22, 0.5)',
    hexColor: '#fb923c',
    tag: '0 Bugs Found',
    lineLabel: 'Test Reports',
    tasks: ['Unit Testing', 'E2E Testing', 'Performance Audit']
  },
  {
    id: '05',
    title: 'Launch & Scale',
    subtitle: 'Predictive Monitoring',
    description: 'Smooth deployment with AI-driven predictive scaling and continuous monitoring.',
    icon: Rocket,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/30',
    lineColor: 'border-rose-500/50',
    glow: 'rgba(244, 63, 94, 0.5)',
    hexColor: '#fb7185',
    tag: 'System Live',
    lineLabel: 'Live Traffic',
    tasks: ['CI/CD Pipeline', 'Cloud Hosting', 'Analytics Setup']
  }
];

// Custom Node Component
const RecipeNode = ({ data }: { data: { phase: typeof phases[0] } }) => {
  const { phase } = data;
  const Icon = phase.icon;
  
  return (
    <div className={`w-[630px] bg-[#0B0C10] border-2 ${phase.borderColor} rounded-2xl shadow-2xl overflow-hidden group hover:border-opacity-100 transition-colors duration-500`}>
      <Handle type="target" position={Position.Top} className="w-4 h-4 bg-[#0a0a0a] border-2 border-gray-500" />
      
      {/* Card Header (Terminal Style) */}
      <div className={`px-7 py-5 border-b-2 ${phase.borderColor} bg-white/[0.02] flex items-center justify-between`}>
        <div className="flex items-center gap-5">
          <Icon className={`w-7 h-7 ${phase.color}`} />
          <span className="text-lg font-mono text-gray-300 tracking-wider font-semibold">{phase.title}</span>
        </div>
        <span className={`text-xs font-mono px-3 py-1 rounded bg-white/5 ${phase.color} border ${phase.borderColor}`}>
          {phase.tag}
        </span>
      </div>
      
      {/* Card Body */}
      <div className="p-9 md:p-10">
        <h4 className={`text-2xl font-bold mb-4 text-white group-hover:${phase.color} transition-colors duration-300`}>{phase.subtitle}</h4>
        <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">{phase.description}</p>
        
        {/* Terminal/Tasks Block */}
        <div className="bg-[#050505] border border-white/5 rounded-xl p-7 font-mono text-base space-y-4 relative overflow-hidden">
          {/* Subtle background glow in terminal */}
          <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at top right, ${phase.glow}, transparent 70%)` }} />
          
          {phase.tasks.map((task, i) => (
            <div key={i} className="flex items-start gap-4 relative z-10 group/task">
              <span className={`${phase.color} opacity-80 mt-1`}>$</span>
              <span className="text-gray-300 group-hover/task:text-white transition-colors">{task}</span>
            </div>
          ))}
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="w-4 h-4 bg-[#0a0a0a] border-2 border-gray-500" />
    </div>
  );
};

const nodeTypes = {
  recipeNode: RecipeNode,
};

const initialNodes: Node[] = phases.map((phase, index) => {
  const isEven = index % 2 === 0;
  return {
    id: phase.id,
    type: 'recipeNode',
    position: { 
      x: isEven ? 50 : 650, 
      y: index * 600 
    },
    data: { phase },
  };
});

const initialEdges: Edge[] = phases.slice(0, -1).map((phase, index) => {
  return {
    id: `e${phase.id}-${phases[index + 1].id}`,
    source: phase.id,
    target: phases[index + 1].id,
    type: 'smoothstep',
    animated: true,
    label: phase.lineLabel,
    style: { stroke: phase.hexColor, strokeWidth: 2, strokeDasharray: '5 5' },
    labelStyle: { fill: phase.hexColor, fontWeight: 700, fontSize: 27, fontFamily: 'monospace', letterSpacing: '0.05em' },
    labelBgStyle: { fill: '#0a0a0a', stroke: phase.hexColor, strokeWidth: 2, fillOpacity: 1 },
    labelBgPadding: [14, 7],
    labelBgBorderRadius: 7,
  };
});

const RecipeView: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative font-sans pt-32 flex flex-col">
      {/* Deep Space / Tech Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(34,211,238,0.03)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(168,85,247,0.03)_0%,transparent_70%)]"></div>
        <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 backdrop-blur-md mb-8 font-mono text-xs text-gray-400"
          >
            <span className="text-[#00A3FF]">~</span>
            <span>/architecture/sop-matrix.sh</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-white"
          >
            Website Construction <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">on Autopilot.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Collection, detection, generation - automated. <br className="hidden md:block" />
            Drag and reorganize the nodes below to explore our architecture.
          </motion.p>
        </div>
      </div>

      {/* React Flow Canvas */}
      <div className="flex-grow w-full relative z-20" style={{ height: '1600px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          minZoom={0.2}
          maxZoom={1.5}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          className="bg-transparent"
          colorMode="dark"
        >
          <Background color="#333" gap={20} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default RecipeView;
