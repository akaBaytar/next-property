'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa6';

import { Property } from '@/types';
import { deleteProperty } from '@/actions/properties.action';

const ProfileProperties = ({ propertyList }: { propertyList: Property[] }) => {
  const [properties, setProperties] = useState(propertyList);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm('Delete Property?');

    if (!confirm) return;

    await deleteProperty(id);

    const updated = properties.filter((property) => property.id !== id);

    setProperties(updated);
  };

  if (properties.length === 0) {
    return <p className='text-lg'>No properties were found.</p>;
  }

  return properties.map((property: Property) => (
    <div key={property.id} className='mb-10 relative'>
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
      <div className='absolute right-2 top-2 flex gap-2'>
        <button
          type='button'
          className='bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-md transition-colors duration-200'>
          <FaPen />
        </button>
        <button
          type='button'
          onClick={() => handleDelete(property.id)}
          className='bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-md transition-colors duration-200'>
          <FaTrash />
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;
