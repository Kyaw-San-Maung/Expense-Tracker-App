// import { useSelector } from "react-redux";

// const Card = () => {
//   const expenses = useSelector((state) => state.expenses);
//   console.log("Expense List from Redux:", expenses); // Check if updates

//   return (
//     <div>
//       <h2>Expense List</h2>
//     </div>
//   );
// };

// export default Card;

// In Card.jsx
import { useSelector } from "react-redux";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const CardFromStore = () => {
  const expenseList = useSelector((state) => state.expenses);
  console.log("Expense List from Redux:", expenseList); // Check if updates

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>
      {expenseList && expenseList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenseList.map((expense, index) => (
            <Card key={index} className="shadow-lg border border-gray-200">
              <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
                <h2 className="text-lg font-semibold text-gray-800">
                  {expense.title}
                </h2>
              </CardHeader>
              <CardBody className="p-4">
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Amount:</span> {expense.amount}{" "}
                  Kyats
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Type:</span> {expense.type}
                </p>
              </CardBody>
              <CardFooter className="bg-gray-50 p-4 rounded-b-lg">
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Created At:</span>{" "}
                  {expense.createdAt}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No expenses added yet.</p>
      )}
    </div>
  );
};

export default CardFromStore;
