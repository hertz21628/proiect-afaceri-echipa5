import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Nu există produse disponibile.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold text-amber-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;