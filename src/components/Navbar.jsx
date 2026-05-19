import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className="bg-sky-100  py-5">
        <nav className="flex items-center justify-between w-10/12 mx-auto">
          <div className="flex items-center gap-1">
            <Image src={'/logo.png'} alt="logo" width={50} height={50} />
            <h1 className="text-lg md:text-2xl font-bold">MedPrecision</h1>
          </div>

          <ul className="flex items-center gap-6">
            <li>Home</li>

            <li>All Appointment</li>

            <li>Dashboard</li>
          </ul>

          <div className="flex items-center gap-4">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
