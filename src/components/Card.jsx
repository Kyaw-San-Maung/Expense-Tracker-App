// Card.jsx
const Card = ({ item }) => {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="font-semibold text-lg">{item.title}</h2>
      <p className="text-gray-600">Amount: {item.amount} Kyats</p>
      <p className="text-gray-600">Type: {item.type}</p>
    </div>
  );
};

export default Card;
