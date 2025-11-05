import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-3xl font-semibold text-center mb-2">Login</div>
        <input
          className=" bg-gray-700 px-3 py-2 rounded w-full mt-3"
          type="text"
          name="username"
          id=""
          placeholder="Username"
        />
        <input
          className=" bg-gray-700 px-3 py-2 rounded w-full mt-3 mb-3"
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between items-center">
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl cursor-pointer font-semibold">
            Login
          </button>
          <Link to='/signup' className="text-gray-400 hover:text-gray-200">Not having account? Sign Up here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
