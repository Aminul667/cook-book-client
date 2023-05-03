import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-14">
      <div class="relative flex flex-col items-center h-screen overflow-hidden">
        <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
          <h1 class="text-3xl font-semibold text-center text-gray-700">
            Login
          </h1>
          <form class="space-y-4">
            <div>
              <label class="label">
                <span class="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                class="w-full input input-bordered"
              />
            </div>
            <div>
              <label class="label">
                <span class="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="w-full input input-bordered"
              />
            </div>
            <p className="text-xs text-gray-600">
            Don't have an account? Please,
            <Link to='/register' className="hover:underline hover:text-blue-600">Register</Link>
            </p>
            <div>
              <button class="btn btn-block">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
