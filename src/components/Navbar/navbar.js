import React from "react";
import { Input } from "antd";
import "antd/dist/antd.min.css";
import "./navbar.css";

const { Search } = Input;

function navbar({ setSearchTerm, setSearchCountry }) {
  const onSearchEvent = (value) => setSearchTerm(value);
  const onSearchCountry = (value) => setSearchCountry(value);
  return (
    <div className="NavBar">
      <p className="title">e.Vents</p>
      <div>
        <Search
          placeholder="Search Event"
          onSearch={onSearchEvent}
          style={{
            width: 340,
          }}
        />
      </div>
      <div>
        <Search
          placeholder="Change Country"
          onSearch={onSearchCountry}
          style={{
            width: 200,
          }}
        />
      </div>
    </div>
  );
}

export default navbar;
