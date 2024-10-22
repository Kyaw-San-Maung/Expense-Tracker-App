import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import AddExpense from "./pages/AddExpense";

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
