import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductList from '../components/products/ProductList';
import CategoryCard from '../components/products/CategoryCard';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'CafeaNoastră - Cafea Premium Pentru Tine';
  }, []);

  const newProducts = products.filter(product => product.isNew);
  const bestsellers = products.filter(product => product.isBestseller);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cafea proaspăt prăjită"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descoperă Plăcerea Cafelei Perfecte
            </h1>
            <p className="text-amber-100 text-lg mb-8">
              Savurează fiecare înghițitură din cele mai fine boabe de cafea, prăjite cu pasiune pentru a-ți oferi o experiență de neuitat.
            </p>
            <Link to="/category/1">
              <Button variant="primary" size="lg">
                Descoperă Produsele
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-2">Categorii de Produse</h2>
        <p className="text-gray-600 mb-8">Explorează selecția noastră variată de produse.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">Produse Noi</h2>
              <p className="text-gray-600">Descoperă cele mai recente adăugiri în colecția noastră.</p>
            </div>
            <Link to="/new" className="hidden md:flex items-center text-amber-600 hover:text-amber-700 transition-colors">
              <span className="mr-2">Vezi toate</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <ProductList products={newProducts} />
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/new">
              <Button variant="outline">
                Vezi toate produsele noi
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-2 text-center">De Ce Să Alegi CafeaNoastră</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Excelență în fiecare ceașcă, de la boabe atent selectate până la livrarea la ușa ta.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Calitate Premium</h3>
            <p className="text-gray-600">
              Selectăm cu grijă cele mai bune soiuri de cafea de la producători de încredere.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Prăjire Proaspătă</h3>
            <p className="text-gray-600">
              Prăjim cafeaua în loturi mici pentru a păstra prospețimea și aromele complexe.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Livrare Rapidă</h3>
            <p className="text-gray-600">
              Expediem comenzile în cel mai scurt timp pentru ca tu să te bucuri de cafea proaspătă.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bestsellers */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">Cele Mai Vândute</h2>
              <p className="text-gray-600">Descoperă produsele noastre cele mai populare.</p>
            </div>
            <Link to="/bestsellers" className="hidden md:flex items-center text-amber-600 hover:text-amber-700 transition-colors">
              <span className="mr-2">Vezi toate</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <ProductList products={bestsellers} />
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/bestsellers">
              <Button variant="outline">
                Vezi toate produsele populare
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-amber-800 rounded-lg shadow-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Abonează-te la Newsletter</h2>
            <p className="text-amber-100 mb-8">
              Fii primul care află despre noile produse, promoții și sfaturi pentru prepararea cafelei.
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
              />
              <Button variant="primary">
                Abonează-te
              </Button>
            </div>
            
            <p className="text-xs text-amber-200 mt-4">
              Prin abonare, ești de acord cu <Link to="/info/privacy" className="underline hover:text-white">Politica noastră de Confidențialitate</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;