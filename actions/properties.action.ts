import prisma from '@/database';

export const getAllProperties = async () => {
  const properties = await prisma.property.findMany();

  return properties;
};

export const getProperty = async (id: string) => {
  const property = await prisma.property.findUnique({ where: { id } });

  if (property) return property;
};
