import React from "react";
import data from "../../data/data.json";
import Link from "next/link";

const BlogPage = () => {
  const blogData = data.blogData;
  return (
    <>
      <div className='container'>
        <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 '>
          {blogData.map((item) => {
            return (
              <div key={item.id} className='p-3 shadow-md'>
                <Link href={`/blog/${item.id}`} className='text-[17px] font-semibold'>
                  - {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
