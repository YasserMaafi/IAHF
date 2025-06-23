// Import necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import components
import Header from './components/Header';
// Import page components
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage.jsx';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage.jsx';
import ProgramDetailsPage from './pages/ProgramDetailsPage.jsx';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import StagePage from './pages/StagePage';
import FormationsPage from './pages/FormationsPage';
import Unauthorized from './pages/Unauthorized';
// Import custom PrivateRoute component for role-based access control
import PrivateRoute from './components/PrivateRoute';
// Import React hooks
import { useEffect, useState } from 'react';
// Import axios for HTTP requests
import axios from 'axios';

function App() {
  // State for storing a message (initially 'Loading...')
  const [msg, setMsg] = useState('Loading...');

  // useEffect hook runs once when component mounts (empty dependency array [])
  useEffect(() => {
    // Make a GET request to backend API
    axios.get('http://localhost:5000/api')
      .then(res => {
        // If successful, update message with response data
        setMsg(res.data.message);
      })
      .catch(err => {
        // If error, update message to show connection error
        setMsg('Error connecting to backend');
      });
  }, []); // Empty array means this effect runs only once on mount

  return (
    // Router component wraps all route-related components
    <Router>
      <div>
        <Header />
        {/* Routes component defines all route paths */}
        <Routes>
          {/* Public route for login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Public route for Signup page */}

          <Route path="/signup" element={<SignupPage />} />

          <Route path="/Home" element={<HomePage />} />

          <Route path="/Programs" element={<ProgramsPage />} />

          <Route path="/programs/:id" element={<ProgramDetailsPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/stage" element={<StagePage />} />

          <Route path="/formations" element={<FormationsPage />} />
          
          {/* Route for unauthorized access attempts */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Protected admin route - only accessible to users with 'admin' role */}
          <Route
            path="/admin"
            element={
              // PrivateRoute wrapper checks user authentication and role
              <PrivateRoute allowedRoles={['admin']}>
                {/* AdminPage is only rendered if user has 'admin' role */}
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;