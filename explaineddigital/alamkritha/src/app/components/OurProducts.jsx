import Image from 'next/image'
import React from 'react'
import hairoil from '../../../public/images/products/hairoil.png'
import hairOil from '../../../public/images/products/hairoil.png'

import mitti from '../../../public/images/products/mitti.png'

import beardOil from '../../../public/images/products/beardoil.png'
import hairoilTwo from '../../../public/images/products/hairoil2.png'
import productshadowImage from '../../../public/images/products/productshadowImage.png'
import greenLeaf from '../../../public/icons/greenLeaf.svg'
import orangeGradient from '../../../public/icons/orangeGradient.svg'
import greenWhatsapp from '../../../public/icons/greenWhatsapp.svg'
import whiteWhatsapp from '../../../public/icons/whiteWhatsapp.svg'

const OurProducts = () => {
  return (
    <div className="h-fit bg-secondaryBackground relative ">
      <Image
        className="hidden sm:block absolute w-[700px] h-[500px] left-[-250px] xl:left-[-150px]  top-[-280px] z-0  "
        alt="gradiant"
        src={orangeGradient}
      />
      <Image
        className="hidden sm:block absolute w-[700px] h-[500px] left-[-250px] xl:left-[-150px]  top-[-280px] z-0  "
        alt="gradiant"
        src={orangeGradient}
      />

      <div className="h-auto ml-auto mr-auto mt-[120px] text-center">
        <div className="  relative w-fit text-center mx-auto">
          <h1 className="hidden sm:block font-Playfair_Display text-[54px] font-[500] leading-[72px] text-dark ">
            Other Products from <br />
            Alamkritha Family
          </h1>
          <h1 className="sm:hidden font-Playfair_Display text-[50px] sm:text-[54px] font-[500] leading-[72px] text-dark whitespace-nowrap">
            Other Products <br />
            from Alamkritha <br />
            Family
          </h1>
          <Image
            alt="green leaf"
            src={greenLeaf}
            className="absolute z-[100] sm:top-12 sm:right-[-60px] top-[135px] right-[35px] w-[110px] sm:w-[130px]"
          />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 xs:flex justify-center gap-0 max-w-[1200px] mx-auto font-poppins  mt-[72px] mb-[100px] px-10 lg:px-5">
          <div className=" xl:p-4 lg:p-2 p-3 md:col-span-1 xs:row-span-1 lg:col-span-1 w-[282px] h-[479px] relative">
            <Image src={hairOil} alt="hairoil" className="z-50" />
            {/* <Image src={productshadowImage} alt='hairoil' className='absolute  z-0 items-center top-[50px]'/> */}
            <p className="mt-[18px] text-[25px] text-dark font-medium">
              Hair Oil
            </p>
            <p className="text-[14px] leading-[21px] font-normal font-poppins text-lead mt-[8px]">
              Fusce volutpat lectus et nisl consectetur finibus. In vitae
              scelerisque{' '}
            </p>
            <div className="flex justify-evenly items-center mt-[18px]">
              <div className="text-[20px] leading-[36px] font-medium">
                {' '}
                ₹ 215.00
              </div>
              <a
                className="group inline-flex font-medium text-[18px] leading-[27px] rounded-full text-green hover:text-light hover:bg-green  border px-[19px] py-[10px] "
                href={`https://api.whatsapp.com/send?phone=${918891010999}&text=hairoil`}
              >
                <Image
                  src={greenWhatsapp}
                  alt="whatsapp"
                  className="group-hover:hidden"
                />
                <Image
                  src={whiteWhatsapp}
                  alt="whatsapp"
                  className="hidden group-hover:block"
                />
                <p className="ml-[5px] ">Book Now</p>
              </a>
            </div>
          </div>

          <div className=" xl:p-4 lg:p-2 p-3 md:col-span-1 xs:row-span-1 lg:col-span-1 w-[282px] h-[479px] relative ">
            <Image src={mitti} alt="hairoil" className="z-50" />
            {/* <Image src={productshadowImage} alt='hairoil' className='absolute  z-0 items-center top-[50px]'/> */}

            <p className="mt-[18px] text-[25px] leading-[36px] font-medium font-poppins text-dark">
              Turmeric Powder
            </p>
            <p className="text-[14px] leading-[21px] font-normal font-poppins text-lead mt-[8px]">
              Fusce volutpat lectus et nisl consectetur finibus. In vitae
              scelerisque{' '}
            </p>
            <div className="flex justify-evenly items-center mt-[18px]">
              <div className="text-[20px] leading-[36px] font-medium">
                {' '}
                ₹ 215.00
              </div>
              <a
                className="group inline-flex font-medium text-[18px] leading-[27px] rounded-full text-green hover:text-light hover:bg-green  border px-[19px] py-[10px] "
                href={`https://api.whatsapp.com/send?phone=${918891010999}&text=hairoil`}
              >
                <Image
                  src={greenWhatsapp}
                  alt="whatsapp"
                  className="group-hover:hidden"
                />
                <Image
                  src={whiteWhatsapp}
                  alt="whatsapp"
                  className="hidden group-hover:block"
                />
                <p className="ml-[5px] ">Book Now</p>
              </a>
            </div>
          </div>

          <div className=" xl:p-4 lg:p-2 p-3 md:col-span-1 xs:row-span-1 lg:col-span-1 w-[282px] h-[479px] relative">
            <Image src={beardOil} alt="hairoil" className="z-50" />
            {/* <Image src={productshadowImage} alt='hairoil' className='absolute  z-0 items-center top-[50px]'/> */}

            <p className="mt-[18px] text-[25px] leading-[36px] font-medium font-poppins text-dark">
              Beard Oil
            </p>
            <p className="text-[14px] leading-[21px] font-normal font-poppins text-lead mt-[8px]">
              Fusce volutpat lectus et nisl consectetur finibus. In vitae
              scelerisque{' '}
            </p>
            <div className="flex justify-evenly items-center mt-[18px]">
              <div className="text-[20px] leading-[36px] font-medium">
                {' '}
                ₹ 215.00
              </div>
              <a
                className="group inline-flex font-medium text-[18px] leading-[27px] rounded-full text-green hover:text-light hover:bg-green  border px-[19px] py-[10px]"
                href={`https://api.whatsapp.com/send?phone=${918891010999}&text=hairoil`}
              >
                <Image
                  src={greenWhatsapp}
                  alt="whatsapp"
                  className="group-hover:hidden"
                />
                <Image
                  src={whiteWhatsapp}
                  alt="whatsapp"
                  className="hidden group-hover:block"
                />
                <p className="ml-[5px] ">Book Now</p>
              </a>
            </div>
          </div>

          <div className="lg:hidden  relative xl:p-4 lg:p-2 p-3 md:col-span-1 md:col-start-2 lg:col-start-1  md:justify-center xs:col-span-1 xs:row-start-2 lg:col-span-1 w-[282px] h-[479px]">
            <Image src={hairoilTwo} alt="hairoil" className="z-50" />
            {/* <Image src={productshadowImage} alt='hairoil' className='absolute  z-0 items-center top-[50px]'/> */}

            <p className="mt-[18px] text-[25px] leading-[36px] font-medium font-poppins text-dark">
              hair Oil
            </p>
            <p className="text-[14px] leading-[21px] font-normal font-poppins text-lead mt-[8px]">
              Fusce volutpat lectus et nisl consectetur finibus. In vitae
              scelerisque{' '}
            </p>
            <div className="flex justify-evenly items-center mt-[18px]">
              <div className="text-[20px] leading-[36px] font-medium">
                {' '}
                ₹ 215.00
              </div>
              <a
                className="group inline-flex font-medium text-[18px] leading-[27px] rounded-full text-green hover:text-light hover:bg-green  border px-[19px] py-[10px]"
                href={`https://api.whatsapp.com/send?phone=${918891010999}&text=hairoil`}
              >
                <Image
                  src={greenWhatsapp}
                  alt="whatsapp"
                  className="group-hover:hidden"
                />
                <Image
                  src={whiteWhatsapp}
                  alt="whatsapp"
                  className="hidden group-hover:block"
                />
                <p className="ml-[5px] ">Book Now</p>
              </a>
            </div>
          </div>
          <div className="hidden lg:block  xl:p-4 lg:p-2 p-3 md:col-span-1 xs:row-span-1 lg:col-span-1 w-[282px] h-[479px] relative">
            <Image src={hairoilTwo} alt="hairoil" className="z-50" />
            {/* <Image src={productshadowImage} alt='hairoil' className='absolute  z-0 items-center top-[50px]'/> */}

            <p className="mt-[18px] text-[25px] leading-[36px] font-medium text-dark">
              Hair Oil
            </p>
            <p className="text-[14px] leading-[21px] font-normal font-poppins text-lead mt-[8px]">
              Fusce volutpat lectus et nisl consectetur finibus. In vitae
              scelerisque{' '}
            </p>
            <div className="flex justify-evenly items-center mt-[18px]">
              <div className="text-[20px] leading-[36px] font-medium">
                {' '}
                ₹ 215.00
              </div>
              <a
                className="group inline-flex font-medium text-[18px] leading-[27px] rounded-full  hover:bg-green  border px-[19px] py-[10px]"
                href={`https://api.whatsapp.com/send?phone=${918891010999}&text=hairoil`}
              >
                <Image
                  src={greenWhatsapp}
                  alt="whatsapp"
                  className="group-hover:hidden"
                />
                <Image
                  src={whiteWhatsapp}
                  alt="whatsapp"
                  className="hidden group-hover:block"
                />
                <p className="ml-[5px] text-green group-hover:text-light">
                  Book Now
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProducts
