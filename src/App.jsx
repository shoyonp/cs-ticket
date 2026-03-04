import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets/Tickets";
import SideTask from "./components/SideTask/SideTask";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const ticketData = fetchTickets();

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <main className="w-11/12 mx-auto p-t-5 grid md:grid-cols-12 gap-10 mt-10">
          <aside className="col-span-9">
            <Suspense fallback="tickets are loading">
              <Tickets ticketData={ticketData} />
            </Suspense>
          </aside>
          <aside className="col-span-3">
            <SideTask />
          </aside>
        </main>
      </div>
    </>
  );
}

export default App;
