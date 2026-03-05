
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import KnowledgeHub from './components/KnowledgeHub';
import InsightsNewsSection from './components/InsightsNewsSection';
import QuestionsAnswersSection from './components/QuestionsAnswersSection';
import Footer from './components/Footer';
import AboutView from './components/views/AboutView';
import WorksView from './components/views/WorksView';
import ProjectDetailView from './components/views/ProjectDetailView';
import KnowledgeBoardView, { BoardPost } from './components/views/KnowledgeBoardView';
import InsightsNewsView, { NewsPost } from './components/views/InsightsNewsView';
import RecipeView from './components/views/RecipeView';
import { Project } from './types';

type PageType = 'home' | 'about' | 'works' | 'project-detail' | 'prompt-library' | 'ai-training' | 'ui-ux-prompt' | 'all-services' | 'insights-news' | 'recipe' | 'operation-methodology' | 'building-methodology';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [previousPage, setPreviousPage] = useState<PageType>('home');
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: PageType, data?: Project) => {
    setIsTransitioning(true);
    
    // Capture the page we are leaving to use as 'previousPage' if navigating to a detail view
    const sourcePage = currentPage;

    setTimeout(() => {
      // If going to a detail page, remember where we came from.
      // Otherwise, keep the previousPage as is (or logic could be adjusted if needed).
      if (['project-detail'].includes(page)) {
        setPreviousPage(sourcePage);
      }

      setCurrentPage(page);
      
      // Handle data passing based on page type
      if (page === 'project-detail' && data) {
        setSelectedProject(data as Project);
      }

      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 600);
  };

  // Determine if the current page has a dark background to adjust Navbar color
  const isDarkPage = currentPage === 'project-detail' || currentPage === 'about' || currentPage === 'recipe' || currentPage === 'operation-methodology' || currentPage === 'building-methodology';

  // Helper to generate back button label based on previous page
  const getBackLabel = (page: PageType) => {
    switch(page) {
        case 'home': return 'BACK TO HOME';
        case 'works': return 'BACK TO WORKS';
        case 'about': return 'BACK TO TEAM';
        default: return 'BACK';
    }
  };

  const backLabel = getBackLabel(previousPage);

  // Mock Data for Knowledge Boards
  const promptLibraryPosts: BoardPost[] = [
    { id: '1', no: '05', title: 'Midjourney Prompts for Web Design', category: 'Design', date: '2023.10.15' },
    { id: '2', no: '04', title: 'ChatGPT System Prompts for Copywriting', category: 'Copywriting', date: '2023.09.28' },
    { id: '3', no: '03', title: 'Stable Diffusion Architectural Concepts', category: 'Architecture', date: '2023.09.12' },
    { id: '4', no: '02', title: 'Claude 2 Prompts for Code Review', category: 'Development', date: '2023.08.30' },
    { id: '5', no: '01', title: 'DALL-E 3 Logo Design Prompts', category: 'Branding', date: '2023.08.15' },
  ];

  const aiTrainingPosts: BoardPost[] = [
    { id: '1', no: '04', title: 'Fine-tuning LLaMA 2 on Custom Datasets', category: 'LLM', date: '2023.11.02' },
    { id: '2', no: '03', title: 'Preparing Image Datasets for LoRA', category: 'Vision', date: '2023.10.20' },
    { id: '3', no: '02', title: 'RAG Implementation Guide with LangChain', category: 'Engineering', date: '2023.10.05' },
    { id: '4', no: '01', title: 'Understanding Vector Databases', category: 'Database', date: '2023.09.18' },
  ];

  const uiUxPromptPosts: BoardPost[] = [
    { id: '1', no: '03', title: 'Generating User Personas with AI', category: 'Research', date: '2023.11.10' },
    { id: '2', no: '02', title: 'AI-Assisted Wireframing Prompts', category: 'Wireframing', date: '2023.10.25' },
    { id: '3', no: '01', title: 'Creating Design Systems with ChatGPT', category: 'Design System', date: '2023.10.01' },
  ];

  const allServicesPosts: BoardPost[] = [
    ...promptLibraryPosts,
    ...aiTrainingPosts,
    ...uiUxPromptPosts
  ].sort((a, b) => b.date.localeCompare(a.date))
   .map((post, index, array) => ({
     ...post,
     id: `all-${post.id}-${index}`,
     no: String(array.length - index).padStart(2, '0')
   }));

  // Mock Data for Insights & News
  const insightsNewsPosts: NewsPost[] = [
    {
      id: '1',
      title: 'The Evolution of Generative AI in Enterprise Architecture',
      excerpt: 'How leading organizations are moving beyond experimental AI projects to integrate large language models directly into their core business systems and workflows.',
      category: 'Insight',
      date: '2023.11.15',
      imageUrl: 'https://picsum.photos/seed/ai-architecture/1200/600',
      featured: true
    },
    {
      id: '2',
      title: 'IPARTNERS Launches New AI Platform',
      excerpt: 'Our new proprietary platform enables seamless integration of custom AI models for enterprise clients, reducing deployment time by 40%.',
      category: 'News',
      date: '2023.11.05',
      imageUrl: 'https://picsum.photos/seed/ai-platform/800/600'
    },
    {
      id: '3',
      title: 'Designing for AI: UX Principles for Chat Interfaces',
      excerpt: 'As conversational interfaces become ubiquitous, designers must adapt traditional UX principles to accommodate non-linear, unpredictable user journeys.',
      category: 'Design',
      date: '2023.10.28',
      imageUrl: 'https://picsum.photos/seed/ai-ux/800/600'
    },
    {
      id: '4',
      title: 'The Future of Prompt Engineering',
      excerpt: 'Will prompt engineering become obsolete as models get smarter? We explore the changing landscape of human-AI interaction.',
      category: 'Insight',
      date: '2023.10.12',
      imageUrl: 'https://picsum.photos/seed/prompt-future/800/600'
    },
    {
      id: '5',
      title: 'IPARTNERS Recognized as Top AI Consultancy',
      excerpt: 'Industry analysts have named IPARTNERS a leader in enterprise AI transformation for the second consecutive year.',
      category: 'News',
      date: '2023.09.30',
      imageUrl: 'https://picsum.photos/seed/award/800/600'
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white">
      {/* Page Transition Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[100] transition-transform duration-700 ease-in-out ${isTransitioning ? 'translate-y-0' : 'translate-y-full'}`}
      />

      {/* Background grain effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100" height="100" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar onNavigate={navigateTo} isDark={isDarkPage} />
      
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'home' && (
          <main>
            <Hero />
            <IntroSection />
            <KnowledgeHub />
            <InsightsNewsSection onNavigate={navigateTo} />
            <QuestionsAnswersSection />
          </main>
        )}

        {currentPage === 'about' && (
          <AboutView />
        )}
        
        {currentPage === 'works' && (
          <WorksView onProjectClick={(p) => navigateTo('project-detail', p)} />
        )}
        
        {currentPage === 'project-detail' && selectedProject && (
          <ProjectDetailView 
            project={selectedProject} 
            onBack={() => navigateTo(previousPage)} 
            backLabel={backLabel}
          />
        )}

        {currentPage === 'prompt-library' && (
          <KnowledgeBoardView 
            title="Prompt Library" 
            description="A curated collection of optimized prompts for various AI models, designed to enhance productivity and creativity."
            posts={promptLibraryPosts}
          />
        )}

        {currentPage === 'ai-training' && (
          <KnowledgeBoardView 
            title="AI Training" 
            description="Resources, guides, and best practices for training, fine-tuning, and implementing AI models in production environments."
            posts={aiTrainingPosts}
          />
        )}

        {currentPage === 'ui-ux-prompt' && (
          <KnowledgeBoardView 
            title="UI/UX Prompt" 
            description="Specialized prompts and workflows crafted specifically for UI/UX designers to accelerate the design process."
            posts={uiUxPromptPosts}
          />
        )}

        {currentPage === 'all-services' && (
          <KnowledgeBoardView 
            title="All Services" 
            description="Explore our complete collection of AI resources, including prompt libraries, training guides, and UI/UX workflows."
            posts={allServicesPosts}
          />
        )}

        {currentPage === 'insights-news' && (
          <InsightsNewsView posts={insightsNewsPosts} />
        )}

        {(currentPage === 'recipe' || currentPage === 'operation-methodology' || currentPage === 'building-methodology') && (
          <RecipeView />
        )}
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
