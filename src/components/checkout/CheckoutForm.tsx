import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useUser } from '../../contexts/UserContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import { paymentMethods, deliveryMethods } from '../../data/products';
import Button from '../ui/Button';

const CheckoutForm: React.FC = () => {
  const { user, updateUserProfile } = useUser();
  const { cartItems, total, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: user?.address || '',
    city: user?.city || '',
    postalCode: user?.postalCode || '',
    phone: user?.phone || '',
    paymentMethod: paymentMethods[0].id,
    deliveryMethod: deliveryMethods[0].id
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Save user profile information
      const profileData = {
        name: formData.name,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        phone: formData.phone
      };
      
      updateUserProfile(profileData);
      
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear cart and redirect to success page
      clearCart();
      navigate('/checkout/success');
    } catch (error) {
      console.error('Error processing order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const selectedDeliveryMethod = deliveryMethods.find(method => method.id === formData.deliveryMethod);
  const deliveryPrice = selectedDeliveryMethod?.price || 0;
  const finalTotal = total + deliveryPrice;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informații Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nume și Prenume*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>
      
      {/* Shipping Address */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Adresa de Livrare</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Adresa*
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Oraș*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                Cod Poștal*
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Delivery Method */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Metoda de Livrare</h3>
        <div className="space-y-4">
          {deliveryMethods.map(method => (
            <div key={method.id} className="flex items-start">
              <input
                type="radio"
                id={`delivery-${method.id}`}
                name="deliveryMethod"
                value={method.id}
                checked={formData.deliveryMethod === method.id}
                onChange={handleChange}
                className="mt-1 h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor={`delivery-${method.id}`} className="ml-3">
                <div className="text-gray-800 font-medium">{method.name} ({formatPrice(method.price)})</div>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Payment Method */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Metoda de Plată</h3>
        <div className="space-y-4">
          {paymentMethods.map(method => (
            <div key={method.id} className="flex items-start">
              <input
                type="radio"
                id={`payment-${method.id}`}
                name="paymentMethod"
                value={method.id}
                checked={formData.paymentMethod === method.id}
                onChange={handleChange}
                className="mt-1 h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor={`payment-${method.id}`} className="ml-3">
                <div className="text-gray-800 font-medium">{method.name}</div>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Order Summary */}
      <div className="bg-amber-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sumar Comandă</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Transport:</span>
            <span>{formatPrice(deliveryPrice)}</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t border-amber-200">
            <span>Total:</span>
            <span>{formatPrice(finalTotal)}</span>
          </div>
        </div>
      </div>
      
      {/* Terms & Conditions and Submit */}
      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500"
          />
          <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
            Am citit și sunt de acord cu <a href="/info/terms" className="text-amber-600 hover:underline">Termenii și Condițiile</a> și <a href="/info/privacy" className="text-amber-600 hover:underline">Politica de Confidențialitate</a>.
          </label>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting || cartItems.length === 0}
          className="mt-6"
        >
          {isSubmitting ? 'Se procesează...' : 'Finalizează Comanda'}
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;