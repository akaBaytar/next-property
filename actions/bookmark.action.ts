'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { getUser } from '@/helpers';

export const bookmarkProperty = async (id: string) => {
  const session = await getUser();

  if (!session || !session.userId) {
    throw new Error('User ID required for bookmark property.');
  }

  const { userId } = session;

  const user = await prisma.user.findUnique({
    where: { id: userId as string },
  });

  if (!user) throw new Error('User not found.');

  let isBookmarked = user.bookmarks.includes(id);

  if (isBookmarked) {
    await prisma.user.update({
      where: { id: userId as string },
      data: {
        bookmarks: {
          set: user.bookmarks.filter((bookmark) => bookmark !== id),
        },
      },
    });

    isBookmarked = false;
  } else {
    await prisma.user.update({
      where: { id: userId as string },
      data: {
        bookmarks: {
          push: id,
        },
      },
    });

    isBookmarked = true;
  }

  revalidatePath('/properties/saved');

  return { isBookmarked };
};
