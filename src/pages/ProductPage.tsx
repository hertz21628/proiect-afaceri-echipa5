import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';
import Button from '../components/ui/Button';
import ProductList from '../components/products/ProductList';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  
  const product = products.find(p => p.id === productId);
  
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Update page title on product change
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - CafeaNoastră`;
    }
  }, [product]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  // Get related products from the same category
  const relatedProducts = product 
    ? products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 3)
    : [];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Produsul nu a fost găsit
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link 
          to={`/category/${product.categoryId}`}
          className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span>Înapoi la {products.find(p => p.categoryId === product.categoryId)?.category}</span>
        </Link>
      </div>
      
      {/* Product Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden bg-white shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-sm text-amber-600">{product.brand}</div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="text-2xl font-bold text-amber-700">
              {formatPrice(product.price)}
            </div>
          </div>
          
          {/* Badges */}
          <div className="flex space-x-3">
            {product.isNew && (
              <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                Nou
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                Bestseller
              </span>
            )}
          </div>
          
          {/* Add to Cart */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <label htmlFor="quantity" className="font-medium text-gray-700">
                Cantitate:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
            
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              className="w-full sm:w-auto"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Adaugă în Coș
            </Button>
          </div>
          
          {/* Tabs */}
          <div className="pt-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 font-medium text-sm ${
                    activeTab === 'description'
                      ? 'border-b-2 border-amber-600 text-amber-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Descriere
                </button>
                
                {product.attributes && product.attributes.length > 0 && (
                  <button
                    onClick={() => setActiveTab('attributes')}
                    className={`pb-4 font-medium text-sm ${
                      activeTab === 'attributes'
                        ? 'border-b-2 border-amber-600 text-amber-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Specificații
                  </button>
                )}
              </nav>
            </div>
            
            <div className="pt-6">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700">{product.description}</p>
                </div>
              )}
              
              {activeTab === 'attributes' && product.attributes && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.attributes.map((attr, index) => (
                    <div key={index} className="flex">
                      <span className="font-medium text-gray-700 min-w-[120px]">{attr.name}:</span>
                      <span className="text-gray-600">{attr.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Produse Similare</h2>
          <ProductList products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;