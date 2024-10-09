'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

import { getNotification } from '@/actions/message.action';

type Notification = { unreadCount: number };

const GlobalContext = createContext<Notification>({ unreadCount: 0 });

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      getNotification().then((res) => {
        if (res.notification) setUnreadCount(res.notification);
      });
    }
  }, [userId]);

  return (
    <GlobalContext.Provider value={{ unreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
