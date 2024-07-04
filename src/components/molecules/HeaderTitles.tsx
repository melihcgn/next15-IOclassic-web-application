import React from 'react'

export const HeaderTitles = () => {
    return (
        <header className='text-2xl p-4 flex justify-start space-x-6 border-b border-slate-400'>
            <button className=' '>
                Customers
            </button>
            <button className=' '>
                Bookings
            </button>
            <button className=' '>
                Consultations
            </button>
            <button className=''>
                Staff
            </button>
        </header>
        )
}