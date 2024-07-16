// components/BlogCard.tsx
import React from 'react';
import Image from 'next/image';

export interface Article {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
}

interface BlogCardProps {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, urlToImage, author, publishedAt }) => {
  return (
    <div className="bg-[#eeebe2] dark:bg-[#312122] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md">
      <div className="relative w-full h-48">
        <Image
          src={urlToImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
          By {author ? author : "Unknown Author"} on{" "}
          {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
