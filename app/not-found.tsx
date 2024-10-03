import Link from 'next/link';

import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='text-8xl text-indigo-500' />
          </div>
          <div className='text-center'>
            <h2 className='text-7xl font-bold mt-4'>404</h2>
            <h1 className='text-3xl font-bold mt-4 mb-2'>Page Not Found</h1>
            <p className='text-gray-500 text-xl text-pretty mb-10'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='bg-indigo-500 hover:bg-indigo-800 text-white py-3 px-6 rounded-md transition-colors duration-200'>
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
