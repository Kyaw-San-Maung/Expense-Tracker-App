import { useSelector } from "react-redux";
import Card from "./Card";

const ExpenseList = () => {
  const expense = useSelector((state) => state.expenses);
  console.log(expense);

  return (
    <div className="flex justify-between m-auto w-1/2 mt-3">
      <div>
        <Card />
      </div>
    </div>
  );
};

export default ExpenseList;
