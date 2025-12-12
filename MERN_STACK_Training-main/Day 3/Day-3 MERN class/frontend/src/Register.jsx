import React from 'react'
import { useState } from 'react'
import "./styles/register.css";
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")

    const submit =(e)=>{
        e.preventDefault();
        console.log(name,email,password,phone);
    }
    const reset =()=>{
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }
  return (
    <div>
    <form action="">
        <fieldset>
            <h1>Register form</h1>
            <div className='form row'>
            <label htmlFor="name">Name :</label>
            <input type="text" placeholder='Enter name' onChange={(e)=>{
                setName(e.target.value);
            }}></input>
            </div>

            <div className='form row'>
            <label htmlFor="email">Email :</label>
            <input type="email" placeholder='Enter email'onChange={(e)=>{
                setEmail(e.target.value);
            }}></input>
            </div>

            <div className='form row'>
            <label htmlFor="password">Password :</label>
            <input type="password" placeholder='Enter password'onChange={(e)=>{
                setPassword(e.target.value);
            }}></input>
            </div>

            <div className='form row'>
            <label htmlFor="phone">Phone :</label>
            <input type="number" placeholder='Enter phone number'onChange={(e)=>{
                setPhone(e.target.value);
            }}></input>
            </div>
            <button type="submit" onClick={submit}>Register</button>
            <button type="reset" onClick={reset}>Cancel</button>
        </fieldset>
    </form>

    </div>
  )
}

export default Register
