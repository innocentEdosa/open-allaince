import { FETCH_BLOGS, FETCH_BLOGS_FAILED, FETCH_BLOGS_SUCCESS } from "./type";

const initialState = {
  fetchingBlogs: false,
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
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
