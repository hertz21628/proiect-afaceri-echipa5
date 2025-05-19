import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductList from '../components/products/ProductList';
import ProductFilter from '../components/products/ProductFilter';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const categoryId = parseInt(id || '0');
  
  const category = categories.find(cat => cat.id === categoryId);
  const categoryProducts = products.filter(product => product.categoryId === categoryId);
  
  const [filteredProducts, setFilteredProducts] = useState(categoryProducts);
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({
    brands: [] as string[],
    priceRange: { min: 0, max: 1000 }
  });
  
  // Update page title on category change
  useEffect(() => {
    if (category) {
      document.title = `${category.name} - CafeaNoastră`;
    }
  }, [category]);
  
  // Apply filters and sorting whenever they change
  useEffect(() => {
    let result = [...categoryProducts];
    
    // Filter by brand
    if (filters.brands.length > 0) {
      result = result.filter(product => 
        filters.brands.includes(product.brand)
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );
    
    // Apply sorting
    if (sortOrder) {
      const [field, direction] = sortOrder.split('-');
      
      result.sort((a, b) => {
        if (field === 'price') {
          return direction === 'asc' 
            ? a.price - b.price 
            : b.price - a.price;
        } else if (field === 'name') {
          return direction === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return 0;
      });
    }
    
    setFilteredProducts(result);
  }, [categoryProducts, filters, sortOrder]);
  
  const handleBrandFilter = (brands: string[]) => {
    setFilters(prev => ({ ...prev, brands }));
  };
  
  const handlePriceFilter = (min: number, max: number) => {
    setFilters(prev => ({ ...prev, priceRange: { min, max } }));
  };
  
  const handleSortChange = (sort: string) => {
    setSortOrder(sort);
  };
  
  const handleFilterReset = () => {
    setFilters({
      brands: [],
      priceRange: { min: 0, max: 1000 }
    });
    setSortOrder('');
  };
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Categoria nu a fost găsită
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Category Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">{category.name}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with Filters */}
        <div className="w-full lg:w-1/4">
          <ProductFilter
            onBrandFilter={handleBrandFilter}
            onPriceFilter={handlePriceFilter}
            onSortChange={handleSortChange}
            onFilterReset={handleFilterReset}
          />
        </div>
        
        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="mb-4 text-sm text-gray-600">
            {filteredProducts.length} produse găsite
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600">
                Nu au fost găsite produse care să corespundă filtrelor selectate.
              </p>
              <button
                onClick={handleFilterReset}
                className="mt-4 text-amber-600 hover:text-amber-700 underline"
              >
                Resetează filtrele
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;