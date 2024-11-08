import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import AddExpense from "./pages/AddExpense.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-expense",
    element: <AddExpense />,
  },
]);

function App() {
  return (
    <div className="font-serif">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
