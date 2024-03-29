import React, { useEffect, useState } from "react";
import fb from "../Database/firebaseconfig";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const db = fb.db;
const AllDownlinePanel = () => {
  const [data, setData] = useState([]);
  const [querySnapshots, setQuerySnapshots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "login", localStorage.getItem("email"));
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchQuerySnapshots = async () => {
      if (data && data.Refers) {
        const queries = data.Refers.map((element) =>
          query(collection(db, "login"), where("AadharNo", "==", element))
        );
        const querySnapshot = await Promise.all(queries.map((q) => getDocs(q)));
        setQuerySnapshots(
          querySnapshot.map((snapshot) =>
            snapshot.docs.map((doc) => doc.data())
          )
        );
      }
    };
    fetchQuerySnapshots();
  }, [data]);
  return (
    <>
      <table className="table  bg-white" style={{ fontSize: "15px" }}>
        <thead>
          <tr className="fs-">
            <th scope="col">S.No</th>
            <th scope="col">Distributor Name</th>
            <th scope="col">Distributor Contact</th>
            <th scope="col">DOB</th>
            <th scope="col">Rank</th>
            <th scope="col">Upline Name</th>
            <th scope="col">Reference Code</th>
            <th scope="col">Total</th>
            <th scope="col">Total(With Tax)</th>
          </tr>
        </thead>
        {querySnapshots.length !== 0 && (
          <tbody>
            {querySnapshots.map((snapshot, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{snapshot[0].DistributorName}</td>
                <td>{snapshot[0].MobileNumber}</td>
                <td>{snapshot[0].DOB}</td>
                <td>Undefined</td>
                <td>Admin User</td>
                <td>{snapshot[0].ReferralCode}</td>
                <td className="text-center">0.00/-</td>
                <td className="text-center">0.00/-</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};
export default AllDownlinePanel;
