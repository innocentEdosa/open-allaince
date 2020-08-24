import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../utilities/dateFormatter";
import routes from "../utilities/routes";
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
            <div className="flex rounded overflow-hidden flex-col xs:mb-6 w-full bg-shade cursor-pointer lg:mr-30 lg:w-362">
              <Link to={`${routes.blogDetails}/${id}`}>
                <div className="xs:h-168 bg-shade-milk">
                  {banner && (
                    <img
                      className="w-full h-full"
                      alt="blog_banner"
                      src={banner}
                    />
                  )}{" "}
                </div>
              </Link>
              <Link to={`${routes.blogDetails}/${id}`}>
                <div className="bg-shade xs:pt-28 xs:pb-8 flex flex-col items-center justify-center xs:px-6 lg:items-start">
                  <h6 className="xs:text-center lg:text-left font-sans font-semibold text-sm lg:text-lg  text-text-dark lg:px-0 tracking-open lg:leading-6">
                    {title}
                  </h6>
                  <h6 className="xs:mt-4 font-sans font-normal text-xs lg:text-base text-text-dark tracking-open">
                    {formatDate(created_at)}
                  </h6>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
