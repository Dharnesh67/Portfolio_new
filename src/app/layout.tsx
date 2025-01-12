import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
