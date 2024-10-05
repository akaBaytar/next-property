import { getString } from '@/helpers';

const getFloat = (formData: FormData, key: string): number | null => {
  const value = getString(formData, key).trim();

  if (value === '') return null;

  const parsed = parseFloat(value);

  if (isNaN(parsed)) return null;

  return parsed;
};

export default getFloat;
