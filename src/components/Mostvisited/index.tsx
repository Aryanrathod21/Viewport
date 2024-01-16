import Image from 'next/image'
import React from 'react'
import siuu from '@/app/assets/images/taj-mahal.webp'
import Text from '../Text'
import Knowtext from '../Text/Knowtext'

type Props = {}

const Mostvisited = (props: Props) => {
  return (
    <section>
    <Knowtext title="Most Visited Place Of All Time" subtitle="Taj Mahel"></Knowtext>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-6 '>
    <Image
    src={siuu}
    alt="sjs"
    objectFit='cover'
    height={500}
    width={1800}
    />
    <div className='flex flex-col gap-14 py-4 '>
    <strong className='text-4xl'>TAJ MAHEL</strong>

    <h2>The Taj Mahal, a globally renowned architectural wonder, stands proudly on the banks of the Yamuna River in Agra, India. Commissioned in 1632 by Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, this ivory-white marble mausoleum has captivated hearts for centuries. Its breathtaking beauty lies in its symmetrical design, intricate calligraphy, and meticulous detailing.
        Approaching through the grand entrance gate, visitors are met with a mesmerizing view of the Taj Mahal, framed by an ornate archway. The main structure, constructed over two decades by skilled artisans, exhibits a harmonious fusion of Persian, Islamic, and Indian architectural styles. The central dome and four minarets, along with delicate floral patterns and Quranic verses inscribed on the marble, contribute to its ethereal charm.
        Surrounded by the Charbagh gardens, the Taj Mahal is a symbol of love amidst pristine landscapes. The changing hues of sunlight throughout the day and the magical ambiance under the moonlight add to its allure. As a UNESCO World Heritage Site, the Taj Mahal continues to attract millions of visitors, offering a timeless journey into history, romance, and architectural magnificence.</h2>
      

    </div>
    </div>
    </section>
  )
}

export default Mostvisited