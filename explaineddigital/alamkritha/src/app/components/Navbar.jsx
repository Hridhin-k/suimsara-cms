'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../../public/icons/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900)
    }

    handleResize() // Call it initially to check the initial size
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // Close dropdown after clicking on a link
    }
  }

  return (
    <div className="bg-secondaryBackground md:flex md:h-[90px] md:justify-between md:items-center md:px-[54px] lg:px-[84px] fixed z-[100] top-0 w-full">
      <div className="flex justify-between items-center px-[20px] md:px-0 py-4 md:py-0">
        <div className="w-[177px] sm:w-[200px] md:w-[230px]">
          <Image alt="Alamkritha" src={logo} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col  md:flex-row md:font-poppins md:w-full justify-center md:justify-end items-center h-[100vh] md:h-[90px] text-center md:text-start `}
      >
        <li
          onClick={() => scrollToSection('home')}
          className="px-4 md:px-[8px] md:mr-[16px] py-2 md:py-0 text-lead text-[21px] leading-[28px] md:text-[15px] font-[500] border-secondary border-b hover:text-green hover:border-b-green focus:text-green focus:border-b-green cursor-pointer mb-[21px] md:mb-0"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection('about')}
          className="px-4 md:px-[8px] md:mr-[16px] py-2 md:py-0 text-lead text-[21px] leading-[28px] md:text-[15px] font-[500] border-secondary border-b hover:text-green hover:border-b-green focus:text-green focus:border-b-green cursor-pointer mb-[21px] md:mb-0"
        >
          About Us
        </li>
        <li
          onClick={() => scrollToSection('products')}
          className="px-4 md:px-[8px] md:mr-[16px] py-2 md:py-0 text-lead text-[21px] leading-[28px] md:text-[15px] font-[500] border-secondary border-b hover:text-green hover:border-b-green focus:text-green focus:border-b-green cursor-pointer mb-[21px] md:mb-0"
        >
          Our Products
        </li>
        <li
          onClick={() => scrollToSection('testimonial')}
          className="px-4 md:px-[8px] md:mr-[16px] py-2 md:py-0 text-lead text-[21px] leading-[28px] md:text-[15px] font-[500] border-secondary border-b hover:text-green hover:border-b-green focus:text-green focus:border-b-green cursor-pointer mb-[21px] md:mb-0"
        >
          Testimonial
        </li>
        <li
          onClick={() => scrollToSection('contact')}
          className="px-4 md:px-[8px] md:mr-[16px] py-2 md:py-0 text-lead text-[21px] leading-[28px] md:text-[15px] font-[500] border-secondary border-b hover:text-green hover:border-b-green focus:text-green focus:border-b-green cursor-pointer mb-[21px] md:mb-0"
        >
          Contact Us
        </li>
      </ul>
    </div>
  )
}

export default Navbar
