import Link from 'next/link';
import Image from 'next/image';

import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import { Property } from '@/types';

const PropertyCard = ({ property }: { property: Property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) return `$${rates.monthly.toLocaleString()}/month`;
    if (rates.nightly) return `$${rates.nightly.toLocaleString()}/week`;
    if (rates.weekly) return `$${rates.weekly.toLocaleString()}/night`;
  };

  return (
    <div className='rounded-md shadow-md relative'>
      <Image
        src={property.images[0]}
        alt={property.name}
        width={1280}
        height={720}
        className='w-full h-auto rounded-t-md'
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='text-xl font-bold'>{property.name}</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-md text-indigo-500 font-bold text-right md:text-center lg:text-right'>
          {getRateDisplay()}
        </h3>

        <div className='flex gap-3 text-gray-500 mb-4'>
          <p className='flex items-center gap-1'>
            <FaBed />
            {property.beds}
            <span>Beds</span>
          </p>
          <p className='flex items-center gap-1'>
            <FaBath />
            {property.baths}
            <span>Baths</span>
          </p>
          <p className='flex items-center gap-1'>
            <FaRulerCombined />
            {property.squareFeet}
            <span>sq/ft</span>
          </p>
        </div>

        <div className='flex gap-3 text-gray-500 text-sm mb-4'>
          {property.rates.monthly && (
            <p className='flex items-center gap-1'>
              <FaMoneyBill /> Monthly
            </p>
          )}
          {property.rates.weekly && (
            <p className='flex items-center gap-1'>
              <FaMoneyBill /> Weekly
            </p>
          )}
          {property.rates.nightly && (
            <p className='flex items-center gap-1'>
              <FaMoneyBill /> Nightly
            </p>
          )}
        </div>
        <div className='border border-indigo-100 mb-5'></div>
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex items-center gap-2 mb-4 lg:mb-0'>
            <FaMapMarkerAlt className='text-lg text-indigo-500' />
            <span className='text-indigo-500'>
              {property.location.city} {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-center text-sm transition-colors duration-200'>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
