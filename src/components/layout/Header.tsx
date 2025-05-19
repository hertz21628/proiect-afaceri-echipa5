import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useUser } from '../../contexts/UserContext';
import CurrencySelector from '../ui/CurrencySelector';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-700" />
            <span className="text-xl font-bold text-amber-900">CafeaNoastră</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-amber-900 hover:text-amber-700 transition-colors">
              Acasă
            </Link>
            <div className="relative group">
              <span className="text-amber-900 hover:text-amber-700 transition-colors cursor-pointer">
                Produse
              </span>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/category/1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    Cafea Boabe
                  </Link>
                  <Link to="/category/2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    Cafea Măcinată
                  </Link>
                  <Link to="/category/3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    Accesorii
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-amber-900 hover:text-amber-700 transition-colors">
              Despre Noi
            </Link>
            <Link to="/contact" className="text-amber-900 hover:text-amber-700 transition-colors">
              Contact
            </Link>
            <div className="relative group">
              <span className="text-amber-900 hover:text-amber-700 transition-colors cursor-pointer">
                Informații
              </span>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/info/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    Termeni și Condiții
                  </Link>
                  <Link to="/info/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    Politica de Confidențialitate
                  </Link>
                  <Link to="/info/gdpr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    GDPR
                  </Link>
                  <Link to="/info/payment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    Cum se Plătește
                  </Link>
                  <Link to="/info/delivery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">
                    Cum se Livrează
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            <CurrencySelector />
            
            {/* Cart Link */}
            <Link to="/cart" className="relative">
              <ShoppingCart className={`h-6 w-6 ${isScrolled ? 'text-amber-900' : 'text-amber-800'}`} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* User Account Link */}
            <Link to={isAuthenticated ? '/account' : '/login'} className="hidden md:block">
              <User className={`h-6 w-6 ${isScrolled ? 'text-amber-900' : 'text-amber-800'}`} />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-amber-900' : 'text-amber-800'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-amber-900' : 'text-amber-800'}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-4 py-2 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4">
            <Link to="/" className="text-amber-900 hover:text-amber-700 transition-colors px-2 py-1">
              Acasă
            </Link>
            <div className="space-y-2">
              <span className="text-amber-900 font-semibold px-2">Produse</span>
              <div className="ml-4 space-y-2">
                <Link to="/category/1" className="block text-amber-900 hover:text-amber-700">
                  Cafea Boabe
                </Link>
                <Link to="/category/2" className="block text-amber-900 hover:text-amber-700">
                  Cafea Măcinată
                </Link>
                <Link to="/category/3" className="block text-amber-900 hover:text-amber-700">
                  Accesorii
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-amber-900 hover:text-amber-700 transition-colors px-2 py-1">
              Despre Noi
            </Link>
            <Link to="/contact" className="text-amber-900 hover:text-amber-700 transition-colors px-2 py-1">
              Contact
            </Link>
            <div className="space-y-2">
              <span className="text-amber-900 font-semibold px-2">Informații</span>
              <div className="ml-4 space-y-2">
                <Link to="/info/terms" className="block text-amber-900 hover:text-amber-700">
                  Termeni și Condiții
                </Link>
                <Link to="/info/privacy" className="block text-amber-900 hover:text-amber-700">
                  Politica de Confidențialitate
                </Link>
                <Link to="/info/gdpr" className="block text-amber-900 hover:text-amber-700">
                  GDPR
                </Link>
                <Link to="/info/payment" className="block text-amber-900 hover:text-amber-700">
                  Cum se Plătește
                </Link>
                <Link to="/info/delivery" className="block text-amber-900 hover:text-amber-700">
                  Cum se Livrează
                </Link>
              </div>
            </div>
            <Link to={isAuthenticated ? '/account' : '/login'} className="text-amber-900 hover:text-amber-700 transition-colors px-2 py-1">
              {isAuthenticated ? `Contul meu (${user?.name})` : 'Autentificare'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;