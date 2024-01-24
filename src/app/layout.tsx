import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext';
import SwrConfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <AuthContext>
        <body className="w-full max-w-screen-xl overflow-auto mx-auto">
          <header className="sticky top-0 bg-white z-10 border-b">
            <Navbar />
          </header>
          <main>
            <SwrConfigContext>{children}</SwrConfigContext>
          </main>
        </body>
      </AuthContext>
    </html>
  );
}
