import { REGISTERING_COMPANY, REGISTERING_COMPANY_COMPLETED } from "./type";

const initialState = {
  registering: false,
};

const joinUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING_COMPANY:
      return {
        registering: true,
      };
    case REGISTERING_COMPANY_COMPLETED:
      return {
        registering: false,
      };
    default:
      return state;
  }
};

export default joinUsReducer;
