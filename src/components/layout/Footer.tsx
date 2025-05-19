import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-200" />
              <span className="text-xl font-bold text-amber-100">CafeaNoastră</span>
            </Link>
            <p className="text-amber-200 text-sm">
              Savurează cafeaua perfectă în fiecare zi cu produsele noastre premium de la cei mai buni producători din lume.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-amber-200 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-amber-200 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-amber-200 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-100">Produse</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/1" className="text-amber-200 hover:text-white transition-colors">
                  Cafea Boabe
                </Link>
              </li>
              <li>
                <Link to="/category/2" className="text-amber-200 hover:text-white transition-colors">
                  Cafea Măcinată
                </Link>
              </li>
              <li>
                <Link to="/category/3" className="text-amber-200 hover:text-white transition-colors">
                  Accesorii
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-amber-200 hover:text-white transition-colors">
                  Branduri
                </Link>
              </li>
              <li>
                <Link to="/new" className="text-amber-200 hover:text-white transition-colors">
                  Produse Noi
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-amber-200 hover:text-white transition-colors">
                  Cele Mai Vândute
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-100">Informații</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-amber-200 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/info/terms" className="text-amber-200 hover:text-white transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link to="/info/privacy" className="text-amber-200 hover:text-white transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link to="/info/gdpr" className="text-amber-200 hover:text-white transition-colors">
                  GDPR
                </Link>
              </li>
              <li>
                <Link to="/info/delivery" className="text-amber-200 hover:text-white transition-colors">
                  Informații Livrare
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-100">Contact</h3>
            <ul className="space-y-2 text-amber-200">
              <li>Strada Cafenelei, Nr. 42</li>
              <li>București, România</li>
              <li>Tel: +40 721 234 567</li>
              <li>Email: contact@cafeanoastra.ro</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-amber-200 text-sm">
                &copy; {new Date().getFullYear()} CafeaNoastră. Toate drepturile rezervate.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <a 
                href="https://anpc.ro/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-200 hover:text-white transition-colors text-sm"
              >
                ANPC
              </a>
              <a 
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-200 hover:text-white transition-colors text-sm"
              >
                Soluționarea litigiilor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;