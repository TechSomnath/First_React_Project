import React, { useState } from "react";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaUser,
  FaLock,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, rememberMe });
    // Add authentication logic here
  };

  const handleSocialLogin = (provider) => {
    switch (provider) {
      case "github":
        window.location.href =
          "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID";
        break;
      case "google":
      case "facebook":
      case "linkedin":
        alert(
          `${
            provider.charAt(0).toUpperCase() + provider.slice(1)
          } login will be implemented.`
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 p-4 relative overflow-hidden">
      {/* Floating background animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 150 + 50;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;
          const opacity = Math.random() * 0.3 + 0.1;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-200 to-indigo-200"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity,
                animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
                filter: "blur(10px)",
              }}
            />
          );
        })}
      </div>

      {/* Login Box */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden z-10 border border-white/30 transform transition-all hover:scale-[1.01]">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-center text-white">
          <h1 className="text-2xl font-bold">Professional Login</h1>
          <p className="text-blue-100 opacity-90">
            Access your DroitLab account
          </p>
        </div>

        <div className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome back!
            </h2>
            <p className="text-gray-600 mt-1">
              Enter to get unlimited access to data & information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              Sign In
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
              <button
                onClick={() => handleSocialLogin("github")}
                className="bg-gray-800 text-white hover:bg-gray-900 border border-gray-300 rounded-lg py-2 px-4 shadow-sm transition-all"
              >
                <FaGithub />
              </button>
              <button
                onClick={() => handleSocialLogin("google")}
                className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg py-2 px-4 shadow-sm transition-all"
              >
                <FaGoogle className="text-red-500" />
              </button>
              <button
                onClick={() => handleSocialLogin("facebook")}
                className="bg-white text-blue-600 hover:bg-gray-50 border border-gray-300 rounded-lg py-2 px-4 shadow-sm transition-all"
              >
                <FaFacebook />
              </button>
              <button
                onClick={() => handleSocialLogin("linkedin")}
                className="bg-white text-blue-700 hover:bg-gray-50 border border-gray-300 rounded-lg py-2 px-4 shadow-sm transition-all"
              >
                <FaLinkedin />
              </button>
            </div>
          </div>

          {/* Registration Link */}
          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center w-full z-10">
        <a
          href="#"
          className="text-sm text-blue-600 hover:text-blue-500 font-medium inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            />
          </svg>
          Get in touch with our team
        </a>
      </div>

      {/* Global Styles */}
      <style jsx="true" global="true">{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
