'use client';
import React from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';

const Menubar = ({ setIsActive }) => {
  const { data: session, isPending } = authClient.useSession();
  const users = session?.user;

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'All Appointment', href: '/allappointment' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="absolute left-0 top-full z-40 flex w-full flex-col items-center gap-6 bg-white/95 py-6 shadow-lg backdrop-blur-xl dark:bg-slate-900/95 dark:shadow-slate-700 md:hidden"
    >
      <ul className="flex flex-col items-center gap-6">
        {menuItems.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            <div onClick={() => setIsActive(false)}>
              <NavLinks href={item.href}>{item.name}</NavLinks>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-4 w-10/12"
      >
        {users ? (
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
              className="rounded-3xl cursor-pointer bg-rose-500 px-4 py-1 text-xs font-semibold text-white duration-500 hover:bg-rose-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              href={`/login`}
              className="px-4 py-2 rounded-full cursor-pointer text-gray-600 dark:text-gray-300 font-semibold transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700"
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
      </motion.div>
    </motion.div>
  );
};

export default Menubar;
