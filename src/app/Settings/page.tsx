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
    </main>
  )
}