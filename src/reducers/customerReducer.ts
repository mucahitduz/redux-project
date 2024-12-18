import { CREATE_CUSTOMER, UPDATE_CUSTOMER } from "../actions/action-types";
import { CustomerActionTypes } from "./../actions/action-model";

interface State {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

const initialState: State = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export function customerReducer(
  state = initialState,
  action: CustomerActionTypes
): State {
  switch (action.type) {
    case CREATE_CUSTOMER:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case UPDATE_CUSTOMER:
      return { ...state, fullName: action.payload.fullName };

    default:
      return state;
  }
}
