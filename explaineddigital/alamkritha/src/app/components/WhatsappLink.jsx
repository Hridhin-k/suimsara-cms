import React from 'react'

function WhatsappLink() {
  return (
    <div className='z-50'>
      <a
        className="fixed bottom-10 right-1  flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[3.125rem] bg-[#25d366] shadow-[2px_2px_3px_#999] md:bottom-[1.875rem] md:right-[1.875rem] z-100"
        href={`https://api.whatsapp.com/send?phone=${9746141446}&text='whatsapp'`}
        target="_blank"
      >
        <img
          className="h-[1.875rem] w-[1.875rem] object-contain"
          src="/icons/whatsapp.svg"
          width={30}
          height={30}
          alt="WhatsApp"
        />
      </a>
    </div>
  )
}

export default WhatsappLink