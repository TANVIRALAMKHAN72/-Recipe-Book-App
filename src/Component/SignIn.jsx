import React, { useState, useContext } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthProvider.jsx'; 
import axios from 'axios';
import { toast } from 'react-toastify';

const SignIn = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const saveUserToDB = async (user) => {
    try {
      const userProfile = {
        email: user.email,
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
      };

      await axios.post('https://recipe-book-server-chi.vercel.app/users', userProfile);
    } catch (error) {
      console.error('Failed to save user to database:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      const user = result.user;
      await saveUserToDB(user);
      toast.success('Login successful!');
  
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Login failed: ' + error.message);
    }
  };


  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      const user = result.user;
      await saveUserToDB(user);
      toast.success('Google login successful!');
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Google login failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-base-300 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign in to Recipe Book</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-600 font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute top-10 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            
          </div>
           <p className="mt-4  text-sm text-gray-600">
          <Link to="/forgot-password" className="text-blue-500 hover:underline font-medium">
            Forgot password?
          </Link>
        </p>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-gray-400">
          <hr className="flex-grow border-gray-300" />
          Or
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
