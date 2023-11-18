import Image from 'next/image'
import React from 'react'

export default function Features() {
  return (
    <div className=' w-[95%] py-14 mx-auto max-w-[1200px]'>
      <p className='text-2xl font-semibold text-[#0FC1D9] text-center'>Features</p>
      <p className='text-3xl font-semibold text-[#F4F6F6] text-center my-6 mx-auto w-[95%] sm:w-[90%] md:w-[580px]'>Say goodbye to high fees, hidden costs, and centralized control</p>
      <p className='text-center text-[#BCB7B7] font-semibold text-[18px] mx-auto w-[95%] sm:w-[90%] md:w-[640px]'>Our system is built on blockchain technology, which makes it secure, transparent, and tamper-proof.</p>

      <div className='flex flex-wrap justify-around mt-20 gap-7'>
        <div className='max- w-[270px]'>
          <div className='flex gap-4 items-center mb-4'>
            <Image
                src='images/soul.svg'
                // className="absolute bottom-10 left-24"
                alt='cylinder'
                width={50}
                height={50}
            />
            <p className='text-[#0FC1D9] text-xl font-bold'>Soulbound NFTs</p>
          </div>
          <p className='text-[#CED8DD] leading-8'>Introduce soulbound NFT event tickets for secure, non-transferable access.</p>
        </div>

        <div className='max- w-[270px]'>
          <div className='flex gap-4 items-center mb-4'>
            <Image
                src='images/refund.svg'
                // className="absolute bottom-10 left-24"
                alt='cylinder'
                width={50}
                height={50}
            />
            <p className='text-[#0FC1D9] text-xl font-bold'>REFUNDABLE</p>
          </div>
          <p className='text-[#CED8DD] leading-8'>Grants users a 48-hour window for ticket refunds before events, and the ability to transfer tickets to another adress.</p>
        </div>

        <div className='max- w-[270px]'>
          <div className='flex gap-4 items-center mb-4'>
            <Image
                src='images/secure.svg'
                // className="absolute bottom-10 left-24"
                alt='cylinder'
                width={50}
                height={50}
            />
            <p className='text-[#0FC1D9] text-xl font-bold'>SECURE CRYPTO
PAYMENTS </p>
          </div>
          <p className='text-[#CED8DD] leading-8'>Implements a secure payment gateway using cryptocurrencies for users to seamlessly purchase tickets.</p>
        </div>


        <div className='max- w-[270px]'>
          <div className='flex gap-4 items-center mb-4'>
            <Image
                src='images/uoto.svg'
                // className="absolute bottom-10 left-24"
                alt='cylinder'
                width={50}
                height={50}
            />
            <p className='text-[#0FC1D9] text-xl font-bold'>Up to date info</p>
          </div>
          <p className='text-[#CED8DD] leading-8'>Present comprehensive information about specific events, including date, time, Location and available tickets.</p>
        </div>


        <div className='max- w-[270px]'>
          <div className='flex gap-4 items-center mb-4'>
            <Image
                src='images/safe.svg'
                // className="absolute bottom-10 left-24"
                alt='cylinder'
                width={50}
                height={50}
            />
            <p className='text-[#0FC1D9] text-xl font-bold'>SAFE AND SECURE </p>
          </div>
          <p className='text-[#CED8DD] leading-8'>Implements a secure payment gateway using cryptocurrencies for users to seamlessly purchase tickets.</p>
        </div>

      <div className='max- w-[270px]'>
          <div className='flex gap-4 items-center mb-4'>
            <Image
                src='images/event.svg'
                // className="absolute bottom-10 left-24"
                alt='cylinder'
                width={50}
                height={50}
            />
            <p className='text-[#0FC1D9] text-xl font-bold'>Event Creation</p>
          </div>
          <p className='text-[#CED8DD] leading-8'>Allows events organizers to input event data manually through a user friendly interface. offering flexibility of event organazing.</p>
      </div>
      {/* </div> */}
      </div>


    </div>
  )
}
