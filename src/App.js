import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
import InsightsPage from "./components/InsightsPage";
import Blogs from "./components/Blogs";
import HistoryPage from "./components/HistoryPage";
import { PrivateRoute } from "./AuthContext";
import { SignIn, SignUp } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="/sign-in" element={
          <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            <div className="absolute w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
            <div className="absolute w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
            <div className="w-full max-w-md p-6 relative z-10">
              <SignIn routing="path" path="/sign-in" />
            </div>
          </div>
        } />
        <Route path="/sign-up" element={
          <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            <div className="absolute w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
            <div className="absolute w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
            <div className="w-full max-w-md p-6 relative z-10">
              <SignUp routing="path" path="/sign-up" />
            </div>
          </div>
        } />
        <Route path="/InsightsPage" element={<InsightsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/history" element={<PrivateRoute><HistoryPage /></PrivateRoute>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
