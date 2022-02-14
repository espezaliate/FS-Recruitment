import { Data } from "../Interfaces/table";

export function returnData(data: Data) {
  return (
    <tr key={data.work_order_id}>
      <td>{data.work_order_id}</td>
      <td>{data.description}</td>
      <td>{data.received_date}</td>
      <td>{data.assigned_to[0]?.person_name}</td>
      <td>{data.assigned_to[0]?.status}</td>
      <td>{data.priority}</td>
    </tr>
  );
}

export function filterData(search: string, data: Data[]) {
  console.log(Object.entries(data).forEach((e) => console.log(e)));
  return Object.entries(data).some(
    ([key, value]) =>
      "description".includes(key) && String(value).includes(search)
  );
}
