import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGalleryAction } from '../store/Gallery/action';
import GalleryList from './list';
import './gallery.css'
const Gallery = ({
    fetchGallery,
    fetchingGallery,
    gallery,
}) => {
    useEffect(() => {
        fetchGallery()
    }, [])
    return ( <GalleryList gallery={gallery} fetchingGallery={fetchingGallery} /> );
}
 
const mapDispatchToProps = (dispatch) => ({
fetchGallery: () => dispatch(fetchGalleryAction()),
});
const mapStateToProps = ({gallery: {
    fetchingGallery,
    gallery,
}}) => ({
fetchingGallery,
gallery
})
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);