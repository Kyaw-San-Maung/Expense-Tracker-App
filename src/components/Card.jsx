import { useSelector } from "react-redux";

const Card = () => {
  const expenses = useSelector((state) => state.expenses.expenseList);
  console.log("Expense List from Redux:", expenses); // Check if updates

  return (
    <div>
      <h2>Expense List</h2>
    </div>
  );
};

export default Card;
