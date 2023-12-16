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
    <div className="h-screen w-full bg-[#151729] justify-center"
    // style={{background: 'radial-gradient(circle, #2e2f42, #004040)'}}
    >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Overview} />
          <Route path='/transactions' exact Component={Transactions} />
          <Route path='/credit-score' exact Component={CreditScore} />
          <Route path='/bills' exact Component={Bills} />
          <Route path='/budgets' exact Component={Budget} />
          <Route path='/goals' exact Component={Goals} />
          <Route path='/trends' exact Component={Trends} />
          <Route path='/investments' exact Component={Investments} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
