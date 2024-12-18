import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";

const reducer = combineReducers({
  expenses: expenseReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);

console.log("This is redux store.");

export default store;
