import React from 'react';
import Image from 'next/image';
import last from '@/app/assets/images/onepiece.webp';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className='relative  flex justify-center items-center pb-10 flex-wrap'>
      <div className='relative h-[30dvh] w-screen bg-red-100 rounded-lg '>
        <Image
          src={last}
          alt="2"
          // layout='fill'
          fill
          objectFit='cover'
          className='rounded-lg'
        />
       
        <div className='absolute top-0 left-0 w-fit h-full flex flex-col justify-center pl-16 gap-4'>
          <h1 className='text-black lg:text-5xl md:text-3xl sm:text-xl text-lg'>Join With Us</h1>
          <p className='text-black w-fit'>Lorem ipsum dolor sit amet,
           consectetur adipiscing elit ut aliquam.</p>
        </div>
        <div className=' flex lg:justify-end pt-24 lg:pr-16 md:pr-10 sm:pr-4 pr-2 md:justify-end sm:justify-center justify-center'>
        <input
            type="email"
            placeholder="enter your email"
            className='border border-gray-400 p-2 absolute w-fit rounded-lg  '
          />

        </div>
        </div>
     
    </section>
  );
};

export default Contact;
