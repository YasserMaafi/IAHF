import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';

function ProgramsPage() {
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/programs');
        setPrograms(res.data);
        setFilteredPrograms(res.data);
      } catch (err) {
        setError('Failed to load programs. Please try again later.');
        console.error('Failed to fetch programs', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  // Define local images for specific programs
  const programImages = {
    "Développement Web Full Stack": '/src/assets/fullstack.png',
    "Maintenance Informatique": '/src/assets/maintenance.jpeg',
    "Marketing Digital": '/src/assets/Marketing.png',
    "Comptable d’Entreprise (BTP)": '/src/assets/COMPT.jpeg',
    "Commerce et Distribution (BTP)": '/src/assets/commerce.png',
    "Soutien en Informatique de Gestion (BTP)": '/src/assets/informatique de gestion.avif',
    "Secrétariat (BTP)": '/src/assets/secreteriat.jpeg',
    "Formalités Douanières (BTP)": '/src/assets/formalité.png',
    "Comptabilité et Finance (BTS)": '/src/assets/comptablilité.jpeg',
    "Commerce International (BTS)": '/src/assets/commerce international.png',
    "Informatique de Gestion (BTS)": '/src/assets/info de gestion.jpg',
    "Assistant(e) de Direction (BTS)": '/src/assets/assistant de direction.jpeg',
    "Marketing et Multimédia (BTS)": '/src/assets/Marketing et multimédia.jpg'
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredPrograms(programs);
    } else {
      const filtered = programs.filter(p => p.category?.toLowerCase() === category.toLowerCase());
      setFilteredPrograms(filtered);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading programs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg max-w-md text-center">
          <h3 className="font-medium mb-2">Error Loading Programs</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
            Nos Formations
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Découvrez nos programmes de formation professionnelle</p>
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

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => handleCategoryChange('BTP')}
              className={`px-8 py-3 rounded-md font-bold transition-all ${
                selectedCategory === 'BTP'
                  ? 'bg-green-800 text-white shadow-md'
                  : 'text-green-800 hover:bg-green-50'
              }`}
            >
              Formation BTP
            </button>
            <button
              onClick={() => handleCategoryChange('BTS')}
              className={`px-8 py-3 rounded-md font-bold transition-all ${
                selectedCategory === 'BTS'
                  ? 'bg-green-800 text-white shadow-md'
                  : 'text-green-800 hover:bg-green-50'
              }`}
            >
              Formation BTS
            </button>
          </div>
        </div>

        {filteredPrograms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No programs available for this category.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => {
              const imgSrc = programImages[program.title] || program.image_url || '/src/assets/default-program.jpg';

              return (
                <div 
                  key={program.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={imgSrc}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/src/assets/default-program.jpg';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-green-800 text-white text-xs px-3 py-1 rounded-full">
                      {program.category || 'Formation'}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {program.description || 'No description available'}
                    </p>

                    <div className="space-y-3 mb-5">
                      <div className="flex items-center text-sm text-gray-700">
                        <FiClock className="mr-2 text-yellow-600" />
                        {program.duration || 'Flexible duration'}
                      </div>
                      {program.start_date && (
                        <div className="flex items-center text-sm text-gray-500">
                          <FiCalendar className="mr-2 text-green-600" />
                          Starts: {new Date(program.start_date).toLocaleDateString()}
                        </div>
                      )}
                    </div>

                    <Link
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center font-medium text-green-800 hover:text-green-600 transition-colors"
                    >
                      View details <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default ProgramsPage;
