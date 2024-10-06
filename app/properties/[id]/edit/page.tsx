import PropertyEditForm from '@/components/PropertyEditForm';
import { getProperty } from '@/actions/properties.action';
import { Property } from '@/types';

const PropertyEditPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id);

  if (!property) return <p className='text-lg mt-8'>Property not found.</p>;

  return (
    <section className='bg-indigo-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-24'>
        <h2 className='text-2xl font-semibold text-indigo-500 mb-6 mt-12 px-2 md:px-0'>
          Update Property
        </h2>
        <div className='bg-white px-6 py-8 mb-4 m-2 md:m-0 shadow-md rounded-md border'>
          <PropertyEditForm property={property as Property} />
        </div>
      </div>
    </section>
  );
};

export default PropertyEditPage;
