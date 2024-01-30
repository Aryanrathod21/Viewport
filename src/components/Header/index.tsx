import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/images/logo.png'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <section className='sticky z-40 flex flex-row w-full bg-slate-100 justify-between top-0 '>
       <Link href="/"><Image
      src={logo}
      alt="logo"
        width={80}
        height={80}
      /> </Link>  
      <ul className=' lg:flex md:flex hidden items-center  ' >
        <li  className='flex gap-10 ' >   
            <Link href="/" className='hover:text-green-800 hover:underline transition-all duration-500'>Home</Link>
            <Link href="/Locations" className='hover:text-green-800 hover:underline transition-all duration-500'>Locations</Link>
            <Link href="/Aboutus" className='hover:text-green-800 hover:underline transition-all duration-500'>About Us</Link>
            <Link href="/Contactus" className='hover:text-green-800 hover:underline transition-all duration-500'>Contact Us</Link>
            <Link href="/Login" className='hover:text-green-800 hover:underline transition-all duration-500'>Login</Link>
        </li>
</ul>               
    </section>
  )
}

export default Header