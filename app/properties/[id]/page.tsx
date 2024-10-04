import Link from 'next/link';

import { FaArrowLeft } from 'react-icons/fa6';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';

import { getProperty } from '@/actions/properties.action';

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id);

  if (property) {
    return (
      <>
        <PropertyHeaderImage image={property.images[0]} />
        <section>
          <div className='container m-auto py-6 px-6'>
            <Link
              href='/properties'
              className='text-indigo-500 hover:text-indigo-700 flex items-center gap-1'>
              <FaArrowLeft /> Back to Properties
            </Link>
          </div>
        </section>
        <section className='bg-indigo-50'>
          <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              {/* PROPERTY INFO */}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default PropertyPage;
