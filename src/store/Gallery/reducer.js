import { FETCHING_GALLERY, FETCHING_GALLERY_FAILED, FETCHING_GALLERY_SUCCESS } from './type';

const initialState = {
    fetchingGallery: false,
    gallery: [],
};

const galleryReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_GALLERY: return ({
            ...state,
            fetchingGallery: true
        });
        case FETCHING_GALLERY_FAILED: return ({
            ...state,
            fetchingGallery: false,
        })
        case FETCHING_GALLERY_SUCCESS: return ({
            ...state,
            fetchingGallery: false,
            gallery: action.gallery,
        })
        default: return state;
    }
}

export default galleryReducer;
