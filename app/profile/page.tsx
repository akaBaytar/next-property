import Image from 'next/image';

import { Property } from '@/types';
import { getUser } from '@/helpers';
import PROFILE_IMAGE from '@/assets/profile.png';
import ProfileProperties from '@/components/ProfileProperties';
import { getPropertiesByUserId } from '@/actions/properties.action';

const ProfilePage = async () => {
  const user = await getUser();
  const properties = await getPropertiesByUserId(user?.userId as string);

  return (
    <section className='bg-indigo-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-indigo-500 mb-6 mt-12 px-2 md:px-0'>
          Profile
        </h1>
        <div className='bg-white p-6 shadow-md rounded-md border mx-2 md:mx-0'>
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row md:items-center gap-4'>
              <Image
                src={user?.user.imageUrl ?? PROFILE_IMAGE}
                alt='User Avatar'
                width={128}
                height={128}
                className='h-32 w-32 rounded-md'
              />
              <div>
                <h2 className='text-lg mb-2'>
                  <span className='font-bold'>Name: </span>
                  <span>
                    {user?.user.firstName} {user?.user.lastName}
                  </span>
                </h2>
                <h2 className='text-lg mb-2'>
                  <span className='font-bold'>Email: </span>
                  <span>{user?.user.emailAddresses[0].emailAddress}</span>
                </h2>
                <h2 className='text-lg'>
                  <span className='font-bold'>Membership: </span>
                  <span>
                    {new Date(user!.user.createdAt).toLocaleDateString()}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl px-2 md:px-0 pb-24'>
          <h2 className='text-2xl font-semibold text-indigo-500 mb-6 mt-12'>
            Your Properties
          </h2>
          <div className='bg-white p-6 mb-4 shadow-md rounded-md border'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
              <ProfileProperties propertyList={properties as Property[]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
