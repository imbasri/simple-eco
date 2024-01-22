import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log({ isDarkMode, setIsDarkMode });
  return (
    <div
      className={`flex justify-center items-center min-h-screen ${isDarkMode && "bg-slate-900"}`}
    >
      <div className="w-full max-w-sm mx-auto border p-5 rounded shadow-md">
        <button
          className="top-2 py-2 px-6 bg-blue-600 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="my-5 block text-slate-600 text-base">
          Welcome, Please your details.
        </p>
        {children}
        <p className="my-5 text-center">
          {type === "Login"
            ? "Don't have an account?"
            : "Already have an account?"}
          {type === "Login" ? (
            <Link
              to="/register"
              className="ml-1 text-blue-600 font-bold hover:underline"
            >
              Sign Up
            </Link>
          ) : (
            <Link
              to="/login"
              className="ml-1 text-blue-600 font-bold hover:underline"
            >
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
