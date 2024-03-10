'use client'
import Knowtext from '../Text/Knowtext'
import Image from 'next/image'
import React, { useState } from "react";

import si0 from "@/app/assets/images/beaches1.jpg";
import si0Hover from "@/app/assets/images/beach2.jpg";
import si1 from "@/app/assets/images/hiking1.jpg";
import si1Hover from "@/app/assets/images/hiking2.jpeg";
import si2 from "@/app/assets/images/Wateractivity1.webp";
import si2Hover from "@/app/assets/images/wateractivity2.jpg";
import si3 from "@/app/assets/images/town1.jpg";
import si3Hover from "@/app/assets/images/town2.jpg";
import si4 from "@/app/assets/images/history1.webp";
import si4Hover from "@/app/assets/images/history2.jpg";
import si5 from "@/app/assets/images/redwoods1.jpeg";
import si5Hover from "@/app/assets/images/redwoods2.jpeg";
import si6 from "@/app/assets/images/beaches1.jpg";
import si6Hover from "@/app/assets/images/beaches1.jpg";
import si7 from "@/app/assets/images/beaches1.jpg";
import si7Hover from "@/app/assets/images/beaches1.jpg";
import Link from 'next/link';


const CategoriesData = [
  {
    title: "BEACH",
    image: si0,
    hoverImage: si0Hover,
  },
  {
    title: "HIKING",
    image: si1,
    hoverImage: si1Hover,
  },
  {
    title: "WATERACTIVITY",
    image: si2,
    hoverImage: si2Hover,
  },
  {
    title: "TOWN",
    image: si3,
    hoverImage: si3Hover,
  },
  {
    title:"HISTORY",
    image: si4,
    hoverImage: si4Hover,
  },
  {
    title: "RED WOODS",
    image: si5,
    hoverImage: si5Hover,
  },

];

type Props = {}

  const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section>
    <Knowtext title="START PLANNING YOUR ADVENTURE" subtitle="India Top Tourisum Categories"></Knowtext>
    <Link href='/Locations'>
    <div className=" grid xl:grid-cols-3 grid-rows-2 z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 ">
      {CategoriesData.map((cate, index) => (
        <div key={cate.title} className="relative group z-0  pb-12">
          <div
            className="relative aspect-square z-0 transition-image transition-all duration-1000 ease-in-out "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          ><div className='opacity-90'>
            <Image
              src={hoveredIndex === index ? cate.hoverImage : cate.image}
              alt={cate.title}
              objectFit="cover"
              layout="fill"
            /></div>
             <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-50 lg:text-3xl md:text-2xl sm:text-xl text-lg  font-bold w-full text-center ">
            <p className="text-center">{cate.title}</p>
          </div>
          </div>
         
        </div>
      ))}
    </div></Link>
    </section>
  );
};


export default Categories