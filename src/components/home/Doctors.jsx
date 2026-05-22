import { getData } from '@/db/data';
import { connection } from 'next/server';
import Link from 'next/link';
import React from 'react';
import DoctorsCard from './DoctorsCard';
import { FaArrowRightLong } from 'react-icons/fa6';

const Doctors = async () => {
  const data = await getData();

  return (
    <section className="w-10/12 mx-auto py-16">
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
            World Class Specialists <br />
            <span className="text-blue-600 dark:text-blue-400">
              at Your Service
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
            Connect with the most experienced and highly rated doctors in the
            country.
          </p>
        </div>

        <Link
          href={`/allappointment`}
          className="group flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
        >
          View All Doctors
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map(doctor => (
          <DoctorsCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default Doctors;
