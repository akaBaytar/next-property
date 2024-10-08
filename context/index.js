'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

import { getNotification } from '@/actions/message.action';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
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
