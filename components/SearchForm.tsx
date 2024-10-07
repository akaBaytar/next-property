'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
  const [type, setType] = useState('');
  const [query, setQuery] = useState('');

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query.trim() === '') {
      router.push('/properties');
    } else {
      const searchQuery = `?query=${query}`;

      router.push(`/properties/search${searchQuery}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-3 mx-auto max-w-[44rem] w-full flex flex-col md:flex-row items-center'>
      <div className='w-full mb-4 md:mb-0'>
        <label htmlFor='location' className='sr-only'>
          Search
        </label>
        <input
          type='text'
          id='location'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search'
          className='w-full px-4 py-3 rounded-md bg-white text-gray-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500'
        />
      </div>
      <button
        type='submit'
        className='md:ms-4 mt-4 md:mt-0 w-full md:w-36 px-6 py-3 rounded-md bg-indigo-700 text-white hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-500'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
