import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
import XcryptoAuth from "./components/XcryptoAuth";
import InsightsPage from "./components/InsightsPage";
import { AuthProvider } from "./AuthContext";
import "./recaptchaConfig"; // Initialize reCAPTCHA configuration
import ProfileSection from "./components/ProfileSection";

function App() {
  // Global error handler for reCAPTCHA errors
  useEffect(() => {
    const handleError = (event) => {
      if (event.error && event.error.message && event.error.message.includes('_getRecaptchaConfig')) {
        console.warn('reCAPTCHA error caught and handled:', event.error.message);
        event.preventDefault(); // Prevent the error from crashing the app
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/authform" element={<XcryptoAuth />} />
          <Route path="/InsightsPage" element={<InsightsPage />} />
          <Route path="/profilePage" element={<ProfileSection />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
