import Image from 'next/image';

interface DynamicImageProps {
  src: string;
  alt?: string;
}


const DynamicImage: React.FC<DynamicImageProps>  = ({ src, alt="" }) => {
  return (
    <img
      src={src as any}
      alt={alt}
    ></img>
  );
};

export default DynamicImage;
