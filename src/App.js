import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import EventBox from "./components/EventBox/eventBox";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("music");
  useEffect(() => {
    async function FetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=12&keyword=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setApiData(data._embedded.events);
    }
    FetchData();
  }, [searchTerm]);
  console.log(apiData);
  return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="Event-container">
        {apiData.map((event) => {
          return <EventBox event={event} />;
        })}
      </div>
    </div>
  );
}

export default App;
