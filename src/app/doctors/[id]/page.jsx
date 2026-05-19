import { getSingleDoctorsData } from '@/db/data';
import Image from 'next/image';
import {
  FaStar,
  FaLocationDot,
  FaHospital,
  FaClock,
  FaMoneyBillWave,
} from 'react-icons/fa6';

const DoctorsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const data = await getSingleDoctorsData(id);

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950 py-10 lg:py-16">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 sm:p-8 lg:p-12">
            {/* Left Side Image */}
            <div className="relative">
              {/* Image Box */}
              <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-full min-h-[500px] rounded-[2rem] overflow-hidden bg-linear-to-br from-slate-800 to-slate-900 border border-white/10">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-all duration-500"
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

                  <h3 className="text-white font-bold text-lg">
                    {data.experience}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center">
              {/* Doctor Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {data.name}
              </h1>

              {/* Specialty */}
              <p className="text-cyan-400 text-lg sm:text-xl font-semibold mt-3">
                {data.specialty}
              </p>

              {/* Description */}
              <p className="text-gray-300 mt-6 leading-relaxed text-base sm:text-lg">
                {data.description}
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {/* Hospital */}
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 text-cyan-400 mb-2">
                    <FaHospital />
                    <h3 className="font-semibold">Hospital</h3>
                  </div>

                  <p className="text-gray-300">{data.hospital}</p>
                </div>

                {/* Location */}
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 text-pink-400 mb-2">
                    <FaLocationDot />
                    <h3 className="font-semibold">Location</h3>
                  </div>

                  <p className="text-gray-300">{data.location}</p>
                </div>

                {/* Experience */}
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 text-purple-400 mb-2">
                    <FaClock />
                    <h3 className="font-semibold">Experience</h3>
                  </div>

                  <p className="text-gray-300">{data.experience}</p>
                </div>

                {/* Fee */}
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl hover:translate-y-[-4px] transition-all duration-300">
                  <div className="flex items-center gap-3 text-green-400 mb-2">
                    <FaMoneyBillWave />
                    <h3 className="font-semibold">Consultation Fee</h3>
                  </div>

                  <p className="text-gray-300 font-semibold">৳ {data.fee}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Available Time
                </h2>

                <div className="flex flex-wrap gap-3">
                  {data.availability.map((time, index) => (
                    <span
                      key={index}
                      className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-medium text-sm sm:text-base"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetailsPage;
