'use client';
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Image from 'next/image';
import {Linktype} from './types'
import IsPro from './IsPro';


const Accordions = (props:Linktype) => {
  

  return (
    <div>
      <Accordion variant='shadow' selectionMode='multiple' >
        <AccordionItem
          key={props.key}
          startContent={
            <Image src={props.icon} width={18} height={18} alt='logo'/>
          }
          
          aria-label={props.label}
          title= {props.title}
          className='text-darktext  w-full pt-[23px] pl-[40px] pr-[25px]'>
          {/* {props.content?.map((item: string, index: number) => (
            <div key={index}>{item}</div>
          ))} */}

          {props.content.map((item , index)=>{
            return  <div key={index} className='flex justify-between'>
              <div >{item.label}</div>
              {item.pro && <IsPro/>}
            </div>
          })}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordions;
