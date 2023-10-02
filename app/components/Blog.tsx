"use client";

import Link from "next/link";
import React from "react";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import useSWR from "swr";

const fetchBlogs = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch!");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const Blog = () => {
  const { data, isLoading } = useSWR("blogs", fetchBlogs);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {data.blogs.map((b: any) => (
        <div
          key={b._id}
          className="my-5 bg-zinc-800 flex flex-col px-3 py-5 rounded-sm"
        >
          <div className="flex flex-row items-center justify-between mb-2">
            <Link href={`/blogs/${b._id}`}>
              <b className="text-gray-200 text-xl hover:underline transition-all duration-300 ease-in-out">
                {b.title}
              </b>
            </Link>
            <div className="flex flex-row items-center">
              <Link href={`/editBlog/${b._id}`}>
                <AiTwotoneEdit className="mr-2 text-blue-500" size={22} />
              </Link>
              <Link href={""}>
                <AiFillDelete size={22} className="text-red-500" />
              </Link>
            </div>
          </div>
          <span className="text-xs text-gray-400 md:text-sm font-thin">
            {b.content}
          </span>
        </div>
      ))}
    </>
  );
};

export default Blog;
