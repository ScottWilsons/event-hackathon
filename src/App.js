import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import EventBox from "./components/EventBox/eventBox";
import Footer from "./components/Footer/footer";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("music");
  const [searchCountry, setSearchCountry] = useState("GB");
  const [isNoData, setIsNoData] = useState(false);
  useEffect(() => {
    async function FetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=24&countryCode=${searchCountry}&keyword=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      if (data._embedded === undefined) {
        setIsNoData(true);
      } else {
        setIsNoData(false);
        setApiData(data._embedded.events);
      }
    }
    FetchData();
  }, [searchTerm, searchCountry]);
  console.log(apiData);
  return (
    <div className="App">
      <Navbar
        setSearchTerm={setSearchTerm}
        setSearchCountry={setSearchCountry}
      />
      <div>
        {isNoData === false ? (
          <div className="Event-container">
            {apiData.map((event) => {
              return <EventBox event={event} key={event.id} />;
            })}
          </div>
        ) : (
          <p className="noResult">"No Results"</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
