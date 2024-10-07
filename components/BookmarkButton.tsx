import { FaBookmark } from 'react-icons/fa6';

import { Property } from '@/types';
import {
  bookmarkProperty,
  isPropertyBookmarked,
} from '@/actions/bookmark.action';
import { getUser } from '@/helpers';
import { SignInButton } from '@clerk/nextjs';

const BookmarkButton = async ({ property }: { property: Property }) => {
  const session = await getUser();

  if (!session || !session.userId) {
    return (
      <SignInButton>
        <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold w-full py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-200'>
          Login to Bookmark Property
        </button>
      </SignInButton>
    );
  }

  const isBookmarked = await isPropertyBookmarked(
    property.id,
    session.userId as string
  );

  return (
    <form
      action={bookmarkProperty.bind(
        null,
        property.id,
        session.userId as string
      )}>
      <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold w-full py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-200'>
        {isBookmarked ? (
          <span className='flex items-center gap-2'>
            <FaBookmark /> Remove Bookmark
          </span>
        ) : (
          <span className='flex items-center gap-2'>
            <FaBookmark />
            Bookmark
          </span>
        )}
      </button>
    </form>
  );
};

export default BookmarkButton;
