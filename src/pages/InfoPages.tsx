import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Termeni și Condiții - CafeaNoastră';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Termeni și Condiții</h1>
        
        <div className="prose max-w-none">
          <p>
            Bine ați venit pe site-ul CafeaNoastră. Vă rugăm să citiți cu atenție următorii termeni și condiții înainte de a utiliza site-ul nostru.
          </p>
          
          <h2>1. Acceptarea Termenilor</h2>
          <p>
            Prin accesarea și utilizarea site-ului nostru, confirmați că ați citit, înțeles și sunteți de acord să respectați acești termeni și condiții, împreună cu Politica noastră de Confidențialitate.
          </p>
          
          <h2>2. Utilizarea Site-ului</h2>
          <p>
            Site-ul CafeaNoastră este destinat utilizării personale și necomerciale. Nu aveți permisiunea să modificați, copiați, distribuiți, transmiteți, afișați, executați, reproduceți, publicați, licențiați, creați lucrări derivate, transferați sau vindeți informații obținute de pe acest site.
          </p>
          
          <h2>3. Contul Utilizatorului</h2>
          <p>
            Pentru a efectua comenzi pe site-ul nostru, trebuie să creați un cont. Sunteți responsabil pentru menținerea confidențialității datelor de conectare și pentru restricționarea accesului la contul dvs. Vă asumați responsabilitatea pentru toate activitățile care se desfășoară sub contul dvs.
          </p>
          
          <h2>4. Produse și Prețuri</h2>
          <p>
            Ne străduim să prezentăm cât mai precis produsele noastre, dar nu garantăm că descrierile sau alte conținuturi ale site-ului sunt exacte, complete, de încredere, actuale sau lipsite de erori. Prețurile afișate pe site sunt în Lei (RON) și includ TVA.
          </p>
          
          <h2>5. Comenzi și Plăți</h2>
          <p>
            Prin plasarea unei comenzi, faceți o ofertă de a cumpăra produsele la prețurile indicate. Comenzile sunt supuse disponibilității și acceptării. Metodele de plată acceptate sunt afișate în timpul procesului de finalizare a comenzii.
          </p>
          
          <h2>6. Livrare</h2>
          <p>
            Livrăm în toată România prin serviciile specificate în secțiunea "Cum se Livrează". Timpul de livrare și costurile asociate sunt indicate în timpul procesului de finalizare a comenzii.
          </p>
          
          <h2>7. Dreptul de Retragere</h2>
          <p>
            Conform legislației în vigoare, aveți dreptul de a vă retrage din contract în termen de 14 zile de la data la care dvs. sau un terț desemnat de dvs. intră în posesia fizică a produselor, fără a preciza motivul.
          </p>
          
          <h2>8. Garanție</h2>
          <p>
            Toate produsele comercializate pe site-ul nostru beneficiază de garanție conform legislației în vigoare și specificațiilor producătorului.
          </p>
          
          <h2>9. Proprietate Intelectuală</h2>
          <p>
            Toate conținuturile site-ului, inclusiv texte, grafică, logo-uri, imagini, clipuri audio, descărcări digitale și compilații de date, sunt proprietatea CafeaNoastră sau a furnizorilor săi de conținut și sunt protejate de legile române și internaționale privind drepturile de autor.
          </p>
          
          <h2>10. Modificarea Termenilor</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările intră în vigoare la data publicării pe site. Utilizarea continuă a site-ului după publicarea modificărilor constituie acceptarea acestora.
          </p>
          
          <h2>11. Legea Aplicabilă</h2>
          <p>
            Acești termeni și condiții sunt guvernați și interpretați în conformitate cu legile din România. Orice dispută care rezultă din sau în legătură cu utilizarea site-ului va fi supusă jurisdicției exclusive a instanțelor din România.
          </p>
          
          <h2>12. Contact</h2>
          <p>
            Pentru întrebări sau clarificări privind acești termeni și condiții, vă rugăm să ne contactați la adresa de email: contact@cafeanoastra.ro sau prin formularul de <Link to="/contact" className="text-amber-600 hover:underline">contact</Link>.
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Politica de Confidențialitate - CafeaNoastră';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Politica de Confidențialitate</h1>
        
        <div className="prose max-w-none">
          <p>
            Protecția datelor dumneavoastră cu caracter personal este importantă pentru noi, prin urmare acordăm o atenție deosebită protejării vieții private a vizitatorilor care accesează site-ul nostru.
          </p>
          
          <h2>1. Informații Colectate</h2>
          <p>
            Când vizitați site-ul nostru, colectăm automat anumite informații despre dispozitivul dvs., inclusiv informații despre browser-ul web, adresa IP, fusul orar și unele cookie-uri instalate pe dispozitivul dvs.
          </p>
          <p>
            În plus, când navigați pe site, colectăm informații despre paginile web sau produsele pe care le vizualizați, ce site-uri sau termeni de căutare v-au direcționat către site-ul nostru și informații despre modul în care interacționați cu site-ul.
          </p>
          <p>
            Când efectuați o achiziție sau încercați să efectuați o achiziție prin site, colectăm anumite informații de la dvs., inclusiv numele, adresa de facturare, adresa de livrare, informații de plată, adresa de e-mail și numărul de telefon.
          </p>
          
          <h2>2. Cum Utilizăm Informațiile Dvs.</h2>
          <p>
            Utilizăm informațiile pe care le colectăm pentru a:
          </p>
          <ul>
            <li>Procesa comenzile și a furniza serviciile noastre</li>
            <li>Comunica cu dvs. despre comenzi, produse, servicii și oferte promoționale</li>
            <li>Îmbunătăți și personaliza experiența dvs. pe site-ul nostru</li>
            <li>Administra programe de fidelizare, sondaje sau alte funcționalități ale site-ului</li>
            <li>Preveni activitățile frauduloase</li>
          </ul>
          
          <h2>3. Cookie-uri</h2>
          <p>
            Utilizăm cookie-uri și tehnologii similare pentru a îmbunătăți experiența dvs. de navigare, pentru a personaliza conținutul și reclamele, pentru a oferi funcții de social media și pentru a analiza traficul nostru.
          </p>
          <p>
            Puteți controla cookie-urile prin setările browser-ului dvs. Rețineți că dezactivarea cookie-urilor poate afecta funcționalitatea site-ului nostru.
          </p>
          
          <h2>4. Partajarea Informațiilor</h2>
          <p>
            Nu vindem, comercializăm sau transferăm în alt mod către exterior informațiile dvs. personale de identificare, cu excepția următoarelor situații:
          </p>
          <ul>
            <li>Furnizorilor de servicii care ne ajută să operăm site-ul nostru, să ne desfășurăm activitatea sau să vă servim (procesatori de plăți, companii de curierat)</li>
            <li>Autorităților, atunci când considerăm că divulgarea este necesară pentru a respecta legea</li>
            <li>Pentru a proteja drepturile, proprietatea sau siguranța noastră, a clienților noștri sau a altora</li>
          </ul>
          
          <h2>5. Drepturile Dvs.</h2>
          <p>
            Conform Regulamentului General privind Protecția Datelor (GDPR), aveți următoarele drepturi:
          </p>
          <ul>
            <li>Dreptul de acces la datele personale</li>
            <li>Dreptul la rectificarea datelor</li>
            <li>Dreptul la ștergerea datelor</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul de a vă opune prelucrării</li>
            <li>Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată</li>
          </ul>
          <p>
            Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați folosind informațiile furnizate în secțiunea "Contact".
          </p>
          
          <h2>6. Securitatea Datelor</h2>
          <p>
            Implementăm o varietate de măsuri de securitate pentru a menține siguranța informațiilor dvs. personale. Utilizăm criptarea pentru a proteja informațiile sensibile transmise online și securizăm rețelele noastre pentru a proteja informațiile dvs. împotriva accesului neautorizat.
          </p>
          
          <h2>7. Modificări ale Politicii de Confidențialitate</h2>
          <p>
            Ne rezervăm dreptul de a modifica această politică de confidențialitate în orice moment. Modificările și clarificările vor intra în vigoare imediat după publicarea lor pe site. Vă încurajăm să verificați periodic această politică pentru a fi informat despre modul în care protejăm informațiile dvs.
          </p>
          
          <h2>8. Contact</h2>
          <p>
            Dacă aveți întrebări despre această politică de confidențialitate, practicile acestui site sau relația dvs. cu acest site, vă rugăm să ne contactați la:
          </p>
          <p>
            Email: contact@cafeanoastra.ro<br />
            Telefon: +40 721 234 567<br />
            Adresa: Strada Cafenelei, Nr. 42, București, România
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>
      </div>
    </div>
  );
};

