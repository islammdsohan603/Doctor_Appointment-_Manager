'use client';

import { authClient } from '@/lib/auth-client';
import { Button, Label, Modal, Surface } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useState } from 'react';

const UpdataProfile = ({ user }) => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(user?.image || '');

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
    <div className="flex flex-col items-center gap-4">
      {/* Update Button & Modal */}
      <Modal>
        <Button variant="secondary">Update Profile</Button>

        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="rounded-3xl sm:max-w-md bg-white dark:bg-slate-900">
              <Modal.CloseTrigger />

              <Modal.Header>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Update Profile
                </h2>
              </Modal.Header>

              <Modal.Body className="p-6 bg-gray-50 dark:bg-slate-950">
                <Surface
                  variant="default"
                  className="rounded-2xl bg-white dark:bg-slate-900"
                >
                  <form
                    onSubmit={handleUpdataProfile}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Name
                      </Label>

                      <input
                        name="name"
                        defaultValue={user?.name || ''}
                        placeholder="Enter your name"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-blue-500 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <Label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-slate-200">
                        Photo URL
                      </Label>

                      <input
                        name="image"
                        defaultValue={user?.image || ''}
                        placeholder="Paste your photo URL"
                        onChange={e => setImagePreview(e.target.value)}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-blue-500 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <Label className="text-sm font-semibold text-gray-700">
                        Preview
                      </Label>
                      <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        {imagePreview ? (
                          <Image
                            src={user?.image}
                            alt={user?.name || 'Profile'}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                          />
                        ) : (
                          <span className="text-3xl font-bold text-gray-400">
                            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                          </span>
                        )}
                      </div>
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
