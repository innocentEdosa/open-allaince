import React, { useEffect } from 'react';
import BlogList from './List';
import { connect } from 'react-redux';
import { fetchBlogsAction } from '../store/Blog/action';
import "./style.css";

const Blog = ({
    blogs,
    fetchingBlogs,
    fetchBlogs,
}) => {

    useEffect(() => {
        if(!blogs.length){
            fetchBlogs()
        }
    }, []);
    return ( <BlogList fetchingBlogs={fetchingBlogs} blogs={blogs} />);
}
 
const mapStateToProps = ({
    blog: {
        blogs,
    fetchingBlogs,
    }
}) => ({
blogs,
fetchingBlogs,
});

const mapDispatchToProps = (dispatch) => ({
fetchBlogs: () => dispatch(fetchBlogsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
