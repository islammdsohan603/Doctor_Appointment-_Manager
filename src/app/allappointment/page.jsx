import DoctorsCard from '@/components/home/DoctorsCard';
import { getDoctorData } from '@/db/data';
import { connection } from 'next/server';

const AllAppiontment = async () => {
  await connection();

  const data = await getDoctorData();

  return (
    <div className="w-10/12 mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Exper Specialists</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map(doctor => (
          <DoctorsCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default AllAppiontment;
