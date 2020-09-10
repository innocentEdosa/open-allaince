import React from 'react';
import { Link } from "react-router-dom";
import formatDate from "../utilities/dateFormatter";
import routes from "../utilities/routes";

const BlogCard = ({ title, banner, created_at, id }) => {
    return (  <div className="flex rounded overflow-hidden flex-col xs:mb-6 w-full bg-shade cursor-pointer lg:mr-30 lg:w-362">
    <Link to={`${routes.baseBlogDetails}${id}`}>
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
    <Link to={`${routes.baseBlogDetails}${id}`}>
      <div className="bg-shade xs:pt-28 xs:pb-8 flex flex-col items-center justify-center xs:px-6 lg:items-start">
        <h6 className="xs:text-center lg:text-left font-sans font-semibold text-sm lg:text-lg  text-text-dark lg:px-0 tracking-open lg:leading-6">
          {title}
        </h6>
        <h6 className="xs:mt-4 font-sans font-normal text-xs lg:text-base text-text-dark tracking-open">
          {formatDate(created_at)}
        </h6>
      </div>
    </Link>
  </div> );
}
 
export default BlogCard;