const getString = (formData: FormData, key: string): string => {
  const value = formData.get(key);

  if (typeof value !== 'string') {
    throw new Error(`Invalid or missing value for ${key}.`);
  }

  return value.trim();
};

export default getString;
