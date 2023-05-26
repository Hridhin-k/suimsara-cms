import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignupComponent() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageFlag, setMessageFlag] = useState(false);
  const Navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        //signup successful
        setMessage("user registerd succesfully");
        setMessageFlag(true);
        setTimeout(() => {
          Navigate("/");
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
        setMessageFlag(false);
        // ..
      });
    setUserEmail("");
    setUserPassword("");
  };
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <div>
            <h1 className="text-3xl font-semibold text-start text-slate-700 ">
              Create new account
            </h1>
            <form className="mt-6" onSubmit={onSubmit}>
              <div className="mb-2">
                <label
                  type="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  placeholder="Enter email"
                  required
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  type="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  placeholder="Enter password"
                  required
                  value={userPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <input className="m-1" type="checkbox" />
                  Agree the{" "}
                  <span className="text-blue-500">terms and polocy</span>
                </div>
                <p
                  className={`${
                    messageFlag ? "text-green-500" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-8 text-sm     font-light text-center text-gray-700">
              Already have an account?
              <p
                onClick={() => {
                  Navigate("/");
                }}
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
