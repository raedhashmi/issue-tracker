'use client';

import React, { useState } from 'react'
import { Theme, ThemePanel , Text , Button, AlertDialog } from '@radix-ui/themes';
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { toast } from 'react-hot-toast';

export default function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const username = document.getElementById("username") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;
  return (
    <main>
      <form style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`bg-[${localStorage.getItem("darkMode") == "true" ? "bg-white" : "bg-[rgb(18,18,18)]"}] shadow-slate-600 text-center items-center shadow-[0px_0px_20px_3px] rounded-xl mb-2 mt-2 p-4`}>
        <Text className='text-2xl font-medium'>Login</Text>
        <br />
        <input id='username' type="text" className={`bg-[${localStorage.getItem("darkMode") == "true" ? "bg-white" : "bg-[rgb(18,18,18)]"}] border-2 rounded-xl p-2 m-2`} placeholder="Username" />
        <br />
        <div className='relative'>
          <input id='password' type={showPassword ? "text" : "password"} className={`bg-[${localStorage.getItem("darkMode") == "true" ? "bg-white" : "bg-[rgb(18,18,18)]"}] border-2 rounded-xl p-2 m-2`} placeholder="Password" />
          <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 transform -translate-y-1/2'>
            {showPassword ? <IoIosEye /> : <IoMdEyeOff /> }
          </button>
        </div>
        <br />
        <Button type='submit' onClick={(e) => {
          e.preventDefault();
          if(username?.value == localStorage.getItem("username") && password?.value == localStorage.getItem("password")) {
            toast.success("Login Succesful!")
            localStorage.setItem("loggedIn", "true");
            window.location.href = "/Issues";
          }
          else {
            toast.error("Inccorrect Crendentials")
            localStorage.setItem("loggedIn", "false");
          }
        }} style={{width: "92%", borderRadius: "10px", marginTop: "8px"}} color='blue'>Log In</Button>
      </form>
    </main>
  )
}
