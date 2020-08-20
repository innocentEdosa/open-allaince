import { registerCompanyService } from './api';
import { REGISTERING_COMPANY, REGISTERING_COMAPNY_FAILED, REGISTERING_COMPANY_SUCCESS } from './type';

export const registerCompanyAction = (params) => async (dispatch) => {
    dispatch({
        type: REGISTERING_COMPANY
    })
    try {
        const formData = new FormData();
        formData.append('email', params.email)
        formData.append('logo', params.file[0])

        const response = await registerCompanyService(formData);
        console.log(response);
console.log(params)
    } catch (error){
console.log(error);
console.log(error.response, 'this is err')
    }
}