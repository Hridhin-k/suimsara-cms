'use client'
import Image from 'next/image'
import React from 'react'
import booknowSvg from '../../../public/icons/booknowButton.svg'
import knowMore from '../../../public/icons/knowMore.svg'
import orangeGradient from '../../../public/icons/orangeGradient.svg'
import greenGradient from '../../../public/icons/greenGradient.svg'
import orangeGradientSm from '../../../public/icons/orangeGradientSm.svg'

import homeImage from '../../../public/images/homeImage.png'
import curlyArrow from '../../../public/icons/curlyArrow.svg'
import homeImageLg from '../../../public/images/homeImageLg.png'
import homeImageSm from '../../../public/images/homeImageSm.png'
import homeImageMd from '../../../public/images/homeImageMd.png'

const Home = () => {
  const message = 'Hello, this is a pre-typed message!'

  const encodedMessage = encodeURIComponent(message)
  return (
    <div className="bg-secondaryBackground h-[630px] md:h-[650px] lg:h-[716px] flex flex-col  md:flex md:flex-row justify-between  md:justify-around md:mx-[54px] lg:mx-[84px] mt-[49px] md:mt-[87px] ">
      <div className="pt-[87px] w-auto md:w-[1250px] mx-auto text-center md:text-start ">
        <Image
          className="absolute  left-[-10px] top-[70px] md:left-[-100px]  md:top-[80px]  "
          alt="gradiant"
          src={orangeGradientSm}
        />

        <p className="font-poppins font-[500] text-[18px] leading-[27px] text-green">
          100% Organic Product
        </p>
        <h2 className="hidden md:block font-Playfair_Display font-[600] leading-[86px] text-[76px] md:leading-[70px] lg:leading-[85px] xl:leading-[86px] md:text-[66px] lg:text-[76px] xl:text-[76px]">
          Lustrous hair
          <br /> with the strength <br />
          of nature
          {/* Discover The
          <br /> Secret of Natural
          <br /> Beauty */}
        </h2>
        <h2 className=" block md:hidden font-Playfair_Display font-[600] leading-[76px] text-[66px] ">
          Lustrous hair with
          <br /> the strength
          <br /> of nature
          {/* Discover
          <br /> The Secret <br />
          of Natural <br />
          Beauty */}
        </h2>
        <p className="hidden md:block font-poppins font-[400] text-lead text-[18px] leading-[27px]">
          Transform your hair into beautiful and <br />
          strong locks with the power of ayurveda.
          {/* Fusce volutpat lectus et nisl consectetur finibus. In vitae
          <br /> scelerisque augue, in varius eros. */}
        </p>
        <p className="block md:hidden font-poppins font-[400] text-lead text-[18px] leading-[27px]">
          Transform your hair into beautiful and <br />
          strong locks with the power of ayurveda. <br />
          {/* Fusce volutpat lectus et nisl <br /> consectetur finibus. In vitae{' '}
          <br />
          scelerisque augue, in varius eros. */}
        </p>
        <div className="flex justify-evenly md:justify-start mt-[32px]  md:w-[290px] ">
          <a
            className="w-[167px] h-[51px] md:mr-[32px] z-50"
            href={`https://api.whatsapp.com/send?phone=${918891010999}&text=${encodedMessage}'`}
          >
            <Image alt="Book Now" src={booknowSvg} />
          </a>

          <a className="w-[100px] h-[27px] mt-2">
            <Image src={knowMore} alt="Know More" />
          </a>
        </div>
      </div>

      <Image
        className="mr-[15%] ml-auto mt-0  md:absolute lg:top-[470px] xl:top-[550px] lg:right-[600px] xl:right-[800px]  "
        alt="curlyArrow"
        src={curlyArrow}
      />
      <Image
        className="absolute hidden xl:block  z-50 lg:w-[675px] lg:h-[887px] xl:w-[915px] xl:h-[1103px] top-[120px]    right-0  lg:right-[0px] xl:right-[0px]"
        alt="alamkritha"
        src={homeImage}
      />
      {/* lg screen */}
      <Image
        className="absolute hidden lg:block xl:hidden   z-50 w-[600px] lg:h-[900px]  top-[120px]    right-0  lg:right-[0px] xl:right-[0px]"
        alt="alamkritha"
        src={homeImageLg}
      />
      {/* md screen */}
      <Image
        className="absolute hidden md:block lg:hidden  z-50 w-[500px] lg:h-[1020px]  top-[100px]    right-0  lg:right-[0px] xl:right-[0px]"
        alt="alamkritha"
        src={homeImageSm}
      />
      {/* sm screen */}
      <Image
        className="absolute hidden sm:block md:hidden  z-50 w-[600px]   top-[730px]     right-[0px]"
        alt="alamkritha"
        src={homeImageLg}
      />
      {/* xs screen */}
      <Image
        className="absolute  sm:hidden  z-50 max-w-[360px]   top-[660px]     right-[0px]"
        alt="alamkritha"
        src={homeImageMd}
      />

      <Image
        className="absolute  w-[200px]  h-[400px] lg:w-[400px] lg:h-[600px] md:right-0 md:top-[150px] lg:right-[0px]  xl:right-[300px]  top-[50px]  "
        alt="hairoilgradiant"
        src={orangeGradient}
      />

      <div className="hidden md:block absolute bg-green  w-[100px]  h-[100px] rounded blur-3xl   md:right-[300px] md:top-[580px] lg:top-[650px] lg:right-[400px]  xl:right-[700px]  top-[50px]"></div>
    </div>
  )
}

export default Home
