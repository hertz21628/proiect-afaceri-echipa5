import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { UserProvider } from './contexts/UserContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieConsent from './components/layout/CookieConsent';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import { LoginPage, RegisterPage } from './pages/AuthPages';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { TermsPage, PrivacyPage, GDPRPage, PaymentInfoPage, DeliveryInfoPage } from './pages/InfoPages';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CurrencyProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen bg-gray-50">
              <Header />
              
              <main className="flex-grow pt-16">
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category/:id" element={<CategoryPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
                  
                  {/* Auth Pages */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  
                  {/* Content Pages */}
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* Info Pages */}
                  <Route path="/info/terms" element={<TermsPage />} />
                  <Route path="/info/privacy" element={<PrivacyPage />} />
                  <Route path="/info/gdpr" element={<GDPRPage />} />
                  <Route path="/info/payment" element={<PaymentInfoPage />} />
                  <Route path="/info/delivery" element={<DeliveryInfoPage />} />
                  
                  {/* Special Collections */}
                  <Route path="/new" element={<Navigate to="/" />} />
                  <Route path="/bestsellers" element={<Navigate to="/" />} />
                  
                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              
              <Footer />
              <CookieConsent />
            </div>
          </CartProvider>
        </CurrencyProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;