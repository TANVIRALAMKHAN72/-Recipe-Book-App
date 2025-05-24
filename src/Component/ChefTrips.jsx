import React from 'react';
import { GiHerbsBundle } from "react-icons/gi";
import { ImFire } from "react-icons/im";
import { GiCurvyKnife } from "react-icons/gi";
import { TfiTimer } from "react-icons/tfi";
import { Fade, Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";




const ChefTrips = () => {
    return (
         <div>
      <section className="px-6 py-12 bg-base-300 text-center">
        <Fade>
          <h2 className="text-3xl font-bold mb-10 text-gray-500">Chef’s Tips</h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Zoom triggerOnce>
            <div className="px-4 py-6 bg-white rounded-xl shadow-md">
              <GiHerbsBundle className="text-green-700 mx-auto mb-5" size={50} />
              <h3 className="font-bold mb-2 text-xl text-gray-700">Use Fresh Herbs</h3>
              <p className="font-semibold text-gray-500">Fresh herbs enhance flavor. Add them at the end for best results.</p>
            </div>
          </Zoom>

          <Zoom triggerOnce delay={100}>
            <div className="px-4 py-6 bg-white rounded-xl shadow-md">
              <ImFire className="text-orange-500 mx-auto mb-5" size={50} />
              <h3 className="font-bold mb-2 text-xl text-gray-700">Preheat Your Pan</h3>
              <p className="font-semibold text-gray-500">A hot pan helps prevent sticking and gives a nice sear.</p>
            </div>
          </Zoom>

          <Zoom triggerOnce delay={200}>
            <div className="px-4 py-6 bg-white rounded-xl shadow-md">
              <GiCurvyKnife className="text-gray-800 mx-auto mb-5" size={50} />
              <h3 className="font-bold mb-2 text-xl text-gray-700">Sharp Knife Saves Time</h3>
              <p className="font-semibold text-gray-500">Chopping with a sharp knife is safer and faster. Keep it sharp!</p>
            </div>
          </Zoom>

          <Zoom triggerOnce delay={300}>
            <div className="px-4 py-6 bg-white rounded-xl shadow-md">
              <TfiTimer className="text-blue-500 mx-auto mb-5" size={50} />
              <h3 className="font-bold text-xl mb-2 text-gray-700">Don’t Rush the Process</h3>
              <p className="font-semibold text-gray-500">Let flavors develop slowly, especially for stews and sauces.</p>
            </div>
          </Zoom>

        </div>
      </section>
    </div>
    );
};

export default ChefTrips;