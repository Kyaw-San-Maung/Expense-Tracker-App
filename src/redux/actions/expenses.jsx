import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

export const addExpense = (data) => {
  console.log("Action Creator - Data to add:", data); // Check data here

  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data,
  };
};
