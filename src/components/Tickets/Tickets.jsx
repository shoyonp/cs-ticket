import React, { use } from "react";
import TicketCard from "./TicketCard";

const Tickets = ({ ticketData }) => {
  const tickets = use(ticketData);
  // console.log(tickets);
  return (
    <div>
      <h4>Customer Tickets</h4>
      <div className="grid grid-cols-2 gap-5 ">
        {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
      </div>
    </div>
  );
};

export default Tickets;