export const GDPRPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'GDPR - CafeaNoastră';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Politica de Prelucrare a Datelor cu Caracter Personal (GDPR)</h1>
        
        <div className="prose max-w-none">
          <p>
            În conformitate cu prevederile Regulamentului (UE) 2016/679 al Parlamentului European și al Consiliului din 27 aprilie 2016 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date (GDPR), CafeaNoastră se angajează să protejeze datele dvs. personale.
          </p>
          
          <h2>1. Operatorul de Date</h2>
          <p>
            Operatorul de date este CafeaNoastră SRL, cu sediul în Strada Cafenelei, Nr. 42, București, România, înregistrată la Registrul Comerțului sub nr. J40/1234/2018, CUI: RO12345678.
          </p>
          
          <h2>2. Tipuri de Date Prelucrate</h2>
          <p>
            Prelucrăm următoarele categorii de date cu caracter personal:
          </p>
          <ul>
            <li>Date de identificare: nume, prenume</li>
            <li>Date de contact: adresă email, număr telefon, adresă poștală</li>
            <li>Date de facturare și livrare</li>
            <li>Date despre achiziții și preferințe</li>
            <li>Date tehnice: adresa IP, cookie-uri, informații despre dispozitiv</li>
          </ul>
          
          <h2>3. Scopurile Prelucrării</h2>
          <p>
            Prelucrăm datele dvs. personale în următoarele scopuri:
          </p>
          <ul>
            <li>Procesarea și gestionarea comenzilor</li>
            <li>Crearea și administrarea contului de client</li>
            <li>Livrarea produselor și comunicarea informațiilor legate de comandă</li>
            <li>Marketing direct (cu consimțământ explicit)</li>
            <li>Îmbunătățirea serviciilor noastre</li>
            <li>Respectarea obligațiilor legale</li>
          </ul>
          
          <h2>4. Temeiul Legal pentru Prelucrare</h2>
          <p>
            Prelucrăm datele dvs. personale în baza următoarelor temeiuri legale:
          </p>
          <ul>
            <li>Executarea contractului (pentru procesarea comenzilor)</li>
            <li>Consimțământul dvs. (pentru marketing direct)</li>
            <li>Interesele noastre legitime (pentru îmbunătățirea serviciilor)</li>
            <li>Obligațiile legale (pentru păstrarea facturilor)</li>
          </ul>
          
          <h2>5. Perioada de Păstrare</h2>
          <p>
            Păstrăm datele dvs. personale atât timp cât este necesar pentru scopurile menționate și în conformitate cu obligațiile legale. În general:
          </p>
          <ul>
            <li>Datele contului: pe durata existenței contului plus 2 ani</li>
            <li>Datele comenzilor: 10 ani (obligații fiscale)</li>
            <li>Datele de marketing: până la retragerea consimțământului</li>
          </ul>
          
          <h2>6. Destinatarii Datelor</h2>
          <p>
            Putem partaja datele dvs. personale cu:
          </p>
          <ul>
            <li>Procesatori de plăți</li>
            <li>Servicii de curierat</li>
            <li>Furnizori de servicii IT</li>
            <li>Autorități publice (conform obligațiilor legale)</li>
          </ul>
          
          <h2>7. Drepturile Dvs.</h2>
          <p>
            Conform GDPR, beneficiați de următoarele drepturi:
          </p>
          <ul>
            <li>Dreptul de acces la datele personale</li>
            <li>Dreptul la rectificarea datelor inexacte</li>
            <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul de a vă opune prelucrării</li>
            <li>Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată</li>
            <li>Dreptul de a depune o plângere la autoritatea de supraveghere</li>
          </ul>
          
          <h2>8. Cum vă Exercitați Drepturile</h2>
          <p>
            Pentru a vă exercita oricare dintre drepturile de mai sus, vă rugăm să ne contactați prin:
          </p>
          <ul>
            <li>Email: gdpr@cafeanoastra.ro</li>
            <li>Telefon: +40 721 234 567</li>
            <li>Poștă: Strada Cafenelei, Nr. 42, București, România</li>
          </ul>
          <p>
            Vom răspunde solicitării dvs. în termen de 30 de zile. Această perioadă poate fi prelungită cu două luni atunci când este necesar, ținând seama de complexitatea și numărul cererilor.
          </p>
          
          <h2>9. Plângeri</h2>
          <p>
            Dacă considerați că prelucrarea datelor dvs. personale încalcă prevederile GDPR, aveți dreptul să depuneți o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) - www.dataprotection.ro.
          </p>
          
          <h2>10. Modificări ale Politicii GDPR</h2>
          <p>
            Ne rezervăm dreptul de a actualiza și modifica periodic această politică pentru a reflecta orice modificări în modul în care prelucrăm datele dvs. personale sau pentru a respecta modificările legislative. Vă încurajăm să revizuiți periodic această politică.
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>
      </div>
    </div>
  );
};

