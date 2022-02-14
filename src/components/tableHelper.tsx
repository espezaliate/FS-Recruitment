import { Data } from "../Interfaces/table";

export default function ReturnData(data: Data) {
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
