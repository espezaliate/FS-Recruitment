import React, { useState, useEffect } from "react";
import { Response, Data, Get } from "../Interfaces/table";

export const Table: React.FC = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("./db.json")
      .then((response): Promise<Response> => response.json())
      .then((parsedData) => {
        setData(parsedData.response.data);
        console.log(data);
      });
  });
  return (
    <div>
      <div>
        <input type="search" onInput={handleSearch}></input>
      </div>
    </div>
  );
};
