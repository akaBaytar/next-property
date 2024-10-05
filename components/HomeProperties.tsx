import Link from 'next/link';

import PropertyCard from './PropertyCard';

import { Property } from '@/types';
import { getAllProperties } from '@/actions/properties.action';

const HomeProperties = async () => {
  const properties = await getAllProperties();
  const recentProperties = properties?.slice(0, 6);

  return (
    <>
      <section className='px-2 py-6'>
        <div className='container max-w-7xl mx-auto px-4 py-6'>
          <h2 className='text-2xl font-semibold text-indigo-500 mb-6'>
            Recent Properties
          </h2>
          {properties && properties.length === 0 ? (
            <p className='text-xl'>No properties were found.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {recentProperties &&
                recentProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property as Property}
                  />
                ))}
            </div>
          )}
        </div>
      </section>
      {properties && properties.length > 0 && (
        <section className='m-auto max-w-sm mb-10 px-6'>
          <Link
            href='/properties'
            className='block bg-black text-white text-center py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-200'>
            View All Properties
          </Link>
        </section>
      )}
    </>
  );
};

export default HomeProperties;
