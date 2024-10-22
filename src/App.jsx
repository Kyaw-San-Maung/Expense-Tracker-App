import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";

function App() {
  return (
    <div className="font-serif">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-expenses" element={<AddExpense />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
