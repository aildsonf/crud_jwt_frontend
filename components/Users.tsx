import _ from "lodash";

export default function Users({ data }: any) {
  return (
    <div className="flex container my-10">
      <table className="table-auto w-full">
        <thead>
          <th>Name</th>
          <th>CPF</th>
          <th>Birthday</th>
          <th>Mother's Name</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>Status</th>
        </thead>
        <tbody>
          {_.map(data, (d) => (
            <tr id={d.id} className="text-center">
              <td>{d.name || "-"}</td>
              <td>{d.cpf || "-"}</td>
              <td>{d.birthday || "-"}</td>
              <td>{d.mothers_name || "-"}</td>
              <td>{d.email || "-"}</td>
              <td>{d.phone || "-"}</td>
              <td>{d.status || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
