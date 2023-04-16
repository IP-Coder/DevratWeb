import React from "react";

const AllDownlinePanel = () => {
  return (
    <>
      <table className="table bg-white" style={{ fontSize: "15px" }}>
        <thead>
          <tr className="fs-">
            <th scope="col">S.No</th>
            <th scope="col">Distributor Name</th>
            <th scope="col">Distributor Contact</th>
            <th scope="col">DOJ</th>
            <th scope="col">Rank</th>
            <th scope="col">Upline Name</th>
            <th scope="col">Reference Code</th>
            <th scope="col">Total</th>
            <th scope="col">Total(With Tax)</th>
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
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AllDownlinePanel;
