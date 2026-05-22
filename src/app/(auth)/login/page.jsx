'use client';

import SoscalLogin from '@/components/SoscalLogin';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Loginpage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const users = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: users.email,
      password: users.password,
    });

    if (data) {
      toast.success('Login Successful 🎉');
      router.push('/');
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/30 px-4 py-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 dark:bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/30 dark:bg-blue-400/10 blur-3xl rounded-full"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.3)] border border-white dark:border-slate-700">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-cyan-500 to-blue-600 p-14 text-white relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[5px] text-sm font-semibold text-cyan-100">
              Welcome Back
            </p>

            <h1 className="text-5xl font-black leading-tight mt-4">
              Login To <br /> Your Account
            </h1>

            <p className="mt-6 text-cyan-100 leading-relaxed text-lg">
              Access your appointments, doctors, and healthcare services
              securely anytime.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>

                <p>Secure authentication system</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>

                <p>Book appointments instantly</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>

                <p>Manage your healthcare profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-4xl font-black text-slate-800 dark:text-white">
              Sign In
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-3">
              Enter your credentials to continue
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={value => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return 'Please enter a valid email address';
                }

                return null;
              }}
            >
              <Label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </Label>

              <Input placeholder="john@example.com" className="rounded-2xl" />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={value => {
                if (value.length < 8) {
                  return 'Password must be at least 8 characters';
                }

                if (!/[A-Z]/.test(value)) {
                  return 'Password must contain at least one uppercase letter';
                }

                if (!/[0-9]/.test(value)) {
                  return 'Password must contain at least one number';
                }

                return null;
              }}
            >
              <Label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="rounded-2xl"
              />

              <Description className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Must contain 8 characters, 1 uppercase & 1 number
              </Description>

              <FieldError />
            </TextField>

            {/* Forgot Password */}
            <div className="flex justify-end w-full">
              <button
                type="button"
                className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="mt-2 h-14 w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <Check className="size-5" />
              Login Account
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-3 w-full">
              <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700"></div>

              <p className="text-sm text-slate-400 dark:text-slate-500">OR</p>

              <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* Footer */}
            <p className="text-center text-slate-500 my-4">
              Don&apos;t have an account?{' '}
              <Link href="/signup">
                <span className="text-cyan-600 font-semibold hover:underline">
                  Register
                </span>
              </Link>
            </p>
          </Form>

          <div>
            <SoscalLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginpage;
