import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action=''>
            <InputForm label='Email' name='email' placeholder='example@gmail.com' type='email' />
            <InputForm label='Password' name='password' placeholder='*******' type='password' />
            <Button type='submit' variant='bg-blue-600' hover='hover:bg-blue-800'>
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
