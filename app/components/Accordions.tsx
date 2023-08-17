'use client';
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Image from 'next/image';
import { Linktype } from './types';
import IsPro from './IsPro';
import { boolean } from 'yup';
import SvgDown from './svg/SvgDown';
import Link from 'next/link';

type IndicatorProps = {
  isOpen: boolean;
};

const Accordions = (props: Linktype) => {
  return (
    <div>
      <Accordion
        variant='splitted'
        selectionMode='multiple'
        defaultSelectedKeys={['1']}

        
      >
        <AccordionItem
          key={props.key}
          startContent={
            <Image src={props.icon} width={18} height={18} alt='logo' />
          }
          indicator={({ isOpen }: IndicatorProps) => (isOpen ? <SvgDown/> : <div className='rotate-180'><SvgDown/></div>)}
          aria-label={props.label}
          title={props.title}
          className='text-darktext  w-full pt-[23px] pl-[40px] pr-[25px]'>
          {props.content.map((item, index) => {
            return (
              <Link href={item.link? item.link : "#"} key={index}>
              <div key={index} className='p-4 flex justify-between'>
                <div>{item.label}</div>
                {item.pro && <IsPro />}
              </div>
              </Link>
            );
          })}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordions;
