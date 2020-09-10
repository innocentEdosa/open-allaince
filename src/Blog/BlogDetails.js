import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleBlogAction, fetchBlogsAction } from "../store/Blog/action";
import { ReactComponent as ChevronDown } from "../assets/icons/blog-dropdown.svg";
import Parser from "html-react-parser";
import formatDate from '../utilities/dateFormatter';
import Skeleton from 'react-loading-skeleton';
import BlogCard from './BlogCard';
import { Element, Link } from 'react-scroll';

const BlogDetails = ({ fetchSingleBlog, fetchingSingleBlog, activeBlog, blogs, fetchBlogs }) => {
  const { id } = useParams();


  useEffect(() => {
    if(!blogs.length) {
     fetchBlogs()
    }
  }, [])


  useEffect(() => {
    fetchSingleBlog({
      id,
    });
  }, [id]);

  return (
    <>
      {fetchingSingleBlog && (
        <div className="h-full bg-peach">
          <div className="xs:h-230 overflow-hidden flex items-center justify-center px-4 lg:items-end lg:pb-42 lg:h-410 blogShowcase bg-shade-peach">
          </div>
          <div className="py-42 px-6 flex flex-col items-center justify-center lg:w-754 lg:mx-auto">
            <div className="mb-56 self-start w-full">
              <Skeleton height={40} />
            </div>
            <div className="blogBody w-full">
              <Skeleton height={10} count={5} />
            </div>
            <div className="blogBody w-full mt-10">
              <Skeleton height={10} count={5} />
            </div>
          </div>
        </div>
      )}
      {!fetchingSingleBlog && (
        <div className="h-full bg-shade-background">
          {activeBlog.title && (
            <div
              style={{
                background: ` url(${activeBlog.banner}) no-repeat  center `,
              }}
              className="xs:h-230 overflow-hidden flex items-center justify-center px-4 lg:items-end lg:pb-42 lg:h-410 blogShowcase"
            >
              <div className="flex flex-col items-center ">
                <h6
                  style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  className="text-2xl font-sans text-text-snow font-medium text-center leading-9 xs:mb-5 lg:mb-3  "
                >
                  {activeBlog.title}
                </h6>
                {activeBlog.title && (
                  <Link to="blogContent" spy={true} smooth={true} duration={500}>
                  
                  <button className="cursor-pointer outline-none active:outline-none focus:outline-none">
                    <ChevronDown />
                  </button>
                  </Link>
                )}
              </div>
            </div>
          )}
          <Element name="blogContent">
          <div className="py-42 px-6 flex flex-col items-center justify-center lg:w-754 lg:mx-auto">
            <div className="mb-56 self-start">
              {activeBlog.created_at && (
                <h6 className="text-sm font-sans font-medium text-text-lightcoal w-auto inline-block blogDate">
                  <span className="font-bold ">On</span>{" "}
                  {formatDate(activeBlog.created_at, "mmmm d, yyyy")}
                </h6>
              )}
            </div>
            <div className="blogBody">
              {activeBlog.body && Parser(activeBlog.body)}
            </div>
          <div className="flex flex-col lg:flex-row  w-full my-10">
            <button className="bg-shade-maroon w-full h-52 rounded-lg text-text-snow text-lg font-bold font-sans tracking-open mb-4 lg:mb-0 lg:mr-6 lg:w-auto lg:px-6 outline-none focus:outline-none">
              Share on twitter
            </button>
            <button className="bg-shade-skyBlue w-full h-52 rounded-lg text-text-snow text-lg font-bold font-sans tracking-open lg:w-auto lg:px-6 outline-none focus:outline-none "> 
              Share on facebook
            </button>
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-148">
                {
                  blogs.filter((blog) => blog.id !== id).slice(0,3).map(({ title, banner, created_at, id }) => (
                    <BlogCard title={title} banner={banner} created_at={created_at} id={id} />
                  ))
                }
          </div>
          </div>
          </Element>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ blog: { fetchingSingleBlog, activeBlog, blogs } }) => ({
  fetchingSingleBlog,
  activeBlog,
  blogs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleBlog: (params) => dispatch(fetchSingleBlogAction(params)),
  fetchBlogs: () => dispatch(fetchBlogsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
