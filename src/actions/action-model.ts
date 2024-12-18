import { ThunkAction } from "redux-thunk";
import {
  DEPOSIT,
  WITHDRAW,
  REQUEST_LOAN,
  PAY_LOAN,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
} from "./action-types";
import { RootState } from "../reducers/rootReducer";
// account related action models
interface DepositAction {
  type: typeof DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: typeof WITHDRAW;
  payload: number;
}

interface RequestLoanAction {
  type: typeof REQUEST_LOAN;
  payload: { amount: number; purpose: string };
}

interface PayLoanAction {
  type: typeof PAY_LOAN;
  payload: void;
}

export type AccountThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AccountActionTypes
>;

export type AccountActionTypes =
  | DepositAction
  | WithdrawAction
  | RequestLoanAction
  | PayLoanAction;

//customer related action models
interface CreateCustomerAction {
  type: typeof CREATE_CUSTOMER;
  payload: { fullName: string; nationalID: string; createdAt: string };
}

interface UpdateCustomerAction {
  type: typeof UPDATE_CUSTOMER;
  payload: { fullName: string };
}

export type CustomerActionTypes = CreateCustomerAction | UpdateCustomerAction;
