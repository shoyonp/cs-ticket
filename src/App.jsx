import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets/Tickets";
import SideTask from "./components/SideTask/SideTask";
import toast from "react-hot-toast";
import Footer from "./components/Footer";

// const fetchTickets = async () => {
//   const res = await fetch("/tickets.json");
//   return res.json();
// };
// const ticketData = fetchTickets();

function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [inProgressCard, setInProgressCard] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  // load the tickets
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
        setLoading(false);
      });
  }, []);

  // remove tickets
  const removeTicket = (ticket) => {
    setInProgressCard([...inProgressCard, ticket]);
    setTickets((prevTickets) => prevTickets.filter((t) => t.id !== ticket.id));
    setInProgressCount((prevCount) => prevCount + 1);
    toast.success("Task moved to In Progress");
  };

  // complete task
  const completeTask = (title) => {
    setResolvedTask([...resolvedTask, title]);
    setResolvedCount((prevCount) => prevCount + 1);
    setInProgressCard((prevTask) => prevTask.filter((t) => t.title !== title));
    setInProgressCount((prevCount) => prevCount - 1);
    toast.success("Task marked as Resolved");
  };

  return (
    <>
      <div>
        <Navbar />
        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        />
        <main className="w-11/12 mx-auto p-t-5 grid grid-cols-2 md:grid-cols-12 md:gap-5 lg:gap-10 mt-10 mb-10 min-h-[calc(100vh-90px)]">
          <aside className="col-span-9">
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <Tickets tickets={tickets} removeTicket={removeTicket} />
            )}
            {/* <Suspense fallback="tickets are loading">
              <Tickets tickets={tickets} removeTicket={removeTicket} />
            </Suspense> */}
          </aside>

          <aside className="col-span-3 mt-10 md:mt-0">
            <SideTask
              inProgressCard={inProgressCard}
              resolvedTask={resolvedTask}
              completeTask={completeTask}
            />
          </aside>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
