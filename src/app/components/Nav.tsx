import Link from 'next/link'
import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

export const Nav = () => {
  return (
    <div className='nav-bg'>
        <div className='w-[95%] pt-3 mx-auto max-w-[1200px] flex justify-between items-center py-3'>
            <div>Logo</div>
            <div className='gap-6 sm:flex  hidden'>
                <Link href='#' className='py-2 px-3'>Events</Link>
                <Link href='#' className='py-2 px-3'>Dashboard</Link>
                <Link href='#' className='py-2 px-3'>Create</Link>
            </div>
            <div className=' '>
                <button className='connect hidden sm:block'>
                    Connect wallet
                </button>
                <div className='text-[#11BCDD] block sm:hidden'>
                <HiMenuAlt3 size={30} />

                </div>
            </div>
        </div>
    </div>
  )
}
