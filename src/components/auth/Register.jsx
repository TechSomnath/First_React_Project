import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-[150vh] px-4 py-10 bg-green-950 pt-[135px]">
      <div className="w-full max-w-lg p-6 md:p-9 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-green-800">
          Create Your Account
        </h2>
        <form className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Re-enter your password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-green-800 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Register
            </button>
          </div>

          {/* Social Media Buttons */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google & GitHub Login Buttons */}
          <div className="mt-6 space-y-2">
            <button className="w-full py-2 text-white bg-red-600 rounded hover:bg-red-500 transition duration-300 ease-in-out flex items-center justify-center">
              Register with Google <FaGoogle className="ml-1" />
            </button>
            <button className="w-full py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300 ease-in-out flex items-center justify-center">
              Register with GitHub <FaGithub className="ml-1" />
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-700">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-800 hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
