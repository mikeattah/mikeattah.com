import Image from 'next/image';

function CodeEditorIcon({ href, src, alt }) {
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

export default CodeEditorIcon;
