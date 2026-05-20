'use client';

import { authClient } from '@/lib/auth-client';
import { Button, Label, Modal, Surface } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const UpdataProfile = ({ user }) => {
  const router = useRouter();

  const handleUpdataProfile = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const image = formData.get('image')?.toString().trim();

    if (!name) {
      toast.error('Name is required');
      return;
    }

    const { error } = await authClient.updateUser({
      name,
      image: image || null,
    });

    if (error) {
      toast.error(error.message || 'Update failed');
      return;
    }

    toast.success('Profile Updated Successfully');
    router.refresh();
  };

  return (
    <div>
      <Modal>
        <Button variant="secondary">Update</Button>

        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="rounded-3xl sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Header>
                <h2 className="text-2xl font-bold">Update Profile</h2>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default" className="rounded-2xl">
                  <form
                    onSubmit={handleUpdataProfile}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Name
                      </Label>

                      <input
                        name="name"
                        defaultValue={user?.name || ''}
                        placeholder="Enter your name"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email
                      </Label>

                      <input
                        type="email"
                        value={user?.email || ''}
                        readOnly
                        className="h-11 w-full rounded-xl border border-gray-200 bg-gray-100 px-4 text-gray-500 outline-none"
                      />
                    </div>

                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700">
                        Photo URL
                      </Label>

                      <input
                        name="image"
                        defaultValue={user?.image || ''}
                        placeholder="Paste your photo URL"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-blue-500"
                      />
                    </div>

                    <Button type="submit">Update Profile</Button>
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

export default UpdataProfile;
