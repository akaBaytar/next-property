'use client';

import { useGlobalContext } from '@/context';

const Notification = () => {
  const { unreadCount } = useGlobalContext();

  return (
    unreadCount > 0 && (
      <span className='absolute top-0 right-0 inline-flex items-center justify-center p-1 px-2 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full'>
        {unreadCount}
      </span>
    )
  );
};

export default Notification;
