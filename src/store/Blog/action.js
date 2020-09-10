import {
  FETCH_BLOGS,
  FETCH_BLOGS_FAILED,
  FETCH_BLOGS_SUCCESS,

  FETCH_SINGLE_BLOG,
  FETCH_SINGLE_BLOG_FAILED,
  FETCH_SINGLE_BLOG_SUCCESS,
} from "./type";
import {fetchBlogService, fetchSingleBlogService} from './api';

export const fetchBlogsAction = () => async (dispatch) => {
    dispatch({type: FETCH_BLOGS});
    try {
        const {data: {data}} = await fetchBlogService();
        dispatch({type: FETCH_BLOGS_SUCCESS, blogs: data})
    } catch (error) {
       dispatch({type: FETCH_BLOGS_FAILED})
    }
}

export const fetchSingleBlogAction = ({ id }) => async (dispatch, getState) => {
  dispatch({ type: FETCH_SINGLE_BLOG });
  let singleBlog;
  try {
    const {
      blog: { blogs },
    } = getState();
    singleBlog = blogs.find((blog) => {
      console.log(blog.id, id);
      return Number(blog.id) === Number(id);
    });
    if (!singleBlog) {
      const {
        data: { data },
      } = await fetchSingleBlogService({ id })();
      singleBlog = data;
    }
    dispatch({
      type: FETCH_SINGLE_BLOG_SUCCESS,
      blog: singleBlog,
    });
  } catch (error) {
    dispatch({ type: FETCH_SINGLE_BLOG_FAILED });
  }
};
