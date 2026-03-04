import React from "react";

const TicketCard = ({ ticket, removeTicket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const handleClick = (ticket) => {
    removeTicket(ticket);
  };
  //   console.log(ticket);
  return (
    <div
      onClick={() => {
        handleClick(ticket);
      }}
      className="bg-white rounded-md p-5 shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
    >
      {/* top */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full
      ${
        status === "Open"
          ? "bg-green-100 text-green-700"
          : status === "In Progress"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-blue-100 text-blue-700"
      }`}
        >
          {status}
        </span>
      </div>
      {/* middle */}
      <p className="text-sm text-gray-500 mb-5">{description}</p>
      {/* bottom */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">#{id}</span>
          <span
            className={`px-2 py-0.5 rounded text-xs font-medium
        ${
          priority === "High"
            ? "bg-red-100 text-red-600"
            : priority === "Medium"
              ? "bg-orange-100 text-orange-600"
              : "bg-gray-100 text-gray-600"
        }`}
          >
            {priority}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>{customer}</span>
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
