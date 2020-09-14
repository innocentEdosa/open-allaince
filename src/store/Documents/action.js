import { FETCH_DOCUMENT, FETCH_DOCUMENT_COMPLETE} from './type';
import { fetchDocumentService } from './api';

export const fetchDocumentAction = () => async (dispatch) => {
    dispatch({type: FETCH_DOCUMENT});
    try {
        const {data: {
            data
        }} = await fetchDocumentService();
        dispatch({type: FETCH_DOCUMENT_COMPLETE, document: data })
    } catch (error) {
        dispatch({type: FETCH_DOCUMENT_COMPLETE, document: []})
    }
}