import React from "react";
import Goals from "./Goals";
import Accounts from "../components/Accounts";

const Overview = () => {
  return (
    <div className="flex w-full overflow-hidden p-6">
      <div className="w-[25%]">
        <Accounts />
      </div>
      <div className="w-[75%]">
        <Goals />
      </div>
    </div>
  );
};

export default Overview;
