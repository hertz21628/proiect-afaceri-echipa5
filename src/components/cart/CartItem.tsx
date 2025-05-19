import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useCurrency } from '../../contexts/CurrencyContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { formatPrice } = useCurrency();
  
  const handleQuantityChange = (quantity: number) => {
    updateQuantity(item.product.id, quantity);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-gray-200">
      <div className="w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
        <Link to={`/product/${item.product.id}`}>
          <img 
            src={item.product.image} 
            alt={item.product.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="flex-grow">
        <Link to={`/product/${item.product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-amber-600 transition-colors mb-1">
            {item.product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{item.product.brand}</p>
        <p className="font-medium text-amber-600">
          {formatPrice(item.product.price)}
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="text-gray-500 hover:text-amber-600 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="w-10 text-center font-medium">
          {item.quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="text-gray-500 hover:text-amber-600 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      
      <div className="text-right min-w-[100px]">
        <p className="font-medium text-gray-900">
          {formatPrice(item.product.price * item.quantity)}
        </p>
      </div>
      
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="text-red-500 hover:text-red-700 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;