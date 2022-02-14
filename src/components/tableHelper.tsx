import { Data } from "../Interfaces/table";

export function ReturnData(data: Data) {
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
  return Object.entries(data).some(([, value]) =>
    String(value).toLowerCase().includes(search)
  );
}

export function mapList(data: Data[]) {
  return data.map((e: Data) => ReturnData(e));
}