export const PaymentInfoPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Cum se Plătește - CafeaNoastră';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Cum se Plătește</h1>
        
        <div className="prose max-w-none">
          <p>
            La CafeaNoastră, facem tot posibilul pentru a asigura un proces de plată simplu și sigur. Vă oferim diverse metode de plată pentru a vă satisface preferințele.
          </p>
          
          <h2>Metode de Plată Disponibile</h2>
          
          <div className="space-y-6 my-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">1. Ramburs (Plata la livrare)</h3>
              <p>
                Puteți plăti în numerar sau cu cardul la momentul livrării comenzii.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Avantaje:</strong> Plătiți doar după ce inspectați produsele, nu necesită card bancar.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Disponibilitate:</strong> În toată România.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">2. Transfer Bancar (Ordin de plată)</h3>
              <p>
                Puteți efectua plata prin transfer bancar în contul nostru bancar.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Cum funcționează:</strong> După plasarea comenzii, veți primi un email cu detaliile contului nostru bancar și suma exactă de plătit. Comanda va fi procesată și expediată după confirmarea plății.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Detalii cont:</strong><br />
                Beneficiar: CafeaNoastră SRL<br />
                Banca: Banca Transilvană<br />
                IBAN: RO12 BTRL 0000 0000 1234 5678<br />
                Cod Swift: BTRLRO22
              </p>
            </div>
          </div>
          
          <h2>Procesul de Plată</h2>
          <ol>
            <li>
              <strong>Alegeți produsele</strong> și adăugați-le în coșul de cumpărături.
            </li>
            <li>
              <strong>Mergeți la pagina de checkout</strong> și completați informațiile de livrare.
            </li>
            <li>
              <strong>Selectați metoda de plată preferată</strong> dintre opțiunile disponibile.
            </li>
            <li>
              <strong>Finalizați comanda</strong> și urmați instrucțiunile specifice metodei de plată selectate.
            </li>
          </ol>
          
          <h2>Factură</h2>
          <p>
            Pentru fiecare comandă veți primi o factură fiscală. Aceasta va fi inclusă în pachet la livrare și/sau trimisă pe email.
          </p>
          
          <h2>Comisioane de Plată</h2>
          <p>
            Nu percepem comisioane suplimentare pentru nicio metodă de plată. Prețurile afișate pe site includ TVA.
          </p>
          
          <h2>Siguranța Plăților</h2>
          <p>
            Securitatea datelor dvs. este prioritatea noastră. Procesăm toate plățile în conformitate cu cele mai recente standarde de securitate și nu stocăm informații sensibile despre cardul dvs. bancar pe serverele noastre.
          </p>
          
          <h2>Întrebări Frecvente</h2>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold">Cât timp durează procesarea plății prin transfer bancar?</h3>
              <p>
                În general, transferurile bancare pot dura între 1-3 zile lucrătoare pentru a fi procesate de bănci. Odată ce primim confirmarea plății, comanda dvs. va fi pregătită pentru expediere.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Ce se întâmplă dacă refuz plata la livrare?</h3>
              <p>
                Dacă refuzați primirea coletului, acesta va fi returnat la depozitul nostru. Vă rugăm să ne contactați dacă aveți nelămuriri privind comanda dvs. înainte de a refuza primirea.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Cum pot solicita o factură pe numele companiei?</h3>
              <p>
                În procesul de checkout, puteți selecta opțiunea "Factură pe numele companiei" și completa datele fiscale necesare (denumire companie, cod fiscal, adresă).
              </p>
            </div>
          </div>
          
          <h2>Contact</h2>
          <p>
            Pentru orice întrebări legate de plăți sau facturare, vă rugăm să ne contactați la:
          </p>
          <p>
            Email: financiar@cafeanoastra.ro<br />
            Telefon: +40 721 234 567
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>
      </div>
    </div>
  );
};

