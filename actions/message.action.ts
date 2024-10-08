'use server';

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
