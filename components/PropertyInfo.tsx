import { FaBath, FaBed, FaLocationDot, FaRulerCombined } from 'react-icons/fa6';
import { FaDotCircle, FaTimes } from 'react-icons/fa';

import { Property } from '@/types';

const PropertyInfo = ({ property }: { property: Property }) => {
  return (
    <main>
      <div className='bg-white p-6 rounded-md shadow-md text-center md:text-left'>
        <div className='text-gray-500 mb-4'>{property.type}</div>
        <h1 className='text-2xl font-semibold mb-4'>{property.name}</h1>
        <div className='mb-4 flex items-center justify-center md:justify-start'>
          <FaLocationDot className='text-lg text-indigo-500 me-2' />
          <div className='text-indigo-500 flex gap-1 items-center'>
            <span>{property.location.street},</span>
            <span>{property.location.city}</span>
            <span>{property.location.state}</span>
            <span>{property.location.zipCode}</span>
          </div>
        </div>
        <h3 className='font-semibold my-4 bg-indigo-500 text-white p-2 rounded-md'>
          Rates & Options
        </h3>
        <div className='flex justify-between md:justify-start md:gap-8'>
          <div className='flex items-center justify-center'>
            <div className='text-gray-500 me-1'>Nightly:</div>
            <div className='text-lg font-semibold'>
              {property.rates.nightly ? (
                `$${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className='text-pink-600' />
              )}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-gray-500 me-1'>Weekly:</div>
            <div className='text-lg font-semibold'>
              {property.rates.weekly ? (
                `$${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className='text-pink-600' />
              )}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-gray-500 me-1'>Monthly:</div>
            <div className='text-lg font-semibold'>
              {property.rates.monthly ? (
                `$${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className='text-pink-600' />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-6 rounded-md shadow-md mt-6'>
        <h3 className='text-lg text-center md:text-left font-semibold mb-4'>
          Description & Details
        </h3>
        <div className='flex justify-center md:justify-start gap-4 mb-4 text-indigo-500 text-lg'>
          <div className='flex items-center gap-1'>
            <FaBed className='text-xl' />
            {property.beds}
            <span className='inline'>Beds</span>
          </div>
          <div className='flex items-center gap-1'>
            <FaBath className='text-xl' />
            {property.baths}
            <span className='inline'>Baths</span>
          </div>
          <div className='flex items-center gap-1'>
            <FaRulerCombined className='text-xl' />
            {property.squareFeet}
            <span className='inline'>sq/ft</span>
          </div>
        </div>
        <p className='text-gray-500 leading-7 text-center md:text-start text-pretty'>
          {property.description}
        </p>
      </div>
      <div className='bg-white p-6 rounded-md shadow-md mt-6'>
        <h3 className='text-lg text-center md:text-start font-semibold mb-4'>
          Amenities
        </h3>
        <ul className='grid grid-cols-2 lg:grid-cols-3 gap-1 list-none'>
          {property.amenities &&
            property.amenities.map((amenity, idx) => (
              <li
                key={idx}
                className='flex items-center gap-1 text-sm md:text-base'>
                <FaDotCircle className='text-indigo-500' />
                <span className='line-clamp-1'>{amenity}</span>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default PropertyInfo;
