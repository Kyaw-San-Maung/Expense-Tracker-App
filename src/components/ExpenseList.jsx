import Card from "./Card";

const ExpenseList = () => {
  const list = [
    {
      title: "Make a purchase",
      logo: "F&B",
      createdAt: Date.now(),
      amount: 1234,
    },
    {
      title: "Make a purchase",
      logo: "F&B",
      createdAt: Date.now(),
      amount: 1234,
    },
  ];
  return (
    <div className="flex justify-between m-auto w-1/2 mt-3">
      <div>
        {list.length ? (
          list.map((item) => (
            <>
              <Card item={item} />
            </>
          ))
        ) : (
          <>Nothing in the List</>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
