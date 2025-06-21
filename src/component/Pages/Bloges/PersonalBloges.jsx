import React from 'react';
import { motion } from 'framer-motion';
import Blogs from "../../DATA/Blogs.json";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PersonalBloges = () => {
  return (
    <div className="bg-black text-white py-10 px-5 sm:px-10 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-10 mt-13">

        {/* Left Blog */}
        <motion.div className="sm:col-span-6 lg:col-span-5" {...fadeInUp}>
          <a href="#">
            <div
              className="h-56 bg-cover bg-center rounded-t"
              style={{ backgroundImage: `url(${Blogs.leftBlog.image})` }}
            />
          </a>
          <div className="mt-3 bg-[#1a1a1a] p-4 rounded-b lg:rounded-b-none lg:rounded-r">
            <a href="#" className="text-xs text-[#b728ff] uppercase font-medium mb-2 block hover:text-white">
              {Blogs.leftBlog.category}
            </a>
            <a href="#" className="text-white font-bold text-lg mb-2 block hover:text-[#b728ff]">
              {Blogs.leftBlog.title}
            </a>
            <p className="text-gray-400 text-sm">{Blogs.leftBlog.description}</p>
          </div>
        </motion.div>

        {/* Middle Blogs */}
        <motion.div className="sm:col-span-6 lg:col-span-4 space-y-4" {...fadeInUp}>
          {Blogs.middleBlogs.map((item, index) => (
            <div key={index} className="flex items-start pb-3">
              <a href="#" className="inline-block mr-3">
                <div
                  className="w-20 h-20 bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </a>
              <div className="text-sm w-2/3">
                <p className="text-gray-500 text-xs">{item.date}</p>
                <a href="#" className="text-white font-medium hover:text-[#b728ff] leading-tight">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Blog */}
        {/* Right Blogs */}
        <motion.div className="sm:col-span-12 lg:col-span-3 space-y-6" {...fadeInUp}>
          {Blogs.rightBlog.map((blog, index) => (
            <div key={index}>
              <a href="#">
                <div
                  className="h-56 bg-cover bg-center rounded-t"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
              </a>
              <div className="mt-3 bg-[#1a1a1a] p-4 rounded-b lg:rounded-b-none lg:rounded-r">
                <a href="#" className="text-xs text-[#b728ff] uppercase font-medium block hover:text-white">
                  {blog.category}
                </a>
                <a href="#" className="text-white font-bold text-lg mb-2 block hover:text-[#b728ff]">
                  {blog.title}
                </a>
                <p className="text-gray-400 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </motion.div>


      </div>
    </div>
  );
};

export default PersonalBloges;
