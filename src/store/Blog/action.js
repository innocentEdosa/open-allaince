import {FETCH_BLOGS, FETCH_BLOGS_FAILED, FETCH_BLOGS_SUCCESS} from './type';
import {fetchBlogService} from './api';

export const fetchBlogsAction = () => async (dispatch) => {
    dispatch({type: FETCH_BLOGS});
    try {
        const {data: {data}} = await fetchBlogService();
        dispatch({type: FETCH_BLOGS_SUCCESS, blogs: data})
    } catch (error) {
       dispatch({type: FETCH_BLOGS_FAILED})
    }
}