// ExpenseList.jsx
import { useSelector } from "react-redux";
import Card from "./Card";

const ExpenseList = () => {
  const expenseList = useSelector((state) => state.expenses.expenseList);
  console.log("This is from expenseList", expenseList);

  return (
    <div className="grid gap-4 m-auto w-1/2 mt-3">
      {expenseList && expenseList.length > 0 ? (
        expenseList.map((expense, index) => <Card key={index} item={expense} />)
      ) : (
        <p>No expenses added yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
