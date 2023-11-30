import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action=''>
            <InputForm label='Fullname' name='fullname' placeholder='insert your name...' type='text' />
            <InputForm label='Email' name='email' placeholder='example@gmail.com' type='email' />
            <InputForm label='Password' name='password' placeholder='*******' type='password' />
            <InputForm label='Confirm Password' name='confirmPassword' placeholder='*******' type='password' />
            <Button type='submit' variant='bg-blue-600' hover='hover:bg-blue-800'>
                Register
            </Button>
        </form>
    );
};

export default FormRegister;
