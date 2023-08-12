import { Accordion } from '@nextui-org/react';
import Image from 'next/image';
import Accordions from './Accordions';
import { LINKS_DATA } from '../links/links';


const SideBar = () => {

  return (
    <div className='h-[2613px] w-[280px] flex-col  bg-dark'>
      <div>
        <Image
          height={32}
          width={250}
          src='/images/Logo.svg'
          alt='logo'
          className='pt-[40px] pr-[40px]'
        />
      </div>
      <div className='pl-[40px] text-white pt-[43px] text-[14px]'>
        <p>Menu</p>
      </div>
      <div>
        {<div>
  {LINKS_DATA.map((link ) => (
            
    <Accordions
      key={ link.key}
      icon={link.icon}
      label={link.label}
      content={link.content}
      title={link.title}
    />
    ))}
    

</div>}
      </div>
    </div>
  );
};

export default SideBar;
