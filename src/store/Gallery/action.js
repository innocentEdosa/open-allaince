import { FETCHING_GALLERY, FETCHING_GALLERY_FAILED, FETCHING_GALLERY_SUCCESS } from './type';
import { fetchGalleryService } from './api';

 export const fetchGalleryAction = () => async (dispatch) => {
    dispatch({type: FETCHING_GALLERY});
    try {
        const {data: {
        gallery,
        }} = await fetchGalleryService();
        dispatch({type: FETCHING_GALLERY_SUCCESS, gallery})
    } catch (error) {
        dispatch({type: FETCHING_GALLERY_FAILED})
    }
}