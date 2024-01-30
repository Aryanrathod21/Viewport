import Locat from '@/components/Locations'
import Mount from '@/components/Mount'
import Banner from '@/components/banner'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Locations = (props: Props) => {
  return (
    <>
    <Banner>Locations You Must Visit</Banner>
    <Locat/>
    <Mount/>
    </>
  )
}

export default Locations