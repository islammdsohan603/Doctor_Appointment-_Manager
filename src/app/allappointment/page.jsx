'use client';

import DoctorsCard from '@/components/home/DoctorsCard';
import { getDoctorData } from '@/db/data';
import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

const AllAppiontment = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctors = await getDoctorData();
      setData(doctors);
    };

    fetchDoctors();
  }, []);

  // Search Filter
  const filteredDoctors = data.filter(doctor =>
    doctor.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Expert Specialists
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Find your favorite doctor easily
          </p>
        </div>

        <div className="relative w-full md:w-[350px]">
          {/* Search Icon */}
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          />

          {/* Input */}
          <input
            type="search"
            placeholder="Search your doctor..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-5 py-3 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <DoctorsCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
              No Doctor Found
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try searching another doctor name.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppiontment;
