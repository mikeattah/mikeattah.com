import { nanoid } from 'nanoid';

function Navigation() {
  const navagationList = ['Home', 'About', 'Projects', 'Services', 'Contact'];
  return (
    <nav className='w-full h-[90px] flex flex-row justify-center align-center sm:border-b-2 shadow-md z-10 border'>
      <div className=''>
        <p className=''>
          <span className=''>&#64;</span>mikeattah
          <span className=''>&#91;</span>h<span className=''>&#93;</span>
        </p>
      </div>
      <div>
        <ul className='blue'>
          {navagationList.map(list => {
            return (
              <li key={nanoid()} className=''>
                {list}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
