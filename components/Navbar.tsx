
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled || isMobileMenuOpen ? "bg-white/90 backdrop-blur-md border-gray-100" : "bg-white/50 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Simple Direct Logo Implementation */}
            <div className="flex items-center shrink-0">
              <Link to="/" className="block group">
                <img 
                  src="/images/kisslead-logo.svg" 
                  alt="Kisslead" 
                  className="h-10 md:h-12 w-auto object-contain transition-opacity group-hover:opacity-80" 
                  draggable={false}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 h-full">
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
                      "flex items-center space-x-1 text-[13px] font-medium transition-colors whitespace-nowrap py-2 px-1",
                      activeDropdown === item.label ? "text-black" : "text-gray-600 hover:text-black"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={cn(
                          "w-3.5 h-3.5 text-gray-400 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180 text-black"
                        )} 
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.subItems && (
                    <div
                      className={cn(
                        "absolute top-full left-0 w-72 bg-white border border-gray-100 rounded-b-xl py-3 transition-all duration-200 origin-top-left",
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
                            className="px-6 py-3 text-[13px] text-gray-500 hover:text-black hover:bg-gray-50 transition-colors flex items-center justify-between group"
                          >
                            <span>{subItem.label}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="default" className="hidden sm:inline-flex rounded-full px-6 font-medium text-[13px] tracking-wide">
                Let's Talk
              </Button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 z-40 bg-white border-t border-gray-100 overflow-y-auto lg:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-4 space-y-1">
          {navigation.map((item) => (
            <div key={item.label} className="border-b border-gray-50 last:border-0">
              {item.hasDropdown ? (
                <div className="py-2">
                  <div className="flex items-center justify-between py-2 px-2 text-base font-medium text-gray-900">
                    {item.label}
                  </div>
                  <div className="pl-4 pb-2 space-y-1">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block py-2 px-2 text-sm text-gray-500 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className="block py-4 px-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-6 px-2">
            <Button className="w-full rounded-full h-12 text-[13px]">Let's Talk</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
