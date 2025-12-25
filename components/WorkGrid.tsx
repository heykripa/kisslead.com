
import React from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

const WorkGrid: React.FC = () => {
  const projects = [
    { title: 'IUNIK', tags: ['Marketing'], img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' },
    { title: 'Water Bank', tags: ['PPC', 'SEO'], img: 'https://images.unsplash.com/photo-1596462502278-27bfad450216?auto=format&fit=crop&q=80&w=800' },
    { title: 'One Two Free', tags: ['Social Media'], img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
    { title: 'Heartleaf 88', tags: ['Marketing'], img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className="py-24 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Work</div>
            <h2 className="text-4xl md:text-5xl font-medium font-heading">Our latest work</h2>
          </div>
          <Button variant="outline">Explore More</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-gray-50">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-medium font-heading">{project.title}</h3>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="rounded-full text-[10px] uppercase font-bold tracking-tight px-3">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
