import React from 'react';
import { connection } from 'next/server';
import UpdataData from '@/components/UpdataData';
import DeletModeal from '@/components/DeletModeal';

const DashBord = async () => {
  await connection();

  const getData = await fetch('http://localhost:5000/bookings', {
    cache: 'no-store',
  });
  const data = await getData.json();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Appointment Dashboard
            </h1>
            <p className="text-gray-500 mt-2">
              Manage all your patient bookings efficiently
            </p>
          </div>
          <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Total Bookings: {data.length}
          </div>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(book => (
            <div
              key={book._id}
              className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Patient & Doctor Info */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {book.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                      {book.name}
                    </h2>
                    <p className="text-xs text-gray-400">Patient</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Doctor:</span>{' '}
                    {book.patientName}{' '}
                  </p>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <span className="font-medium">{book.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gender:</span>
                  <span className="font-medium">{book.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time:</span>
                  <span className="font-medium text-blue-600">
                    {book.appointmentTime}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                <div>
                  {' '}
                  <UpdataData book={book} />{' '}
                </div>
                <div>
                  <DeletModeal book={book} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (If no data) */}
        {data.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No bookings found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBord;
