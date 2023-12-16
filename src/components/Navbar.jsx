import { useState } from "react";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <div 
    className="shadow-black-500 right-0 flex w-full justify-between bg-[#151729] p-4 text-gray-300 shadow-lg"
    //  style={{background: 'linear-gradient(to bottom, #2e2f42, #004040)'}}

    >
      <ul className="right-0 top-0 hidden w-[70%] justify-between md:flex ">
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/transactions"> Transcations</Link>
        </li>
        <li>
          <Link to="/credit-score">Credit Score</Link>
        </li>
        <li>
          <Link to="/bills">Bills</Link>
        </li>
        <li>
          <Link to="/budgets">Budgets</Link>
        </li>
        <li>
          <Link to="/goals">Goals</Link>
        </li>
        <li>
          <Link to="/trends">Trends</Link>
        </li>
        <li>
          <Link to="/investments">Investments</Link>
        </li>
      </ul>
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="z-10 cursor-pointer md:hidden"
      >
        {navMobile ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={
          navMobile
            ? "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#008080] text-4xl"
            : "hidden"
        }
      >
        <li className="py-6">
          <Link to="/">Overview</Link>
        </li>
        <li className="py-6">
          <Link to="/transactions"> Transcations</Link>
        </li>
        <li className="py-6">
          <Link to="/credit-score">Credit Score</Link>
        </li>
        <li className="py-6">
          <Link to="/bills">Bills</Link>
        </li>
        <li className="py-6">
          <Link to="/budgets">Budgets</Link>
        </li>
        <li className="py-6">
          <Link to="/trends">Trends</Link>
        </li>
        <li className="py-6">
          <Link to="/investments">Investments</Link>
        </li>
      </ul>
      <ul className="mr-4 flex w-[100px] justify-between">
        <li>
          <FaCirclePlus />
        </li>
        <li>
          <FaBell />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
