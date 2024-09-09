import Image from 'next/image';

const DynamicImage = ({ src: any, alt="" }) => {
  return (
    <img
      src={src as any}
      alt={alt}
    ></img>
  );
};

export default DynamicImage;
