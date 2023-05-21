import Image from 'next/image';
import { nanoid } from 'nanoid';
import { portfolio } from '/public/data/portfolio';

export const Carousel = () => {
  return (
    <div className='h-[900px] w-full border'>
      {portfolio.map(item => {
        const { src, alt } = item;
        return (
          <div
            key={nanoid()}
            className='carousel-item relative m-0 h-full w-64 p-0'
          >
            <Image
              src={src}
              alt={alt}
              className='rounded-xl'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
            <div className='absolute h-full w-full'></div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};
