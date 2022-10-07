import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;

function navbar({ setSearchTerm }) {
  const onSearch = (value) => setSearchTerm(value);
  return (
    <div>
      <Search
        placeholder="Search Event"
        onSearch={onSearch}
        style={{
          width: 340,
        }}
      />
    </div>
  );
}

export default navbar;
