import Image from 'next/image'
import React from 'react'
import logo from "@/app/assets/images/logo.png";
import { FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';


type Props = {}

const Footer = (props: Props) => {
  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 bg-slate-100 '>
        <div className='flex flex-col gap-6 py-4'>
         <a href='#'> <Image
      src={logo}
      alt="logo"
        width={150}
        height={150}
      /> </a> 
      <p className='text-lg font-semibold'>Hisashiburi dana mugiwara
      </p>
      </div>
      <div className='flex flex-col gap-14 py-4'>
      <strong className='text-2xl'>Information</strong>
      <ul className='grid grid-cols-3 grid-rows-3 gap-6'>
                        <a href='#'><li className='pr-10'>Blog</li></a>
                        <a href='#'><li className='pr-10'>About us</li></a>
                        <a href='#'><li className=''>Contact</li></a>
                        <a href='#'><li className='pr-10'>Privacy</li></a>
                        <a href='#'><li className='pr-10'>Login</li></a>
                        <a href='#'><li className=''>Shop</li></a>
                        <a href='#'><li className='pr-10'>My Accout</li></a>
                        <a href='#'><li className='pr-10'>FAQs</li></a>
                        

                    </ul>
      </div>
      <div className='flex flex-col gap-14 py-4'>
        
      <strong className='text-2xl'>Social Media</strong>
      <div className='flex flex-row gap-10'>
                <a href='#'> <FaInstagram className='h-10 w-10'/> </a>

                <a href='#'> <FaTwitter className='h-10 w-10'/></a>   

                <a href='#'> <FaPinterestP className='h-10 w-10'/></a>     

                </div>
      </div>
     
    </section>
  )
}

export default Footer