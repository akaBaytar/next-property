'use client';

import { ClipLoader } from 'react-spinners/';

const css = {
  display: 'block',
  margin: '5rem auto',
};

const LoadingPage = () => {
  return (
    <ClipLoader
      color='#6366f1'
      cssOverride={css}
      size={150}
      aria-label='Loading spinner'
    />
  );
};

export default LoadingPage;
