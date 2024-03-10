'use client'
import Knowtext from '../Text/Knowtext'
import Image from 'next/image'
import React, { useState } from "react";
import Link from "next/link"


import si0 from "@/app/assets/images/Ahemdabad1.jpg";
import si0Hover from "@/app/assets/images/ahemdabad2.jpg";
import si1 from "@/app/assets/images/Delhi1.jpg";
import si1Hover from "@/app/assets/images/Delhi2.jpg";
import si2 from "@/app/assets/images/Mumbai1.jpg";
import si2Hover from "@/app/assets/images/Mumbai2.jpg";
import si3 from "@/app/assets/images/jaipur1.jpg";
import si3Hover from "@/app/assets/images/Jaipur2.jpg";
import si4 from "@/app/assets/images/Agra1.jpg";
import si4Hover from "@/app/assets/images/Agra2.jpg";
import si5 from "@/app/assets/images/Varanasi1.jpg";
import si5Hover from "@/app/assets/images/Varanasi2.jpg";
import si6 from "@/app/assets/images/Goa1.jpg";
import si6Hover from "@/app/assets/images/Goa2.jpg";
import si7 from "@/app/assets/images/Kolkata1.jpg";
import si7Hover from "@/app/assets/images/Kolkata2.jpg";
import si8 from "@/app/assets/images/Chennai1.jpg";
import si8Hover from "@/app/assets/images/Chennai2.jpg";
import si9 from "@/app/assets/images/Udaipur1.jpg";
import si9Hover from "@/app/assets/images/Udaipur2.jpg";
import si10 from "@/app/assets/images/Shimla1.jpg";
import si10Hover from "@/app/assets/images/Shimla2.jpg";
import si11 from "@/app/assets/images/Rishikesh1.jpg";
import si11Hover from "@/app/assets/images/Rishikesh2.jpg";

const CategoriesData = [
    {
        title: "AHEMDABAD",
        image: si0,
        hoverImage: si0Hover,
      },
  {
    title: "DELHI",
    image: si1,
    hoverImage: si1Hover,
  },
  {
    title: "MUMBAI",
    image: si2,
    hoverImage: si2Hover,
  },
  {
    title: "JAIPUR",
    image: si3,
    hoverImage: si3Hover,
  },
  {
    title:"AGRA",
    image: si4,
    hoverImage: si4Hover,
  },
  {
    title: "VARANASI",
    image: si5,
    hoverImage: si5Hover,
  },

  {
    title: "GOA",
    image: si6,
    hoverImage: si6Hover,
  },
  {
    title: "KOLKATA",
    image: si7,
    hoverImage: si7Hover,
  },
  {
    title: "CHENNAI",
    image: si8,
    hoverImage: si8Hover,
  },
  {
    title: "UDAIPUR",
    image: si9,
    hoverImage: si9Hover,
  },
  {
    title:"SHIMLA",
    image: si10,
    hoverImage: si10Hover,
  },
  {
    title: "RISHIKESH",
    image: si11,
    hoverImage: si11Hover,
  },
];

type Props = {}

  const Locat = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section>
    <Knowtext title="Places You Must Visit" subtitle="India Top Tourist Attrections "></Knowtext>
    <Link href="/Places">
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


export default Locat