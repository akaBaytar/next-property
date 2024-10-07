'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
} from 'react-share';

import { Property } from '@/types';

const ShareButtons = ({ property }: { property: Property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property.id}`;

  return (
    <div className='bg-white rounded-md py-2 px-4 shadow-md'>
      <h3 className='text-lg font-semibold py-2 text-center lg:text-start'>
        Share Property
      </h3>
      <div className='flex items-center pb-4 gap-4 justify-center lg:justify-start'>
        <FacebookShareButton
          url={shareUrl}
          hashtag={`#${property.type}ForRent`}>
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtags={[`${property.type}ForRent`]}>
          <XIcon size={36} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={property.name}>
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>
        <TelegramShareButton url={shareUrl} title={property.name}>
          <TelegramIcon size={36} round />
        </TelegramShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body='Check out that listing:'>
          <EmailIcon size={36} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
