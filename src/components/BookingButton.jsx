'use client';

import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import Image from 'next/image';
import { toast } from 'react-toastify';

const BookingButton = ({ data }) => {
  const handleBookingAppiontment = () => {
    toast.success(data.name);
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
            <Modal.Dialog className="w-full max-w-2xl rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-white">
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
              <Modal.Body className="p-8 bg-gray-50">
                {/* Doctor Info */}
                <div className="bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-5 mb-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    {data.name}
                  </h3>

                  <p className="text-blue-600 font-medium">{data.specialty}</p>
                </div>

                <Surface
                  variant="default"
                  className="rounded-2xl bg-white shadow-sm border border-gray-100"
                >
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
                    {/* Email */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>

                      <Input
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-xl"
                      />
                    </TextField>

                    {/* Patient Name */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Patient Name
                      </Label>

                      <Input
                        required
                        type="text"
                        placeholder="Full name"
                        className="rounded-xl"
                      />
                    </TextField>

                    {/* Phone */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Phone Number
                      </Label>

                      <Input
                        type="tel"
                        placeholder="+8801XXXXXXXXX"
                        className="rounded-xl"
                      />
                    </TextField>

                    {/* Gender */}
                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Gender
                      </Label>

                      <select className="w-full h-11 px-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 bg-white">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Date */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Appointment Date
                      </Label>

                      <Input type="date" className="rounded-xl" />
                    </TextField>

                    {/* Time */}
                    <TextField className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Appointment Time
                      </Label>

                      <Input type="time" className="rounded-xl" />
                    </TextField>

                    {/* Reason */}
                    <div className="md:col-span-2">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Reason for Visit
                      </Label>

                      <textarea
                        rows={4}
                        placeholder="Describe your problem..."
                        className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-blue-500 resize-none"
                      ></textarea>
                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">
                      <Button
                        onClick={handleBookingAppiontment}
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
