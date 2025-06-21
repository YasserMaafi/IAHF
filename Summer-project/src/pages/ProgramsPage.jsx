import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';

function ProgramsPage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/programs');
        setPrograms(res.data);
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Training Programs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Transform your career with our industry-leading courses
          </p>
        </div>

        {programs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No programs available at the moment.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              // Determine image source with fallbacks
              const imgSrc = programImages[program.title] || program.image_url || '/src/assets/default-program.jpg';

              return (
                <div 
                  key={program.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image with fallback handling */}
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={imgSrc}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/src/assets/default-program.jpg';
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                      {program.category || 'Development'}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {program.description || 'No description available'}
                    </p>

                    <div className="space-y-3 mb-5">
                      <div className="flex items-center text-sm text-gray-500">
                        <FiClock className="mr-2 text-indigo-500" />
                        {program.duration || 'Flexible duration'}
                      </div>
                      {program.start_date && (
                        <div className="flex items-center text-sm text-gray-500">
                          <FiCalendar className="mr-2 text-indigo-500" />
                          Starts: {new Date(program.start_date).toLocaleDateString()}
                        </div>
                      )}
                    </div>

                    <Link
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      View details <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramsPage;