'use client';

import React, { useState } from 'react'
import { Theme, ThemePanel , Text , Button, AlertDialog } from '@radix-ui/themes';
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { toast } from 'react-hot-toast';

export default function Signup() {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <main>
      <form style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`bg-[${localStorage.getItem("darkMode") == "true" ? "bg-white" : "bg-[rgb(18,18,18)]"}] shadow-slate-600 text-center items-center shadow-[0px_0px_20px_3px] rounded-xl mb-2 mt-2 p-4`}>
        <Text className={`text-2xl font-medium`}>Sign Up</Text>
        <br />
        <input type="text" onChange={(e) => setUsername(e.target.value)} className={`bg-[${localStorage.getItem("darkMode") == "true" ? "bg-white" : "bg-[rgb(18,18,18)]"}] border-2 rounded-xl p-2 m-2`} placeholder="Username" />
        <br />
        <div className='relative'>
          <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className={`bg-[${localStorage.getItem("darkMode") == "true" ? "bg-white" : "bg-[rgb(18,18,18)]"}] border-2 rounded-xl p-2 m-2`} placeholder="Password" />
          <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 transform -translate-y-1/2'>
            {showPassword ? <IoIosEye /> : <IoMdEyeOff /> }
          </button>
        </div>
        <br />
        <Button type='submit' onClick={(e) => {
          e.preventDefault();
          if(username && password) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            toast.success("Signed Up!")
            window.location.href = "/Login";
          }
          else {
            toast.error("Please fill out all fields.")
          }
        }} style={{width: "92%", borderRadius: "10px"}} color='blue'>Sign Up</Button>
      </form>
    </main>
  )
}

