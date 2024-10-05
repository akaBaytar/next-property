import { getString } from '@/helpers';

const getFloat = (formData: FormData, key: string): number => {
  const value = getString(formData, key);

  const parsed = parseFloat(value);

  if (isNaN(parsed)) {
    throw new Error(`Invalid number for ${key}.`);
  }

  return parsed;
};

export default getFloat;
