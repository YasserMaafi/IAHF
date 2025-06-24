import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiClock, FiCalendar, FiChevronDown, FiChevronUp, FiBookOpen } from 'react-icons/fi';

function FormationDetailsPage() {
  const { id } = useParams();
  const [formation, setFormation] = useState(null);
  const [error, setError] = useState('');
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/programs/${id}`)
      .then(res => {
        if (res.data.category === 'Formation Continue') {
          setFormation(res.data);
          setError('');
        } else {
          setError('Cette formation n\'est pas disponible');
        }
      })
      .catch(() => setError('Formation non trouvée'))
      .finally(() => setLoading(false));
  }, [id]);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    education_level: '',
    message: ''
  });

  const handleApply = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Veuillez vous connecter pour postuler');
        return;
      }

      setLoading(true);
      await axios.post('http://localhost:5000/api/applications',
        { program_id: id, ...formData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setApplied(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        address: '',
        education_level: '',
        message: ''
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Échec de la candidature');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-800"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
        {error}
      </div>
    </div>
  );

  if (!formation) return null;

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
            {formation.title}
          </h1>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
      </header>

      <section className="relative max-w-4xl mx-auto px-6 py-16">
        <div className="absolute top-5 right-5 w-20 h-20 opacity-35">
          <img src="/src/assets/charte iahf 3.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-30">
          <img src="/src/assets/charte iahf 5.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="relative h-64 bg-gray-100">
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

          <div className="p-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">{formation.title}</h2>
            
            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center text-gray-700">
                <FiClock className="mr-2 text-yellow-600" />
                <span className="font-medium">Durée:</span> {formation.duration || '2-3 mois'}
              </div>
              {formation.start_date && (
                <div className="flex items-center text-gray-700">
                  <FiCalendar className="mr-2 text-green-600" />
                  <span className="font-medium">Début:</span> {new Date(formation.start_date).toLocaleDateString()}
                </div>
              )}
            </div>

            <div className="prose max-w-none mb-8 text-gray-700">
              <p className="text-lg leading-relaxed">{formation.description}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FiBookOpen className="mr-2 text-green-600" />
                Ce que vous apprendrez
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Maîtrise des compétences techniques spécifiques
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Applications pratiques en contexte professionnel
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Méthodologies et outils actuels du secteur
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Certification reconnue par les employeurs
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full flex items-center justify-between px-6 py-4 bg-green-800 text-white rounded-lg font-bold hover:bg-green-700 transition-all"
              >
                <span>{applied ? 'Candidature Soumise' : 'Postuler à cette Formation'}</span>
                {!applied && (showForm ? <FiChevronUp /> : <FiChevronDown />)}
              </button>

              {showForm && !applied && (
                <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleApply();
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet</label>
                        <input
                          type="text"
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Niveau d'Éducation</label>
                        <select
                          value={formData.education_level}
                          onChange={(e) => setFormData({ ...formData, education_level: e.target.value })}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Sélectionner</option>
                          <option value="Baccalauréat">Baccalauréat</option>
                          <option value="Licence">Licence</option>
                          <option value="Master">Master</option>
                          <option value="Doctorat">Doctorat</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message de Motivation</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Pourquoi souhaitez-vous suivre cette formation ?"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-3 px-4 rounded-lg text-white font-bold transition-all ${
                        loading ? 'bg-gray-400' : 'bg-green-800 hover:bg-green-700'
                      }`}
                    >
                      {loading ? 'Envoi en cours...' : 'Soumettre la Candidature'}
                    </button>
                  </form>
                </div>
              )}
              
              {applied && (
                <div className="mt-6 flex items-center justify-center px-4 py-3 bg-green-100 text-green-800 rounded-lg">
                  <span className="font-medium">✅ Candidature Soumise avec Succès</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormationDetailsPage;