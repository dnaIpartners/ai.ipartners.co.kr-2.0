import React from 'react';

export interface BoardPost {
  id: string;
  no: string;
  title: string;
  category: string;
  date: string;
}

interface KnowledgeBoardViewProps {
  title: string;
  description: string;
  posts: BoardPost[];
}

const KnowledgeBoardView: React.FC<KnowledgeBoardViewProps> = ({ title, description, posts }) => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Board List Section */}
        <div className="w-full">
          {/* Table Header (Desktop) */}
          <div className="hidden md:flex items-center justify-between py-4 border-b-2 border-black text-sm font-semibold tracking-wider uppercase text-gray-400">
            <div className="flex items-center gap-12 w-2/3">
              <span className="w-12 text-center">No.</span>
              <span>Title</span>
            </div>
            <div className="flex items-center justify-between w-1/3 pr-8">
              <span>Category</span>
              <span>Date</span>
            </div>
          </div>
          
          {/* Mobile top border */}
          <div className="md:hidden border-b-2 border-black mb-2"></div>

          {/* List Items */}
          <div className="flex flex-col">
            {posts.map((post) => (
              <div 
                key={post.id}
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-black/10 hover:bg-black hover:text-white transition-all duration-400 cursor-pointer px-4 md:px-8 -mx-4 md:-mx-8"
              >
                <div className="flex items-center gap-6 md:gap-12 md:w-2/3">
                  <span className="text-sm font-mono opacity-40 group-hover:opacity-70 w-8 md:w-12 text-left md:text-center transition-opacity">
                    {post.no}
                  </span>
                  <h3 className="text-xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-400">
                    {post.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between md:w-1/3 mt-4 md:mt-0 pl-14 md:pl-0 pr-0 md:pr-8 opacity-60 group-hover:opacity-100 transition-opacity text-sm md:text-base">
                  <span className="uppercase tracking-widest text-xs md:text-sm">{post.category}</span>
                  <span className="font-mono text-xs md:text-sm">{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Static UI for design) */}
          <div className="flex justify-center items-center gap-2 mt-16">
            <button className="w-10 h-10 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-colors rounded-full">
              &lt;
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full font-medium">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-black/5 transition-colors rounded-full font-medium">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-black/5 transition-colors rounded-full font-medium">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-black/10 hover:bg-black hover:text-white transition-colors rounded-full">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBoardView;
