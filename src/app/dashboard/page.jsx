import React from 'react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import UpdataData from '@/components/UpdataData';
import DeletModeal from '@/components/DeletModeal';
import TabSection from '@/components/TabSection';

const DashBord = async () => {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) {
    redirect('/login');
  }

  const tokenData = await auth.api.getToken({
    headers: headersList,
  });

  const email = session.user?.email;
  const token = tokenData?.token;

  let data = [];
  if (email && token) {
    try {
      const getData = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings?email=${encodeURIComponent(email)}`,
        {
          cache: 'no-store',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        },
      );
      if (getData.ok) {
        data = await getData.json();
      } else {
        console.error("Failed to fetch bookings. Status:", getData.status);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }

  if (!Array.isArray(data)) {
    data = [];
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-10/12  mx-auto">
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

        <div className="my-6">
          <TabSection data={data} />
        </div>
      </div>
    </div>
  );
};

export default DashBord;
