import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { brands } from '../../data/products';

interface ProductFilterProps {
  onBrandFilter: (brands: string[]) => void;
  onPriceFilter: (min: number, max: number) => void;
  onSortChange: (sort: string) => void;
  onFilterReset: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  onBrandFilter,
  onPriceFilter,
  onSortChange,
  onFilterReset,
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 200,
  });
  const [sort, setSort] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const handleBrandChange = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    
    setSelectedBrands(updatedBrands);
    onBrandFilter(updatedBrands);
  };
  
  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = Number(value);
    const updatedRange = {
      ...priceRange,
      [type]: numValue,
    };
    
    setPriceRange(updatedRange);
    onPriceFilter(updatedRange.min, updatedRange.max);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    onSortChange(value);
  };
  
  const handleReset = () => {
    setSelectedBrands([]);
    setPriceRange({ min: 0, max: 200 });
    setSort('');
    onFilterReset();
  };
  
  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-amber-600 mr-2" />
          <h3 className="font-semibold text-amber-900">Filtrează Produsele</h3>
        </div>
        
        <button
          onClick={toggleFilters}
          className="md:hidden text-amber-600"
          aria-label={isFiltersOpen ? 'Închide filtrele' : 'Deschide filtrele'}
        >
          {isFiltersOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <div className={`space-y-6 md:block ${isFiltersOpen ? 'block' : 'hidden'}`}>
        {/* Sort Options */}
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
            Sortează după
          </label>
          <select
            id="sort"
            value={sort}
            onChange={handleSortChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          >
            <option value="">Selectează</option>
            <option value="price-asc">Preț: Crescător</option>
            <option value="price-desc">Preț: Descrescător</option>
            <option value="name-asc">Nume: A-Z</option>
            <option value="name-desc">Nume: Z-A</option>
          </select>
        </div>
        
        {/* Brand Filter */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Brand</h4>
          <div className="space-y-2">
            {brands.map(brand => (
              <div key={brand.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${brand.id}`}
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => handleBrandChange(brand.name)}
                  className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <label
                  htmlFor={`brand-${brand.id}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {brand.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Range */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Preț (Lei)</h4>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="min-price" className="block text-sm text-gray-600">
                Min
              </label>
              <input
                type="number"
                id="min-price"
                min="0"
                max={priceRange.max}
                value={priceRange.min}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
            <div>
              <label htmlFor="max-price" className="block text-sm text-gray-600">
                Max
              </label>
              <input
                type="number"
                id="max-price"
                min={priceRange.min}
                value={priceRange.max}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
        
        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-full py-2 px-4 border border-amber-600 rounded-md shadow-sm text-sm font-medium text-amber-700 bg-white hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          Resetează Filtre
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;