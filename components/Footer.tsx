import Link from 'next/link';
import Image from 'next/image';

import LOGO from '@/assets/logo-white.png';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-indigo-500 pt-16 pb-4 mt-auto text-white'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between'>
        <div className='mb-8 md:mb-0'>
          <Image src={LOGO} alt='Logo' className='h-8 w-8' />
        </div>
        <div className='flex flex-wrap justify-center md:justify-start mb-8 md:mb-0'>
          <ul className='flex flex-col md:flex-row text-center md:text-start text-sm gap-4'>
            <li>
              <Link href='/properties'>Properties</Link>
            </li>
            <li>
              <Link href=''>Terms of Service</Link>
            </li>
            <li>
              <Link href=''>Policies</Link>
            </li>
            <li>
              <Link href=''>Privacy</Link>
            </li>
            <li>
              <Link href=''>Site Map</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-2 text-3xl'>
          <FaGithub />
          <FaLinkedin />
          <FaXTwitter />
        </div>
      </div>
      <div>
        <p className='text-xs text-center mt-8'>
          &copy; {new Date().getFullYear()} Next Property - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
