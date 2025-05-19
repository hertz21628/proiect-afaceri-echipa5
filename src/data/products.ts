import { Product, Category, Brand, PaymentMethod, DeliveryMethod, ExchangeRate } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Cafea Boabe',
    description: 'Boabe de cafea premium de la cei mai buni producători din lume.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Cafea Măcinată',
    description: 'Cafea măcinată perfect pentru espressoare și filtre.',
    image: 'https://images.pexels.com/photos/942801/pexels-photo-942801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Accesorii',
    description: 'Tot ce ai nevoie pentru prepararea cafelei perfecte acasă.',
    image: 'https://images.pexels.com/photos/6311988/pexels-photo-6311988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const brands: Brand[] = [
  {
    id: 1,
    name: 'Lavazza',
    logo: 'https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Marca italiană de cafea premium cu tradiție din 1895.'
  },
  {
    id: 2,
    name: 'Illy',
    logo: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Cafea de înaltă calitate, cu un echilibru perfect între aciditate și aromă.'
  },
  {
    id: 3,
    name: 'Tchibo',
    logo: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Companie germană cunoscută pentru produse de calitate și prețuri accesibile.'
  }
];

export const products: Product[] = [
  // Cafea Boabe
  {
    id: 1,
    name: 'Lavazza Qualità Oro',
    description: 'Amestec de boabe Arabica 100%, cu aromă intensă și notă de fructe. Prăjire medie, ideală pentru espresso și cafea la filtru.',
    price: 79.99,
    category: 'Cafea Boabe',
    categoryId: 1,
    brand: 'Lavazza',
    image: 'https://images.pexels.com/photos/4820714/pexels-photo-4820714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isNew: true,
    attributes: [
      { name: 'Origine', value: 'America Centrală, Africa' },
      { name: 'Prăjire', value: 'Medie' },
      { name: 'Intensitate', value: '5/10' },
      { name: 'Cantitate', value: '1kg' },
      { name: 'Arome', value: 'Fructe, ciocolată, miere' }
    ]
  },
  {
    id: 2,
    name: 'Illy Classico',
    description: 'Blend clasic de 9 soiuri de cafea Arabica, prăjire medie, cu note de caramel și ciocolată.',
    price: 89.99,
    category: 'Cafea Boabe',
    categoryId: 1,
    brand: 'Illy',
    image: 'https://images.pexels.com/photos/7129156/pexels-photo-7129156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isBestseller: true,
    attributes: [
      { name: 'Origine', value: 'America de Sud, India' },
      { name: 'Prăjire', value: 'Medie' },
      { name: 'Intensitate', value: '6/10' },
      { name: 'Cantitate', value: '250g' },
      { name: 'Arome', value: 'Caramel, ciocolată, flori' }
    ]
  },
  {
    id: 3,
    name: 'Tchibo Barista',
    description: 'Cafea premium cu note aromate de ciocolată neagră și fructe uscate, ideală pentru espresso.',
    price: 69.99,
    category: 'Cafea Boabe',
    categoryId: 1,
    brand: 'Tchibo',
    image: 'https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    attributes: [
      { name: 'Origine', value: 'Ethiopia, Columbia' },
      { name: 'Prăjire', value: 'Medie-întunecată' },
      { name: 'Intensitate', value: '7/10' },
      { name: 'Cantitate', value: '500g' },
      { name: 'Arome', value: 'Ciocolată neagră, fructe uscate' }
    ]
  },
  
  // Cafea Măcinată
  {
    id: 4,
    name: 'Lavazza Crema e Gusto',
    description: 'Cafea măcinată pentru espressor, amestec de Arabica și Robusta, intensă și cremoasă.',
    price: 49.99,
    category: 'Cafea Măcinată',
    categoryId: 2,
    brand: 'Lavazza',
    image: 'https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isBestseller: true
  },
  {
    id: 5,
    name: 'Illy Espresso Măcinat',
    description: 'Cafea Arabica măcinată fin pentru espressor, cu gust bogat și cremos.',
    price: 59.99,
    category: 'Cafea Măcinată',
    categoryId: 2,
    brand: 'Illy',
    image: 'https://images.pexels.com/photos/6542391/pexels-photo-6542391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isNew: true
  },
  {
    id: 6,
    name: 'Tchibo Exclusive',
    description: 'Cafea măcinată cu un gust echilibrat, potrivită pentru filtru și ibric.',
    price: 39.99,
    category: 'Cafea Măcinată',
    categoryId: 2,
    brand: 'Tchibo',
    image: 'https://images.pexels.com/photos/10630241/pexels-photo-10630241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
  // Accesorii
  {
    id: 7,
    name: 'French Press Premium',
    description: 'French press din sticlă și inox, pentru prepararea unei cafele aromate și intense.',
    price: 129.99,
    category: 'Accesorii',
    categoryId: 3,
    brand: 'Lavazza',
    image: 'https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Râșniță Manuală',
    description: 'Râșniță de cafea manuală cu mecanism ceramic, pentru o măcinare perfectă.',
    price: 159.99,
    category: 'Accesorii',
    categoryId: 3,
    brand: 'Illy',
    image: 'https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isNew: true
  },
  {
    id: 9,
    name: 'Set Cești Espresso',
    description: 'Set de 6 cești de espresso din porțelan, cu farfurioare asortate.',
    price: 99.99,
    category: 'Accesorii',
    categoryId: 3,
    brand: 'Tchibo',
    image: 'https://images.pexels.com/photos/3527786/pexels-photo-3527786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isBestseller: true
  }
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'cash',
    name: 'Ramburs',
    description: 'Plata la livrare, în numerar sau cu cardul.'
  },
  {
    id: 'transfer',
    name: 'Transfer Bancar',
    description: 'Plata în avans prin ordin de plată (transfer bancar).'
  }
];

export const deliveryMethods: DeliveryMethod[] = [
  {
    id: 'post',
    name: 'Serviciul Poștal',
    description: 'Livrare prin Poșta Română în 3-5 zile lucrătoare.',
    price: 15
  },
  {
    id: 'courier',
    name: 'Curier Rapid',
    description: 'Livrare prin curier în 1-2 zile lucrătoare.',
    price: 20
  }
];

export const exchangeRates: ExchangeRate[] = [
  {
    currency: 'RON',
    rate: 1,
    symbol: 'Lei'
  },
  {
    currency: 'EUR',
    rate: 0.2,
    symbol: '€'
  },
  {
    currency: 'USD',
    rate: 0.22,
    symbol: '$'
  }
];

export const VAT_RATE = 0.19; // 19% TVA