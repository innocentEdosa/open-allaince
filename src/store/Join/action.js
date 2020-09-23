import { registerCompanyService } from "./api";
import {
  REGISTERING_COMPANY,
  REGISTERING_COMPANY_COMPLETED,
} from "./type";

export const registerCompanyAction = (params) => async (dispatch) => {
  dispatch({
    type: REGISTERING_COMPANY,
  });
  try {
    const formData = new FormData();
    formData.append("description", params.description)
    formData.append("name", params.name)
    formData.append("email", params.email);
    formData.append("logo", params.file[0]);

    await registerCompanyService(formData);
    dispatch({type: REGISTERING_COMPANY_COMPLETED, });
    return true;
  } catch (error) {
   dispatch({type: REGISTERING_COMPANY_COMPLETED})
   return false;
  }
};
