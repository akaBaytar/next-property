import PropertyCard from '@/components/PropertyCard';

import { Property } from '@/types';
import { getAllProperties } from '@/actions/properties.action';

const PropertiesPage = async () => {
  const properties = await getAllProperties();

  return (
    <section className='px-4 py-6'>
      <div className='container max-w-7xl mx-auto px-4 py-6'>
        <h2 className='text-2xl font-semibold text-indigo-500 mb-6'>
          All Properties
        </h2>
        {properties && properties.length === 0 ? (
          <p className='text-xl'>No properties were found.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {properties &&
              properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property as Property}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
