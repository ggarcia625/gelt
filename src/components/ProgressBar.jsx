import React, { useState, useEffect } from "react";

const ProgressBar = ({ initialProgress }) => {
  const [progress, setProgress] = useState(0);

  // Update the progress when the component mounts or when the initialProgress prop changes
  useEffect(() => {
    setProgress(initialProgress);
  }, [initialProgress]);

  // Function to update the progress and trigger the animation
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <>
      <div className="progress-bar-container rounded-2xl bg-gray-200 p-[1px]">
        <div
          className="progress-bar rounded-2xl bg-[#008080] text-center text-white h-6"
          style={{
            width: `${progress}%`,
            transition: "width 1s ease-in-out", // CSS transition property
          }}
        >
          {' '}
        </div>
      </div>
      <span className="flex justify-center">{progress}%</span>
    </>
  );
};

export default ProgressBar;
