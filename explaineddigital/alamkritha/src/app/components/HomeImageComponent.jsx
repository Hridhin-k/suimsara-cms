import React from 'react'
import homeImage from '../../../public/images/homeImage.png'
import Image from 'next/image';
const HomeImageComponent = () => {
    return (
     <>
      <div  style={{backgroundImage: "url('/images/homeImage.png')", 
      backgroundPosition: 'right bottom, left top',
      backgroundRepeat: 'no-repeat, repeat',
     }}
     className='w-h-[1000px] '
     ></div> {/* Image as background */}
    </>
      );
}

export default HomeImageComponent
