import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
function HomeComponent() {
  const [accountUser, setAccountUser] = useState([]);
  const accountCollection = collection(db, "accountdetails");
  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getDocs(accountCollection);
        const fetchedData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAccountUser(fetchedData);
        console.log(accountUser);
      } catch (error) {
        setAccountUser([]);
        console.log("Error fetching data:", error);
      }
    };
    getDetails();
  }, []);

  return (
    <>
      <div className="flex justify-center mx-2 md:mx-0">
        <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm bg-white">
          <div className=" border-b border-gray-300">
            <div className=" text-start font-bold px-8  py-3  ">
              Welcome john
            </div>
          </div>

          <div className=" py-3 flex border-b border-gray-300">
            <div className="w-40 pl-8 ">YOUR ID</div>
            <div className="font-bold">{accountUser[0]?.owner}</div>
          </div>
          <div className="py-3 flex ">
            <div className="w-40 pl-8">YOUR BALANCE</div>
            <div className="font-bold">{accountUser[0]?.balance} INR</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
