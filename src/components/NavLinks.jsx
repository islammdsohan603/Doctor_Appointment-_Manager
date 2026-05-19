'use client'; // usePathname ব্যবহার করতে হলে এটা অবশ্যই দিতে হবে
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 transition-all duration-300 ease-in-out font-medium cursor-pointer hover:text-blue-600 ${
        isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
      }`}
    >
      {children}
      {/* Active indicator line animation */}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </Link>
  );
};

export default NavLinks;
