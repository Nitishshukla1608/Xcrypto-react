import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"; // Lucide icons
import img from "../assets/btc.png";

const XcryptoAuth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              <form className="space-y-4">
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
                  <a
                    href="#"
                    className="text-sm text-primary hover:text-primary-glow transition-colors underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
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
              <form className="space-y-4">
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
  id="email"
  type="email"
  placeholder="name@example.com"
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
  id="password"
  type={showPassword ? "text" : "password"}
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
  id="password"
  type={showPassword ? "text" : "password"}
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
                  <a
                    href="#"
                    className="text-primary hover:text-primary-glow transition-colors underline-offset-4 hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-primary hover:text-primary-glow transition-colors underline-offset-4 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default XcryptoAuth;
