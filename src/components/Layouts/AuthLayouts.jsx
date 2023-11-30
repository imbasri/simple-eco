import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-sm mx-auto border p-5 rounded shadow-md'>
        <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
        <p className='my-5 block text-slate-600 text-base'>Welcome, Please your details.</p>
        {children}
        <p className='my-5 text-center'>
          {type === "Login" ? "Don't have an account?" : "Already have an account?"}
          {type === "Login" ? (
            <Link to='/register' className='ml-1 text-blue-600 font-bold hover:underline'>
              Sign Up
            </Link>
          ) : (
            <Link to='/login' className='ml-1 text-blue-600 font-bold hover:underline'>
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
