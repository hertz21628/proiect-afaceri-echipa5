import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className="block group">
      <div className="relative rounded-lg overflow-hidden shadow-md h-64">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-amber-100 text-sm">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;