import React, { useEffect } from 'react';
import { Coffee, ShieldCheck, Truck, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Despre Noi - CafeaNoastră';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Despre CafeaNoastră</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Suntem pasionați de cafea și dedicați oferirii celor mai bune produse și experiențe pentru iubitorii de cafea din România.
        </p>
      </div>
      
      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Povestea Noastră</h2>
          <p className="text-gray-600 mb-4">
            CafeaNoastră a început în 2018 ca un mic magazin în centrul Bucureștiului, fondat de doi prieteni pasionați de cafeaua de specialitate.
          </p>
          <p className="text-gray-600 mb-4">
            Misiunea noastră a fost simplă: să aducem cafea de cea mai bună calitate direct la consumatori, păstrând prospețimea și aromele complexe pe care le oferă boabele proaspăt prăjite.
          </p>
          <p className="text-gray-600">
            De-a lungul anilor, am crescut și ne-am extins, dar dedicarea noastră pentru calitate a rămas neschimbată. Lucrăm direct cu fermierii și producătorii pentru a selecta cele mai bune boabe și folosim metode tradiționale de prăjire pentru a scoate în evidență caracterul unic al fiecărui soi.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src="https://images.pexels.com/photos/6608622/pexels-photo-6608622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Cafea prăjită manual" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-8 text-center">Valorile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Coffee className="text-amber-700 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Calitate Premium</h3>
            <p className="text-gray-600">
              Selectăm doar cele mai bune boabe de cafea și folosim tehnici de prăjire care scot în evidență aromele complexe.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <ShieldCheck className="text-amber-700 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Practici Etice</h3>
            <p className="text-gray-600">
              Susținem comerțul corect și plătim prețuri corecte fermierilor pentru a asigura sustenabilitatea.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Truck className="text-amber-700 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prospețime Garantată</h3>
            <p className="text-gray-600">
              Prăjim cafeaua în loturi mici și expediem rapid pentru a asigura că savurezi cafeaua la potențialul ei maxim.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="text-amber-700 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertiză</h3>
            <p className="text-gray-600">
              Echipa noastră include experți în cafea, campioni barista și profesioniști dedicați industriei.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-8 text-center">Echipa Noastră</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
              <img 
                src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Mihai Popescu" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Mihai Popescu</h3>
            <p className="text-amber-600">Expert în Cafea</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
              <img 
                src="https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ana Dumitrescu" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Ana Dumitrescu</h3>
            <p className="text-amber-600">Specialist în Prăjire</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
              <img 
                src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Andrei Ionescu" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Andrei Ionescu</h3>
            <p className="text-amber-600">Barista Senior</p>
          </div>

          <div className="text-center">
            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
              <img 
                src="https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Elena Munteanu" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Elena Munteanu</h3>
            <p className="text-amber-600">Consultant Cafea</p>
          </div>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="bg-amber-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Hai să Discutăm</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Suntem întotdeauna bucuroși să auzim de la clienții noștri și să discutăm despre cafea. 
          Fie că ai întrebări, sugestii sau pur și simplu vrei să afli mai multe despre produsele noastre, 
          nu ezita să ne contactezi.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Contactează-ne
        </a>
      </div>
    </div>
  );
};

export default AboutPage;