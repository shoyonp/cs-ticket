import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets/Tickets";
import SideTask from "./components/SideTask/SideTask";

// const fetchTickets = async () => {
//   const res = await fetch("/tickets.json");
//   return res.json();
// };
// const ticketData = fetchTickets();

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [inProgressCard, setInProgressCard] = useState([]);

  // load the tickets
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  // remove tickets
  const removeTicket = (ticket) => {
    setInProgressCard([...inProgressCard, ticket]);
    setTickets((prevTickets) => prevTickets.filter((t) => t.id !== ticket.id));
    setInProgressCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div>
        <Navbar />
        <Banner inProgressCount={inProgressCount} />
        <main className="w-11/12 mx-auto p-t-5 grid grid-cols-2 md:grid-cols-12 md:gap-5 lg:gap-10 mt-10">
          <aside className="col-span-9">
            <Suspense fallback="tickets are loading">
              <Tickets tickets={tickets} removeTicket={removeTicket} />
            </Suspense>
          </aside>
          <aside className="col-span-3 mt-10 md:mt-0">
            <SideTask inProgressCard={inProgressCard} />
          </aside>
        </main>
      </div>
    </>
  );
}

export default App;
