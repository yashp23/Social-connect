import db from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

//get likes
export const GET = async (req: NextRequest, { params }: { params: { postId: string } }) => {
    try {
        await db();
        const post = await Post.findById({ _id: params.postId })
        if (!post) {
            return NextResponse.json({ message: "Post not found" });
        }

        return NextResponse.json(post.likes);
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred' });
    }
}

//post likes
export const POST = async (req: Request, { params }: { params: { postId: string } }) => {
    try {
        await db();
        const userId = await req.json();
        const post = await Post.findById({ _id: params.postId });

        if (!post) {
            return NextResponse.json({ message: "Post not found" });
        }
        await post.updateOne({ $addToSet: { likes: userId } });
        return NextResponse.json({ message: "Post updated successfully" })
    } catch (error: any) {
        return NextResponse.json({ error: "An error occured" });
    }
}

