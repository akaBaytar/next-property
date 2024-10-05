import { currentUser } from '@clerk/nextjs/server';

const getUser = async () => {
  const user = await currentUser();
  
  const userId = user?.publicMetadata?.userId;

  if (!user) return null;

  return { user, userId };
};

export default getUser;
