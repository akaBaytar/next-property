import { Message as PropType } from '@/types';

import { markAsRead, deleteMessage } from '@/actions/message.action';

const Message = async ({ message }: { message: PropType }) => {
  return (
    <div className='relative flex flex-col justify-between bg-white p-4 rounded-md shadow-md border border-gray-200'>
      {!message.read && (
        <div className='absolute top-2 right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-md'>
          New
        </div>
      )}
      <div>
        <h2 className='mb-2'>
          <span className='font-semibold'>Property Inquiry: </span>
          {message.property.name}
        </h2>
        <p className='mb-2'>
          <span className='font-semibold block'>Message: </span>
          <span className='text-sm'>{message.body}</span>
        </p>
      </div>
      <div>
        <div className='border border-b'></div>
        <ul className='mt-2 text-xs'>
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
        <div className='flex items-center gap-2'>
          {!message.read && (
            <form action={markAsRead.bind(null, message.id)}>
              <button
                type='submit'
                className='mt-4 bg-indigo-500 text-white text-xs py-2 px-4 rounded-md'>
                Mark as Read
              </button>
            </form>
          )}
          <form action={deleteMessage.bind(null, message.id)}>
            <button
              type='submit'
              className='mt-4 bg-pink-700 text-white text-xs py-2 px-4 rounded-md'>
              Delete Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
