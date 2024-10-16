'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { getUser, getString } from '@/helpers';

type PrevState = {
  message: string;
  submitted: boolean;
};

export const addMessage = async (_: PrevState, formData: FormData) => {
  const session = await getUser();

  if (!session || !session.userId) {
    throw new Error('User ID  required for send message.');
  }

  const { userId } = session;

  const recipientId = formData.get('recipient');

  if (userId === recipientId) {
    return {
      message: 'You can not send a message to yourself.',
      submitted: false,
    };
  }

  await prisma.message.create({
    data: {
      senderId: userId as string,
      recipientId: getString(formData, 'recipient'),
      propertyId: getString(formData, 'property'),
      name: getString(formData, 'name'),
      email: getString(formData, 'email'),
      phone: getString(formData, 'phone'),
      body: getString(formData, 'body'),
    },
  });

  return {
    message: 'Message has been sent to property manager.',
    submitted: true,
  };
};

export const getMessages = async () => {
  const session = await getUser();

  if (!session || !session.userId) {
    throw new Error('User ID  required for send message.');
  }

  const { userId } = session;

  const readMessages = await prisma.message.findMany({
    where: {
      recipientId: userId,
      read: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      property: true,
      sender: true,
    },
  });

  const unreadMessages = await prisma.message.findMany({
    where: {
      recipientId: userId,
      read: false,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      property: true,
      sender: true,
    },
  });

  return { readMessages, unreadMessages };
};

export const markAsRead = async (id: string) => {
  const session = await getUser();

  if (!session || !session.userId) {
    throw new Error('User ID  required for send message.');
  }

  const { userId } = session;

  const message = await prisma.message.update({
    where: {
      id,
      recipientId: userId,
    },
    data: {
      read: {
        set: true,
      },
    },
  });

  if (!message) {
    throw new Error('Message not found.');
  }

  revalidatePath('/messages', 'page');
};

export const deleteMessage = async (id: string) => {
  const session = await getUser();

  if (!session || !session.userId) {
    throw new Error('User ID  required for send message.');
  }

  const { userId } = session;

  await prisma.message.delete({
    where: {
      id,
      recipientId: userId,
    },
  });

  revalidatePath('/messages', 'page');
};

export const getNotification = async () => {
  const session = await getUser();

  if (!session || !session.userId) {
    throw new Error('User ID  required for send message.');
  }

  const { userId } = session;

  const notification = await prisma.message.count({
    where: {
      recipientId: userId,
      read: false,
    },
  });

  return { notification };
};
