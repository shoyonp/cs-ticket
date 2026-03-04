import React from "react";

const SideTask = () => {
  return (
    <div>
      <div>
        <h4 className="font-semibold text-[#34485A] text-xl mb-3">Task Status</h4>
        <p className="text-sm text-gray-400 mb-4">Select a ticket to add to Task Status</p>
      </div>
      <div>
        <h4 className="font-semibold text-[#34485A] text-xl mb-3">Resolved Task</h4>
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default SideTask;
