import { Property } from '@/types';
import PropertyCard from '@/components/PropertyCard';
import { searchProperty } from '@/actions/properties.action';

type SearchParams = {
  searchParams: { query: string };
};

const SearchPage = async ({ searchParams: { query } }: SearchParams) => {
  const properties = await searchProperty(query);

  if (properties.length === 0) {
    return (
      <p className='text-lg py-6 px-6 lg:px-8 max-w-7xl mx-auto'>
        No properties found.
      </p>
    );
  }

  return (
    <div className='py-6'>
      <h3 className='text-2xl font-semibold text-indigo-500 mb-6 px-6 lg:px-8'>
        Search results:
      </h3>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property as Property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
