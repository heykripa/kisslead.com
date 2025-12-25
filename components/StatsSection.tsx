
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Multiple Location Orthodontic Practice',
      subtitle: 'Conversion Rate Optimization (CRO)',
      metrics: [
        { value: '+226%', label: 'Top 5 Rankings' },
        { value: '+122%', label: 'Monthly Leads' }
      ]
    },
    {
      title: 'Business factors that support development',
      subtitle: 'SEO and Pay-Per-Click (PPC) Marketing',
      metrics: [
        { value: '+546%', label: 'Conversion Rate' },
        { value: '+1,110%', label: 'Live Chat' }
      ]
    },
    {
      title: 'Highest quality images as well as 3D images',
      subtitle: 'Amazon Advertising',
      metrics: [
        { value: '+350%', label: 'Sales Volume' },
        { value: '+451%', label: 'Unit Sales' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-50 rounded p-10 flex flex-col justify-between hover:bg-gray-100/80 transition-colors">
            <div>
              <h3 className="text-xl font-medium mb-2 font-heading">{stat.title}</h3>
              <p className="text-sm text-gray-500 mb-12">{stat.subtitle}</p>
            </div>
            
            <div className="flex justify-between items-end border-t border-gray-200 pt-8">
              {stat.metrics.map((metric, j) => (
                <div key={j}>
                  <div className="text-3xl font-bold tracking-tight mb-1">{metric.value}</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
