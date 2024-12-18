import { CREATE_CUSTOMER, UPDATE_CUSTOMER } from "./action-types";

export const createCustomer = (fullName: string, nationalID: string) => ({
  type: CREATE_CUSTOMER,
  payload: { fullName, nationalID, createdAt: new Date().toISOString() },
});

export const updateCustomer = (fullName: string) => ({
  type: UPDATE_CUSTOMER,
  payload: { fullName },
});
