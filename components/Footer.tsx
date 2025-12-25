
import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const columns = [
    { 
      title: 'SERVICES', 
      links: [
        { label: 'Digital Marketing', href: '#' },
        { label: 'Web Development', href: '#' },
        { label: 'Graphic Design', href: '#' },
        { label: 'SEO', badge: 'NEW', href: '#' },
        { label: 'Lead Generations', href: '#' }
      ] 
    },
    { 
      title: 'COMPANY', 
      links: [
        { label: 'About us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'News', href: '#' },
        { label: 'Media kit', href: '#' },
        { label: 'Contact', href: '#' }
      ] 
    },
    { 
      title: 'RESOURCES', 
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Newsletter', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Help centre', href: '#' },
        { label: 'Tutorials', href: '#' },
        { label: 'Support', href: '#' }
      ] 
    },
    { 
      title: 'SOCIAL', 
      links: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'Facebook', href: '#' }
      ] 
    },
    { 
      title: 'POLICIES', 
      links: [
        { label: 'Privacy Policy', href: '#/privacy-policy' },
        { label: 'Terms & Conditions', href: '#/terms-conditions' },
        { label: 'Refund & Cancellation', href: '#/refund-cancellation' },
        { label: 'Return Policy', href: '#/return-policy' },
        { label: 'Shipping Policy', href: '#/shipping-policy' }
      ] 
    }
  ];

  return (
    <footer className="pt-24 pb-12 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Logo Section */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <a href="#/">
                  <Logo className="h-9" />
                </a>
              </div>
              <p className="text-gray-500 text-[14px] leading-relaxed max-w-xs font-medium font-serif">
                Kisslead Technologies provides businesses of all sizes with an opportunity to market their brand 24/7 at a low cost through data-driven strategies.
              </p>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {columns.map((col, i) => (
                <div key={i}>
                  <h4 className="text-[12px] font-medium text-gray-900 uppercase tracking-widest mb-6 font-heading">{col.title}</h4>
                  <ul className="space-y-4">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a href={link.href} className="group flex items-center text-[14px] font-medium text-gray-500 hover:text-black transition-colors">
                          {link.label}
                          {link.badge && (
                            <span className="ml-2 bg-[#f4f4f4] text-[9px] font-bold text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 uppercase tracking-tighter">
                              {link.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-400 text-[13px] font-medium">
          <div>© {currentYear} Kisslead Technologies. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Facebook} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ Icon: any }> = ({ Icon }) => (
  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
    <Icon className="w-4 h-4" />
  </a>
);

export default Footer;
