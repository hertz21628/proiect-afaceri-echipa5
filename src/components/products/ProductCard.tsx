import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <div className="h-48 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              Nou
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
              <Star className="w-3 h-3 mr-1" /> Bestseller
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-sm text-amber-600">{product.brand}</span>
        </div>
        
        <Link to={`/product/${product.id}`} className="mb-2 block">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-amber-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-amber-900 font-bold">
            {formatPrice(product.price)}
          </span>
          
          <Button
            variant="primary"
            size="sm"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Adaugă
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;