import React, { useState } from "react";

function TransferComponent() {
  const [transferEmail, setTransferEmail] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center  mx-2 md:mx-0">
        <div className="w-[650px]  border border-gray-300 mt-14 shadow-lg text-slate-600 font-sans rounded-sm  bg-white">
          <div className=" text-start font-bold px-8  py-3  border-b border-gray-300 ">
            Statement of the account
          </div>
          <form onSubmit={onSubmit}>
            <label
              type="text"
              className="block text-sm font-semibold text-gray-800 px-8  mt-6"
            >
              Email address
            </label>
            <div className="px-8">
              <input
                type="email"
                required
                value={transferEmail}
                onChange={(e) => {
                  setTransferEmail(e.target.value);
                }}
                placeholder="Enter email"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <label
              type="text"
              className="block text-sm font-semibold text-gray-800 px-8  mt-6"
            >
              Amount
            </label>
            <div className="px-8">
              <input
                type="number"
                required
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="Enter amount "
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="my-6 px-8">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Transfer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TransferComponent;
