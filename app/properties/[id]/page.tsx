import Link from 'next/link';

import { FaArrowLeft } from 'react-icons/fa6';
import PropertyInfo from '@/components/PropertyInfo';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';

import { Property } from '@/types';
import { getProperty } from '@/actions/properties.action';

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id);

  if (property) {
    return (
      <>
        <PropertyHeaderImage image={property.images[0]} />
        <section>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            <Link
              href='/properties'
              className='text-indigo-500 hover:text-indigo-700 flex items-center gap-1'>
              <FaArrowLeft /> Back to Properties
            </Link>
          </div>
        </section>
        <section className='bg-indigo-50'>
          <div className='mx-auto max-w-7xl pb-6 px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              <PropertyInfo property={property as Property} />
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default PropertyPage;
