import Image from 'next/image';

function Card({ src, alt, cardType }) {
  if (cardType === 'highlight') {
    return (
      <div className='relative w-64 h-full carousel-item m-0 p-0'>
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
      <div className='w-11/12 sm:w-120 max-h-200 mx-0 mt-0 mb-7 p-0 rounded-2xl shadow-lg transform hover:shadow-2xl z-50'>
        <div className='relative w-full h-60'>
          <Image
            alt={alt}
            className='rounded-tr-2xl rounded-tl-2xl'
            layout='fill'
            objectFit='cover'
            objectPosition='50% 50%'
            src={src}
          />
        </div>
        <div className='w-full max-h-112 flex flex-col justify-start items-center bg-white rounded-b-2xl m-0 pt-2 px-1.5'>
          <div className='w-full max-h-96 flex flex-col justify-start items-center'>
            <h2 className='text-blue-600 font-bold text-center text-2xl sm:text-2.5xl font-sec my-0.5'>
              {title}
            </h2>
            <p className='text-black text-center font-ter my-0.5'>
              {description}
            </p>
            <p className='text-blue-600 text-center font-ter my-0.5'>
              Tools: {tools}
            </p>
          </div>
          <div className='w-full h-16 flex flex-row justify-evenly items-center m-0 p-0'>
            <a
              className='text-blue-600 hover:text-white hover:bg-blue-600 font-bold border-blue-600 border-2 rounded-xl py-1 px-4 font-ter'
              href={repo}
            >
              View Repo
            </a>
            <a
              className='text-blue-600 hover:text-white hover:bg-blue-600 font-bold border-blue-600 border-2 rounded-xl py-1 px-4 font-ter'
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
      <div className='relative w-64 h-full carousel-item m-0 p-0'>
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
  }

  return (
    <div className='w-18 h-18 flex flex-col justify-evenly items-center bg-white border hover:border-2 border-blue-600 font-black rounded-2xl text-xxs font-ter text-black m-2 p-0'>
      <Image src={src} alt={tool} height='28' width='28' />
      <span>{tool}</span>
    </div>
  );
}

export default Card;
