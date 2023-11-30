import React from "react";

const MyOrdersPanel = () => {
  return (
    <>
      <table className="table bg-white " style={{ fontSize: "15px" }}>
        <thead>
          <tr>
            <th scope="col">OrderID</th>
            <th scope="col">Order Amount</th>
            <th scope="col">Transaction ID</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Purchase Date</th>
            <th scope="col">Action</th>
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
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MyOrdersPanel;
