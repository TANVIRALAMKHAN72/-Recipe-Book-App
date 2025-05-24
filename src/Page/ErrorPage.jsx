import React from 'react';
import { Link } from 'react-router';
import { GiBowlOfRice } from "react-icons/gi";








const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-orange-100 via-yellow-200 to-red-100 flex flex-col items-center justify-center text-center px-4">
            <GiBowlOfRice className=" text-red-500 animate-bounce" size={80}/>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
                404 - Not Found
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-md mb-8 font-bold">
                Looks like the recipe you're hungry for doesn't exist!  
            </p>

            <Link
                to="/"
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
