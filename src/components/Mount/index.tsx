import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/images/Mount-Everest.jpg'

type Props = {}

const Mount = (props: Props) => {
  return (
    <div className='relative'>
      <Image
      src={logo}
      alt="logo"
      className='opacity-60 w-full overflow-hidden pb-4'
      />
      <h2 className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-800 lg:text-4xl md:text-2xl sm:text-xl text-sm font-bold w-full text-center px-8'>
      Exploring, where every step is a page in the story of a place.
      </h2>
    </div>
  )
}

export default Mount