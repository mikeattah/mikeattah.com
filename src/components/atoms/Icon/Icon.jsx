import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Icon({ icon, text, href, src, alt, pageName, pathName, iconType }) {
  const router = useRouter();
  if (iconType === 'highlight') {
    return (
      <div className='w-[33%] h-full flex flex-col'>
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
              ? 'font-bold font-ter text-blue-600 w-1/4 sm:w-3/25 h-full flex flex-col justify-center items-center hover:bg-gray-100'
              : 'font-ter text-black w-1/4 sm:w-3/25 h-full flex flex-col justify-center items-center  hover:bg-gray-100'
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
      className='relative w-10 h-10 mx-3 rounded-full ring-4 ring-white shadow-lg'
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
}

export default Icon;
