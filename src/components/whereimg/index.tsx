import Image from 'next/image'
import React from 'react'
import siuu from '@/app/assets/images/afterbanner.webp'
import Text from '../Text'


type Props = {}

const Whereimg = (props: Props) => {
  return (
    <section>
    <Text/>
    <Image
    src={siuu}
    alt="sjs"
    objectFit='cover'
    height={500}
    width={1800}
    /> </section>
  )
}

export default Whereimg