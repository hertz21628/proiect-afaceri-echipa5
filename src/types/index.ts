export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId: number;
  brand: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  attributes?: ProductAttribute[];
}

export interface ProductAttribute {
  name: string;
  value: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phone?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}

export interface DeliveryMethod {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type Currency = 'RON' | 'EUR' | 'USD';

export interface ExchangeRate {
  currency: Currency;
  rate: number;
  symbol: string;
}