'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Menubar from './Menubar';

import { MdMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { redirect, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const users = session?.user;
  const router = useRouter();

  return (
    <header className=" bg-sky-100 shadow-md py-5 sticky top-0 z-50">
      <nav className="flex items-center justify-between w-10/12 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={'/logo.png'} alt="logo" width={50} height={50} />
          <h1 className="text-lg md:text-2xl font-bold text-gray-800">
            MedPrecision
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="/allappointment">All Appointment</NavLinks>
          </li>
          <li>
            <NavLinks href="/dashboard">Dashboard</NavLinks>
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isPending ? (
            <div>
              <h1>loading</h1>
            </div>
          ) : users ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image alt={users?.name} src={users?.image} />
                <Avatar.Fallback> {users.name.charAt(0)} </Avatar.Fallback>
              </Avatar>

              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.push('/');
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
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
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          {isActive ? (
            <RxCross2
              className="text-3xl cursor-pointer text-gray-700"
              onClick={() => setIsActive(false)}
            />
          ) : (
            <MdMenu
              className="text-3xl cursor-pointer text-gray-700"
              onClick={() => setIsActive(true)}
            />
          )}
        </div>
      </nav>

      {isActive && <Menubar setIsActive={setIsActive} />}
    </header>
  );
};

export default Navbar;
