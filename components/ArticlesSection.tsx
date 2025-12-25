
import React from 'react';
import { Button } from './ui/Button';

const ArticlesSection: React.FC = () => {
  const articles = [
    { title: 'What is Digital PR and How Can It Impact My Business?', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=400' },
    { title: '20 Key Advertising Trends To Watch in 2024', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400' },
    { title: 'Programmatic SEO: What Is It and Why Your Business', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { title: 'Google Business Profile: A Local SEO Essential', img: 'https://images.unsplash.com/photo-1572021335469-3171624c9c5c?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Article</div>
            <h2 className="text-4xl font-medium font-heading">Information about us</h2>
          </div>
          <Button variant="outline">Explore More</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-gray-50">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-medium text-lg leading-snug mb-2 group-hover:underline font-heading">{article.title}</h3>
              <a href="#" className="text-sm font-bold border-b border-black w-fit hover:text-gray-500">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
