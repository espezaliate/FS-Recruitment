import { useState, useEffect } from "react";
import { Response, Data } from "../../Interfaces/table";

export default function useData(fetchPath: string) {
  const [data, setData] = useState<[]>([]) as any;
  useEffect(() => {
    fetch(fetchPath)
      .then((response): Promise<Response> => response.json())
      .then((parsedData): Data[] => setData(parsedData.response.data));
  }, [fetchPath]);

  return data;
}
