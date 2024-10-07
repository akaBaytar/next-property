import Link from 'next/link';

import { FaArrowLeft, FaImages } from 'react-icons/fa6';

import PropertyInfo from '@/components/PropertyInfo';
import PropertyImages from '@/components/PropertyImages';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';

import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButton';
import ContactForm from '@/components/ContactForm';

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
            <div className='grid grid-cols-1 lg:grid-cols-70/30 w-full gap-4'>
              <PropertyInfo property={property as Property} />
              <aside className='space-y-4'>
                <BookmarkButton property={property as Property} />
                <ShareButtons property={property as Property} />
                <ContactForm property={property as Property} />
              </aside>
            </div>
          </div>
        </section>
        <div className='bg-indigo-50'>
          <div className='mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8'>
            <h3 className='flex items-center gap-2 justify-center md:justify-start text-lg text-indigo-500 font-semibold pb-4'>
              <FaImages /> Property Images
            </h3>
            <PropertyImages images={property.images} />
          </div>
        </div>
      </>
    );
  }
};

export default PropertyPage;
