'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-linear-to-b from-sky-100 to-white">
      <div className="container mx-auto w-10/12 px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block"
          >
            ⭐ Trusted by 10,000+ Patients
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Your Health, Our <br />
            <span className="text-blue-600">Precision Care.</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Experience the next generation of healthcare. Book appointments with
            top-rated specialists effortlessly and get the care you deserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-12">
            <Link
              href="/signup"
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 active:scale-95 w-full sm:w-auto text-center"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Details
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#fff] text-black p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-2xl"
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center md:items-start px-4 md:px-0">
              <span className="text-2xl md:text-3xl font-bold">15k+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-900 font-bold">
                Verified Patients
              </span>
            </div>

            <div className="hidden md:block w-[1px] h-12 bg-gray-700"></div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center md:items-start px-4 md:px-8">
              <span className="text-2xl md:text-3xl font-bold">500+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-900 font-bold">
                Top Specialists
              </span>
            </div>

            <div className="hidden md:block w-[1px] h-12 bg-gray-700"></div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center md:items-start px-4 md:px-0">
              <span className="text-2xl md:text-3xl font-bold">99%</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-900 font-bold">
                Success Rate
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full max-w-lg"
        >
          <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-50 animate-bounce [animation-duration:5s]"></div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full h-[400px] md:h-[550px] z-10"
          >
            <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-30 scale-75"></div>
            <Image
              src={'/banner.png'}
              alt="Doctor Banner"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 -left-5 md:-left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3 hidden md:flex z-20"
          >
            <div className="bg-green-500 p-2 rounded-full shadow-lg shadow-green-200">
              <span className="text-white font-bold text-xs">✓</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                Patient Rating
              </p>
              <p className="font-extrabold text-gray-800 text-sm">
                4.9/5.0 ⭐⭐⭐⭐⭐
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-20 -right-5 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3 hidden md:flex z-20"
          >
            <div className="bg-blue-500 p-2 rounded-full shadow-lg shadow-blue-200">
              <span className="text-white text-lg">👨‍⚕️</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                Our Specialists
              </p>
              <p className="font-extrabold text-gray-800 text-sm">
                200+ Expert Doctors
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 right-0 p-3 bg-white rounded-full shadow-lg z-20 hidden md:block"
          >
            <span className="text-2xl">💊</span>
          </motion.div>

          <motion.div
            animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-40 -left-5 p-3 bg-white rounded-full shadow-lg z-20 hidden md:block"
          >
            <span className="text-2xl">🩺</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
