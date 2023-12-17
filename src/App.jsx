import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Goals from "./pages/Goals";
import Budget from "./pages/Budget";
import Transactions from "./pages/Transactions";
import Bills from "./pages/Bills";
import Trends from "./pages/Trends";
import Investments from "./pages/Investments";
import CreditScore from "./pages/CreditScore";

const App = () => {
  return (
    <div className="h-screen w-full justify-center bg-[#151729]">
      <BrowserRouter basename="/gelt">
        <Navbar />
        <Routes>
          <Route path="/gelt" element={<Overview />} />
          <Route path="/gelt/transactions" element={<Transactions />} />
          <Route path="/credit-score" element={<CreditScore />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/budgets" element={<Budget />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/investments" element={<Investments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
