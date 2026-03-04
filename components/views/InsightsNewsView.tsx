import React from 'react';

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
}

interface InsightsNewsViewProps {
  posts: NewsPost[];
}

const InsightsNewsView: React.FC<InsightsNewsViewProps> = ({ posts }) => {
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const regularPosts = posts.filter(p => p.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Insights & News</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Discover the latest trends, deep-dive analyses, and company news shaping the future of AI and digital transformation.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="group cursor-pointer mb-20 md:mb-32">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-8 bg-gray-100">
              <img 
                src={featuredPost.imageUrl} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-black text-white px-4 py-1 text-xs font-bold tracking-widest uppercase">
                Featured
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-4 text-sm font-semibold tracking-wider uppercase text-gray-500">
                  <span className="text-black">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="font-mono">{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="md:w-1/3 flex md:justify-end items-end">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-black/20 group-hover:bg-black group-hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {regularPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-xs font-semibold tracking-wider uppercase text-gray-500">
                <span className="text-black">{post.category}</span>
                <span>•</span>
                <span className="font-mono">{post.date}</span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <span className="text-sm font-semibold uppercase tracking-widest border-b border-black pb-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-24 flex justify-center">
          <button className="px-8 py-4 border border-black text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsNewsView;
