'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { useAuth } from '@clerk/nextjs';
import { FaPaperPlane } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Property } from '@/types';
import { addMessage } from '@/actions/message.action';

const ContactForm = ({ property }: { property: Property }) => {
  const { isSignedIn } = useAuth();
  const { pending } = useFormStatus();

  const initialState = {
    message: '',
    submitted: false,
  };

  const [state, formAction] = useFormState(addMessage, initialState);

  if (state.submitted) {
    return (
      <p className='bg-white rounded-md p-4 text-indigo-500 text-center lg:text-start shadow-md'>
        {state.message}
      </p>
    );
  }

  if (!isSignedIn) {
    return (
      <p className='bg-white rounded-md p-4 text-center lg:text-start shadow-md'>
        Please log in to send a message to the property manager.
      </p>
    );
  } else {
    return (
      <div className='bg-white p-4 rounded-md shadow-md'>
        <h3 className='text-lg font-semibold mb-2 text-center lg:text-start'>
          Contact Product Manager
        </h3>
        <form action={formAction}>
          <input
            type='hidden'
            name='property'
            id='property'
            defaultValue={property.id}
          />
          <input
            type='hidden'
            name='recipient'
            id='recipient'
            defaultValue={property.ownerId}
          />
          <div className='mb-4 text-sm'>
            <label
              className='block text-gray-700 font-semibold mb-2'
              htmlFor='name'>
              Name:
            </label>
            <input
              className='shadow appearance-none border rounded-md w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name='name'
              type='text'
              autoComplete='name'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='mb-4 text-sm'>
            <label
              className='block text-gray-700 font-semibold mb-2'
              htmlFor='email'>
              Email:
            </label>
            <input
              className='shadow appearance-none border rounded-md w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-4 text-sm'>
            <label
              className='block text-gray-700 font-semibold mb-2'
              htmlFor='phone'>
              Phone:
            </label>
            <input
              className='shadow appearance-none border rounded-md w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              placeholder='Enter your phone number'
            />
          </div>
          <div className='mb-4 text-sm'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='body'>
              Message:
            </label>
            <textarea
              className='shadow appearance-none border rounded-md w-full p-2 text-gray-700 h-40 focus:outline-none focus:shadow-outline resize-none'
              id='body'
              name='body'
              autoComplete='none'
              placeholder='Enter your message'
              required
            />
          </div>
          <div>
            <button
              type='submit'
              disabled={pending}
              className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold w-full p-2 rounded-md flex items-center justify-center transition-colors duration-200 disabled:bg-indigo-400 disabled:cursor-not-allowed'>
              {pending ? (
                <span>
                  <AiOutlineLoading3Quarters className='text-2xl animate-spin' />
                </span>
              ) : (
                <span className='flex gap-2 items-center'>
                  <FaPaperPlane /> Send Message
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default ContactForm;
