'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';

const Toggling = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="text-2xl cursor-pointer">
      {isDarkMode ? <CiLight /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default Toggling;