export const DeliveryInfoPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Cum se Livrează - CafeaNoastră';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-6">Cum se Livrează</h1>
        
        <div className="prose max-w-none">
          <p>
            La CafeaNoastră, ne străduim să vă aducem produsele de cafea proaspăt prăjite direct la ușa dumneavoastră, în cel mai scurt timp posibil. Mai jos găsiți informații detaliate despre procesul nostru de livrare.
          </p>
          
          <h2>Metode de Livrare Disponibile</h2>
          
          <div className="space-y-6 my-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">1. Serviciul Poștal</h3>
              <p>
                Livrare standard prin Poșta Română în întreaga țară.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Timp de livrare:</strong> 3-5 zile lucrătoare
              </p>
              <p className="text-sm text-gray-600">
                <strong>Cost:</strong> 15 Lei
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">2. Curier Rapid</h3>
              <p>
                Livrare rapidă prin servicii de curierat (Fan Courier, DPD, Cargus).
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Timp de livrare:</strong> 1-2 zile lucrătoare
              </p>
              <p className="text-sm text-gray-600">
                <strong>Cost:</strong> 20 Lei
              </p>
            </div>
          </div>
          
          <h2>Procesul de Livrare</h2>
          <ol>
            <li>
              <strong>Procesarea comenzii:</strong> Odată ce comanda dvs. este confirmată și plata procesată (în cazul plății în avans), începem să pregătim produsele pentru expediere. Acest proces durează în general 24-48 ore.
            </li>
            <li>
              <strong>Ambalare:</strong> Produsele sunt ambalate cu grijă pentru a asigura integritatea lor în timpul transportului. Utilizăm materiale de ambalare ecologice ori de câte ori este posibil.
            </li>
            <li>
              <strong>Expediere:</strong> Odată ce coletul este pregătit, acesta este preluat de serviciul de livrare ales.
            </li>
            <li>
              <strong>Notificare:</strong> Veți primi un email cu confirmarea expedierii și, dacă este disponibil, un număr de urmărire pentru a vă monitoriza livrarea.
            </li>
            <li>
              <strong>Livrare:</strong> Coletul va fi livrat la adresa specificată în comandă. În cazul în care nu sunteți disponibil pentru a primi coletul, se va proceda conform politicii specifice serviciului de livrare ales.
            </li>
          </ol>
          
          <h2>Zone de Livrare</h2>
          <p>
            Livrăm în toate localitățile din România. Pentru anumite zone îndepărtate sau greu accesibile, timpul de livrare poate fi mai lung decât cel estimat standard.
          </p>
          
          <h2>Urmărirea Comenzii</h2>
          <p>
            După expediere, veți primi un email cu informații despre livrare și, dacă este disponibil, un link pentru urmărirea coletului. De asemenea, puteți verifica starea comenzii prin conectarea la contul dvs. de pe site-ul nostru.
          </p>
          
          <h2>Livrare Gratuită</h2>
          <p>
            Oferim livrare gratuită pentru comenzile cu valoare de peste 200 Lei.
          </p>
          
          <h2>Probleme de Livrare</h2>
          <p>
            În cazul în care coletul dvs. întâmpină întârzieri semnificative, este deteriorat sau pierdut în timpul transportului, vă rugăm să ne contactați cât mai curând posibil pentru a rezolva situația.
          </p>
          
          <h2>Întrebări Frecvente</h2>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold">Ce se întâmplă dacă nu sunt acasă când ajunge curierul?</h3>
              <p>
                Curierul va încerca să vă contacteze telefonic. În funcție de politica serviciului de curierat, se poate încerca o a doua livrare sau coletul poate fi lăsat la un punct de ridicare din apropiere.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Pot modifica adresa de livrare după plasarea comenzii?</h3>
              <p>
                Da, puteți solicita modificarea adresei de livrare, dar numai înainte ca pachetul să fie expediat. Vă rugăm să ne contactați cât mai curând posibil cu noile detalii.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Cum pot verifica starea comenzii mele?</h3>
              <p>
                Puteți verifica starea comenzii prin contul dvs. de pe site-ul nostru, în secțiunea "Comenzile mele". De asemenea, veți primi notificări pe email privind progresul comenzii.
              </p>
            </div>
          </div>
          
          <h2>Contact</h2>
          <p>
            Pentru orice întrebări legate de livrare, vă rugăm să ne contactați la:
          </p>
          <p>
            Email: livrari@cafeanoastra.ro<br />
            Telefon: +40 721 234 567
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>
      </div>
    </div>
  );
};