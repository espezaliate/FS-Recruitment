export interface Get<T>{
    status: number,
    data: T,
}

export interface Data {
    work_order_id: number,
    description: string,
    received_date: string,
    assigned_to: [
      {
        person_name: string,
        status: "Assigned" | "Completed" | "Canceled" | "In progress"
      }
    ],
    status: "New" | "Completed" | "Canceled" | "In progress"
    priority: "Low" | "Normal" | "High"
}

export interface Response {
    exec_time: number,
    response: {
        current_page: number,
        from: number,
    last_page: number,
    per_page: number,
    to: number,
    total: number,
    data: Data[]
    }
}