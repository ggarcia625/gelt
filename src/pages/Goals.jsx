import { useState } from "react";
import moment from "moment";
import Card from "../components/Card";

const Goals = () => {
  const data = [
    {
      title: "Pay off my loans",
      goal: 2820,
      current: 1567.76,
    },
    {
      title: "Monthly retirement",
      goal: 1500000,
      current: 61000,
      endDate: moment().add(10, "years").format("L"),
    },
    {
      title: "Save for a House",
      goal: 90000,
      current: 15640,
    },
  ];

  const [goalData, setGoalData] = useState(data);
  const addGoal = (goal) => {
    setGoalData([...goalData, goal]); // Corrected logic for adding a new goal
  };

  return (
    <div className="bg-[#008080]w-full p-6 text-gray-300">
      <div className="mx-auto max-w-screen-lg">
        <div className="mt-10 flex justify-between items-center">
          <h1>You go, goal-getter!</h1>
          <button
            onClick={() => addGoal(/* New goal object */)}
            className="rounded-3xl border-1 bg-[#008080] p-3"
          >
            + Create New Goal
          </button>
        </div>
        {goalData.map((goal, index) => (
          <Card
            title={goal.title}
            current={goal.current}
            goal={goal.goal}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
