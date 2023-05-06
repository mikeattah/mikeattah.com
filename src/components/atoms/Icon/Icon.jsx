import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Icon = ({
  icon,
  text,
  href,
  src,
  alt,
  pageName,
  pathName,
  iconType,
}) => {
  const router = useRouter();
  if (iconType === 'highlight') {
    return (
      <div className='flex h-full w-[33%] flex-col'>
        <i>{icon}</i>
        <p>{text}</p>
      </div>
    );
  } else if (iconType === 'default') {
    return (
      <Link href={pathName} passHref>
        <a
          className={
            router.pathname === pathName
              ? 'flex h-full w-1/4 flex-col items-center justify-center font-ter font-bold text-blue-600 hover:bg-gray-100 sm:w-3/25'
              : 'flex h-full w-1/4 flex-col items-center justify-center font-ter text-black hover:bg-gray-100  sm:w-3/25'
          }
        >
          {pageName}
        </a>
      </Link>
    );
  } else if (iconType === 'alternative') {
    return <div></div>;
  }
  return (
    <a
      className='relative mx-3 h-10 w-10 rounded-full shadow-lg ring-4 ring-white'
      href={href}
      rel='noreferrer'
      target='_blank'
    >
      <Image
        alt={alt}
        className='rounded-full'
        layout='fill'
        objectFit='cover'
        objectPosition='50% 50%'
        src={src}
        title={alt}
      />
    </a>
  );
};
