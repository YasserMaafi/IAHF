import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // Fetch programs from your backend
    axios.get('http://localhost:5000/api/programs') 
      .then(res => setPrograms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 text-white">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to IAHF</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">Your path to professional training and career success</p>
        <div className="space-x-4">
          <Link to="/programs" className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-white/90 transition">
            Explore Programs
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-white rounded-lg hover:bg-white/20 transition">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.length === 0 ? (
            <p>Loading programs...</p>
          ) : (
            programs.map((program) => (
              <div key={program.id} className="bg-white/10 rounded-lg p-6 shadow-lg">
                <img src={program.image_url || '/default-program.jpg'} alt={program.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-sm mb-3">{program.description?.slice(0, 100)}...</p>
                <p className="text-sm font-medium mb-4">Duration: {program.duration}</p>
                <Link to={`/programs/${program.id}`} className="text-indigo-300 hover:underline">See details & Apply</Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Why Choose IAHF */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white/10 rounded-lg my-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose IAHF?</h2>
        <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside text-lg">
          <li>Accredited professional training programs</li>
          <li>Experienced and dedicated instructors</li>
          <li>Flexible schedules adapted to your needs</li>
          <li>Comprehensive support and career guidance</li>
          <li>Opportunities for internships and practical experience</li>
        </ul>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Link to="/programs" className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition">
          <h3 className="text-xl font-semibold mb-2">All Programs</h3>
          <p>Browse all our available training programs</p>
        </Link>
        <Link to="/applications" className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition">
          <h3 className="text-xl font-semibold mb-2">My Applications</h3>
          <p>Check your application status</p>
        </Link>
        <Link to="/contact" className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Get in touch with IAHF team</p>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white/20 py-6 mt-12 text-center text-white/80">
        <p>IAHF - Institut des Hautes Etudes de la Formation, Tunis, Tunisia</p>
        <p>Email: contact@iahf.tn | Phone: +216 71 234 567</p>
      </footer>
    </div>
  );
}

export default HomePage;
