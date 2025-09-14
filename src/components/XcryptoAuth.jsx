import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"; // Lucide icons
import img from "../assets/btc.png";
import { auth } from "../firebase";
import { signup, login } from "../authWrapper";
import { useNavigate } from "react-router-dom";

const XcryptoAuth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Toast state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  // Toast notification function
  const showToastNotification = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    // Auto hide after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  // Signup handler
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
    try {
      await signup(email, password);
      showToastNotification("🎉 Welcome to Xcrypto! Account created successfully!", "success");
      // Reset form
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setActiveTab("login");
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Signup error:", err);
      if (err.code === 'auth/email-already-in-use') {
        alert("This email is already registered. Please try logging in instead.");
      } else if (err.code === 'auth/invalid-email') {
        alert("Please enter a valid email address.");
      } else if (err.code === 'auth/weak-password') {
        alert("Password is too weak. Please choose a stronger password.");
      } else if (err.code === 'auth/operation-not-allowed') {
        alert("Email/password accounts are not enabled. Please contact support.");
      } else if (err.message && err.message.includes('_getRecaptchaConfig')) {
        alert("Authentication service is temporarily unavailable. Please try again later.");
      } else {
        alert(`Signup failed: ${err.message}`);
      }
    }
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      await login(loginEmail, loginPassword);
      showToastNotification("🚀 Welcome back! Login successful!", "success");
      // Reset form
      setLoginEmail("");
      setLoginPassword("");
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === 'auth/user-not-found') {
        alert("No account found with this email. Please sign up first.");
      } else if (err.code === 'auth/wrong-password') {
        alert("Incorrect password. Please try again.");
      } else if (err.code === 'auth/invalid-email') {
        alert("Please enter a valid email address.");
      } else if (err.code === 'auth/invalid-credential') {
        alert("Invalid credentials. Please check your email and password.");
      } else if (err.code === 'auth/too-many-requests') {
        alert("Too many failed attempts. Please try again later.");
      } else if (err.code === 'auth/operation-not-allowed') {
        alert("Email/password accounts are not enabled. Please contact support.");
      } else if (err.message && err.message.includes('_getRecaptchaConfig')) {
        alert("Authentication service is temporarily unavailable. Please try again later.");
      } else {
        alert(`Login failed: ${err.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      <div className="w-full max-w-md p-6 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src={img}
            alt="Xcrypto Bitcoin Logo"
            className="w-1/2 h-1/2 object-contain mx-auto"
          />

          <h1 className="text-3xl font-bold text-xcrypto-text mb-2">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent drop-shadow-lg">
              Xcrypto
            </span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Welcome to the future of trading 🚀
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 mb-6 bg-card/50 border border-border/50 backdrop-blur-lg rounded-lg p-1 shadow-[var(--shadow-card)]">
          {["login", "register"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-md font-medium text-sm transition-all duration-500 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-primary/30 to-primary-glow/30 text-primary border border-primary/40 shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground hover:text-card-foreground"
              }`}
            >
              {tab === "login" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* Shared Card Style */}
        <div className="border-border/20 bg-gradient-to-br from-card-glass to-card/20 backdrop-blur-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-shadow duration-500 rounded-2xl p-6">
          {activeTab === "login" ? (
            <>
              {/* Login Header */}
              <div className="space-y-1 mb-6 text-center">
                <h2 className="text-2xl font-semibold text-card-foreground">
                  Sign in to your account
                </h2>
                <b className="text-muted-foreground text-sm">
                  Enter your credentials to access your portfolio
                </b>
              </div>

              {/* Login Form */}
              <form className="space-y-4" onSubmit={handleLogin}>
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-card-foreground block"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                   <input
  id="email"
  type="email"
  placeholder="name@example.com"
  value={loginEmail}
  onChange={(e) => setLoginEmail(e.target.value)}
  className="w-full pl-10 pr-3 py-2 bg-input border border-input-border rounded-md 
             focus:border-primary/60 focus:ring-2 focus:ring-primary/40 focus:outline-none 
             text-white placeholder:text-gray-400 transition-all duration-300"
/>

                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-card-foreground block"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                   <input
  placeholder="Enter password"
  id="password"
  type={showPassword ? "text" : "password"}
  value={loginPassword}
  onChange={(e) => setLoginPassword(e.target.value)}
  className="w-full pl-10 pr-10 py-2 bg-input border border-input-border rounded-md 
             focus:border-primary/60 focus:ring-2 focus:ring-primary/40 focus:outline-none 
             text-white placeholder:text-gray-400 transition-all duration-300"
/>

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold h-11 rounded-md shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Sign In
                </button>

                {/* Forgot Password */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => alert("Password reset functionality coming soon!")}
                    className="text-sm text-primary hover:text-primary-glow transition-colors underline-offset-4 hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Forgot your password?
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              {/* Register Header */}
              <div className="space-y-1 mb-6 text-center">
                <h2 className="text-2xl font-semibold text-card-foreground">
                  Create an account
                </h2>
                <b  className="text-muted-foreground text-sm text-xl">
                Start you crypto journey today with Xcrypto
                </b>
              </div>

              {/* Register Form */}
              <form className="space-y-4" onSubmit={handleSignup}>
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="register-email"
                    className="text-sm font-medium text-card-foreground block"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
  id="register-email"
  type="email"
  placeholder="name@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full pl-10 pr-3 py-2 bg-input border border-input-border rounded-md 
             focus:border-primary/60 focus:ring-2 focus:ring-primary/40 focus:outline-none 
             text-white placeholder:text-gray-400 transition-all duration-300"
/>

                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label
                    htmlFor="register-password"
                    className="text-sm font-medium text-card-foreground block"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
  placeholder="Enter password"
  id="register-password"
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full pl-10 pr-10 py-2 bg-input border border-input-border rounded-md 
             focus:border-primary/60 focus:ring-2 focus:ring-primary/40 focus:outline-none 
             text-white placeholder:text-gray-400 transition-all duration-300"
/>

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                  <label
                    htmlFor="confirm-password"
                    className="text-sm font-medium text-card-foreground block"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
  placeholder="Confirm password"
  id="confirm-password"
  type={showConfirmPassword ? "text" : "password"}
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="w-full pl-10 pr-10 py-2 bg-input border border-input-border rounded-md 
             focus:border-primary/60 focus:ring-2 focus:ring-primary/40 focus:outline-none 
             text-white placeholder:text-gray-400 transition-all duration-300"
/>

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold h-11 rounded-md shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Create Account
                </button>

                {/* Terms */}
                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our{" "}
                  <button
                    type="button"
                    onClick={() => alert("Terms of Service coming soon!")}
                    className="text-primary hover:text-primary-glow transition-colors underline-offset-4 hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => alert("Privacy Policy coming soon!")}
                    className="text-primary hover:text-primary-glow transition-colors underline-offset-4 hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
      
      {/* Beautiful Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className={`relative flex items-center p-4 rounded-lg shadow-lg backdrop-blur-md border transition-all duration-300 ${
            toastType === "success" 
              ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 text-green-100" 
              : "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400/30 text-red-100"
          }`}>
            {/* Icon */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
              toastType === "success" 
                ? "bg-green-500/30" 
                : "bg-red-500/30"
            }`}>
              {toastType === "success" ? (
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            
            {/* Message */}
            <div className="flex-1">
              <p className="text-sm font-medium">{toastMessage}</p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setShowToast(false)}
              className="flex-shrink-0 ml-3 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-b-lg animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};





export default XcryptoAuth;
