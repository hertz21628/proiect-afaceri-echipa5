import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Coșul tău - CafeaNoastră';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Coșul Tău</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-800">Produse ({cartItems.length})</h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Golește coșul
                </button>
              </div>
              
              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-between">
                <Link to="/" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continuă cumpărăturile
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <CartSummary />
            
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Ai un cod promoțional?</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Introdu codul"
                  className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
                <Button variant="secondary">Aplică</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="h-16 w-16 text-amber-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Coșul tău este gol</h2>
          <p className="text-gray-600 mb-6">
            Se pare că nu ai adăugat încă niciun produs în coș.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Începe cumpărăturile
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;