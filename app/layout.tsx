import React from 'react';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Discover the best cars in the world',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className="relative">
      <NavBar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
