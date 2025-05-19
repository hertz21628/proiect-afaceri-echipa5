import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';

const CheckoutSuccessPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Comandă Finalizată - CafeaNoastră';
  }, []);

  // Generate random order number
  const orderNumber = `#${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Comandă Finalizată cu Succes!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Mulțumim pentru comandă! Detaliile au fost trimise pe adresa ta de email.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Număr Comandă:</span>
            <span className="font-semibold">{orderNumber}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Data:</span>
            <span className="font-semibold">{new Date().toLocaleDateString('ro-RO')}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/account/orders">
            <Button variant="outline" className="w-full sm:w-auto">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Vezi Comenzile Mele
            </Button>
          </Link>
          
          <Link to="/">
            <Button variant="primary" className="w-full sm:w-auto">
              Continuă Cumpărăturile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;