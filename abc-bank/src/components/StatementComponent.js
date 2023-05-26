import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
function StatementComponent() {
  const [accountStatement, setAccountStatement] = useState([]);
  const accountCollection = collection(db, "accountdetails");
  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getDocs(accountCollection);
        const fetchedData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAccountStatement(fetchedData);
        console.log(accountStatement);
      } catch (error) {
        setAccountStatement([]);
        console.log("Error fetching data:", error);
      }
    };
    getDetails();
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm bg-white ">
          <div className="col-start-1 col-end-7">
            <div className=" text-start font-bold px-8  py-3  border-b border-gray-300 ">
              Transfer Money
            </div>
            <table>
              <thead>
                <tr>
                  <th className=" px-1 sm:px-2  md:px-8 py-3 text-xs font-bold text-left">
                    #
                  </th>
                  <th className=" px-1 sm:px-2  md:px-8 py-3 text-xs font-bold text-left">
                    DATETIME
                  </th>
                  <th className=" px-1 sm:px-2  md:px-8 py-3 text-xs font-bold text-left">
                    AMOUNT
                  </th>
                  <th className=" px-1 sm:px-2  md:px-8 py-3 text-xs font-bold text-left">
                    TYPE
                  </th>
                  <th className=" px-1 sm:px-2  md:px-8 py-3 text-xs font-bold text-left">
                    DETAILS
                  </th>
                  <th className=" px-1 sm:px-2  md:px-8 py-3 text-xs font-bold text-left">
                    BALANCE
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountStatement?.map((items) => {
                  return (
                    <tr key={items.id}>
                      <td className=" px-1 sm:px-2 md:px-8 py-3 text-xs font-bold text-left">
                        {items.id}
                      </td>
                      <td className=" px-1 sm:px-2 md:px-8 py-3 text-xs font-bold text-left">
                        {items.datetime}
                      </td>
                      <td className=" px-1 sm:px-2 md:px-8 py-3 text-xs font-bold text-left">
                        {items.amount}
                      </td>
                      <td className=" px-1 sm:px-2 md:px-8 py-3 text-xs font-bold text-left">
                        {items.type}
                      </td>
                      <td className=" px-1 sm:px-2 md:px-8 py-3 text-xs font-bold text-left">
                        {items.details}
                      </td>
                      <td className=" px-1 sm:px-2 md:px-8 py-3 text-xs font-bold text-left">
                        {items.balance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatementComponent;
