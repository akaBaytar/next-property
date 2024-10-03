const Hero = () => {
  return (
    <section className='bg-indigo-500 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Find The Perfect Rental
          </h1>
          <p className='my-4 text-xl text-white text-pretty'>
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <form className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
            <label htmlFor='location' className='sr-only'>
              Location
            </label>
            <input
              type='text'
              id='location'
              placeholder='Enter Location (City, State, Zip, etc.)'
              className='w-full px-4 py-3 rounded-md bg-white text-gray-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500'
            />
          </div>
          <div className='w-full md:w-2/5 md:ps-2'>
            <label htmlFor='property-type' className='sr-only'>
              Property Type
            </label>
            <select
              id='property-type'
              className='w-full px-4 py-3 rounded-md bg-white text-gray-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500 cursor-pointer'>
              <option value='All'>All</option>
              <option value='Apartment'>Apartment</option>
              <option value='Studio'>Studio</option>
              <option value='Condo'>Condo</option>
              <option value='House'>House</option>
              <option value='Cabin Or Cottage'>Cabin or Cottage</option>
              <option value='Loft'>Loft</option>
              <option value='Room'>Room</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <button
            type='submit'
            className='md:ms-4 mt-4 md:mt-0 w-full md:w-36 px-6 py-3 rounded-md bg-indigo-700 text-white hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500'>
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
