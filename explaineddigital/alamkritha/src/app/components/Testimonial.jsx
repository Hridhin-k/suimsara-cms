'use client'
import React, { useRef, useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import ratingStars from '../../../public/icons/ratingStars.svg'
import customerImage from '../../../public/icons/customer.svg'

const Testimonial = () => {
  const [slidesPerView, setSlidesPerView] = useState(4)
  const swiperRef = useRef(null) // Create swiperRef

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      switch (true) {
        case screenWidth <= 600:
          setSlidesPerView(1)
          break
        case screenWidth <= 950:
          setSlidesPerView(2)
          break
        case screenWidth <= 1200:
          setSlidesPerView(4)
          break
        case screenWidth <= 1500:
          setSlidesPerView(4)
          break
        default:
          setSlidesPerView(4)
          break
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const goToPreviousSlide = () => {
    swiperRef.current.slidePrev()
  }

  const goToNextSlide = () => {
    swiperRef.current.slideNext()
  }
  return (
    <div className=" h-auto md:h-[685px] bg-testimonialBg w-full py-[120px] ">
      <div className="flex flex-col md:flex-row mx-auto justify-center items-center text-center md:justify-between w-[90%] mb-[82px]">
        <h1 className="hidden md:block text-[54px] leading-[72px] font-[500] font-Playfair_Display">
          What our Customers says
        </h1>
        <h1 className="md:hidden text-[54px] leading-[72px] font-[500] font-Playfair_Display">
          What our
          <br /> Customers
          <br /> says
        </h1>
        <div>
          <button onClick={goToPreviousSlide}>back</button>
          <button onClick={goToNextSlide}>next</button>
        </div>
      </div>
      <div className="   overflow-hidden">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          loop={true}
          freeMode={true}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className=""
        >
          <SwiperSlide className="flex justify-center mx-[11px] max-w-[305px] max-h-[438px] md:min-w-[505px] md:h-[291px] overflow-hidden  rounded-[10px]">
            <div className="w-[305px] md:w-[505px] h-[438px]  md:md:h-[291px] bg-primaryBackground rounded-[10px] p-[24px] flex flex-col justify-between">
              <div className="flex justify-start ">
                <Image src={customerImage} alt="customer" />
                <div className="flex flex-col justify-between ml-[10px] ">
                  <h1 className="text-[19px] font-[400] leading-[36px] font-poppins">
                    Kathy Pacheco1
                  </h1>
                  <Image
                    src={ratingStars}
                    alt="ratings starts"
                    className="w-[105px] "
                  />
                </div>
              </div>
              <p className="font-poppins font-[300] text-[14px] leading-[21px]">
                Donec dictum tristique porta. Etiam convallis lorem lobortis
                nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices
                lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus
                odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla
                quis enim posuere, congue libero quis, commodo purus. Cras
                iaculis massa ut elit tempor malesuada. Pellentesque dictum elit
                quis diam tristique, sed tincidunt velit ullamcorper.
                Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar
                elit ut orci{' '}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center mx-[11px] max-w-[305px] max-h-[438px] md:min-w-[505px] md:h-[291px] overflow-hidden  rounded-[10px]">
            <div className="w-[305px] md:w-[505px] h-[438px]  md:md:h-[291px] bg-primaryBackground rounded-[10px] p-[24px] flex flex-col justify-between">
              <div className="flex justify-start ">
                <Image src={customerImage} alt="customer" />
                <div className="flex flex-col justify-between ml-[10px]">
                  <h1 className="text-[19px] font-[400] leading-[36px] font-poppins">
                    Kathy Pacheco2
                  </h1>
                  <Image
                    src={ratingStars}
                    alt="ratings starts"
                    className="w-[105px] "
                  />
                </div>
              </div>
              <p className="font-poppins font-[300] text-[14px] leading-[21px]">
                Donec dictum tristique porta. Etiam convallis lorem lobortis
                nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices
                lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus
                odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla
                quis enim posuere, congue libero quis, commodo purus. Cras
                iaculis massa ut elit tempor malesuada. Pellentesque dictum elit
                quis diam tristique, sed tincidunt velit ullamcorper.
                Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar
                elit ut orci{' '}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center mx-[11px] max-w-[305px] max-h-[438px] md:min-w-[505px] md:h-[291px] overflow-hidden  rounded-[10px]">
            <div className="w-[305px] md:w-[505px] h-[438px]  md:md:h-[291px] bg-primaryBackground rounded-[10px] p-[24px] flex flex-col justify-between">
              <div className="flex justify-start ">
                <Image src={customerImage} alt="customer" />
                <div className="flex flex-col justify-between ml-[10px]">
                  <h1 className="text-[19px] font-[400] leading-[36px] font-poppins">
                    Kathy Pacheco3
                  </h1>
                  <Image
                    src={ratingStars}
                    alt="ratings starts"
                    className="w-[105px] "
                  />
                </div>
              </div>
              <p className="font-poppins font-[300] text-[14px] leading-[21px]">
                Donec dictum tristique porta. Etiam convallis lorem lobortis
                nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices
                lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus
                odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla
                quis enim posuere, congue libero quis, commodo purus. Cras
                iaculis massa ut elit tempor malesuada. Pellentesque dictum elit
                quis diam tristique, sed tincidunt velit ullamcorper.
                Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar
                elit ut orci{' '}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center mx-[11px] max-w-[305px] max-h-[438px] md:min-w-[505px] md:h-[291px] overflow-hidden  rounded-[10px]">
            <div className="w-[305px] md:w-[505px] h-[438px]  md:md:h-[291px] bg-primaryBackground rounded-[10px] p-[24px] flex flex-col justify-between">
              <div className="flex justify-start ">
                <Image src={customerImage} alt="customer" />
                <div className="flex flex-col justify-between ml-[10px]">
                  <h1 className="text-[19px] font-[400] leading-[36px] font-poppins">
                    Kathy Pacheco4
                  </h1>
                  <Image
                    src={ratingStars}
                    alt="ratings starts"
                    className="w-[105px] "
                  />
                </div>
              </div>
              <p className="font-poppins font-[300] text-[14px] leading-[21px]">
                Donec dictum tristique porta. Etiam convallis lorem lobortis
                nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices
                lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus
                odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla
                quis enim posuere, congue libero quis, commodo purus. Cras
                iaculis massa ut elit tempor malesuada. Pellentesque dictum elit
                quis diam tristique, sed tincidunt velit ullamcorper.
                Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar
                elit ut orci{' '}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center mx-[11px] max-w-[305px] max-h-[438px] md:min-w-[505px] md:h-[291px] overflow-hidden  rounded-[10px]">
            <div className="w-[305px] md:w-[505px] h-[438px]  md:md:h-[291px] bg-primaryBackground rounded-[10px] p-[24px] flex flex-col justify-between">
              <div className="flex justify-start ">
                <Image src={customerImage} alt="customer" />
                <div className="flex flex-col justify-between ml-[10px]">
                  <h1 className="text-[19px] font-[400] leading-[36px] font-poppins">
                    Kathy Pacheco5
                  </h1>
                  <Image
                    src={ratingStars}
                    alt="ratings starts"
                    className="w-[105px] "
                  />
                </div>
              </div>
              <p className="font-poppins font-[300] text-[14px] leading-[21px]">
                Donec dictum tristique porta. Etiam convallis lorem lobortis
                nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices
                lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus
                odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla
                quis enim posuere, congue libero quis, commodo purus. Cras
                iaculis massa ut elit tempor malesuada. Pellentesque dictum elit
                quis diam tristique, sed tincidunt velit ullamcorper.
                Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar
                elit ut orci{' '}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center mx-[11px] max-w-[305px] max-h-[438px] md:min-w-[505px] md:h-[291px] overflow-hidden  rounded-[10px]">
            <div className="w-[305px] md:w-[505px] h-[438px]  md:md:h-[291px] bg-primaryBackground rounded-[10px] p-[24px] flex flex-col justify-between">
              <div className="flex justify-start ">
                <Image src={customerImage} alt="customer" />
                <div className="flex flex-col justify-between ml-[10px]">
                  <h1 className="text-[19px] font-[400] leading-[36px] font-poppins">
                    Kathy Pacheco6
                  </h1>
                  <Image
                    src={ratingStars}
                    alt="ratings starts"
                    className="w-[105px] "
                  />
                </div>
              </div>
              <p className="font-poppins font-[300] text-[14px] leading-[21px]">
                Donec dictum tristique porta. Etiam convallis lorem lobortis
                nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices
                lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus
                odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla
                quis enim posuere, congue libero quis, commodo purus. Cras
                iaculis massa ut elit tempor malesuada. Pellentesque dictum elit
                quis diam tristique, sed tincidunt velit ullamcorper.
                Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar
                elit ut orci{' '}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
