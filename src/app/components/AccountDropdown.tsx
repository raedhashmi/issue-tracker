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
    if(loggedIn == "false" || loggedIn == null) {
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
            <button onClick={() => {document.getElementById("dropdownmenu")?.toggleAttribute("hidden")}} style={{position: "relative", left: "1169%"}}  className='m-5 text-4xl float-end  hover:transition-all hover:-translate-y-1'><RxAvatar id='avatar'/></button>
            {localStorage.getItem("darkMode") == "true" ? (
            <>
                <div style={{position: "absolute", right: "1%", top: "10%"}} id='dropdownmenu' hidden className={`bg-[rgb(18,18,18)] z-50 shadow-slate-600 shadow-[0px_0px_20px_3px] rounded-xl mb-2 mt-2 p-4`}>
                    <Text className='text-2xl font-medium text-white'>Hi, { username} <button onClick={() => {document.getElementById("dropdownmenu")?.toggleAttribute("hidden");}} className='font-bold text-3xl hover:transition-all ml-4 float-end hover:-translate-y-1'>X</button></Text>
                    <br />
                    <button className={`bg-blue-700 hover:bg-blue-600 text hover:transition-all rounded-xl m-1 p-2 font-medium`} onClick={() => window.location.href = "/Settings"}>Settings</button>
                    <button className={`bg-red-700 hover:bg-red-600 text hover:transition-all rounded-xl m-1 p-2 font-medium`} onClick={() => {
                        document.getElementById("deleteaccountsettingspopup")?.toggleAttribute("hidden");
                    }}>Delete Account</button>
                </div>

                <div id='deleteaccountsettingspopup' hidden className='z-50 w-screen h-screen' style={{position: "absolute", top: "0", left: "0", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                    <div style={{position: "absolute",  top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`bg-[rgb(18,18,18)] text-white z-50 shadow-slate-600 p-4 m-4 rounded-xl w-auto`}>
                        <Text className='text-2xl ml-4 font-bold'>Are you absolutley sure?</Text>
                        <br />
                        <Text className='text-lg ml-5 text-zinc-600'>Are you sure you want to delete your account?</Text>
                        <br />
                        <button onClick={() => document.getElementById("deleteaccountsettingspopup")?.toggleAttribute("hidden")} className='bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Cancel</button>
                        <button onClick={() => {document.getElementById("deleteaccountsettingspopup")?.toggleAttribute("hidden");
                            localStorage.clear();
                            localStorage.setItem("username", "");
                            localStorage.setItem("password", "");
                            localStorage.setItem("darkMode", "true");
                            localStorage.setItem("loggedIn", "false");
                            for(let i = 0; i <= 5; i++) {
                                localStorage.setItem( `issue${i}`, "");
                            }
                            toast.loading("Deleting account...", {duration: 2000});
                            window.location.reload()
                            window.location.href = "http://localhost:3000/Dashboard";
                        }} className='bg-red-700 hover:bg-red-600 active:bg-red-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Yes, delete account</button>
                    </div>
                </div>
            </>
            ) : (
            <>
                <div style={{position: "absolute", right: "1%", top: "10%"}} id='dropdownmenu' hidden className={`bg-white z-50 shadow-slate-600 shadow-[0px_0px_20px_3px] rounded-xl mb-2 mt-2 p-4`}>
                <Text className='text-2xl font-medium text-black'>Hi, { username} <button onClick={() => {document.getElementById("dropdownmenu")?.toggleAttribute("hidden");}} className='font-bold text-3xl hover:transition-all ml-4 float-end hover:-translate-y-1'>X</button></Text>
                <br />
                <button className={`bg-blue-700 hover:bg-blue-600 text-white hover:transition-all rounded-xl m-1 p-2 font-medium`} onClick={() => window.location.href = "/Settings"}>Settings</button>
                <button className={`bg-red-700 hover:bg-red-600 text-white hover:transition-all rounded-xl m-1 p-2 font-medium`} onClick={() => {
                    document.getElementById("deleteaccountsettingspopup")?.toggleAttribute("hidden");
                }}>Delete Account</button>
                </div>

                <div id='deleteaccountsettingspopup' hidden className='z-50 w-screen h-screen' style={{position: "absolute", top: "0", left: "0", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                <div style={{position: "absolute",  top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`bg-white text-black z-50 shadow-slate-600 p-4 m-4 rounded-xl w-auto`}>
                    <Text className='text-2xl ml-4 font-bold'>Are you absolutley sure?</Text>
                    <br />
                    <Text className='text-lg ml-5 text-zinc-600'>Are you sure you want to delete your account?</Text>
                    <br />
                    <button onClick={() => document.getElementById("deleteaccountsettingspopup")?.toggleAttribute("hidden")} className='bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Cancel</button>
                    <button onClick={() => {document.getElementById("deleteaccountsettingspopup")?.toggleAttribute("hidden");
                        localStorage.clear();
                        localStorage.setItem("username", "");
                        localStorage.setItem("password", "");
                        localStorage.setItem("darkMode", "true");
                        localStorage.setItem("loggedIn", "false");
                        for(let i = 0; i <= 5; i++) {
                            localStorage.setItem( `issue${i}`, "");
                        }
                        toast.loading("Deleting account...", {duration: 2000});
                        window.location.reload()
                        window.location.href = "http://localhost:3000/Dashboard";
                    }} className='bg-red-700 hover:bg-red-600 active:bg-red-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Yes, delete account</button>
                </div>
                </div>
            </>
            )} 
        </main>
    )}
}