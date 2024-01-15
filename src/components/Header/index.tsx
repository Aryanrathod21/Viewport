import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/images/logo.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <section className='sticky z-40 flex flex-row w-full bg-slate-100 justify-between top-0 '>
       <a href='#'> <Image
      src={logo}
      alt="logo"
        width={80}
        height={80}
      /> </a>  
      <ul className=' lg:flex md:flex hidden items-center  ' >
        <li  className='flex gap-10 ' >   
            <a href='#' >Home</a>
            <a href='#' >Locations</a>
            <a href='#' >Things To Do</a>
            <a href='#' >About Us</a>
            <a href='#' >Contact Us</a>
        </li>
</ul>               
    </section>
  )
}

export default Header