import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      const newState = {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };

      return newState;
    }

    default:
      return state;
  }
};
