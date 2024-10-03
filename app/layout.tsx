import { Poppins } from 'next/font/google';

import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

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
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
