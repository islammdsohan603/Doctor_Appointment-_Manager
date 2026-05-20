'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaStar, FaCheckCircle } from 'react-icons/fa';

const WhatSay = () => {
  const reviews = [
    {
      id: 1,
      initials: 'S.W.',
      name: 'Sarah Williams',
      text: '"The level of care I received was beyond anything I\'ve experienced. From the concierge support to the specialists, everything was handled with absolute precision."',
    },
    {
      id: 2,
      initials: 'M.T.',
      name: 'Michael Thompson',
      text: '"The technology and expertise available here is truly world-class. Being able to secure an appointment with a top specialist so quickly changed my outlook on recovery."',
    },
    {
      id: 3,
      initials: 'E.C.',
      name: 'Elaine Chen',
      text: '"Medica (care that finally feels personal). MedPrecision combines elite specialists with a digital experience that actually respects the patient\'s time and privacy."',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24 overflow-hidden">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative bg-[#0f172a] rounded-[40px] p-8 md:p-16 overflow-hidden text-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-lg space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold leading-tight"
            >
              The Future of Your <br />
              <span className="text-blue-400">Health Begins Today</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed"
            >
              Join the most advanced medical ecosystem today and gain priority
              access to the world&apos;s leading specialists with zero friction.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-semibold transition-all border border-slate-700"
              >
                Information for Doctors
              </motion.button>
            </div>
          </div>

          <motion.div
            className="relative hidden md:block"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="bg-white text-slate-900 p-6 rounded-3xl shadow-2xl w-80 transform rotate-3">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Ultra-Secure</h4>
                  <p className="text-xs text-gray-500">
                    ISO 27001 Data Encryption
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">
                  Quick Access
                </p>
                <p className="text-sm font-medium">24/7 Premium Support Line</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-10 text-8xl font-black text-slate-800/50 select-none">
              HEALTH
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500">
            Trusted by thousands for our unwavering commitment to precision and
            compassionate care.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map(review => (
            <motion.div
              key={review.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between h-full cursor-default"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <div className="flex gap-1 text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6">
                  {review.text}
                </p>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-bold text-[10px] uppercase tracking-wider">
                <FaCheckCircle />
                <span>Verified Patient</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default WhatSay;
