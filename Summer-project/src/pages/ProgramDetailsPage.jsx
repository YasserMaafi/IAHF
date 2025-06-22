import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function ProgramDetailsPage() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [error, setError] = useState('');
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/programs/${id}`)
      .then(res => {
        setProgram(res.data);
        setError('');
      })
      .catch(() => setError('Program not found'))
      .finally(() => setLoading(false));
  }, [id]);

const [message, setMessage] = useState('');
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
      setError('Please login to apply');
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
    setError(err.response?.data?.error || 'Failed to apply');
  } finally {
    setLoading(false);
  }
};



  // Define local images for specific programs
  const programImages = {
    "Développement Web Full Stack": '/src/assets/fullstack.png',
    "Maintenance Informatique": '/src/assets/maintenance.jpeg',
    "Marketing Digital": '/src/assets/Marketing.png',
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Loading program details...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    </div>
  );

  if (!program) return null;

  // Determine image source with fallbacks
  const imgSrc = programImages[program.title] || program.image_url || '/src/assets/default-program.jpg';

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Program Image with fallback handling */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-8 h-64 bg-gray-200">
          <img
            src={imgSrc}
            alt={program.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/src/assets/default-program.jpg';
            }}
          />
        </div>

        {/* Program Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
              {program.category || 'Development'}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{program.title}</h1>
            <div className="mt-3 flex items-center text-sm text-gray-500">
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {program.duration || 'Flexible duration'}
            </div>
          </div>

          <div className="prose max-w-none mb-8 text-gray-700">
            <p>{program.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Program Dates</h3>
                <p className="text-lg font-medium text-gray-900">
                  {program.start_date 
                    ? `${new Date(program.start_date).toLocaleDateString()} - ${new Date(program.end_date).toLocaleDateString()}`
                    : 'Rolling admissions'}
                </p>
              </div>

                {!applied ? (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      handleApply();
    }}
    className="w-full space-y-4"
  >
    <div>
      <label className="block text-sm font-medium text-gray-700">Full Name</label>
      <input
        type="text"
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
        required
        className="w-full p-3 border rounded-md"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full p-3 border rounded-md"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        className="w-full p-3 border rounded-md"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Address</label>
      <input
        type="text"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
        className="w-full p-3 border rounded-md"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Education Level</label>
      <select
        value={formData.education_level}
        onChange={(e) => setFormData({ ...formData, education_level: e.target.value })}
        required
        className="w-full p-3 border rounded-md"
      >
        <option value="">Select</option>
        <option value="Baccalauréat">Baccalauréat</option>
        <option value="Licence">Licence</option>
        <option value="Master">Master</option>
        <option value="Doctorat">Doctorat</option>
        <option value="Autre">Autre</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Motivation Message</label>
      <textarea
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-3 border rounded-md"
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className={`w-full py-3 px-4 rounded-md text-white font-medium ${
        loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
      }`}
    >
      {loading ? 'Submitting...' : 'Submit Application'}
    </button>
  </form>
) : (
  <div className="inline-flex items-center px-4 py-2 rounded-md bg-green-100 text-green-800">
    ✅ Application Submitted
  </div>
)}



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetailsPage;