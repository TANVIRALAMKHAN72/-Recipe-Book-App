import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider.jsx';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import registerLottie from '../assets/registerpage.json';
import Lottie from 'lottie-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const photo = formData.get('photo');

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpper) {
      setPasswordError('Password must contain at least one uppercase letter.');
      return;
    }
    if (!hasLower) {
      setPasswordError('Password must contain at least one lowercase letter.');
      return;
    }
    if (!isLongEnough) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }
    setPasswordError('');

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photo || null,
      });

      const res = await fetch('https://recipe-book-server-chi.vercel.app/users', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, name, photo }),
      });
      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been created",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', error.message, 'error');
    }
  };

  const handleGoogleRegister = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        const { displayName: name, email, photoURL: photo } = user;

        fetch('https://recipe-book-server-chi.vercel.app/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email, name, photo }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId || data.message === 'User already exists') {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully registered with Google",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
            }
          });
      })
      .catch(error => {
        console.error(error);
        Swal.fire('Error', error.message, 'error');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 my-10">
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-base-300 shadow-xl rounded-2xl p-6 w-full max-w-5xl">

        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie animationData={registerLottie} loop={true} style={{ height: '400px', width: '400px' }} />
        </div>

        <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create Account</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                name='name'
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">Photo URL</label>
              <input
                type="url"
                name='photo'
                placeholder="Photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">Your Email</label>
              <input
                type="email"
                name='email'
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
            </div>

            <div className="relative">
              <label className="block mb-1 text-gray-600 font-medium">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter a password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <button
                type="button"
                className="absolute top-10 right-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Register
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-gray-400">
            <hr className="flex-grow border-gray-300" />
            or
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition">
            <FaGoogle /> Register with Google
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
