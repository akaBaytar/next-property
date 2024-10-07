import { FaShare } from 'react-icons/fa6';

import { Property } from '@/types';

const ShareButtons = ({ property }: { property: Property }) => {
  return (
    <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold w-full py-2 px-4 rounded-md flex gap-2 items-center justify-center transition-colors duration-200'>
      <FaShare /> Share
    </button>
  );
};

export default ShareButtons;
