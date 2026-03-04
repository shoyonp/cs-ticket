import TicketCard from "./TicketCard";

const Tickets = ({ tickets, removeTicket }) => {
  // const tickets = use(ticketData);
  return (
    <div>
      <h4 className="font-semibold text-[#34485A] text-xl mb-3">
        Customer Tickets
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            removeTicket={removeTicket}
          />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
