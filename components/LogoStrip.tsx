
import React from 'react';

interface ClientLogo {
  name: string;
  imageSrc: string;
}

const ClientLogoItem: React.FC<{ client: ClientLogo }> = ({ client }) => {
  return (
    <div className="group flex items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
      <img 
        src={client.imageSrc} 
        alt={`${client.name} logo`} 
        className="max-h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />
    </div>
  );
};

const LogoStrip: React.FC = () => {
  const clients: ClientLogo[] = [
    { name: 'Bump to Born', imageSrc: '/clients/bump-to-born.png' },
    { name: 'CASA PROSPECT', imageSrc: '/clients/casa-prospect.png' },
    { name: 'Media Zone', imageSrc: '/clients/media-zone.png' },
    { name: 'Design Bees', imageSrc: '/clients/design-bees.png' },
    { name: 'GNK Real Estate', imageSrc: '/clients/gnk-real-estate.png' },
    { name: 'Livin Interiors', imageSrc: '/clients/livin-interiors.png' },
    { name: 'PVS Hardwares', imageSrc: '/clients/pvs-hardwares.png' },
    { name: 'Q2 Builders', imageSrc: '/clients/q2-builders.png' },
    { name: 'Razzy Studio', imageSrc: '/clients/razzy-studio.png' },
    { name: 'True Bio', imageSrc: '/clients/true-bio.png' },
  ];

  return (
    <section className="py-24 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">
            Trusted by Industry Leaders
          </p>
          <div className="h-px w-12 bg-gray-200 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4 items-center">
          {clients.map((client, i) => (
            <div key={i} className="flex justify-center border border-transparent hover:border-gray-50 rounded-xl transition-colors">
              <ClientLogoItem client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
