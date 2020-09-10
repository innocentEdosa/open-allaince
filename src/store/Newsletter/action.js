import {
    SIGNUP_FOR_NEWSLETTER_FAILED, SIGNUP_FOR_NEWSLETTER, SIGNUP_FOR_NEWSLETTER_SUCCESS
} from './type';
import { signupForNewsLetterService} from './api';

export const signupForNewsletterAction = (params) => async (dispatch) => {
    dispatch({type: SIGNUP_FOR_NEWSLETTER});
    try {
       await signupForNewsLetterService(params);
        dispatch({type: SIGNUP_FOR_NEWSLETTER_SUCCESS})
        return true;
    } catch (error) {
        dispatch({type: SIGNUP_FOR_NEWSLETTER_FAILED})
    }
} 