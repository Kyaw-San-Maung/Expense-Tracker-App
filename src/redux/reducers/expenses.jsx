import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, action) => {
  console.log("Reducer called - Action:", action); // Check action structure

  switch (action.type) {
    case ADD_EXPENSE: {
      const newState = {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
      console.log("New State:", newState); // Check if expenseList updates
      return newState;
    }

    default:
      return state;
  }
};
