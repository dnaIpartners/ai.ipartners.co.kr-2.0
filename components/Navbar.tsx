
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKnowledgeMenuOpen, setIsKnowledgeMenuOpen] = useState(false);
  const [isRecipeMenuOpen, setIsRecipeMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsKnowledgeMenuOpen(false);
        setIsRecipeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'RECIPE', page: 'recipe' },
    { name: 'WORKS', page: 'works' },
    { name: 'INSIGHTS NEWS', page: 'insights-news' },
    { name: 'KNOWLEDGE', page: 'knowledge' },
    { name: 'ABOUTS', page: 'about' }
  ];

  const handleMobileNavigate = (page: string) => {
    if (page === 'knowledge') {
      setIsKnowledgeMenuOpen(!isKnowledgeMenuOpen);
      setIsRecipeMenuOpen(false);
      return;
    }
    if (page === 'recipe') {
      setIsRecipeMenuOpen(!isRecipeMenuOpen);
      setIsKnowledgeMenuOpen(false);
      return;
    }
    setIsMobileMenuOpen(false);
    setIsKnowledgeMenuOpen(false);
    setIsRecipeMenuOpen(false);
    onNavigate(page);
  };

  const handleDesktopNavigate = (page: string) => {
    if (page === 'knowledge') {
      setIsKnowledgeMenuOpen(!isKnowledgeMenuOpen);
      setIsRecipeMenuOpen(false);
      return;
    }
    if (page === 'recipe') {
      setIsRecipeMenuOpen(!isRecipeMenuOpen);
      setIsKnowledgeMenuOpen(false);
      return;
    }
    setIsKnowledgeMenuOpen(false);
    setIsRecipeMenuOpen(false);
    onNavigate(page);
  };

  const isInverse = isDark && !isMobileMenuOpen && !isKnowledgeMenuOpen && !isRecipeMenuOpen;
  const textColor = isInverse ? 'text-white' : 'text-black';
  const textColorMuted = isInverse ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black';
  const bgColor = isInverse ? 'bg-white' : 'bg-black';
  const btnClass = isInverse ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800';
  
  const navBg = isScrolled || isKnowledgeMenuOpen || isRecipeMenuOpen
    ? (isDark && !isKnowledgeMenuOpen && !isRecipeMenuOpen ? 'bg-black/50 backdrop-blur-md border-b border-white/10 shadow-sm py-4' : 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm py-4')
    : 'bg-transparent py-6 md:py-8';

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${navBg}`}>
        <div className="px-6 md:px-12 flex justify-between items-center relative z-[101]">
          {/* Brand Logo Area */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => handleDesktopNavigate('home')}>
            <div className={`w-3.5 h-3.5 rounded-full ${bgColor} transition-colors duration-500`}></div>
            <span className={`text-[20px] font-medium tracking-tight ${textColor} transition-colors duration-500`}>
              IPARTNERS i-PIE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleDesktopNavigate(item.page)}
                className={`text-[15px] font-medium transition-colors duration-500 flex items-center gap-1 ${textColorMuted} ${(isKnowledgeMenuOpen && item.name === 'KNOWLEDGE') || (isRecipeMenuOpen && item.name === 'RECIPE') ? '!text-blue-600' : ''}`}
              >
                {item.name}
                {(item.name === 'KNOWLEDGE' || item.name === 'RECIPE') && (
                  <span className="text-[16px] font-light leading-none">
                    {(item.name === 'KNOWLEDGE' && isKnowledgeMenuOpen) || (item.name === 'RECIPE' && isRecipeMenuOpen) ? '-' : '+'}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:block">
            <button 
              onClick={() => window.open('https://www.ipartners.co.kr', '_blank')}
              className={`px-6 py-2.5 text-[15px] font-medium rounded-full transition-all duration-500 ${btnClass}`}
            >
              IPARTNERS Co.
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${textColor} transition-colors duration-500`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Knowledge Mega Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-white text-black shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${isKnowledgeMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
              {/* Left Side: Title & All Services */}
              <div className="flex flex-col gap-2 min-w-[200px]">
                <h2 className="text-3xl font-semibold tracking-tight">Knowledge</h2>
                <button 
                  onClick={() => { setIsKnowledgeMenuOpen(false); onNavigate('all-services'); }} 
                  className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1 w-fit"
                >
                  All Services 
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
              
              {/* Divider (Desktop only) */}
              <div className="hidden md:block w-px h-16 bg-gray-200"></div>
              
              {/* Right Side: Horizontal Links */}
              <div className="flex-1">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">AI Resources</h3>
                <ul className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <li>
                    <button 
                      onClick={() => { setIsKnowledgeMenuOpen(false); onNavigate('prompt-library'); }} 
                      className="text-xl md:text-2xl font-medium hover:text-blue-600 transition-colors text-left whitespace-nowrap"
                    >
                      Prompt Library
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => { setIsKnowledgeMenuOpen(false); onNavigate('ai-training'); }} 
                      className="text-xl md:text-2xl font-medium hover:text-blue-600 transition-colors text-left whitespace-nowrap"
                    >
                      AI Training
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => { setIsKnowledgeMenuOpen(false); onNavigate('ui-ux-prompt'); }} 
                      className="text-xl md:text-2xl font-medium hover:text-blue-600 transition-colors text-left whitespace-nowrap"
                    >
                      UI/UX Prompt
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Mega Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-white text-black shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${isRecipeMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
              {/* Left Side: Title & RECIPE */}
              <div className="flex flex-col gap-2 min-w-[200px]">
                <h2 className="text-3xl font-semibold tracking-tight">Recipe</h2>
                
              </div>
              
              {/* Divider (Desktop only) */}
              <div className="hidden md:block w-px h-16 bg-gray-200"></div>
              
              {/* Right Side: Horizontal Links */}
              <div className="flex-1">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Methodologies</h3>
                <ul className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <li>
                    <button 
                      onClick={() => { setIsRecipeMenuOpen(false); onNavigate('operation-methodology'); }} 
                      className="text-xl md:text-2xl font-medium hover:text-blue-600 transition-colors text-left whitespace-nowrap"
                    >
                      Operation Methodology
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => { setIsRecipeMenuOpen(false); onNavigate('building-methodology'); }} 
                      className="text-xl md:text-2xl font-medium hover:text-blue-600 transition-colors text-left whitespace-nowrap"
                    >
                      Building Methodology
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-all duration-500 flex flex-col justify-center px-8 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col gap-6">
          {navItems.map((item, idx) => (
            <div key={item.name} className="flex flex-col">
              <button
                onClick={() => handleMobileNavigate(item.page)}
                className={`text-4xl font-semibold tracking-tight text-left text-black hover:text-blue-600 transition-all duration-300 transform flex items-center gap-2 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.name}
                {(item.name === 'KNOWLEDGE' || item.name === 'RECIPE') && (
                  <span className="text-3xl font-light">
                    {(item.name === 'KNOWLEDGE' && isKnowledgeMenuOpen) || (item.name === 'RECIPE' && isRecipeMenuOpen) ? '-' : '+'}
                  </span>
                )}
              </button>
              
              {/* Mobile Knowledge Submenu */}
              {item.name === 'KNOWLEDGE' && (
                <div className={`overflow-hidden transition-all duration-300 ${isKnowledgeMenuOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsKnowledgeMenuOpen(false); onNavigate('all-services'); }} className="text-xl font-medium text-left text-gray-900 hover:text-blue-600">All Services</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsKnowledgeMenuOpen(false); onNavigate('prompt-library'); }} className="text-xl font-medium text-left text-gray-600 hover:text-blue-600">Prompt Library</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsKnowledgeMenuOpen(false); onNavigate('ai-training'); }} className="text-xl font-medium text-left text-gray-600 hover:text-blue-600">AI Training</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsKnowledgeMenuOpen(false); onNavigate('ui-ux-prompt'); }} className="text-xl font-medium text-left text-gray-600 hover:text-blue-600">UI/UX Prompt</button>
                  </div>
                </div>
              )}

              {/* Mobile Recipe Submenu */}
              {item.name === 'RECIPE' && (
                <div className={`overflow-hidden transition-all duration-300 ${isRecipeMenuOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsRecipeMenuOpen(false); onNavigate('recipe'); }} className="text-xl font-medium text-left text-gray-900 hover:text-blue-600">RECIPE</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsRecipeMenuOpen(false); onNavigate('operation-methodology'); }} className="text-xl font-medium text-left text-gray-600 hover:text-blue-600">Operation Methodology</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsRecipeMenuOpen(false); onNavigate('building-methodology'); }} className="text-xl font-medium text-left text-gray-600 hover:text-blue-600">Building Methodology</button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div 
            className={`w-full h-px bg-black/10 my-6 transform ${isMobileMenuOpen ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-500 delay-300 origin-left`} 
          />
          <button 
            onClick={() => window.open('https://www.ipartners.co.kr', '_blank')}
            className={`text-lg font-medium text-black text-left transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-500 delay-500`}
          >
            IPARTNERS Co.
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
