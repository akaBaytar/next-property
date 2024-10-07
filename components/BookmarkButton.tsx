'use client';

import { useState, useEffect } from 'react';
import { FaBookmark } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Property } from '@/types';
import { bookmarkProperty } from '@/actions/bookmark.action';

const BookmarkButton = ({ property }: { property: Property }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    bookmarkProperty(property.id).then((res) => {
      setIsBookmarked(res.isBookmarked);
      setLoading(false);
    });
  }, [property.id]);

  const handleClick = async () => {
    bookmarkProperty(property.id).then((res) => {
      setIsBookmarked(res.isBookmarked);
    });
  };

  return (
    <button
      onClick={handleClick}
      className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold w-full py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-200'>
      {isLoading ? (
        <AiOutlineLoading3Quarters className='text-2xl animate-spin' />
      ) : isBookmarked ? (
        <span className='flex items-center gap-2'>
          <FaBookmark /> Remove Bookmark
        </span>
      ) : (
        <span className='flex items-center gap-2'>
          <FaBookmark /> Bookmark
        </span>
      )}
    </button>
  );
};

export default BookmarkButton;
