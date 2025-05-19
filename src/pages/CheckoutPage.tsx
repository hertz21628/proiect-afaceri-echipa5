import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';
import CartItem from '../components/cart/CartItem';
import CheckoutForm from '../components/checkout/CheckoutForm';

const CheckoutPage: React.FC = () => {
  const { cartItems, totalItems } = useCart();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Finalizare Comandă - CafeaNoastră';
  }, []);
  
  // Redirect if cart is empty or user is not authenticated
  useEffect(() => {
    if (totalItems === 0) {
      navigate('/cart');
    } else if (!isAuthenticated) {
      navigate('/login?redirect=checkout');
    }
  }, [totalItems, isAuthenticated, navigate]);

  if (!isAuthenticated || totalItems === 0) {
    return null; // Will redirect via the above effect
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Finalizare Comandă</h1>
      
      <div className="mb-8">
        <Link to="/cart" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Înapoi la coș
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <CheckoutForm />
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2 text-amber-600" />
              Sumarul Comenzii
            </h2>
            
            <div className="max-h-[300px] overflow-y-auto mb-6 pr-2">
              {cartItems.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;