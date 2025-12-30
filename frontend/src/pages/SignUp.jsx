import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const SignUp = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const submitData = async()=>{
    // console.log(data);
    if(data.username === '' || data.email === ''|| data.password===''){
      alert('All fields are required')
    }else{
      axios.post()
    }
  }
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-3xl font-semibold text-center mb-2">Sign Up</div>
        <input
          className=" bg-gray-700 px-3 py-2 rounded w-full mt-3"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={change}
          value={data.username}
        />
        <input
          className=" bg-gray-700 px-3 py-2 rounded w-full mt-3"
          type="email"
          name="email"
          id="email"
          placeholder="xyz@example.com"
          onChange={change}
          value={data.email}
          required
        />
        <input
          className=" bg-gray-700 px-3 py-2 rounded w-full mt-3 mb-3"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={change}
          value={data.password}
          required
        />
        <div className="w-full flex justify-between items-center">
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl cursor-pointer font-semibold"
          onClick={submitData}>
            Sign Up
          </button>
          <Link to="/login" className="text-gray-400 hover:text-gray-200">
            Already having account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
