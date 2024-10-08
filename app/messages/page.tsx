import Message from '@/components/Message';
import { getMessages } from '@/actions/message.action';

const MessagesPage = async () => {
  const { readMessages, unreadMessages } = await getMessages();

  const messages = [...unreadMessages, ...readMessages];

  if (messages.length === 0) {
    return (
      <p className='text-lg py-6 px-6 lg:px-8 max-w-7xl mx-auto'>
        You have no messages.
      </p>
    );
  }

  return (
    <div className='py-6 mx-auto max-w-7xl'>
      <h3 className='text-2xl font-semibold text-indigo-500 mb-6 px-6 lg:px-8'>
        Your Messages
      </h3>
      <div className='px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
