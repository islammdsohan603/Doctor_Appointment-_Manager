import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Doctor Appointment Manager | Your Trusted Healthcare Partner",
    template: "%s | Doctor Appointment Manager",
  },
  description: "Book appointments with top medical specialists, manage your consultations, and keep track of your healthcare history effortlessly.",
  keywords: ["doctor appointment", "healthcare", "book doctor online", "medical specialists", "appointment manager", "patient portal"],
  authors: [{ name: "Doctor Appointment Manager Team" }],
  creator: "Doctor Appointment Manager Team",
  publisher: "Doctor Appointment Manager Team",
  metadataBase: new URL(process.env.BETTER_AUTH_URL || "http://localhost:3000"),
  openGraph: {
    title: "Doctor Appointment Manager | Your Trusted Healthcare Partner",
    description: "Book appointments with top medical specialists, manage your consultations, and keep track of your healthcare history effortlessly.",
    url: "/",
    siteName: "Doctor Appointment Manager",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor Appointment Manager | Your Trusted Healthcare Partner",
    description: "Book appointments with top medical specialists, manage your consultations, and keep track of your healthcare history effortlessly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastContainer />
        <div> <Navbar /></div>
        {children}

        <Footer />

      </body>
    </html>
  );
}
