'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useSyncExternalStore } from 'react';
import NavLinks from './NavLinks';
import Menubar from './Menubar';

import { MdMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Toggling from './Toggling';

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const { data: session, isPending } = authClient.useSession();

  const users = session?.user;

  const router = useRouter();

  const showAuthState = mounted && !isPending;

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 py-4 shadow-sm backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/90">
      <nav className="mx-auto flex w-10/12 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="MedPrecision logo"
            width={48}
            height={48}
          />

          <h1 className="text-lg font-bold text-slate-900 dark:text-white md:text-2xl">
            MedPrecision
          </h1>
        </Link>

        <Toggling />

        <ul className="hidden items-center gap-6 md:flex">
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

        <div className="hidden min-w-44 items-center justify-end gap-4 md:flex">
          {!showAuthState ? (
            <div className="h-10 w-28 rounded-full bg-sky-100 dark:bg-slate-800" />
          ) : users ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image alt={users?.name} src={users?.image} />

                <Avatar.Fallback>{users?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <button
                onClick={async () => {
                  await authClient.signOut();

                  router.push('/');
                }}
                className="rounded-full cursor-pointer bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-rose-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full px-4 py-2 font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center md:hidden">
          {isActive ? (
            <RxCross2
              className="cursor-pointer text-3xl text-slate-700 dark:text-slate-200"
              onClick={() => setIsActive(false)}
            />
          ) : (
            <MdMenu
              className="cursor-pointer text-3xl text-slate-700 dark:text-slate-200"
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
