'use client';

import { Button, Label, Modal, Surface } from '@heroui/react';

import { toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

const UpdataData = ({ book }) => {
  const router = useRouter();

  const handleUpdate = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());

    console.log(userData);

    try {
      const res = await fetch(`http://localhost:5000/bookings/${book._id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success('Updated Successfully');
        router.refresh();
      }
    } catch (error) {
      toast.error('Update Failed!');
    }
  };

  return (
    <div className="flex-1">
      <Modal>
        <Button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
          Update
        </Button>

        <Modal.Backdrop className="backdrop-blur-sm bg-black/40">
          <Modal.Container placement="center">
            <Modal.Dialog className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl">
              <Modal.CloseTrigger />

              <Modal.Header className="bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-6 text-white">
                <div>
                  <h2 className="text-2xl font-bold">Update Appointment</h2>
                  <p className="text-sm text-white/80">
                    Editing booking for {book?.name || 'this patient'}
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="bg-gray-50 p-8">
                <Surface
                  variant="default"
                  className="rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <form
                    onSubmit={handleUpdate}
                    className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2"
                  >
                    <div className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>

                      <input
                        name="email"
                        required
                        type="email"
                        defaultValue={book?.email || ''}
                        placeholder="Enter your email"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Patient Name
                      </Label>

                      <input
                        name="name"
                        required
                        type="text"
                        defaultValue={book?.name || ''}
                        placeholder="Full name"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Phone Number
                      </Label>

                      <input
                        name="phone"
                        type="tel"
                        defaultValue={book?.phone || ''}
                        placeholder="+8801XXXXXXXXX"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Gender
                      </Label>

                      <select
                        name="gender"
                        defaultValue={book?.gender || 'Male'}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Appointment Date
                      </Label>

                      <input
                        name="appointmentDate"
                        type="date"
                        defaultValue={book?.appointmentDate || ''}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="w-full">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Appointment Time
                      </Label>

                      <input
                        name="appointmentTime"
                        type="time"
                        defaultValue={book?.appointmentTime || ''}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Reason for Visit
                      </Label>

                      <textarea
                        name="reason"
                        rows={4}
                        defaultValue={book?.reason || ''}
                        placeholder="Describe your problem..."
                        className="w-full resize-none rounded-2xl border border-gray-200 p-4 outline-none focus:border-blue-500"
                      ></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <Button
                        type="submit"
                        className="w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        Save Changes
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

export default UpdataData;
