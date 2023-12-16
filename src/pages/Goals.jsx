import React from "react";

const Goals = () => {
  return (
    <div className="w-max-[1200px] h-screen w-full justify-center text-white">
      <div className="mt-10 flex justify-evenly">
        <h1>You go, goal-getter!</h1>
        <button className="rounded-3xl border-2 bg-[#FF6347] p-2 ">
          + Create New Goal
        </button>
      </div>
    </div>
  );
};

export default Goals;
