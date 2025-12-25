
import React from 'react';
import { 
  Baby, 
  Home, 
  Camera, 
  PenTool, 
  Building2, 
  Armchair, 
  HardHat, 
  Construction, 
  Sparkles, 
  Leaf 
} from 'lucide-react';

interface ClientLogo {
  name: string;
  icon: React.ElementType;
}

const SyntheticLogo: React.FC<{ client: ClientLogo }> = ({ client }) => {
  const Icon = client.icon;
  
  return (
    <div className="group flex flex-col items-center justify-center p-6 transition-all duration-300 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:scale-105">
      <div className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-heading whitespace-nowrap text-black">
          {client.name}
        </span>
      </div>
      <div className="mt-2 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full opacity-20" />
    </div>
  );
};

const LogoStrip: React.FC = () => {
  const clients: ClientLogo[] = [
    { name: 'Bump to Born', icon: Baby },
    { name: 'CASA PROSPECT', icon: Home },
    { name: 'Media Zone', icon: Camera },
    { name: 'Design Bees', icon: PenTool },
    { name: 'GNK Real Estate', icon: Building2 },
    { name: 'Livin Interiors', icon: Armchair },
    { name: 'PVS Hardwares', icon: HardHat },
    { name: 'Q2 Builders', icon: Construction },
    { name: 'Razzy Studio', icon: Sparkles },
    { name: 'True Bio', icon: Leaf },
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
              <SyntheticLogo client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
