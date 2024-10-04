import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

import { ClerkProvider } from '@clerk/nextjs';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Next Property',
  keywords: 'rental, property, real estate',
  description:
    'Next Property, where homeowners can list their properties for rent and potential tenants can explore the available options.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${poppins.className} antialiased flex flex-col justify-between min-h-screen`}>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
