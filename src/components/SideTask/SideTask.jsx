import React from "react";
import TaskStatusCard from "./TaskStatusCard";

const SideTask = ({ inProgressCard, completeTask, resolvedTask }) => {
  return (
    <div>
      <div>
        <h4 className="font-semibold text-[#34485A] text-xl mb-3">
          Task Status
        </h4>

        {inProgressCard.length ? (
          <div className="grid grid-cols-1 gap-5">
            {inProgressCard?.map((ipc) => (
              <TaskStatusCard
                key={ipc.id}
                ipc={ipc}
                completeTask={completeTask}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 mb-4">
            Select a ticket to add to Task Status
          </p>
        )}
      </div>
      <div className="mt-3">
        <h4 className="font-semibold text-[#34485A] text-xl mb-3">
          Resolved Task
        </h4>
        {resolvedTask.length ? (
          <div className="space-y-3">
            {resolvedTask.map((t, idx) => (
              <h3
                className="bg-[#E0E7FF] text-[#001931] font-medium p-4 rounded-md"
                key={idx}
              >
                {t}
              </h3>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No resolved tasks yet.</p>
         )}
      </div>
    </div>
  );
};

export default SideTask;
