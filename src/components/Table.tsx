import React, { useState, useEffect } from "react";
import { Data, Response } from "../Interfaces/table";
import { filterData, returnData } from "./tableHelper";

export const Table: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<[]>([]) as any;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("./db.json")
      .then((response): Promise<Response> => response.json())
      .then((parsedData): Data[] => setData(parsedData.response.data));
  }, []);

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
                <th key={e[0]}>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item: Data[]): boolean => filterData(search, item))
              .map((item: Data): JSX.Element => returnData(item))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
