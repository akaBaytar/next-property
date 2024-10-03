import PropertyCard from '@/components/PropertyCard';
import PROPERTIES from '@/mock/properties.json';

import { Property } from '@/types';

const PropertiesPage = () => {
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <h2 className='text-2xl font-semibold text-indigo-500 mb-6'>
          All Properties
        </h2>
        {PROPERTIES.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {PROPERTIES.map((property) => (
              <PropertyCard
                key={property._id}
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
