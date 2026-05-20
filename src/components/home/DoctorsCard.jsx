'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaStar } from 'react-icons/fa';

const DoctorsCard = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -15 }}
      className="bg-white border border-gray-100 p-5 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full transition-transform duration-500 group-hover:scale-150 opacity-50" />

      <div className="relative w-full h-72 mb-6 overflow-hidden rounded-3xl bg-gray-100 shadow-inner">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/50">
          <p className="text-[11px] font-bold text-gray-700 flex items-center gap-1.5">
            <FaStethoscope className="text-blue-600" />
            {doctor.experience} Years Exp.
          </p>
        </div>
      </div>

      <div className="text-center md:text-left relative z-10">
        {/* Rating */}
        <div className="flex justify-center md:justify-start gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-xs ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">(4.8)</span>
        </div>

        <h3 className="text-xl font-extrabold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
          {doctor.name}
        </h3>

        <p className="text-blue-500 text-sm font-semibold mb-6 mt-1">
          {doctor.specialty || 'Senior Specialist'}
        </p>

        <Link
          href={`/doctors/${doctor._id}`}
          className="block w-full text-center py-3.5 bg-gray-900 text-white font-bold rounded-2xl transition-all duration-300 
                     hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default DoctorsCard;
