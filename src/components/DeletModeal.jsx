'use client';

import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const DeletModeal = ({ book }) => {
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5000/bookings/${book._id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success('Booking Deleted Successfully');

        router.refresh();
      } else {
        toast.error('Delete Failed!');
      }
    } catch (error) {
      console.log(error);

      toast.error('Something went wrong!');
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button variant="danger">Delete</Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />

                <AlertDialog.Heading>
                  Delete Appointment permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>

                <Button onClick={onSubmit} slot="close" variant="danger">
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeletModeal;
