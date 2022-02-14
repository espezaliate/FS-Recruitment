import React, { useState, useEffect } from "react";
import { Response, Data } from "../Interfaces/table";
import ReturnData from "./tableHelper";

export const Table: React.FC = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]) as any;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("./db.json")
      .then((response): Promise<Response> => response.json())
      .then((parsedData) => setData(parsedData.response.data));
  }, []);

  console.log(data);

  const rows: [string][] = [
    ["WO ID"],
    ["Description"],
    ["Received date"],
    ["Assigned to"],
    ["Status"],
    ["Priority"],
  ];

  return (
    <div className="container">
      <div className="center">
        <input
          type="search"
          onInput={handleSearch}
          placeholder="Search..."
        ></input>
      </div>
      <div className="center">
        <table>
          <thead>
            <tr>
              {rows.map((e: [string]) => (
                <th>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>{data.map((e: Data) => ReturnData(e))}</tbody>
        </table>
      </div>
    </div>
  );
};
