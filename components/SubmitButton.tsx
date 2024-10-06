'use client';

import { useFormStatus } from 'react-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const SubmitButton = ({ text = 'Add Property' }: { text?: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-indigo-500 hover:bg-indigo-600 flex justify-center text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline disabled:bg-indigo-300 disabled:cursor-not-allowed'
      type='submit'
      disabled={pending}>
      {pending ? (
        <AiOutlineLoading3Quarters className='text-2xl animate-spin' />
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default SubmitButton;
