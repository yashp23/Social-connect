import React from 'react'
import { useUser } from '@clerk/nextjs'
import ProfilePhoto from './shared/ProfilePhoto'
import { Button } from './ui/button'
import { Icon, Trash2 } from 'lucide-react'
import { Badge } from './ui/badge'
import PostContent from './PostContent'
import SocialOptions from './SocialOptions'
import { IPostDocument } from '@/models/post.model'
import ReactTimeago from "react-timeago";
import { deletePostAction } from '@/lib/serveractions'

const Post = ({ post }: { post: IPostDocument }) => {
    const { user } = useUser();

    const loggedInUser = user?.id == post?.user?.userId;

    return (
        <div className='bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300'>
            <div className='flex gap-2 p-4'>
                <ProfilePhoto src={post?.user?.profilePhoto!} />
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className='text-sm font-bold'>{post?.user?.firstName + " " + post?.user?.lastName}<Badge className='ml-2' variant={'secondary'}>~you</Badge></h1>
                        <p className='text-xs text-gray-500'>@{user ? user?.username : "username"}</p>
                        <p className='text-xs text-gray-500'>
                            <ReactTimeago date={new Date(post.createdAt)} />
                        </p>
                    </div>

                </div>{
                    loggedInUser && (
                        <Button onClick={() => {
                            const res = deletePostAction(post._id as string);
                        }
                        }
                            size={'icon'} variant={'outline'} className='rounded-full'>

                            <Trash2 />
                        </Button>)
                }


            </div>
            <PostContent post={post} />
            <SocialOptions post={post} />
        </div>
    )
}

export default Post