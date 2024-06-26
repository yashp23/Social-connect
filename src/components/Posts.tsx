"use client"
import React from 'react'

import { IPostDocument } from '@/models/post.model'
import Post from './Post'

const Posts = ({ posts }: { posts: IPostDocument[] }) => {

  return (
    <div  >
      {
        posts?.map((post) => {
          return (
            <Post key={post._id } post={post} />
          )
        })
      }
    </div>
  )
}

export default Posts