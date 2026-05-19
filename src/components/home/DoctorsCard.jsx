'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

const DoctorsCard = ({ doctor }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white border border-gray-100 p-5 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative w-full h-72 mb-6 overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <p className="text-xs font-bold text-gray-700 flex items-center gap-1">
            <FaStethoscope className="text-blue-500" /> {doctor.experience} Exp.
          </p>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {doctor.name}
        </h3>

        <p className="text-blue-500 text-sm font-medium mb-4">
          {doctor.specialty || 'Senior Specialist'}
        </p>

        <Link
          href={`/doctors/${doctor._id}`}
          className="block w-full text-center py-3 bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-sm"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default DoctorsCard;
