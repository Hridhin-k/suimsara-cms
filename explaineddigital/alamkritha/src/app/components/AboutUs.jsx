import Image from 'next/image'
import React from 'react'
import aboutusStar from '../../../public/icons/aboutusStar.svg'
import aboutusImage from '../../../public/images/aboutusImage.png'
import contactusLeaf from '../../../public/images/contactusLeaf.png'

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col justify-normal lg:justify-between items-center text-center h-[1688px] sm:h-[1190px]  lg:h-[802px] mt-[110px] relative bg-secondaryBackground mb-[22px] md:mb-[0px]">
        <Image
          src={contactusLeaf}
          alt="contactusLeaf"
          className="absolute  left-0 top-[-180px]"
        />
        {/* <div className="absolute z-0  h-full  justify-center w-full  pt-[-100px] ml-auto mr-auto   bg-no-repeat bg-cover    " style={{ backgroundImage: `url('/images/aboutusWhite.png')` }}></div> */}
        <div className="z-50">
          <h1 className="text-[54px] leading-[72px] font-[500] text-dark font-Playfair_Display">
            Why Choose <span className="text-green">Alamkritha?</span>
          </h1>
          <p className="hidden md:block leading-[24px] text-[14px] sm:text-[16px] font-[400] text-lead font-poppins mt-[16px] ">
            {/* Fusce volutpat lectus et nisl consectetur finibus. In vitae <br />
            scelerisque augue, in varius eros. */}
            The products of Alamkritha herbals are based on advanced scientific
            technology .<br /> The ayurvedic formulations are enriched with all
            the essential nutrients needed for hair growth .{' '}
          </p>
          <p className="block md:hidden leading-[24px] text-[14px] sm:text-[16px] font-[400] text-lead font-poppins mt-[16px] ">
            {/* Fusce volutpat lectus et nisl consectetur finibus. In vitae <br />
            scelerisque augue, in varius eros. */}
            The products of Alamkritha herbals are based on advanced <br />
            scientific technology . The ayurvedic formulations are
            <br /> enriched with all the essential nutrients needed for hair
            growth .{' '}
          </p>
        </div>
        <div className=" mt-0 lg:mt-[24px] w-full lg:w-[950px] z-50 h-auto ">
          <div className="flex flex-col   sm:flex-row justify-center items-center  sm:justify-around lg:justify-between mt-[44px] mb-[44px] sm:mb-[58px] sm:mt-[77px] mx-auto md:mx-0 ">
            <div className="text-start mb-[42px] sm:mb-[0px]">
              <Image
                alt="star"
                src={aboutusStar}
                className="w-[38px] h-[38px]"
              />
              <h1 className="text-[26px] leading-[36px] font-[500] font-poppins text-dark mt-[11px]">
                Best Hair Care Item
              </h1>
              <p className="text-[14px] leading-[31px] font-[300] font-poppins text-lead">
                Fusce volutpat lectus et nisl consectetur finibus. <br />
                In vitae scelerisque augue, in varius eros.
              </p>
            </div>
            <div className="text-start mb-[42px] sm:mb-[0px]">
              <Image
                alt="star"
                src={aboutusStar}
                className="w-[38px] h-[38px]"
              />
              <h1 className="text-[26px] leading-[36px] font-[500] font-poppins text-dark  mt-[11px]">
                Advance Formula{' '}
              </h1>
              <p className="text-[14px] leading-[31px] font-[300] font-poppins">
                Fusce volutpat lectus et nisl consectetur finibus. <br />
                In vitae scelerisque augue, in varius eros.
              </p>
            </div>
          </div>
          <div className="flex flex-col   sm:flex-row justify-center items-center  sm:justify-around lg:justify-between  z-50 sm:mx-[0px] md:mx-0">
            <div className="text-start mb-[42px]  sm:mb-[0px]">
              <Image
                alt="star"
                src={aboutusStar}
                className="w-[38px] h-[38px]"
              />
              <h1 className="text-[26px] leading-[36px] font-[500] font-poppins text-dark  mt-[11px]">
                Sustainable Practices
              </h1>
              <p className="text-[14px] leading-[31px] font-[300] font-poppins">
                Fusce volutpat lectus et nisl consectetur finibus. <br />
                In vitae scelerisque augue, in varius eros.
              </p>
            </div>
            <div className="text-start ">
              <Image
                alt="star"
                src={aboutusStar}
                className="w-[38px] h-[38px]"
              />
              <h1 className="text-[26px] leading-[36px] font-[500] font-poppins text-dark  mt-[11px]">
                Transparency
              </h1>
              <p className="text-[14px] leading-[31px] font-[300] font-poppins">
                Fusce volutpat lectus et nisl consectetur finibus. <br />
                In vitae scelerisque augue, in varius eros.
              </p>
            </div>
          </div>

          <Image
            alt="alamkritha hairoil"
            src={aboutusImage}
            className="hidden lg:block z-50 absolute mt-[50px]  lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <Image
          alt="alamkritha hairoil"
          src={aboutusImage}
          className=" absolute bottom-[0px]  sm:bottom-[0px] z-50 block lg:hidden "
        />
        <div className="hidden md:block absolute lg:relative bottom-[0px] z-0 w-full h-[233px] bg-secondaryBackground "></div>
        <div className="absolute sm:w-[480px] bottom-[15px] md:bottom-[0px] z-0 w-full h-[59px] bg-[#00000030] blur-xl"></div>
      </div>
    </>
  )
}

export default AboutUs
