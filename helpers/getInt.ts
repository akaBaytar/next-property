import { getString } from '@/helpers';

const getInt = (formData: FormData, key: string): number => {
  const value = getString(formData, key);

  const parsed = parseInt(value, 10);

  if (isNaN(parsed)) {
    throw new Error(`Invalid number for ${key}.`);
  }
  
  return parsed;
};

export default getInt;
