import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogsAction } from '../store/Blog/action';


const handleThematicData = ( ComposedComponent) =>  {
  const WrapperComponent = (props) => {

    const {fetchBlogs, blogs}  = props;
    useEffect(() => {
      if (!blogs.length) {
        fetchBlogs();
      }
    }, []);
      return <ComposedComponent {...props} />
  }

  const mapStateToProps = ({
    blog: {
        fetchingBlogs,
        blogs,
    }
  }) =>( {
fetchingBlogs,
blogs,
  });

  const mapDispatchToProps = (dispatch) => ({
fetchBlogs: () => dispatch(fetchBlogsAction())
  })

  return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
}

export default handleThematicData;
