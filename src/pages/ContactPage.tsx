import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Contact - CafeaNoastră';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real app, we would send the form data to a backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">Contactează-ne</h1>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-amber-700 h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Adresa Noastră</h3>
            <p className="text-gray-600">
              Strada Cafenelei, Nr. 42<br />
              București, România
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-amber-700 h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefon</h3>
            <p className="text-gray-600">
              +40 721 234 567<br />
              Luni - Vineri: 9:00 - 18:00
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-amber-700 h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">
              contact@cafeanoastra.ro<br />
              comenzi@cafeanoastra.ro
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-amber-800 mb-6">Trimite-ne un Mesaj</h2>
            
            {formStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                Mesajul tău a fost trimis cu succes! Te vom contacta în cel mai scurt timp.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                A apărut o eroare. Te rugăm să încerci din nou mai târziu.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Numele tău*
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subiect*
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                >
                  <option value="">Selectează un subiect</option>
                  <option value="command">Întrebare legată de comandă</option>
                  <option value="products">Informații despre produse</option>
                  <option value="partnership">Propunere de parteneriat</option>
                  <option value="other">Altele</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              
              <div className="pt-2">
                <Button type="submit" variant="primary">
                  Trimite Mesaj
                </Button>
              </div>
            </form>
          </div>
          
          {/* Store Hours & Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-amber-800 mb-6 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Program Magazin
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Luni - Vineri:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sâmbătă:</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Duminică:</span>
                  <span>Închis</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-amber-800 mb-6 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Locația Noastră
              </h2>
              
              <div className="rounded-lg overflow-hidden h-[300px] bg-gray-200">
                {/* In a real project, this would be replaced with an actual map */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <p className="text-gray-600">Hartă interactivă ar fi afișată aici</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;