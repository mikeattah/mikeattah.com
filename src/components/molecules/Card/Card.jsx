import Image from 'next/image';

export const Card = ({
  src,
  alt,
  title,
  tools,
  description,
  repo,
  site,
  cardType,
}) => {
  if (cardType === 'highlight') {
    return (
      <div className='carousel-item relative m-0 h-full w-64 p-0'>
        <Image
          alt={alt}
          className='rounded-xl'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          src={src}
        />
      </div>
    );
  } else if (cardType === 'default') {
    return (
      <div className='max-h-200 z-50 mx-0 mb-7 mt-0 w-11/12 transform rounded-2xl p-0 shadow-lg hover:shadow-2xl sm:w-120'>
        <div className='relative h-60 w-full'>
          <Image
            alt={alt}
            className='rounded-tl-2xl rounded-tr-2xl'
            layout='fill'
            objectFit='cover'
            objectPosition='50% 50%'
            src={src}
          />
        </div>
        <div className='max-h-112 m-0 flex w-full flex-col items-center justify-start rounded-b-2xl bg-white px-1.5 pt-2'>
          <div className='flex max-h-96 w-full flex-col items-center justify-start'>
            <h2 className='my-0.5 text-center font-sec text-2xl font-bold text-blue-600 sm:text-2.5xl'>
              {title}
            </h2>
            <p className='my-0.5 text-center font-ter text-black'>
              {description}
            </p>
            <p className='my-0.5 text-center font-ter text-blue-600'>
              Tools: {tools}
            </p>
          </div>
          <div className='m-0 flex h-16 w-full flex-row items-center justify-evenly p-0'>
            <a
              className='rounded-xl border-2 border-blue-600 px-4 py-1 font-ter font-bold text-blue-600 hover:bg-blue-600 hover:text-white'
              href={repo}
            >
              View Repo
            </a>
            <a
              className='rounded-xl border-2 border-blue-600 px-4 py-1 font-ter font-bold text-blue-600 hover:bg-blue-600 hover:text-white'
              href={site}
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    );
  } else if (cardType === 'alternative') {
    return (
      <div className='carousel-item relative m-0 h-full w-64 p-0'>
        <Image
          alt={alt}
          className='rounded'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          src={src}
        />
      </div>
    );
  }

  return (
    <div className='m-2 flex h-18 w-18 flex-col items-center justify-evenly rounded-2xl border border-blue-600 bg-white p-0 font-ter text-xxs font-black text-black hover:border-2'>
      <Image src={src} alt={tools} height='28' width='28' />
      <span>{tools}</span>
    </div>
  );
};
