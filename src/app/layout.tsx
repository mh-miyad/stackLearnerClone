import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Stack Learner | Learn, Implement, Share, Repeat",
  description: "Created By Mahamudul Hasan Miyad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased bg-neutral-950 text-white dark:bg-white dark:text-black`}
      >
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
