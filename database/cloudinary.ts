import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImages = async (images: File[]): Promise<string[]> => {
  const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];

  const imageURLs = await Promise.all(
    images.map(async (image) => {
      if (!supportedMimeTypes.includes(image.type)) {
        throw new Error(
          `Unsupported image type: ${image.type}. Supported types are JPEG, PNG, and WebP.`
        );
      }

      const buffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(buffer));
      const imageData = Buffer.from(imageArray);
      const imageBase64 = imageData.toString('base64');

      const res = await cloudinary.uploader.upload(
        `data:${image.type};base64,${imageBase64}`,
        {
          folder: 'next-property',
          transformation: {
            width: 1280,
            height: 720,
            crop: 'limit',
            quality: 'auto:good',
            fetch_format: 'auto',
          },
        }
      );

      return res.secure_url;
    })
  );

  return imageURLs;
};
