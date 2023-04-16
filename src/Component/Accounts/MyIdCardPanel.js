import React, { useEffect, useState } from "react";
import fb from "../Database/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
const db = fb.db;
const MyIdCardPanel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "login", localStorage.getItem("email"));
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="card text-center">
        <div className="card-header fs-1 ">VM 11 PRIME</div>
        <div className="card-body p-5">
          <div className="d-flex flex-column align-items-center">
            <img
              src="/images/Devrt.jpg"
              height={"30%"}
              class="w-25 rounded"
              alt="..."
            />

            <h4 className="mt-4 mb-4">{data.DistributorName}</h4>
            <table className="table-primary text-start fs-6">
              <tbody className="">
                <tr className="">
                  <td className="w-50 ">Father name:</td>
                  <td className="">{data.FatherName}</td>
                </tr>
                <tr>
                  <td className="">Contact:</td>
                  <td className="">{data.MobileNumber}</td>
                </tr>
                <tr>
                  <td className="">DOB:</td>
                  <td className="">{data.DOB}</td>
                </tr>
                <tr>
                  <td className="">Address:</td>
                  <td className="">
                    {data.HouseNo + " " + data.Village + " " + data.District}
                  </td>
                </tr>
                <tr>
                  <td className="">Upline:</td>
                  <td className="">{data.MobileNumber}</td>
                </tr>
                <tr>
                  <td className="align-middle">Referral:</td>
                  <td className="align-middle">{data.ReferralCode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer fs-5 p- text-danger ">
          If found please return it to company <br />V 11 PRIME MKT. PVT. LTD.
        </div>
      </div>
    </>
  );
};

export default MyIdCardPanel;
