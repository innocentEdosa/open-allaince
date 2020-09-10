import React from "react";
import BlogCard from './BlogCard';
// eslint-disable-next-line no-unused-vars
import Skeleton from "react-loading-skeleton";

const BlogList = ({ fetchingBlogs, blogs }) => {
  return (
    <div className="bg-shade-background xs:px-6 xs:py-10 ">
      <div className="w-full lg:flex lg:flex-wrap lg:items-stretch lg:justify-center xl:justify-start blogList-wrapper xl:w-1146 lg:mx-auto">
        {fetchingBlogs &&
          [1, 2, 3, 4].map(() => (
            <div className="flex rounded overflow-hidden flex-col xs:mb-6 w-full bg-shade cursor-pointer lg:mr-30 lg:w-362">
              <div className="xs:h-168 bg-shade-milk"></div>
              <div className="bg-shade xs:pt-28   xs:px-6  w-full skeleton-wrapper">
                <Skeleton />
              </div>
              <div className="pt-3 bg-shade xs:pb-8 xs:px-6  w-full skeleton-wrapper">
                <Skeleton count={3} />
              </div>
            </div>
          ))}
        {!fetchingBlogs &&
          blogs.map(({ title, banner, created_at, id }) => (
           <BlogCard id={id} title={title} banner={banner} created_at={created_at} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
