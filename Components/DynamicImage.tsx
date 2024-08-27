import Image from 'next/image';

const DynamicImage = ({ src, alt="" }) => {
  return (
    <img
      src={src}
      alt={alt}
    ></img>
  );
};

export default DynamicImage;
