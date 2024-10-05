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

export const addProperty = async (formData: FormData) => {
  const amenities = formData.getAll('amenities');

  const images = formData
    .getAll('images')
    .filter((image) => image instanceof File && image.name !== '')
    .map((image) => image instanceof File && image.name);

  const propertyData = {
    type: formData.get('type'),
    name: formData.get('name'),
    description: formData.get('description'),
    location: {
      street: formData.get('location.street'),
      city: formData.get('location.city'),
      state: formData.get('location.state'),
      zipCode: formData.get('location.zipCode'),
    },
    beds: formData.get('beds'),
    baths: formData.get('baths'),
    square_feet: formData.get('square_feet'),
    amenities,
    rates: {
      nightly: formData.get('rates.nightly'),
      weekly: formData.get('rates.weekly'),
      monthly: formData.get('rates.monthly'),
    },
    seller_info: {
      name: formData.get('seller_info.name'),
      email: formData.get('seller_info.email'),
      phone: formData.get('seller_info.phone'),
    },
    images,
  };

  console.log(propertyData);
};
