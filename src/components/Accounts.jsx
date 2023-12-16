import { useState } from "react";

const Accounts = () => {
  const data = [
    {
      title: "Net worth",
      amount: 150000,
    },
    {
      title: "Credit Card",
      amount: -1500,
    },
    {
      title: "Investments",
      amount: 33123.85,
    },
    {
      title: "Loans",
      amount: -360954.52,
    },
    {
      title: "Property",
      amount: 401123.0,
    },
    {
      title: "Trends",
      amount: 15000,
    },
    {
      title: "Net Income",
      amount: 1500,
    },
  ];
  const [accounts, setAccounts] = useState(data);
  return (
    <div className="justify-center rounded-md border-[1px] p-1 text-gray-300">
      <h1 className="pl-6">Accounts</h1>
      {accounts.map((account, index) => (
        <ul
          key={index}
          className="m-6 flex flex-col rounded-md border-[1px] p-2"
        >
          <li>
            <div>{account.title}</div>
            <div>{account.amount}</div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Accounts;
