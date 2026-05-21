import BookingButton from '@/components/BookingButton';
import { getSingleDoctorsData } from '@/db/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import {
  FaStar,
  FaLocationDot,
  FaHospital,
  FaClock,
  FaMoneyBillWave,
} from 'react-icons/fa6';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = await getSingleDoctorsData(id);

  if (!data || data.error) {
    return {
      title: "Doctor Not Found",
      description: "The requested doctor profile could not be found.",
    };
  }

  return {
    title: `${data.name} | ${data.specialty}`,
    description: `${data.name} is a specialist in ${data.specialty} at ${data.hospital}. Read reviews, check fees, and book an appointment online.`,
    openGraph: {
      title: `${data.name} | ${data.specialty}`,
      description: `${data.name} is a specialist in ${data.specialty} at ${data.hospital}.`,
      images: [
        {
          url: data.image,
          alt: data.name,
        },
      ],
    },
  };
}

const DoctorsDetailsPage = async ({ params }) => {
  await connection();

  const { id } = await params;

  const data = await getSingleDoctorsData(id);

  if (!data || data.error) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-cyan-50 to-blue-50 py-10 lg:py-20 overflow-hidden">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* Main Container */}
        <div className="relative bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-300/30 blur-3xl rounded-full"></div>

          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-300/30 blur-3xl rounded-full"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-5 sm:p-8 lg:p-14">
            {/* LEFT SIDE */}
            <div className="relative">
              {/* Image Box */}
              <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-full min-h-[500px] rounded-[2rem] overflow-hidden bg-linear-to-br from-slate-800 to-slate-900 border border-white/10">
                <Image
                  src={data.image}
                  alt={data.name || 'Doctor profile'}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-500 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"></div>

                {/* Rating */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                  <FaStar className="text-yellow-400" />

                  <span className="text-white font-semibold text-sm sm:text-base">
                    {data.rating} Rating
                  </span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 right-4 bg-cyan-500/20 backdrop-blur-md px-5 py-3 rounded-2xl border border-cyan-400/20">
                  <p className="text-cyan-300 text-sm">Experience</p>

                  <h3 className="text-black font-bold text-lg">
                    {data.experience}
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center">
              {/* Doctor Name */}
              <div>
                <p className="text-cyan-600 font-semibold uppercase tracking-[4px] text-sm mb-3">
                  Trusted Specialist
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
                  {data.name}
                </h1>

                <p className="text-cyan-600 text-xl font-semibold mt-4">
                  {data.specialty}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed text-lg mt-8">
                {data.description}
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                {/* Hospital */}
                <div className="group bg-white/80 border border-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-xl mb-4 group-hover:scale-110 transition-all duration-300">
                    <FaHospital />
                  </div>

                  <h3 className="font-bold text-slate-800 text-lg">Hospital</h3>

                  <p className="text-slate-500 mt-2">{data.hospital}</p>
                </div>

                {/* Location */}
                <div className="group bg-white/80 border border-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 text-xl mb-4 group-hover:scale-110 transition-all duration-300">
                    <FaLocationDot />
                  </div>

                  <h3 className="font-bold text-slate-800 text-lg">Location</h3>

                  <p className="text-slate-500 mt-2">{data.location}</p>
                </div>

                {/* Experience */}
                <div className="group bg-white/80 border border-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-500 text-xl mb-4 group-hover:scale-110 transition-all duration-300">
                    <FaClock />
                  </div>

                  <h3 className="font-bold text-slate-800 text-lg">
                    Experience
                  </h3>

                  <p className="text-slate-500 mt-2">{data.experience}</p>
                </div>

                {/* Fee */}
                <div className="group bg-white/80 border border-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-500 text-xl mb-4 group-hover:scale-110 transition-all duration-300">
                    <FaMoneyBillWave />
                  </div>

                  <h3 className="font-bold text-slate-800 text-lg">
                    Consultation Fee
                  </h3>

                  <p className="text-slate-500 mt-2 text-xl font-bold">
                    ৳ {data.fee}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-5">
                  Available Schedule
                </h2>

                <div className="flex flex-wrap gap-4">
                  {data?.availability?.map((time, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="mt-10">
                <BookingButton data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetailsPage;
