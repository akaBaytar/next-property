import PropertyCard from '@/components/PropertyCard';
import { getBookmarkedProperty } from '@/actions/bookmark.action';
import { Property } from '@/types';

const SavedPropertiesPage = async () => {
  const properties = await getBookmarkedProperty();

  if (properties.length === 0) {
    return (
      <p className='text-lg py-6 px-6 lg:px-8 max-w-7xl mx-auto'>
        No saved properties found.
      </p>
    );
  }

  return (
    <div className='py-6 mx-auto max-w-7xl '>
      <h3 className='text-2xl font-semibold text-indigo-500 mb-6 px-6 lg:px-8'>
        Saved Properties
      </h3>
      <div className='px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property as Property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedPropertiesPage;
