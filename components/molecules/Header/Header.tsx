import React from 'react';
import { nanoid } from 'nanoid';

const Header: React.FC = () => {
  const navagationList = ['Home', 'About', 'Projects', 'Services', 'Contact'];
  return (
    <nav className='align-center z-10 flex h-[90px] w-full flex-row justify-center border shadow-md sm:border-b-2'>
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
};

export default Header;