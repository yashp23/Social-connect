import React from 'react'
import { Input } from "@/components/ui/input"

export default function SearchInput() {
    return (
        <div>
            <Input
                type="text"
                placeholder="Search"
                className='bg-[#EDF3F8] w-80 rounded-lg border-none' />
        </div>
    )
}
