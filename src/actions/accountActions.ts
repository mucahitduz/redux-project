import { DEPOSIT, WITHDRAW, REQUEST_LOAN, PAY_LOAN } from "./action-types";
import { AccountActionTypes, AccountThunkAction } from "./action-model";

export const deposit = (
  amount: number,
  currency: string
): AccountThunkAction => {
  return async (dispatch) => {
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`
    );
    const data = await res.json();
    const converted = (amount * data.rates.USD).toFixed(2);

    dispatch({
      type: DEPOSIT,
      payload: Number(converted),
    });
  };
};

export const withdraw = (amount: number): AccountActionTypes => ({
  type: WITHDRAW,
  payload: amount,
});

export const requestLoan = (
  amount: number,
  purpose: string
): AccountActionTypes => ({
  type: REQUEST_LOAN,
  payload: { amount, purpose },
});

export const payLoan = (): AccountActionTypes => ({
  type: PAY_LOAN,
  payload: undefined,
});
