'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { getUser } from '@/helpers';

export const bookmarkProperty = async (id: string, userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) throw new Error('User not found.');

  const bookmarks = user.bookmarks;
  const isBookmarked = user.bookmarks.includes(id);

  if (isBookmarked) {
    await prisma.user.update({
      where: { id: userId },
      data: {
        bookmarks: {
          set: bookmarks.filter((bookmark) => bookmark !== id),
        },
      },
    });
  } else {
    await prisma.user.update({
      where: { id: userId },
      data: {
        bookmarks: {
          push: id,
        },
      },
    });
  }

  revalidatePath('/properties/saved');
};

export const isPropertyBookmarked = async (id: string, userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) throw new Error('User not found.');

  const isBookmarked = user.bookmarks.includes(id);

  return isBookmarked;
};

export const getBookmarkedProperty = async () => {
  const session = await getUser();

  if (!session || !session.userId) {
    throw new Error('User ID required for bookmark property.');
  }

  const { userId } = session;

  const user = await prisma.user.findUnique({
    where: {
      id: userId as string,
    },
  });

  const properties = await prisma.property.findMany({
    where: {
      id: {
        in: user?.bookmarks,
      },
    },
  });

  return properties;
};
