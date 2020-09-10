import { FETCHING_GALLERY, FETCHING_GALLERY_FAILED, FETCHING_GALLERY_SUCCESS } from './type';
import { fetchGalleryService } from './api';

 export const fetchGalleryAction = () => async (dispatch) => {
    dispatch({type: FETCHING_GALLERY});
    try {
        const {data: {
            images,
        }} = await fetchGalleryService();
        dispatch({type: FETCHING_GALLERY_SUCCESS, gallery: images})
    } catch (error) {
        dispatch({type: FETCHING_GALLERY_FAILED})
    }
}