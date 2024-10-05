'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { FaGoogle } from 'react-icons/fa';

import LOGO from '@/assets/logo-white.png';
import PROFILE from '@/assets/profile.png';

import { SignOutButton, SignInButton, useAuth, useUser } from '@clerk/nextjs';

const Navbar = () => {
  const { userId } = useAuth();
  const { user } = useUser();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const isLoggedIn = userId !== null;

  const pathname = usePathname();

  return (
    <nav className='bg-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='flex items-center md:hidden'>
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-indigo-700 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white transition-colors duration-200'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#fff'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <Link
              href='/'
              className='hidden md:flex flex-shrink-0 items-center'>
              <Image
                src={LOGO}
                alt='Next Property Logo'
                className='h-8 w-auto'
              />
              <span className='text-white text-lg font-bold ms-2'>
                Next Property
              </span>
            </Link>
            <div className='hidden md:ms-6 md:block'>
              <div className='flex space-x-2 text-sm'>
                <Link
                  href='/'
                  className={`${
                    pathname === '/' && 'bg-indigo-700'
                  } text-white bg-indigo-500 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}>
                  Home
                </Link>
                <Link
                  href='/properties'
                  className={`${
                    pathname === '/properties' && 'bg-indigo-700'
                  } text-white bg-indigo-500 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}>
                  Properties
                </Link>
                {isLoggedIn && (
                  <Link
                    href='/properties/add'
                    className={`${
                      pathname === '/properties/add' && 'bg-indigo-700'
                    } text-white bg-indigo-500 hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}>
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>
          {!isLoggedIn && (
            <div className='flex items-center'>
              <SignInButton mode='modal' forceRedirectUrl='/'>
                <button className='flex items-center text-white text-sm bg-indigo-700 hover:bg-indigo-800 rounded-md px-3 py-2 transition-colors duration-200'>
                  <FaGoogle className='me-2' />
                  <span>Login or Register</span>
                </button>
              </SignInButton>
            </div>
          )}
          {isLoggedIn && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ms-6 md:pr-0'>
              <Link href='/messages' className='relative group'>
                <button
                  type='button'
                  className='relative rounded-full bg-indigo-700 p-1 text-gray-400 hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-gray-800 transition-colors duration-200'>
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='#fff'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </button>
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full'>
                  0
                </span>
              </Link>
              <div className='relative ms-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex rounded-full text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}>
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='h-8 w-8 rounded-full'
                      src={user?.imageUrl ?? PROFILE}
                      alt='Profile Icon'
                      width={64}
                      height={64}
                    />
                  </button>
                </div>
                {isProfileMenuOpen && (
                  <div
                    id='user-menu'
                    className='absolute right-0 z-10 mt-6 w-48 p-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus-visible:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex={-1}>
                    <Link
                      href='/profile'
                      className='block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-indigo-500 hover:text-white transition-colors duration-200 rounded-md'
                      role='menuitem'
                      tabIndex={-1}
                      id='user-menu-item-0'>
                      Your Profile
                    </Link>
                    <Link
                      href='/properties/saved'
                      className='block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-indigo-500 hover:text-white transition-colors duration-200 rounded-md'
                      role='menuitem'
                      tabIndex={-1}
                      id='user-menu-item-2'>
                      Saved Properties
                    </Link>
                    <SignOutButton redirectUrl='/'>
                      <button
                        className='block w-full px-4 py-2 text-sm text-start text-gray-700 bg-white hover:bg-indigo-500 hover:text-white transition-colors duration-200 rounded-md'
                        role='menuitem'
                        tabIndex={-1}
                        id='user-menu-item-2'>
                        Sign Out
                      </button>
                    </SignOutButton>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div id='mobile-menu' className='md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2 sm:mx-4 flex flex-col gap-2 text-sm'>
            <Link
              href='/'
              className={`${
                pathname === '/' && 'bg-indigo-700'
              } text-white block rounded-md px-3 py-2`}>
              Home
            </Link>
            <Link
              href='/properties'
              className={`${
                pathname === '/properties' && 'bg-indigo-700'
              } text-white block rounded-md px-3 py-2`}>
              Properties
            </Link>
            {isLoggedIn && (
              <Link
                href='/properties/add'
                className={`${
                  pathname === '/properties/add' && 'bg-indigo-700'
                } text-white block rounded-md px-3 py-2`}>
                Add Property
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
