import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useUser } from '../../contexts/UserContext';
import Button from '../ui/Button';

const CartSummary: React.FC = () => {
  const { subtotal, vatAmount, total, totalItems } = useCart();
  const { formatPrice } = useCurrency();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login?redirect=checkout');
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Sumar Comandă</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({totalItems} produse):</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>TVA (19%):</span>
          <span>{formatPrice(vatAmount)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-800">
          <span>Total:</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
      
      <Button
        variant="primary"
        fullWidth
        onClick={handleCheckout}
        disabled={totalItems === 0}
      >
        {isAuthenticated ? 'Continuă la Checkout' : 'Autentifică-te și Comandă'}
      </Button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Prețurile includ TVA. Costurile de livrare vor fi calculate în pasul următor.
      </p>
    </div>
  );
};

export default CartSummary;