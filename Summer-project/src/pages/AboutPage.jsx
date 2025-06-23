import { FiUsers, FiAward, FiBriefcase, FiTarget } from 'react-icons/fi';

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* African-Themed Header */}
      <header className="relative bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/IAHF_logo.png')] opacity-10"></div>
        <div className="absolute top-5 right-5 w-24 h-24 opacity-50">
          <img src="/src/assets/charte iahf 1.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-5 left-5 w-20 h-20 opacity-45">
          <img src="/src/assets/charte iahf 2.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            À Propos de l'IAHF
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Institut Africain de Haute Formation</p>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="absolute top-5 right-5 w-20 h-20 opacity-35">
          <img src="/src/assets/charte iahf 3.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-30">
          <img src="/src/assets/charte iahf 5.png" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Notre Mission</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              L'Institut Africain de Haute Formation (IAHF) est un établissement d'enseignement supérieur privé 
              spécialisé dans la formation professionnelle et technique. Notre mission est de former des techniciens 
              qualifiés répondant aux besoins du marché du travail tunisien et africain.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous offrons des formations de qualité dans les domaines du BTP (Bâtiment et Travaux Publics) 
              et du BTS (Brevet de Technicien Supérieur), avec un focus sur l'excellence académique et 
              l'insertion professionnelle.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/src/assets/IMG_2172.JPG" 
              alt="IAHF Campus" 
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Nos Valeurs</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-green-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans tous nos programmes de formation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Communauté</h3>
              <p className="text-gray-600">
                Un environnement d'apprentissage collaboratif et bienveillant
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBriefcase className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professionnalisme</h3>
              <p className="text-gray-600">
                Formation pratique orientée vers le monde professionnel
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTarget className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Méthodes pédagogiques modernes et innovantes
              </p>
            </div>
          </div>
        </div>

        {/* Campus Images */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Notre Campus</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/IMG_2191.JPG" 
                alt="Salle de classe" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Salles de Classe Modernes</h3>
                <p className="text-gray-600 text-sm">Équipements pédagogiques de pointe</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/IMG_2196.JPG" 
                alt="Laboratoire" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Laboratoires Techniques</h3>
                <p className="text-gray-600 text-sm">Espaces pratiques pour l'apprentissage</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/IMG_2257.JPG" 
                alt="Espace étudiant" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Espaces Étudiants</h3>
                <p className="text-gray-600 text-sm">Lieux de détente et d'échange</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-green-800 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">L'IAHF en Chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-200">Étudiants Formés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-200">Programmes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-green-200">Taux d'Insertion</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-green-200">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;