'use server';

import prisma from '@/database';

export const getAllProperties = async () => {
  try {
    const properties = await prisma.property.findMany();

    return properties;
  } catch (error) {
    console.error(error);
  }
};

export const getProperty = async (id: string) => {
  const property = await prisma.property.findUnique({ where: { id } });

  if (property) return property;
};
