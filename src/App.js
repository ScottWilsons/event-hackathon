import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function FetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=12&keyword=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setApiData(data);
    }
    FetchData();
  }, [searchTerm]);
  console.log(apiData);
  return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
