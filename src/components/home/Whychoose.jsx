'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaStethoscope,
  FaHeadset,
  FaMicroscope,
  FaCalendarCheck,
} from 'react-icons/fa';

const Whychoose = () => {
  const features = [
    {
      title: 'Expert Doctors',
      description:
        'Only the top 1% of medical specialists, rigorously vetted for their clinical achievements.',
      icon: <FaStethoscope className="text-blue-600" />,
      bgColor: 'bg-blue-50',
    },
    {
      title: '24/7 Support',
      description:
        'Dedicated health concierges available around the clock to manage your medical journey.',
      icon: <FaHeadset className="text-green-600" />,
      bgColor: 'bg-green-50',
    },
    {
      title: 'Advanced Tech',
      description:
        'Next-generation diagnostics and AI-assisted tools for absolute clinical precision.',
      icon: <FaMicroscope className="text-purple-600" />,
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Easy Booking',
      description:
        'A streamlined, frictionless digital experience to secure appointments in seconds.',
      icon: <FaCalendarCheck className="text-orange-600" />,
      bgColor: 'bg-orange-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-white  ">
      <div className="w-10/12 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
          >
            The Standard of Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We've reimagined the patient journey to provide a seamless,
            high-performance experience that prioritizes your health outcomes
            above all else.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-xl">{item.icon}</span>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Whychoose;
