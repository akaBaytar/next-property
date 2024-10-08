type PropertyType =
  | 'Apartment'
  | 'Studio'
  | 'Condo'
  | 'House'
  | 'Cabin or Cottage'
  | 'Loft'
  | 'Room'
  | 'Chalet'
  | 'Other';

type Location = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

type Rates = {
  nightly?: number;
  weekly?: number;
  monthly?: number;
};

type SellerInfo = {
  name: string;
  email: string;
  phone: string;
};

export type User = {
  id: string;
  email: string;
  username?: string;
  image?: string;
  bookmarks: Property[];
  createdAt: Date;
  updatedAt: Date;
};

export type Property = {
  id: string;
  ownerId: string;
  owner: User;
  name: string;
  type: PropertyType;
  description: string;
  location: Location;
  beds: number;
  baths: number;
  squareFeet: number;
  amenities: string[];
  rates: Rates;
  sellerInfo: SellerInfo;
  images: string[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Message = {
  id: string;
  senderId: string;
  recipientId: string;
  propertyId: string;
  name: string;
  email: string;
  phone?: string | null;
  body: string;
  read: boolean;
  property: { name: string };
  createdAt: Date;
  updatedAt: Date;
};
