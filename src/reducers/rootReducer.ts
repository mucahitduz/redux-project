import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
