import Image from 'next/image';

const PropertyHeaderImage = ({ image }: { image: string }) => {
  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <Image
            src={image}
            alt='Property Header Image'
            width='1280'
            height='720'
            className='object-cover h-96 md:h-[30rem] lg:h-[36rem] w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
