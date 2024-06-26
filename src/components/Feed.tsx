import React from 'react'
import Posts from './Posts'
import Postinput from './Postinput';
import { getAllPosts } from '@/lib/serveractions';

const Feed = async ({user}:{user:any}) => {
    const userData = JSON.parse(JSON.stringify(user));
    const posts = await getAllPosts();
    console.log(posts);
    return (
    <div className='flex-1 '>
        <Postinput user={userData}/>
        <Posts posts = {posts!} />
    </div>
  )
}

export default Feed