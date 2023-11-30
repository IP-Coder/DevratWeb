import React from "react";

const MyPointsPanel = () => {
  return (
    <>
      <table className="table bg-white" style={{ fontSize: "15px" }}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Txn Amount</th>
            <th scope="col">Operation</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Order ID</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default MyPointsPanel;
