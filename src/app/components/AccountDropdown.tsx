'use client';

import { Button, Theme, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast, { ToastBar } from 'react-hot-toast';
import { RxAvatar } from "react-icons/rx";

export default function AccountDropdown() {
    const [username, setUsername] = useState<any>(null)
    const [loggedIn, setLoggedIn] = useState<any>(null)
    useEffect(() => {
        setUsername(localStorage.getItem("username"))
        setLoggedIn(localStorage.getItem("loggedIn"))
    })
    if(loggedIn == 'false') {
        return (
            <main>
                <Link href="/Signup" style={{position: "relative", left: "354%"}} className="m-5 font-medium float-end text-lg hover:transition-all hover:-translate-y-1">Sign Up</Link>
                <Link href="/Login" style={{position: "relative", left: "455%"}}  className="m-5 font-medium float-end text-lg hover:transition-all hover:-translate-y-1">Login</Link>
            </main>
        )
    }
    else {
        return (
        <main>
            <Theme>
                <button onClick={() => {document.getElementById("dropdownmenu")?.toggleAttribute("hidden")}} style={{position: "relative", left: "1169%"}}  className='m-5 text-4xl float-end  hover:transition-all hover:-translate-y-1'><RxAvatar id='avatar' aria-hidden="true"/></button>
                <div style={{position: "absolute", right: "1%", top: "10%"}} id='dropdownmenu' hidden className='bg-[rgb(18,18,18)] z-50 shadow-slate-600 shadow-[0px_0px_20px_3px] rounded-xl mb-2 mt-2 p-4'>
                <Text className='text-2xl font-medium'>Hi, {username}  <button onClick={() => {document.getElementById("dropdownmenu")?.toggleAttribute("hidden");}} className='font-bold text-3xl hover:transition-all ml-4 float-end hover:-translate-y-1'>X</button></Text>
                <br />
                <button className='bg-blue-700 hover:bg-blue-600 hover:transition-all rounded-xl m-1 p-2 font-medium' onClick={() => window.location.href = "/Settings"}>Settings</button>
                <button className='bg-red-700 hover:bg-red-600 hover:transition-all rounded-xl m-1 p-2 font-medium' onClick={() => {
                    if(confirm("Are you sure you want to delete your account?")) {
                        localStorage.clear()
                        toast.loading("Deleting account...",{duration: 3000})
                        window.location.href = "./"
                    }
                    else {
                        toast.error("Account deletion cancelled")
                        document.getElementById("dropdownmenu")?.toggleAttribute("hidden")
                    }
                    }}>Delete Account</button>
                </div>
            </Theme> 
        </main>
  )}
}