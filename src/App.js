import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function FetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=12&keyword=${"music"}&apikey=G9W1WD3OfwmkGDCxn6dbEKrVSEC49m9x`
      );
      const data = await response.json();
      setApiData(data);
    }
    FetchData();
  }, []);
  console.log(apiData);
  return <div className="App"></div>;
}

export default App;
