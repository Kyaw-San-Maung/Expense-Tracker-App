import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/index.jsx";
import { NextUIProvider } from "@nextui-org/react";
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

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <NextUIProvider>
      <App />
      <RouterProvider router={router} />
    </NextUIProvider>
  </Provider>
);
