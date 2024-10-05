import PropertyAddForm from '@/components/PropertyAddForm';

const AddPropertyPage = () => {
  return (
    <section className='bg-indigo-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-24'>
        <h2 className='text-2xl font-semibold text-indigo-500 mb-6 mt-12 px-2 md:px-0'>
          Add Property
        </h2>
        <div className='bg-white px-6 py-8 mb-4 m-2 md:m-0 shadow-md rounded-md border'>
          <PropertyAddForm />
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
