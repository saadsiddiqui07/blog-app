"use client";
import { useParams } from "next/navigation";
import React from "react";
import useSwr from "swr";

const fetchBlogDetails = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const BlogDetails = () => {
  const params = useParams();
  const { id } = params;

  const { data, isLoading } = useSwr(`/${id}`, fetchBlogDetails);

  if (isLoading) {
    return (
      <div className="my-5 border-t-[1px] border-white flex flex-col px-3 py-5 rounded-sm">
        <h1>Loading blog details...</h1>
      </div>
    );
  }

  return (
    <div className="my-5 border-t-[1px] border-white flex flex-col px-3 py-5 rounded-sm">
      <div className="flex flex-row items-center justify-between mb-2">
        <b className="text-gray-200 text-xl">{data.blog.title}</b>
      </div>
      <span className="text-sm font-thin">{data.blog.content}</span>
    </div>
  );
};

export default BlogDetails;
