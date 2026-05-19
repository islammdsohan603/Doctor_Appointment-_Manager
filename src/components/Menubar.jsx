'use client';
import React from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Menubar = ({ setIsActive }) => {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'All Appointment', href: '/appointments' },
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="absolute top-full left-0 w-full bg-sky-100 shadow-lg md:hidden flex flex-col items-center py-6 gap-6 z-40"
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
        <Link
          onClick={() => setIsActive(false)}
          href={`/login`}
          className="w-full text-center px-4 py-2 rounded-full text-gray-600 font-semibold transition-all duration-300 hover:bg-slate-200"
        >
          Login
        </Link>
        <Link
          onClick={() => setIsActive(false)}
          href={`/signup`}
          className="w-full text-center px-4 py-2 rounded-full font-semibold bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
        >
          Register
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Menubar;
