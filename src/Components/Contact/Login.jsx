import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-4xl font-josefin text-gray-800 mb-6 text-center">Login</h1>
        <p className="text-sm text-gray-600 font-lato mb-6 text-center">
          Please login using account details below.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-lato text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-lato"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-lato text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-lato"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-right mb-4">
            <a
              href="#"
              className="text-pink-500 text-sm font-lato hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md text-lg hover:bg-pink-600 font-lato"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-700 text-sm font-lato">
            Don't have an Account?{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
