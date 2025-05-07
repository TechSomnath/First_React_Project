import React from "react";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center px-4 h-[130vh] bg-green-950 pt-[100px]">
      <div className="bg-white text-black p-9 max-w-lg w-full rounded-lg shadow-md">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          Login to Your Account
        </h2>
        <form className="space-y-4" action="">
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
          <div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
        </form>
        <div className="mt-6 space-y-2">
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500 transition duration-300 ease-in-out flex items-center justify-center">
            Login with Google <FaGoogle className="ml-1" />
          </button>
          <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out flex items-center justify-center">
            Login with GitHub <FaGithub className="ml-1" />
          </button>
        </div>
        <div className="text-center mt-6 text-sm text-gray-700">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-green-800 font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
