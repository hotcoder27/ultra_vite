import { useState } from 'react';
import { navLinks } from '../constants';
import { logo } from '../utils';
import close from '/assets/svg/close.svg';
import menu from '/assets/svg/menu.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-50 w-full shadow-md">
      <nav className="flex items-center justify-between w-full px-4 py-4 bg-white">
        <div>
          <a href="/">
            <img src={logo} alt="Ultra Ade Tech Logo" width={80} height={18} />
          </a>
        </div>
        <div className="flex items-center space-x-4 max-md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-gray-600 hover:text-green-500 transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="max-md:hidden">
          <button className="inline-flex h-11 items-center justify-center cursor-pointer
               bg-green-500 px-10 py-6 rounded-full text-sm font-medium text-white hover:bg-green-600
               transition-all">
            Get Started
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <img src={isMenuOpen ? close : menu} alt={isMenuOpen ? "Close" : "Menu"} className="w-6 h-6 text-green-500" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-green-500">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-white transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-white text-green-500 border-4 border-green-500 px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
