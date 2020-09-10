import {
  FETCH_SINGLE_BLOG,
  FETCH_SINGLE_BLOG_FAILED,
  FETCH_SINGLE_BLOG_SUCCESS,

  FETCH_BLOGS,
  FETCH_BLOGS_FAILED,
  FETCH_BLOGS_SUCCESS,
} from "./type";

const initialState = {
  fetchingBlogs: false,
  fetchingSingleBlog: false,
  blogs: [],
  activeBlog: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_BLOG: return ({
      ...state,
      fetchingSingleBlog: true,
    });
    case FETCH_SINGLE_BLOG_FAILED: return ({
      ...state,
      fetchingSingleBlog: false,
    });
    case FETCH_SINGLE_BLOG_SUCCESS: return ({
      ...state,
      fetchingSingleBlog: false,
      activeBlog: action.blog
    });
    case FETCH_BLOGS:
      return {
        ...state,
        fetchingBlogs: true,
      };
    case FETCH_BLOGS_FAILED:
      return {
        ...state,
        fetchingBlogs: false,
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.blogs,
        fetchingBlogs: false,
      };
    default:
      return state;
  }
};

export default blogReducer;
