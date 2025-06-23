import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b-2 border-green-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/src/assets/IAHF_logo.png" alt="IAHF" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-green-800">IAHF</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/') ? 'text-green-800 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Accueil
            </Link>
            
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-green-800 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              À Propos
            </Link>

            <Link
              to="/programs"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/programs') ? 'text-green-800 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Programmes
            </Link>

            <Link
              to="/formations"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/formations') ? 'text-green-800 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Formations
            </Link>

            <Link
              to="/stage"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/stage') ? 'text-green-800 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Stage
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-green-800 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/home"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                À Propos
              </Link>
              <Link
                to="/programs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Programmes
              </Link>
              <Link
                to="/formations"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Formations
              </Link>
              <Link
                to="/stage"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Stage
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;