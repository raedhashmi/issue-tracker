'use client';

import React, { use, useEffect, useState } from 'react'
import { Theme, ThemePanel , Text , Button} from '@radix-ui/themes';
import * as Switch from '@radix-ui/react-switch';
import { toast, Toaster } from 'react-hot-toast';
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";

export default function Signup() {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [usernamedefaultvalue, setUsernamedefaultvalue] = useState<any>(null);
  const [passworddefautvalue, setPassworddefautvalue] = useState<any>(null);
  const [notificationswitch, setNotificationswitch] = useState<HTMLInputElement | null>(null);
  const [notificationOnOff, setNotificationOnOff] = useState<boolean | undefined>(true); 

  useEffect(() => {
    setUsernamedefaultvalue(localStorage.getItem("username"));
    setPassworddefautvalue(localStorage.getItem("password"));
  }, []);
  return (
    <main>
      <div className='flex flex-row'>
        <div className='bg-[rgb(18,18,18)] z-10 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-54'>
          <button className='bg-blue-700 hover:bg-blue-600 hover:transition-all active:bg-blue-500 rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.toggleAttribute("hidden");
            document.getElementById("notificationpanel")?.setAttribute("hidden", "true");
            document.getElementById("appearancepanel")?.setAttribute("hidden", "true");
            document.getElementById("dangerpanel")?.setAttribute("hidden", "true");
          }}>Account</button>
          <br />
          <button className='bg-blue-700 hover:bg-blue-600 hover:transition-all active:bg-blue-500 rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.setAttribute("hidden", "true");
            document.getElementById("notificationpanel")?.toggleAttribute("hidden");
            document.getElementById("appearancepanel")?.setAttribute("hidden", "true");
            document.getElementById("dangerpanel")?.setAttribute("hidden", "true");
          }}>Notifications</button>
          <br />
          <button className='bg-blue-700 hover:bg-blue-600 hover:transition-all active:bg-blue-500 rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.setAttribute("hidden", "true");
            document.getElementById("notificationpanel")?.setAttribute("hidden", "true");
            document.getElementById("appearancepanel")?.toggleAttribute("hidden");
            document.getElementById("dangerpanel")?.setAttribute("hidden", "true");
          }}>Appearance</button>
          <br />
          <button className='bg-red-600 hover:bg-red-500 hover:transition-all active:bg-red-400 rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.setAttribute("hidden", "true");
            document.getElementById("notificationpanel")?.setAttribute("hidden", "true");
            document.getElementById("appearancepanel")?.setAttribute("hidden", "true");
            document.getElementById("dangerpanel")?.toggleAttribute("hidden");
          }}>Danger Zone</button>

        </div>
      </div>

      <div id='defaultpanel' style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className='bg-[rgb(18,18,18)] z-0 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56'>
        <Text className='text-2xl font-medium'>Click On the Panels on the left side to change settings</Text>
      </div>

      <div id='accountpanel' hidden style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className='bg-[rgb(18,18,18)] z-10 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56'>
        <input type="text" onChange={(e) => setUsername(e.target.value)} className='border-2 rounded-xl p-2 ml-2' placeholder="Username" defaultValue={usernamedefaultvalue} />
        <br />
        <div className='relative'>
          <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className='border-2 rounded-xl p-2 m-2' placeholder="Password" defaultValue={passworddefautvalue}/>
          <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute left-52 top-1/2 -translate-y-1/2'>
            {showPassword ? <IoIosEye className='mb-0'/> : <IoMdEyeOff className='mb-0' /> }
          </button>
        </div>
        <br />
        <Button type='submit' style={{width: "22%", borderRadius: "10px", marginLeft: "1%"}} color='blue' onClick={(e) => {
          e.preventDefault();
          if(username && password) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            toast.success("Updated Sucessfully!")
            window.location.reload();
          }
          else {
            toast.error("Something went wrong!")
          }
        }}>Update</Button>
        <br />
      </div>

      <div id='notificationpanel' hidden style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className='bg-[rgb(18,18,18)] z-10 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56'>
        <label htmlFor="notificationswitch" className='text-2xl'>Notifications</label>
        <Switch.Root id="notificationswitch" onCheckedChange={(e) => {
          setNotificationOnOff(e.valueOf());
          localStorage.setItem("notificationOnOff", e.valueOf().toString());
        }} className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_0_0_2px] ml-4 shadow-black focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-blue-700 outline-none cursor-pointer">
          <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>

        <br />

        <label htmlFor="soundswitch" className='text-2xl'>Sound</label>
        <input
          className={notificationOnOff == false ? "bg-slate-700 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium mix-blend-soft-light cursor-not-allowed" : "bg-blue-700 hover:bg-blue-600 active:bg-blue-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium cursor-pointer"}
          id='soundswitch'
          type="file"
          accept='audio/*'
          onChange={(e) => {
            if(e.target.files && notificationOnOff == false) {
              localStorage.setItem("notificationsound", e.target.files[0].name)
            }
          }}
          disabled={notificationOnOff == false}
        />
      </div>
    </main>
  )
}