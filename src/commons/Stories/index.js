import React from "react";
import storyList from "./storyList";
import handleBlogData from '../../HOC/handleBlogData';
import { Link } from 'react-router-dom';
import routes from '../../utilities/routes';
import Skeleton, { SkeletonTheme }from 'react-loading-skeleton';

const Story = ({
  fetchingBlogs,
  blogs
}) => {
  return (
    <div className="flex flex-col items-center xl:h-682 py-60 bg-primary-green">
      <h6 className="text-2xl tracking-open text-text-snow font-light font-sans lg:text-40">
        Stories
      </h6>
      <div className="bg-transparent xs:px-6 mt-12 flex flex-col lg:flex-row lg:flex-wrap lg:justify-center w-full">
        {
          fetchingBlogs && [1,2,3].map((item) => ( <div
            key={item}
              style={{
                background:
                `linear-gradient(0deg, rgba(0, 0, 0, 0.59) 19.66%, rgba(0, 0, 0, 0) 100%)`,
                filter: "drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.43))",
              }}
              className=" flex-shrink-0 cursor-pointer xs:mb-6 lg:mr-30 w-full lg:w-362 h-468 rounded flex flex-col"
            >
              <div className="flex-grow"></div>
              <div className="w-full flex-shrink-0  flex flex-col items-center justify-center pb-10">
                <SkeletonTheme color="grey" highlightColor="#C4C4C4"> 
               <Skeleton width={250} />
               <Skeleton count={3} />
                </SkeletonTheme>
              </div>
            </div>))
        }
        { !fetchingBlogs && blogs.slice(0,3).map(({ id, title, banner }, index) => {
          if (storyList.length - 1 === index) {
            return (
              <Link to={routes.blog}>
              
              <div
              key={index}
                style={{
                  background:
                    `linear-gradient(0deg, rgba(0, 0, 0, 0.59) 19.66%, rgba(0, 0, 0, 0) 100%), url(${banner})`,
                  filter: "drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.43))",
                  // background: 'red',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className=" flex-shrink-0 w-full lg:w-362 h-468 rounded flex flex-col justify-center items-center"
              >
                <ul>
                  <li className="h-60 w-282 rounded border-3 border-shade flex items-center justify-center text-xl text-text-snow font-sans font-extrabold cursor-pointer">
                    <h6>View all stories</h6>
                  </li>
                </ul>
              </div>
              </Link>
            );
          }
          return (
            <Link to={`/blog-details/${id}`}>
            
            
            <div
            key={index}
              style={{
                background:
                  `linear-gradient(0deg, rgba(0, 0, 0, 0.59) 19.66%, rgba(0, 0, 0, 0) 100%), url(${banner})`,
                filter: "drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.43))",
                // background: 'red',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="flex-shrink-0 cursor-pointer xs:mb-6 lg:mr-30 w-full lg:w-362 h-468 rounded flex flex-col"
            >
              <div className="flex-grow"></div>
              <div className="flex-shrink-0 flex items-center justify-center pb-12 px-38 ">
                <p className="text-text-snow text-center font-semibold text-2xl tracking-open">
                  {title}
                </p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default handleBlogData(Story);
