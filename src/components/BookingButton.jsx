'use client';

import { boctorsBooking } from '@/db/data';
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import Image from 'next/image';
import { toast } from 'react-toastify';

const BookingButton = ({ data }) => {
  const { data: session } = authClient.useSession();
  const users = session?.user;

  const handleBookingAppiontment = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const usersData = Object.fromEntries(formData.entries());
    const tokenRes = await fetch('/api/auth/token');
    const tokenData = tokenRes.ok ? await tokenRes.json() : null;

    const bookingInfo = {
      ...usersData,
      email: users?.email || usersData.email,
      name: usersData.name || users?.name,
      patientId: data._id,
      patientName: data.name,
      patientGender: data.gender,
    };

    const result = await boctorsBooking(bookingInfo, tokenData?.token);

    if (result.insertedId) {
      toast.success('Appointment Booked Successfully');
      e.target.reset();
    } else {
      toast.error(result.message || 'Booking Failed');
    }
  };
  return (
    <div>
      <Modal>
        {/* Open Button */}
        <Button className="px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
          Book Appointment
        </Button>

        {/* Modal */}
        <Modal.Backdrop className="backdrop-blur-sm bg-black/40">
          <Modal.Container placement="center">
            <Modal.Dialog className="w-full max-w-2xl rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-white dark:bg-slate-900">
              <Modal.CloseTrigger />

              {/* Header */}
              <Modal.Header className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <Image
                      src={'/medical.png'}
                      alt="logo"
                      width={50}
                      height={50}
                      className=" rounded-full"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">Book Appointment</h2>

                    <p className="text-white/80 text-sm">
                      Fill the form to confirm your booking
                    </p>
                  </div>
                </div>
              </Modal.Header>

              {/* Body */}
              <Modal.Body className="p-8 bg-gray-50 dark:bg-slate-950">
                {/* Doctor Info */}
                <div className="bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-5 mb-6 dark:bg-slate-900 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {data.name}
                  </h3>

                  <p className="text-blue-600 font-medium dark:text-blue-400">
                    {data.specialty}
                  </p>
                </div>

                <Surface
                  variant="default"
                  className="rounded-2xl bg-white shadow-sm border border-gray-100 dark:bg-slate-900 dark:border-slate-700"
                >
                  <form
                    onSubmit={handleBookingAppiontment}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6"
                  >
                    {/* Email */}
                    <div className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Email Address
                      </Label>

                      <input
                        name="email"
                        required
                        type="email"
                        defaultValue={users?.email || ''}
                        readOnly={Boolean(users?.email)}
                        placeholder="Enter your email"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-blue-500 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:read-only:bg-slate-800"
                      />
                    </div>

                    {/* Patient Name */}
                    <div className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Patient Name
                      </Label>

                      <input
                        name="name"
                        required
                        type="text"
                        defaultValue={users?.name || ''}
                        placeholder="Full name"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-blue-500 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>

                    {/* Phone */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Phone Number
                      </Label>

                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+8801XXXXXXXXX"
                        className="rounded-xl"
                        inputClassName="dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:placeholder:text-slate-500"
                      />
                    </TextField>

                    {/* Gender */}
                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Gender
                      </Label>

                      <select
                        name="gender"
                        className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Date */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Appointment Date
                      </Label>

                      <Input
                        name="appointmentDate"
                        type="date"
                        className="rounded-xl"
                        inputClassName="dark:bg-slate-900 dark:text-white dark:border-slate-700"
                      />
                    </TextField>

                    {/* Time */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Appointment Time
                      </Label>

                      <Input
                        name="appointmentTime"
                        type="time"
                        className="rounded-xl"
                        inputClassName="dark:bg-slate-900 dark:text-white dark:border-slate-700"
                      />
                    </TextField>

                    {/* Reason */}
                    <div className="md:col-span-2">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Reason for Visit
                      </Label>

                      <textarea
                        name="reason"
                        rows={4}
                        placeholder="Describe your problem..."
                        className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-gray-900 outline-none focus:border-blue-500 resize-none placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                      ></textarea>
                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">
                      <Button
                        type="submit"
                        className="w-full py-6 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default BookingButton;
