import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiClock, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';

function FormationPage() {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/programs?category=Formation Continue');
        setFormations(res.data);
      } catch (err) {
        setError('Failed to load formations');
        console.error('Failed to fetch formations', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

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
            Formations Continues
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Développez vos compétences professionnelles</p>
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

        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Nos Formations Continues</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            L'IAHF propose des formations continues adaptées aux besoins du marché du travail. 
            Ces formations courtes et intensives permettent aux professionnels d'acquérir de nouvelles 
            compétences ou de perfectionner leurs connaissances existantes.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiClock className="text-green-800 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Formations Courtes</h3>
            <p className="text-gray-600 text-sm">Programmes intensifs de 2 à 4 mois</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Petits Groupes</h3>
            <p className="text-gray-600 text-sm">Encadrement personnalisé</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiAward className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Certification</h3>
            <p className="text-gray-600 text-sm">Attestation de formation</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiBookOpen className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Pratique</h3>
            <p className="text-gray-600 text-sm">Approche pratique et professionnelle</p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-800"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg text-center mb-8">
            {error}
          </div>
        )}

        {/* Formations Grid */}
        {!loading && !error && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {formations.map((formation) => (
              <div key={formation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={formation.image_url || '/src/assets/default-program.jpg'}
                    alt={formation.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = '/src/assets/default-program.jpg'}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-green-800 text-white text-xs px-3 py-1 rounded-full">
                    Formation Continue
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{formation.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{formation.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-700 mb-4">
                    <FiClock className="mr-2 text-yellow-600" />
                    <span className="font-medium">Durée:</span> {formation.duration || '2-3 mois'}
                  </div>

                  <Link
                    to={`/formations/${formation.id}`}
                    className="block w-full bg-green-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                  >
                    Voir Détails
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Formations Found */}
        {!loading && !error && formations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune formation disponible pour le moment.</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-green-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Intéressé par nos formations ?</h2>
          <p className="mb-6">Contactez-nous pour plus d'informations ou pour vous inscrire</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
            </Link>
            <a 
              href="tel:+21671234567" 
              className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-green-800 transition-colors"
            >
              +216 71 234 567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormationPage;