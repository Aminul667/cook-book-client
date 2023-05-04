import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if(password.length < 6){
      setError('Password can not be less than six character');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(createdUser, name, photo);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="relative flex flex-col items-center h-screen overflow-hidden">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Register
          </h1>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="label">
                <span className="text-base label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full input input-bordered"
              />
            </div>
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
                <span className="text-base label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
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
            <p className='text-red-500'>{error}</p>
            <div>
              <button className="btn btn-block">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
