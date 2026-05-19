'use client';

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

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const users = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: users.name,
      email: users.email,
      password: users.password,
      image: users.image,
    });

    if (data) {
      toast.success('Account Successfull created 🎉');
      router.push('/');
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-50 via-white to-blue-100 px-4 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-cyan-500 to-blue-600 p-12 text-white relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[5px] text-sm font-semibold text-cyan-100">
              Welcome
            </p>

            <h1 className="text-5xl font-black leading-tight mt-4">
              Create <br /> Your Account
            </h1>

            <p className="mt-6 text-cyan-100 leading-relaxed text-lg">
              Join our healthcare platform and connect with world-class doctors
              anytime, anywhere.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>

                <p>Easy appointment booking</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>

                <p>Verified specialist doctors</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  ✓
                </div>

                <p>24/7 healthcare support</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-4xl font-black text-slate-800">Register</h2>

            <p className="text-slate-500 mt-3">
              Fill your information to create your account
            </p>
          </div>

          {/* FORM */}
          <Form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </Label>

              <Input
                placeholder="Enter your full name"
                className="rounded-2xl"
              />
            </TextField>

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
              <Label className="mb-2 block text-sm font-semibold text-slate-700">
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
              <Label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="rounded-2xl"
              />

              <Description className="text-xs text-slate-400 mt-1">
                Must contain 8 characters, 1 uppercase & 1 number
              </Description>

              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField isRequired type="text" name="image">
              <Label className="mb-2 block text-sm font-semibold text-slate-700">
                Photo URL
              </Label>

              <Input
                placeholder="Paste your photo URL"
                className="rounded-2xl"
              />
            </TextField>

            {/* Submit */}
            <Button
              type="submit"
              className="mt-4 h-14 w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <Check className="size-5" />
              Create Account
            </Button>

            {/* Footer */}
            <p className="text-center text-slate-500 mt-4">
              Already have an account?{' '}
              <Link href={`/login`}>
                <span className="text-cyan-600 font-semibold cursor-pointer hover:underline">
                  Login
                </span>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
