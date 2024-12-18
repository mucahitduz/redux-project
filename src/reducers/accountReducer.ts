import { AccountActionTypes } from "../actions/action-model";
import {
  DEPOSIT,
  WITHDRAW,
  REQUEST_LOAN,
  PAY_LOAN,
} from "../actions/action-types";

interface State {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialState: State = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function accountReducer(
  state = initialState,
  action: AccountActionTypes
): State {
  switch (action.type) {
    case DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
    case WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case PAY_LOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
