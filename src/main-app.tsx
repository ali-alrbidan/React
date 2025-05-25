
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router , Routes, useNavigate } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./rootPages/Dashboard";
import PublicPage from "./rootPages/PublicPage";

export default function MainApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  setIsAuthenticated(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function ProtectedRoute({ children, isAuthenticated }: {children: React.ReactNode; isAuthenticated: boolean}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}