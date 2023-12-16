import React, { useState, useEffect } from 'react';

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
    <div className="progress-bar-container bg-gray-200 rounded-2xl p-[1px]">
      <div
        className="progress-bar bg-[#008080] text-white text-center rounded-2xl"
        style={{
          width: `${progress}%`,
          transition: 'width 1s ease-in-out', // CSS transition property
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
