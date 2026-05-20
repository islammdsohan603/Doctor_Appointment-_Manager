'use client';

import { Tabs } from '@heroui/react';
import DeletModeal from './DeletModeal';
import UpdataData from './UpdataData';
import { authClient } from '@/lib/auth-client';
import { CalendarDays, Mail, Phone, UserRound, Clock3 } from 'lucide-react';
import UpdataProfile from './UpdataProfile';

const TabSection = ({ data }) => {
  const { data: session } = authClient.useSession();

  const users = session?.user;

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-50 via-white to-blue-50 py-12">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h1 className="text-4xl font-black text-gray-800">
              Patient Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Manage your appointments and profile easily
            </p>
          </div>

          <div className="rounded-2xl bg-white px-5 py-3 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Total Appointments</p>

            <h2 className="text-3xl font-bold text-blue-600">{data.length}</h2>
          </div>
        </div>

        {/* Tabs */}
        <Tabs className="w-full">
          <Tabs.ListContainer className="mb-10 flex justify-center">
            <Tabs.List className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
              <Tabs.Tab
                id="booking"
                className="rounded-xl px-6 py-3 text-sm font-semibold"
              >
                My Booking
                <Tabs.Indicator />
              </Tabs.Tab>

              <Tabs.Tab
                id="profile"
                className="rounded-xl px-6 py-3 text-sm font-semibold"
              >
                My Profile
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>

          {/* Booking Panel */}
          <Tabs.Panel id="booking">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {data.map(book => (
                <div
                  key={book._id}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/80 backdrop-blur-lg p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Top Glow */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-cyan-500 to-blue-600"></div>

                  {/* Profile */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-2xl font-bold text-white shadow-lg">
                      {book.name?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {book.name}
                      </h2>

                      <p className="text-sm text-gray-400">
                        Appointment Patient
                      </p>
                    </div>
                  </div>

                  {/* Doctor */}
                  <div className="mb-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <p className="flex items-center gap-2 text-sm text-gray-700">
                      <UserRound className="h-4 w-4 text-blue-600" />

                      <span className="font-semibold">Doctor:</span>

                      {book.patientName}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Phone className="h-4 w-4" />
                        Phone
                      </div>

                      <span className="font-semibold text-gray-800">
                        {book.phone}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Mail className="h-4 w-4" />
                        Gender
                      </div>

                      <span className="font-semibold text-gray-800">
                        {book.gender}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock3 className="h-4 w-4" />
                        Time
                      </div>

                      <span className="font-semibold text-blue-600">
                        {book.appointmentTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-500">
                        <CalendarDays className="h-4 w-4" />
                        Date
                      </div>

                      <span className="font-semibold text-gray-800">
                        {book.appointmentDate}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex-1">
                      <UpdataData book={book} />
                    </div>

                    <div className="flex-1">
                      <DeletModeal book={book} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {data.length === 0 && (
              <div className="mt-20 rounded-[2rem] border border-dashed border-gray-300 bg-white p-20 text-center shadow-sm">
                <h2 className="text-3xl font-bold text-gray-700">
                  No Bookings Found
                </h2>

                <p className="mt-3 text-gray-400">
                  Your appointments will appear here.
                </p>
              </div>
            )}
          </Tabs.Panel>

          {/* Profile Panel */}
          <Tabs.Panel id="profile">
            <div className="mx-auto max-w-lg overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/80 backdrop-blur-lg shadow-2xl">
              {/* Cover */}
              <div className="h-40 bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

              {/* Profile Content */}
              <div className="relative px-8 pb-10">
                {/* Avatar */}
                <div className="-mt-16 flex justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-linear-to-br from-cyan-500 to-blue-600 text-5xl font-black text-white shadow-xl">
                    {users?.name?.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* User Info */}
                <div className="mt-6 text-center">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {users?.name}
                  </h2>

                  <p className="mt-2 text-gray-500">{users?.email}</p>

                  <div className="mt-6 flex justify-center">
                    <div className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
                      Active Member
                    </div>
                  </div>
                </div>

                {/* Extra Info */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gray-50 p-5 text-center">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {data.length}
                    </h3>

                    <p className="text-sm text-gray-400">Total Appointments</p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-5 text-center">
                    <h3 className="text-2xl font-bold text-gray-800">24/7</h3>

                    <p className="text-sm text-gray-400">Medical Support</p>
                  </div>

                  <div>
                    <UpdataProfile user={users} />
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabSection;
