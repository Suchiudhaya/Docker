import React from "react";

const StatusList = ({ status }) => (
  <ul>
    {status.map(s => (
      <li key={s.id}>{s.status}</li>
    ))}
  </ul>
);

export default StatusList;
