// components/RightSide.tsx
"use client"
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Article } from "@/lib/typevalidator";

interface RightSideProps {}

const RightSide: React.FC<RightSideProps> = () => {
  const [image, setImage] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const Api =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=c6536857904840f696cb89b863015efd";

  const fetchInternalImage = async (url: string) => {
    try {
      const res = await fetch(url);
      const blogImage = await res.json();

      // Take only 5 articles with images
      const newArticles = blogImage.articles
        .filter((article: Article) => article.urlToImage)
        .slice(0, 5);

      setImage((prevImage) => [...prevImage, ...newArticles]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInternalImage(Api);
  }, []);

  return (
    <div className="bg-[#5e5d5d] w-full md:w-[30%] h-full rounded-lg flex flex-col items-start justify-center p-4">
      <div className="w-full text-2xl">
        <h1 className="text-md font-extrabold dark:border border-yellow-600 dark:border-white dark:text-emerald-950 flex justify-center bg-green-300 p-2 rounded-lg">
          Trending News
        </h1>
      </div>
      <div className="mt-4 overflow-y-auto w-full p-2">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-white">Loading...</p>
          </div>
        ) : (
          <div className="overflow-y-auto h-[calc(100vh-160px)]">
            {image.map((item, index) => (
              <div key={index} className="mb-4 shadow-lg">
                <BlogCard
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  author={item.author}
                  publishedAt={item.publishedAt}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSide;
