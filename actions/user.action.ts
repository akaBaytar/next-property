'use server';

import prisma from '@/database';

type CreateUser = {
  clerkId: string;
  email: string;
  username: string;
  image: string;
};

type UpdateUser = {
  username: string;
  image: string;
};

export const createUser = async (user: CreateUser) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.clerkId,
        email: user.email,
        image: user.image,
        username: user.username,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id: string, user: UpdateUser) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { clerkId: id },
      data: {
        image: user.image,
        username: user.username,
      },
    });

    if (!updatedUser) throw new Error('User update failed.');

    return updatedUser;
  } catch (error) {
    console.error(error);
  }
};
