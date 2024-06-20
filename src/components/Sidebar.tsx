import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'

export default function Sidebar({ user }: { user: any }) {
  return (
    <div className='hidden md:block w-[20%] h-fit bg-white rounded  '>

      <div className='flex relative items-center flex-col border border-gray-300 '>

        {/* banner */}
        <div className='w-full h-16 overflow-hidden'>
          {

            user && (
              <Image
                src={"/banner.webp"}
                alt='banner-image'
                width={200}
                height={200}
                className='w-full h-full rounded-t'

              />
            )
          }
        </div>


        {/* profilepicture */}
        <div className=' my-1 absolute top-10'>
          <ProfilePhoto src={user ? user?.imageUrl! : "/OIP.webp"} />
        </div>

        {/* name and username */}
        <div className='border-b border-b-gray-300'>
          <div className="p-2 mt-5 text-center">

            {/* name */}
            <h1
              className='hover:underline cursor-pointer font-bold'>{user ?
                `${user?.firstName} ${user?.lastName}` :
                "yash parmar"}
            </h1>

            {/* username */}
            <p
              className='text-xs'>
              @{user
                ? `${user?.username}` : 'username'}
            </p>

          </div>
        </div>
      </div>

      {/* post impression */}
      <div className='text-xs'>
        <div className="w-full justify-between items-center flex px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p
            className=''>
            Post impression
          </p>

          <p className="text-blue-500 font-bold">34

          </p>
        </div>

        <div className="w-full justify-between items-center flex px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p
            className=''>
            Posts
          </p>

          <p className="text-blue-500 font-bold">0

          </p>
        </div>

      </div>
    </div>
  )
}
