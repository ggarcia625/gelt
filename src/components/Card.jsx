import React from "react";
import ProgressBar from "./ProgressBar";

const Card = ({ title, current, goal }) => {
  const progress = Number((current / goal) * 100).toFixed(2);
  return (
    <div className="m-6 rounded-md border-[1px] p-6">
      {title}
      <ProgressBar initialProgress={progress} />
      <div className="flex justify-between">
        <div>${current}</div>
        <div>${goal}</div>
      </div>
    </div>
  );
};

export default Card;
