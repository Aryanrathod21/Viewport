import Categories from '@/components/Categories'
import Contact from '@/components/Contact'
import Mostvisited from '@/components/Mostvisited'
import Text from '@/components/Text'
import Banner from '@/components/banner'
import Whereimg from '@/components/whereimg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
   <Banner/>
   <Whereimg/>
   <Mostvisited/>
   <Categories/>
   <Contact/>
   </>
  )
}
