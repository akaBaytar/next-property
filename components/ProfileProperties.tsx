'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

import { Property } from '@/types';

const ProfileProperties = ({ propertyList }: { propertyList: Property[] }) => {
  const [properties] = useState(propertyList);

  if (properties.length === 0) {
    return <p className='text-lg'>No properties were found.</p>;
  }

  return properties.map((property: Property) => (
    <div key={property.id} className='mb-10'>
      <Link href={`/properties/${property.id}`}>
        <Image
          src={property.images[0]}
          alt='Property Image'
          width={1280}
          height={720}
          className='h-40 w-full rounded-md object-cover'
        />
      </Link>
      <div className='mt-2'>
        <p className='text-lg font-semibold'>{property.name}</p>
        <p className='text-gray-600'>
          {property.location.street} {property.location.city}{' '}
          {property.location.state}
        </p>
      </div>
    </div>
  ));
};

export default ProfileProperties;
