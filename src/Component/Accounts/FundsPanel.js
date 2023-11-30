import React from "react";

const FundsPanel = () => {
  return (
    <>
      <table className="table bg-white" style={{ fontSize: "15px" }}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Fund Name</th>
            <th scope="col">Fund Upto</th>
            <th scope="col">Eligibility</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bike Fund</td>
            <td>100000</td>
            <td>Not Eligible</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Car Fund</td>
            <td>500000</td>
            <td>Not Eligible</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>House Fund</td>
            <td>5000000</td>
            <td>Not Eligible</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Emergency Fund</td>
            <td>750000</td>
            <td>Not Eligible</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FundsPanel;
