import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaQuoteLeft } from 'react-icons/fa';





const Review = () => {
  return (
    <section className="py-12 text-center bg-base-300">
     <Fade>
       <h2 className="text-3xl font-bold mb-10 text-gray-500">What Foodies Are Saying</h2>
     </Fade>
      <Fade cascade damping={0.2} triggerOnce>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-500 hover:-translate-y-2 transition duration-300">
            <FaQuoteLeft className="text-2xl text-gray-400 mb-4 mx-auto" />
            <p className="font-bold">"Absolutely love this site! So easy to find new recipes to try."</p>
            <h4 className="mt-6 font-semibold text-xl">— Fajla Rabbi</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-500 hover:-translate-y-2 transition duration-300">
            <FaQuoteLeft className="text-2xl text-gray-400 mb-4 mx-auto" />
            <p className="font-bold">"I've added 3 of my grandma’s recipes. This app is a blessing!"</p>
            <h4 className="mt-6 font-semibold text-xl">— Fahad Rabbi</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-500 hover:-translate-y-2 transition duration-300">
            <FaQuoteLeft className="text-2xl text-gray-400 mb-4 mx-auto" />
            <p className="font-bold">"The like feature and top recipes section are super motivating."</p>
            <h4 className="mt-6 font-semibold text-xl">— Afrin Akter</h4>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Review;
