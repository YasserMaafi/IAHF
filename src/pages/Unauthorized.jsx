import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
          <div className="px-10 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">403</h1>
            <h2 className="text-2xl font-semibold text-white mb-6">Unauthorized Access</h2>
            <p className="text-white/80 mb-8">
              You don't have permission to access this page. Please contact your administrator.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-indigo-600 bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition"
            >
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;