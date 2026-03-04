import React from "react";

const TaskStatusCard = ({ ipc }) => {
  const { title } = ipc;
  return (
    <div className="p-3 bg-white shadow-sm rounded-md hover:shadow-md transition duration-300 space-y-3">
      <p className="font-medium text-[#001931]">{title}</p>
      <button className="bg-[#02A53B]  text-white text-sm font-medium p-2 rounded-md w-full cursor-pointer">
        Complete
      </button>
    </div>
  );
};

export default TaskStatusCard;
