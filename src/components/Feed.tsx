import React from 'react'
import Posts from './Posts'
import Postinput from './Postinput';

const Feed = async ({user}:{user:any}) => {
    const userData = JSON.parse(JSON.stringify(user));
  return (
    <div className='flex-1'>
        <Postinput user={userData}/>
        <Posts  />
    </div>
  )
}

export default Feed