
import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

interface SubMenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: SubMenuItem[];
}

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation: NavItem[] = [
    {
      label: "Digital Marketing",
      href: "/",
      hasDropdown: true,
      subItems: [
        { label: 'Search Engine Optimization (SEO)', href: '/' },
        { label: 'Pay Per Click (PPC) Management', href: '/' },
        { label: 'Social Media Marketing', href: '/' },
        { label: 'Content Marketing', href: '/' },
        { label: 'Email Marketing', href: '/' },
      ]
    },
    {
      label: "Web Development",
      href: "/",
      hasDropdown: true,
      subItems: [
        { label: 'Custom Website Design', href: '/' },
        { label: 'E-commerce Solutions', href: '/' },
        { label: 'CMS Development', href: '/' },
        { label: 'Website Maintenance', href: '/' },
      ]
    },
    { label: "Graphic Design", href: "/" },
    { label: "SEO", href: "/" },
    { label: "Lead Generations", href: "/" },
    { label: "Contact", href: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="block">
              <img 
                src="/kisslead-logo.png" 
                alt="Kisslead" 
                className="h-14 w-auto object-contain" 
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 h-full">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-1 text-[13px] font-medium transition-colors whitespace-nowrap py-2",
                    activeDropdown === item.label ? "text-black" : "text-gray-600 hover:text-black"
                  )}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={cn(
                        "w-3.5 h-3.5 text-gray-400 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )} 
                    />
                  )}
                </Link>

                {item.hasDropdown && item.subItems && (
                  <div
                    className={cn(
                      "absolute top-full left-0 w-64 bg-white border border-gray-100 py-4 transition-all duration-200 origin-top",
                      activeDropdown === item.label 
                        ? "opacity-100 translate-y-0 visible" 
                        : "opacity-0 -translate-y-2 invisible"
                    )}
                  >
                    <div className="flex flex-col">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="px-6 py-2.5 text-[13px] text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="outline" className="hidden sm:inline-flex rounded-full">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
