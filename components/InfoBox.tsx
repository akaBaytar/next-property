import Link from 'next/link';

type PropTypes = {
  title: string;
  text: string;
  link: string;
  buttonText: string;
  className: string;
  buttonClassName: string;
};

const InfoBox = ({
  title,
  text,
  link,
  buttonText,
  className,
  buttonClassName,
}: PropTypes) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${className}`}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='mt-2 mb-4 text-pretty'>{text}</p>
      <Link
        href={link}
        className={`inline-block text-white rounded-md px-4 py-2 transition-colors duration-200 ${buttonClassName}`}>
        {buttonText}
      </Link>
    </div>
  );
};

export default InfoBox;
