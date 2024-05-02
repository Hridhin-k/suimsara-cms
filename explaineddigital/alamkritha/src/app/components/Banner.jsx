import Image from 'next/image'
import React from 'react'
import bannerImage from '../../../public/images/bannerImage.png'
import bannerImageXl from '../../../public/images/bannerImageXl.png'
import bannerImageSmall from '../../../public/images/bannerImageSmall.png'

import bannerImageMedium from '../../../public/images/bannerImageMedium.png'

import bannerImageLg from '../../../public/images/bannerImageLg.png'

const Banner = () => {
  return (
    <div className="mx-auto mt-[10px]   h-fit">
      <Image
        src={bannerImageXl}
        alt="banner"
        className="hidden xl:block h-[331px]"
      />
      <Image
        src={bannerImageLg}
        alt="banner"
        className="hidden lg:block xl:hidden h-[331px]"
      />

      <Image
        src={bannerImageMedium}
        alt="banner"
        className="hidden md:block lg:hidden  w-screen h-[331px]"
      />

      <Image
        src={bannerImageSmall}
        alt="banner"
        className="block md:hidden h-[50%] w-screen"
      />
    </div>
  )
}

export default Banner
