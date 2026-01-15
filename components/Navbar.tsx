import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Quem Somos', path: '/quem-somos' },
    { label: 'Comunidades e Cultos', path: '/comunidades' },
    { label: 'Projetos Sociais', path: '/projetos' },
    { label: 'Contribua', path: '/contribua' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-3 group" onClick={closeMenu}>
              <div className="h-12 w-12 bg-blue-700 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-800 transition-colors shadow-sm">
                <Church className="h-7 w-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-lg leading-tight">Paróquia Luterana</span>
                <span className="text-sm text-gray-500 font-medium">de São José (IECLB)</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-600 hover:text-blue-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a 
              href="https://wa.me/554833721111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
             <a 
              href="https://wa.me/554833721111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md text-base font-medium"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};