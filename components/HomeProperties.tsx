import Link from 'next/link';

import PropertyCard from './PropertyCard';

import { Property } from '@/types';
import PROPERTIES from '@/mock/properties.json';

const HomeProperties = () => {
  const recentProperties = PROPERTIES.slice(0, 6);

  return (
    <>
      <section className='px-4 py-6'>
        <div className='container max-w-7xl mx-auto px-4 py-6'>
          <h2 className='text-2xl font-semibold text-indigo-500 mb-6'>
            Recent Properties
          </h2>
          {PROPERTIES.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {recentProperties.map((property) => (
                <PropertyCard
                  key={property._id}
                  property={property as Property}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className='m-auto max-w-sm mb-10 px-6'>
        <Link
          href='/properties'
          className='block bg-black text-white text-center py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-200'>
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
