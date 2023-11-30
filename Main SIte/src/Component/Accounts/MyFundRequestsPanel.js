import React from "react";

const MyFundRequestsPanel = () => {
  return (
    <>
      <table className="table bg-white" style={{ fontSize: "15px" }}>
        <thead>
          <tr className="fs-">
            <th>S.No</th>
            <th>Fund Name</th>
            <th>Request Amount</th>
            <th>Request Date</th>
            <th>Status</th>
            <th>Approval Date</th>
            <th>Action</th>
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
export default MyFundRequestsPanel;
