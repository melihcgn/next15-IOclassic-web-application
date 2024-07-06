import React from 'react'
import Link from 'next/link'
export const HeaderTitles = () => {
    return (
        <header className='text-2xl p-4 flex justify-start space-x-6 border-b border-slate-400'>
            <div className=' '>
                <Link href={"/dashboard/customer"}>
                Customers
                </Link>
            </div>
            <div className=' '>
                Bookings
            </div>
            <div className=' '>
                Consultations
            </div>
            <div className=''>
                Staff
            </div>
        </header>
        )
}