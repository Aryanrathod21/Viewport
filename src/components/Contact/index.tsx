import React from 'react';
import Image from 'next/image';
import last from '@/app/assets/images/onepiece.webp';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className='relative  flex justify-center items-center pb-10'>
      <div className='relative h-[30vh] w-screen bg-red-100 rounded-lg overflow-hidden'>
        <Image
          src={last}
          alt="2"
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'></div>
        <div className='absolute top-0 left-0 w-[25dvw] h-full flex flex-col justify-center pl-20 gap-4'>
          <h1 className='text-black text-5xl'>Join With Us</h1>
          <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
        </div>
        <div className=' flex justify-end pt-24 pr-16'>
        <input
            type="email"
            placeholder="enter your email"
            className='border border-gray-400 p-2 absolute w-[30dvw] rounded-lg  '
          />

        </div>
      </div>
    </section>
  );
};

export default Contact;
