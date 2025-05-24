import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { NavLink } from 'react-router';
import logo from '../assets/illustration-of-a-cooking-logo-in-solid-background-free-vector.jpg'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-700 via-green-900 to-black text-gray-300 py-10 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">

               <NavLink className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
                    <h1 className="text-3xl font-extrabold tracking-wider text-white">Recipe-Book</h1>
                </NavLink>

                <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive
                                    ? "underline border-b-2 border-blue-500 text-white"
                                    : "hover:text-green-300 transition" } >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/all-recipes" className={({ isActive }) => isActive
                                    ? "underline border-b-2 border-blue-500 text-white"
                                    : "hover:text-green-300 transition"} >
                            All Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-recipes" className={({ isActive }) => isActive
                                    ? "underline border-b-2 border-blue-500 text-white"
                                    : "hover:text-green-300 transition"} >
                            Add Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-recipes" className={({ isActive }) => isActive
                                    ? "underline border-b-2 border-blue-500 text-white"
                                    : "hover:text-green-300 transition" } >
                            My Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage" className={({ isActive }) => isActive
                                    ? "underline border-b-2 border-blue-500 text-white"
                                    : "hover:text-green-300 transition" } >
                            Blog
                        </NavLink>
                    </li>
                </ul>





                <div className="space-y-1 text-sm md:text-base">
                    <p>Email: <a className="hover:text-green-400 transition">recipebook@mail.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="hover:text-green-400 transition">+1 234 567 890</a></p>
                </div>

                <div className="flex space-x-8 text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-400 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-400 transition">
                        <FaXTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-400 transition">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} RecipeBook. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
