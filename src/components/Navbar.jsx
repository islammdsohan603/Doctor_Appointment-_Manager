import Image from 'next/image';
import Link from 'next/link';

import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <header className="bg-sky-100 py-5 sticky top-0 z-50">
      <nav className="flex items-center justify-between w-10/12 mx-auto">
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={'/logo.png'} alt="logo" width={50} height={50} />
          <h1 className="text-lg md:text-2xl font-bold text-gray-800">
            MedPrecision
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="/appointments">All Appointment</NavLinks>
          </li>
          <li>
            <NavLinks href="/dashboard">Dashboard</NavLinks>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={`/login`}
            className="px-4 py-2 rounded-full cursor-pointer text-gray-600 font-semibold transition-all duration-300 hover:bg-slate-200"
          >
            Login
          </Link>
          <Link
            href={`/signup`}
            className="px-4 py-2 rounded-full cursor-pointer font-semibold bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
