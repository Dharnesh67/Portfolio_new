import type { Metadata } from "next";
import {Inter,Calistoga} from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter=Inter(
{
  subsets: ['latin'],
  variable: '--font-sans'
}
) 
const calistoga = Calistoga({
  subsets:['latin'],
  variable:'--font-serif',
  weight:['400']
}) 

export const metadata: Metadata = {
  title: "Dharmesh Raikwar",
  description: "Created my portfolio using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* antialiased  -- read about this it is for font smoothening  */}
      <body className={twMerge(inter.variable,calistoga.variable," bg-gray-900 text-white antialiased font-sans p-1")}>{children}</body>
    </html>
  );
}
