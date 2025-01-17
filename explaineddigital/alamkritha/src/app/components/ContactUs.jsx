import Image from 'next/image'
import React from 'react'
import contactusLeaf from '../../../public/images/contactusLeaf.png'
import curlyArrow1 from '../../../public/icons/curlyArrow1.svg'

const ContactUs = () => {
  return (
    <div className="bg-secondaryBackground  h-auto  w-full items-center flex justify-center relative py-[90px]">
      <Image
        src={contactusLeaf}
        alt="contactusLeaf"
        className="absolute  left-0 overflow-hidden "
      />
      <div className="max-w-[830px] ml-auto mr-auto  text-center relative items-center">
        <h1 className="md:hidden font-Playfair_Display text-[44px] leading-[56px] font-medium text-dark ">
          You Can Order <br />
          Through <br />
          <span className="text-green font-Playfair_Display text-[44px]">
            Whatsapp
          </span>
        </h1>
        <Image
          src={curlyArrow1}
          alt="curlyArrow"
          className="absolute right-[50px] top-[100px] hidden md:block"
        />
        <h1 className="hidden md:block font-Playfair_Display  sm:text-[54px] leading-[72px] font-medium text-dark ">
          You Can Order Through{' '}
          <span className="text-green font-Playfair_Display">Whatsapp</span>
        </h1>

        <p className="md:hidden font-poppins font-normal text-[16px] leading-[24px] text-lead text-center mt-[16px]">
          Fusce volutpat lectus et . In vitae scelerisque
          <br /> nisl consectetur finibusaugue, in varius eros.. <br />
          In vitae scelerisque{' '}
        </p>
        <p className="hidden md:block font-poppins font-normal text-[16px] leading-[24px] text-lead text-center mt-[16px]">
          Fusce volutpat lectus et . In vitae scelerisque nisl consectetur{' '}
          <br />
          finibusaugue, in varius eros.. In vitae scelerisque{' '}
        </p>

        <a
          className="inline-flex items-center mt-[32px] bg-green text-light font-poppins text-[18px] leading-[27px] font-medium py-[12px] px-[36px] rounded-full"
          href={`https://api.whatsapp.com/send?phone=${918891010999}&text=I want to know more about your products`}
        >
          <span className="mr-[15px]">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4 21.1C8.9 22 10.7 22.5 12.5 22.5C18 22.5 22.5 18 22.5 12.5C22.5 7 18 2.5 12.5 2.5C7 2.5 2.5 7 2.5 12.5C2.5 14.3 3 16 3.8 17.5L2.94044 20.806C2.74572 21.5549 3.43892 22.2317 4.18299 22.0191L7.4 21.1Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 15.3485C17 15.5105 16.9639 15.677 16.8873 15.839C16.8107 16.001 16.7116 16.154 16.5809 16.298C16.36 16.541 16.1167 16.7165 15.8418 16.829C15.5714 16.9415 15.2784 17 14.9629 17C14.5033 17 14.012 16.892 13.4937 16.6715C12.9755 16.451 12.4572 16.154 11.9434 15.7805C11.4251 15.4025 10.9339 14.984 10.4652 14.5205C10.001 14.0525 9.58187 13.562 9.20781 13.049C8.83826 12.536 8.54081 12.023 8.32449 11.5145C8.10816 11.0015 8 10.511 8 10.043C8 9.737 8.05408 9.4445 8.16224 9.1745C8.27041 8.9 8.44166 8.648 8.68052 8.423C8.96895 8.1395 9.28443 8 9.61793 8C9.74412 8 9.87031 8.027 9.98297 8.081C10.1002 8.135 10.2038 8.216 10.2849 8.333L11.3305 9.8045C11.4116 9.917 11.4702 10.0205 11.5108 10.1195C11.5513 10.214 11.5739 10.3085 11.5739 10.394C11.5739 10.502 11.5423 10.61 11.4792 10.7135C11.4206 10.817 11.335 10.925 11.2268 11.033L10.8843 11.3885C10.8348 11.438 10.8122 11.4965 10.8122 11.5685C10.8122 11.6045 10.8167 11.636 10.8257 11.672C10.8393 11.708 10.8528 11.735 10.8618 11.762C10.9429 11.9105 11.0826 12.104 11.2809 12.338C11.4837 12.572 11.7 12.8105 11.9344 13.049C12.1778 13.2875 12.4121 13.508 12.651 13.7105C12.8853 13.9085 13.0791 14.0435 13.2323 14.1245C13.2549 14.1335 13.2819 14.147 13.3135 14.1605C13.3495 14.174 13.3856 14.1785 13.4261 14.1785C13.5028 14.1785 13.5613 14.1515 13.6109 14.102L13.9534 13.7645C14.0661 13.652 14.1743 13.5665 14.2779 13.5125C14.3816 13.4495 14.4852 13.418 14.5979 13.418C14.6835 13.418 14.7737 13.436 14.8728 13.4765C14.972 13.517 15.0756 13.5755 15.1883 13.652L16.68 14.7095C16.7972 14.7905 16.8783 14.885 16.9279 14.9975C16.973 15.11 17 15.2225 17 15.3485Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </span>
          Whatspp Now
        </a>
        <div className="sm:flex ml-auto mr-auto w-auto sm:w-[400px] mt-[22px] justify-between font-poppins font-[500] text-[18px] leading-[27px] text-dark">
          <p>+91 88910 10999</p>
          <p>alamkrithaherbals@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
