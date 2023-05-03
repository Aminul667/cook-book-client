import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error => {
        console.log(error);
    })
  };

  return (
    <div className="mt-14">
      <div className="relative flex flex-col items-center h-screen overflow-hidden">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Login
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                className="w-full input input-bordered"
              />
            </div>
            <p className="text-xs text-gray-600">
              Don't have an account? Please,
              <Link
                to="/register"
                className="hover:underline hover:text-blue-600"
              >
                Register
              </Link>
            </p>
            <div>
              <button className="btn btn-block">Login</button>
            </div>
          </form>
          <div className="my-4">
            <button className="btn btn-block">Google Sign-in</button>
          </div>
          <div>
            <button className="btn btn-block">GitHub Sign-in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
