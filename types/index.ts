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

export type Property = {
  _id: string;
  owner: string;
  name: string;
  type: PropertyType;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    weekly?: number;
    monthly?: number;
    nightly?:number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};
