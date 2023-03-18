import Image from 'next/image';
import StackAnimation from 'components/organisms';
import { stackList } from '/public/data/stackList';

function Home() {
  return (
    <div className='w-100 min-h-full border flex flex-col justify-center items-center'>
      <p className='blue'>Home</p>
    </div>
  );
}

export default Home;
