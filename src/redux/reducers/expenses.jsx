import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, action) => {
  console.log(action.type, "this is = ", action.data);

  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }
    default:
      return state;
  }
};
