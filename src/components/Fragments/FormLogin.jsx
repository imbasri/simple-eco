import React, { useEffect, useRef } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location = "/products";
  };
  const emailRef = useRef(null)
  useEffect(()=>{
    emailRef.current.focus()
  },[])
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="*******"
        type="password"
      />
      <Button variant="bg-blue-600" hover="hover:bg-blue-800" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
