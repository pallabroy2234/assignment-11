import React from "react";
import data from "../../../data/data.json";
import Link from "next/link";
const page = ({params}) => {
  const currentId = params.id;
  const blogData = data.blogData;
  const currentPost = blogData.filter((post) => post.id == currentId);
  const {title, content, date} = currentPost[0];
  return (
    <div className='container'>
      <div className='mt-10'>
        <h1 className='mb-3 text-2xl font-semibold'>Title : {title}</h1>
        <p className='mb-3 text-[16px] font-normal tracking-[1px] leading-6'>{content}</p>
        <p>Date - {date}</p>
      </div>
      <div className='inline-block px-4 py-1 mt-5 text-white bg-sky-400 text-[16px] font-semibold cursor-pointer'>
        <Link href={"/blog"}>Go Back</Link>
      </div>
    </div>
  );
};

export default page;
