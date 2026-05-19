import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="w-10/12 mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src={'/logo.png'} alt="logo" width={40} height={40} />
              <h1 className="text-2xl font-bold text-white tracking-tight">
                MedPrecision
              </h1>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Defining the future of clinical excellence. We provide seamless,
              high-performance healthcare experiences to prioritize your
              wellness above all else.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <IoLogoYoutube size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-appointments"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  All Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Support</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                <p>123 Health Avenue, Medical District, NY 10001</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500">📞</span>
                <p>+1 (234) 567-890</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500">✉️</span>
                <p>support@medprecision.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MedPrecision. All rights reserved.</p>
          <p>Designed with ❤️ for better healthcare.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
