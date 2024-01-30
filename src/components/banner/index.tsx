import React, { ReactNode } from 'react';

type Props = {
  children:ReactNode
};

const Banner = ({children}: Props) => {
  return (
    <div className='Banner relative'>
      <video src={require('../../../public/video.mp4')} autoPlay muted loop className='w-full h-full object-cover' />
      <h1 className=' absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold w-full text-center opacity-75'>
        {children}
      </h1>
    </div>
  );
};

export default Banner;
