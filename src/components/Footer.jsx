import { logo } from '../utils';
import { navLinks } from "../constants";
import { socialLinks } from '../constants';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">

          {/* Logo */}
          <div className="order-first sm:order-none">
            <img
              src={logo}
              alt="Ultra Ade Tech Logo"
              className="h-8"
            />
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-sm cursor-pointer text-gray-600 hover:text-green-500 transition-all">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-200" />

        <div className="flex flex-col-reverse gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Copyright */}
          <p className="text-sm text-gray-600">© Ultra Ade Tech {new Date().getFullYear()}</p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-all">
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
