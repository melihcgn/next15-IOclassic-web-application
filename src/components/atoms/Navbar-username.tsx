import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ioIcon from '@/app/favicon.ico'
import { auth } from '@/auth'

export default async function NavbarUsername() {
    const session = await auth()
    if (!session) return null
    if (!session.user) return null
    return (
        <Link href="/" className='flex items-center'>
            <Image
                src={ioIcon}
                width={20}
                height={20}
                alt="Logo"
                className='object-contain ml-2 mr-2'
            />
            <h1 className="text-xl font-medium hidden md:flex text-white">{session?.user.email}</h1>
        </Link>
    )
}
