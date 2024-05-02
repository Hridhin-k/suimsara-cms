import Image from 'next/image'
import React from 'react'
import ratingStars from '../../../public/icons/ratingStars.svg'
import greenLeaf from '../../../public/icons/greenLeaf.svg'

const Rating = () => {
  return (
    <div className=" flex flex-col md:flex-row text-center md:text-start justify-between  md:justify-around bg-primaryBackground w-full  md:h-[158px] py-[49px]  md:py-0 md:px-[54px] lg:px-[84px] items-center mt-[430px] sm:mt-[700px] md:mt-0">
      <p className="md:hidden font-poppins text-[26px] md:text-[26px] lg:text-[26px] font-[400] leading-[36px] md:w-[1260px] relative">
        Trusted by over
        <br />{' '}
        <span className="text-green">
          350,000+ Clients
          <br />
        </span>
        worldwide since 2008
        <span>
          <Image
            alt="green leaf"
            src={greenLeaf}
            className="absolute top-[-100px] md:left-[-10px] md:top-[-125px]   w-[80px] h-[108px]"
          />
        </span>
      </p>
      <p className=" hidden md:block font-poppins text-[27px] md:text-[26px] lg:text-[26px] font-[400] leading-[36px] md:w-[1260px] relative">
        Trusted by over <span className="text-green">350,000+ Clients</span>
        <br /> worldwide since 2008
        <span>
          <Image
            alt="green leaf"
            src={greenLeaf}
            className="absolute left-[-10px] top-[-125px] "
          />
        </span>
      </p>
      <div className="flex mt-[25px]  md:mt-0 justify-evenly md:absolute w-[300px]  lg:w-[350px] md:right-[80px] md:mb-[20px] lg:right-[150px] xl:right-[320px]    ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[56px] font-[500] leading-[84px]">4.6</h1>
          <Image alt="rating" src={ratingStars} />
          <p className="text-[16px] font-[400] leading-[24px]">3,350 Ratings</p>
        </div>
        <div className="">
          <h1 className="text-[56px]  lg:text-[56px] font-[500] leading-[84px]">
            6M+
          </h1>
          <p className="text-[16px] font-[400] leading-[24px]">
            Worldwide Product <br />
            sale per year
          </p>
        </div>
      </div>
    </div>
  )
}

export default Rating
