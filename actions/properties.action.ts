'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { uploadImages } from '@/database/cloudinary';
import { getFloat, getInt, getString, getUser } from '@/helpers';

export const getAllProperties = async () => {
  try {
    const properties = await prisma.property.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return properties;
  } catch (error) {
    console.error(error);
  }
};

export const getProperty = async (id: string) => {
  const property = await prisma.property.findUnique({ where: { id } });

  if (property) return property;
};

export const getPropertiesByUserId = async (userId: string) => {
  const properties = await prisma.property.findMany({
    where: { ownerId: userId },
  });

  if (properties) return properties;
};

export const addProperty = async (formData: FormData) => {
  const user = await getUser();

  if (!user || !user.userId || typeof user.userId !== 'string') {
    throw new Error('A valid user ID is required.');
  }

  const { userId } = user;

  const amenities = formData.getAll('amenities') as string[];

  const images = formData
    .getAll('images')
    .filter((img): img is File => img instanceof File && img.name !== '');

  const propertyData = {
    ownerId: userId,
    type: getString(formData, 'type'),
    name: getString(formData, 'name'),
    description: getString(formData, 'description'),
    location: {
      street: getString(formData, 'location.street'),
      city: getString(formData, 'location.city'),
      state: getString(formData, 'location.state'),
      zipCode: getString(formData, 'location.zipCode'),
    },
    beds: getInt(formData, 'beds'),
    baths: getInt(formData, 'baths'),
    squareFeet: getInt(formData, 'square_feet'),
    amenities,
    rates: {
      nightly: getFloat(formData, 'rates.nightly'),
      weekly: getFloat(formData, 'rates.weekly'),
      monthly: getFloat(formData, 'rates.monthly'),
    },
    sellerInfo: {
      name: getString(formData, 'seller_info.name'),
      email: getString(formData, 'seller_info.email'),
      phone: getString(formData, 'seller_info.phone'),
    },
    images: [] as string[],
  };

  const imageURLs = await uploadImages(images);

  propertyData.images = imageURLs;

  const newProperty = await prisma.property.create({
    data: propertyData,
  });

  revalidatePath('/', 'layout');
  redirect(`/properties/${newProperty.id}`);
};
