import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import Navitems from './Navitems'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-50 shadow-md'>
            <div className='flex items-center max-w-6xl justify-between h-18 mx-auto px-3'>
                <div className='flex items-center gap-2'>
                    <Image src={'/social.webp'} alt='logo' width={100} height={80} />
                        <div className='md:block hidden'>
                            <SearchInput />
                        </div>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='md:block hidden ' >
                        <Navitems />
                    </div>
                    <div>
                        <SignedOut>
                            <Button className='rounded-full' variant={'secondary'}>
                                <SignInButton />
                            </Button>

                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
