import prisma from '@/database';

export const getAllProperties = async () => {
  const properties = await prisma.property.findMany();

  return properties;
};
