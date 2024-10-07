import { FaPaperPlane } from 'react-icons/fa6';

import { Property } from '@/types';

const ContactForm = ({ property }: { property: Property }) => {
  return (
    <div className='bg-white p-4 rounded-md shadow-md'>
      <h3 className='text-lg font-semibold mb-2'>Contact Product Manager</h3>
      <form>
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
            placeholder='Enter your phone number'
          />
        </div>
        <div className='mb-4 text-sm'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='message'>
            Message:
          </label>
          <textarea
            className='shadow appearance-none border rounded-md w-full p-2 text-gray-700 h-40 focus:outline-none focus:shadow-outline resize-none'
            id='message'
            name='message'
            placeholder='Enter your message'/>
        </div>
        <div>
          <button
            type='submit'
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold w-full p-2 rounded-md flex gap-2 items-center justify-center transition-colors duration-200'>
            <FaPaperPlane /> Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
