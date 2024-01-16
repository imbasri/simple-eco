import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.services";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm label='Username' name='username' placeholder='Jhon Doe' type='text' ref={usernameRef} />
      <InputForm label='Password' name='password' placeholder='*******' type='password' />
      <Button variant='bg-blue-600' hover='hover:bg-blue-800' type='submit'>
        Login
      </Button>
    {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
