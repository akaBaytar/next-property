import Image from 'next/image';

const PropertyImages = ({ images }: { images: string[] }) => {
  return (
    <div>
      {images.length === 1 ? (
        <Image
          src={images[0]}
          alt='Property Image'
          className='object-cover h-96 mx-auto rounded-md'
          width={1280}
          height={720}
          priority={true}
        />
      ) : (
        <div
          className={`grid grid-cols-1 md:grid-cols-${
            Math.ceil(images.length) / 2
          } lg:grid-cols-${images.length} gap-4`}>
          {images.map((image, idx) => (
            <div key={idx}>
              <Image
                src={image}
                alt='Property Images'
                className='object-cover h-96 w-full rounded-md'
                width={1280}
                height={720}
                priority={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyImages;
