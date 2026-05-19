'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SoscalLogin = () => {
  const router = useRouter();

  const handleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });

    if (data) {
      toast.success('SignIn Successful');
    } else {
      toast.error('faild ');
    }
  };

  return (
    <div className="w-full">
      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-0.5 bg-slate-200"></div>

        <p className="text-sm text-slate-400 font-medium">OR CONTINUE WITH</p>

        <div className="flex-1 h-0.5 bg-slate-200"></div>
      </div>

      {/* Google Button */}
      <button
        onClick={handleSignin}
        className=" cursor-pointer
          group
          relative
          w-full
          h-14
          rounded-2xl
          border
          border-slate-200
          bg-white
          hover:bg-slate-50
          transition-all
          duration-300
          shadow-sm
          hover:shadow-lg
          overflow-hidden
        "
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-r from-cyan-50 to-blue-50"></div>

        <div className="relative flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-r from-red-500 to-orange-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300">
            <FaGoogle className="text-lg" />
          </div>

          <span className="text-slate-700 font-semibold text-base">
            Continue with Google
          </span>
        </div>
      </button>
    </div>
  );
};

export default SoscalLogin;
