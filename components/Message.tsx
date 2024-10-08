import { Message as PropType } from '@/types';

const Message = ({ message }: { message: PropType }) => {
  return (
    <div className='relative bg-white p-4 rounded-md shadow-md border border-gray-200'>
      <h2 className='text-lg mb-2'>
        <span className='font-semibold'>Property Inquiry: </span>
        {message.property.name}
      </h2>
      <h2 className='text-lg mb-2'>
        <span className='font-semibold block'>Message: </span>
        {message.body}
      </h2>
      <div className='border border-b'></div>
      <ul className='mt-2'>
        <li>
          <strong>Reply via Email: </strong>
          <a href={`mailto:${message.email}`} className='text-indigo-500'>
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply via Phone: </strong>
          <a href={`tel:${message.phone}`} className='text-indigo-500'>
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received: </strong>
          {new Date(message.createdAt).toLocaleDateString()}
        </li>
      </ul>
      <button
        type='button'
        className='mt-4 me-2 bg-indigo-500 text-white py-2 px-4 rounded-md'>
        Mark as Read
      </button>
      <button
        type='button'
        className='mt-4 bg-pink-700 text-white py-2 px-4 rounded-md'>
        Delete Message
      </button>
    </div>
  );
};

export default Message;
