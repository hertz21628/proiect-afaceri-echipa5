import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import Button from '../components/ui/Button';

export const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract redirect URL from query parameters
  const searchParams = new URLSearchParams(location.search);
  const redirectTo = searchParams.get('redirect') || '/account';
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, navigate, redirectTo]);
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Autentificare - CafeaNoastră';
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when form changes
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      setIsSubmitting(true);
      const success = await login(formData.email, formData.password);
      
      if (success) {
        navigate(redirectTo);
      } else {
        setError('Email sau parolă incorectă');
      }
    } catch (error) {
      setError('A apărut o eroare. Te rugăm să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-amber-900 mb-6 text-center">Autentificare</h1>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Parolă
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Se procesează...' : 'Autentificare'}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Nu ai cont? {' '}
            <Link to={`/register${location.search}`} className="text-amber-600 hover:text-amber-700">
              Înregistrează-te
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const RegisterPage: React.FC = () => {
  const { register, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract redirect URL from query parameters
  const searchParams = new URLSearchParams(location.search);
  const redirectTo = searchParams.get('redirect') || '/account';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, navigate, redirectTo]);
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Înregistrare - CafeaNoastră';
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when form changes
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Parolele nu coincid');
      return;
    }
    
    try {
      setIsSubmitting(true);
      const success = await register(formData.name, formData.email, formData.password);
      
      if (success) {
        navigate(redirectTo);
      } else {
        setError('Email-ul este deja înregistrat sau a apărut o eroare');
      }
    } catch (error) {
      setError('A apărut o eroare. Te rugăm să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-amber-900 mb-6 text-center">Înregistrare</h1>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nume și Prenume
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
              Email
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Parolă
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmă Parola
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Se procesează...' : 'Înregistrare'}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Ai deja cont? {' '}
            <Link to={`/login${location.search}`} className="text-amber-600 hover:text-amber-700">
              Autentifică-te
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};