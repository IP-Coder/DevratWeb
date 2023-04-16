import React from "react";

const MyEarningPanel = () => {
  return (
    <>
      <table className="table bg-white " style={{ fontSize: "15px" }}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Income Month</th>
            <th scope="col">Income Year</th>
            <th scope="col">Total Profit</th>
            <th scope="col">TDS Charges</th>
            <th scope="col">Net Profit</th>
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
export default MyEarningPanel;
