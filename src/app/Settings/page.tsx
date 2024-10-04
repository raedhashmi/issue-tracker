'use client';

import React, { use, useEffect, useState } from 'react'
import { Theme, ThemePanel , Text , Button} from '@radix-ui/themes';
import * as Switch from '@radix-ui/react-switch';
import { toast, Toaster } from 'react-hot-toast';
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { CgDarkMode } from 'react-icons/cg';
import { Value } from '@radix-ui/themes/src/components/data-list.jsx';

export default function Signup() {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [usernamedefaultvalue, setUsernamedefaultvalue] = useState<any>(null);
  const [passworddefautvalue, setPassworddefautvalue] = useState<any>(null);
  const [notificationOnOff, setNotificationOnOff] = useState<boolean | undefined>(true); 
  const [darkmodeOnOff, setDarkModeOnOff] = useState<any>(true);

  useEffect(() => {
    setUsernamedefaultvalue(localStorage.getItem("username"));
    setPassworddefautvalue(localStorage.getItem("password"));
  }, []);

  const darklight = localStorage.getItem("darkMode") == "true" ? "bg-[rgb(18,18,18)] text-white" : "bg-white text-black";
  localStorage.setItem("darklight", darklight);
  return (
    <main>
      <div className='flex flex-row'>
        <div className={`${darklight} z-10 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-54`}>
          <button className='bg-blue-700 hover:bg-blue-600 hover:transition-all active:bg-blue-500 text-white rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.toggleAttribute("hidden");
            document.getElementById("notificationpanel")?.setAttribute("hidden", "true");
            document.getElementById("appearancepanel")?.setAttribute("hidden", "true");
            document.getElementById("dangerpanel")?.setAttribute("hidden", "true");
          }}>Account</button>
          <br />
          <button className='bg-blue-700 hover:bg-blue-600 hover:transition-all active:bg-blue-500 text-white rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.setAttribute("hidden", "true");
            document.getElementById("notificationpanel")?.toggleAttribute("hidden");
            document.getElementById("appearancepanel")?.setAttribute("hidden", "true");
            document.getElementById("dangerpanel")?.setAttribute("hidden", "true");
          }}>Notifications</button>
          <br />
          <button className='bg-blue-700 hover:bg-blue-600 hover:transition-all active:bg-blue-500 text-white rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.setAttribute("hidden", "true");
            document.getElementById("notificationpanel")?.setAttribute("hidden", "true");
            document.getElementById("appearancepanel")?.toggleAttribute("hidden");
            document.getElementById("dangerpanel")?.setAttribute("hidden", "true");
          }}>Appearance</button>
          <br />
          <button className='bg-red-600 hover:bg-red-500 hover:transition-all active:bg-red-400 text-white rounded-xl p-2 mb-2' onClick={() => {
            document.getElementById("accountpanel")?.setAttribute("hidden", "true");
            document.getElementById("notificationpanel")?.setAttribute("hidden", "true");
            document.getElementById("appearancepanel")?.setAttribute("hidden", "true");
            document.getElementById("dangerpanel")?.toggleAttribute("hidden");
          }}>Danger Zone</button>

        </div>
      </div>

      <div id='defaultpanel' style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className={`${darklight} z-0 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56`}>
        <Text className='text-2xl font-medium'>Click On the Panels on the left side to change settings</Text>
      </div>

      <div id='accountpanel' hidden style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className={`${darklight} z-0 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56`}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} className={`border-2 ${darklight} rounded-xl p-2 ml-2`} placeholder="Username" defaultValue={usernamedefaultvalue} />
        <br />
        <div className='relative'>
          <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className={`border-2 ${darklight} rounded-xl p-2 ml-2`} placeholder="Password" defaultValue={passworddefautvalue}/>
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

      <div id='notificationpanel' hidden style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className={`${darklight} z-0 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56`}>
        <label htmlFor="notificationswitch" className='text-2xl'>Notifications</label>
        <Switch.Root id="notificationswitch"
          onCheckedChange={(e) => {
            setNotificationOnOff(e.valueOf());
            localStorage.setItem("notificationOnOff", e.valueOf().toString());
          }} defaultChecked={localStorage.getItem("notificationOnOff") == "true" ? true : false} className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_0_0_2px] ml-4 shadow-black focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-blue-700 outline-none cursor-pointer">
          <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
        <br />
        <label htmlFor="soundswitch" className='text-2xl'>Sound</label>
        <input className={localStorage.getItem("notificationOnOff") == "false" ? "bg-slate-700 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium mix-blend-soft-light cursor-not-allowed" : "bg-blue-700 hover:bg-blue-600 active:bg-blue-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium cursor-pointer"}
          id='soundswitch'
          type="file"
          accept='audio/*'
          onChange={(e) => {
            if(e.target.files && localStorage.getItem("notificationOnOff") == "true") {
              localStorage.setItem("notificationSound", e?.target.files[0].name)
            }
          }} disabled={localStorage.getItem("notificationOnOff") == "false" ? true : false} />
      </div>

      <div id='appearancepanel' hidden style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className={`${darklight} z-0 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56`}>
      <label htmlFor="darkmodeswitch" className='text-2xl'><CgDarkMode />Dark Mode</label>
        <Switch.Root id='darkmodeswitch'
        onCheckedChange={
          (e) => {
            setDarkModeOnOff(e.valueOf());
            localStorage.setItem("darkMode", e.valueOf().toString());
          }
        }
        defaultChecked={localStorage.getItem("darkMode") == "true" ? true : false} className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_0_0_2px] ml-4 shadow-black focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-blue-700 outline-none cursor-pointer">
          <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
        <br />
        <button className='bg-blue-700 hover:bg-blue-600 active:bg-blue-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium' onClick={() => window.location.reload()}>Change Appearance</button>
      </div>

      <div id='dangerpanel' hidden style={{position: "absolute", top: "36%", left: "54.5%", transform: "translate(-50%, -50%)"}} className={`${darklight} z-0 shadow-slate-600 shadow-[0px_0px_20px_3px] p-4 m-4 rounded-xl w-[80vw] h-56`}>
        <button className='bg-red-700 hover:bg-red-600 active:bg-red-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium' onClick={() => {
          document.getElementById("deleteaccountpopup")?.toggleAttribute("hidden");
        }}>Delete Account</button>
        <br />
        <button className='bg-red-700 hover:bg-red-600 active:bg-red-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium' onClick={() => {
          document.getElementById("deleteallissuespopup")?.toggleAttribute("hidden");
        }}>Delete All Issues</button>
        <br />
        <button className='bg-yellow-700 hover:bg-yellow-600 active:bg-yellow-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium' onClick={() => {
          localStorage.setItem("issues", "");
          localStorage.setItem("description", "");
          localStorage.setItem("notificationOnOff", "true");
          localStorage.setItem("notificationSound", "");
          localStorage.setItem("darkMode", "true");
          window.location.reload();
        }}>Reset All Settings to Default</button>
        <br />
        <Text className='text-lg ml-5 text-zinc-600'>* These action CANNOT be undone.</Text>
        <br />
      </div>
        
      <div id='deleteallissuespopup' hidden className='z-50 w-screen h-screen' style={{position: "absolute", top: "0", left: "0", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
      <div style={{position: "absolute",  top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`${darklight} z-50 shadow-slate-600 p-4 m-4 rounded-xl w-auto`}>
          <Text className='text-2xl ml-4 font-bold'>Are you absolutley sure?</Text>
          <br />
          <Text className='text-lg ml-5 text-zinc-600'>Do you want to delete all issues?</Text>
          <br />
          <button onClick={() => document.getElementById("deleteallissuespopup")?.toggleAttribute("hidden")} className='bg-gray-700 hover:bg-gray-600 active:bg-gray-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Cancel</button>
          <button onClick={() => {
            document.getElementById("deleteallissuespopup")?.toggleAttribute("hidden");
            localStorage.removeItem("issues");
            localStorage.removeItem("description");
            window.location.reload();
          }} className='bg-red-700 hover:bg-red-600 active:bg-red-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Delete All Issues</button>
        </div>
      </div>

      <div id='deleteaccountpopup' hidden className='z-50 w-screen h-screen' style={{position: "absolute", top: "0", left: "0", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <div style={{position: "absolute",  top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`${darklight} z-50 shadow-slate-600 p-4 m-4 rounded-xl w-auto`}>
          <Text className='text-2xl ml-4 font-bold'>Are you absolutley sure?</Text>
          <br />
          <Text className='text-lg ml-5 text-zinc-600'>Are you sure you want to delete your account?</Text>
          <br />
          <button onClick={() => document.getElementById("deleteaccountpopup")?.toggleAttribute("hidden")} className='bg-gray-700 hover:bg-gray-600 active:bg-gray-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Cancel</button>
          <button onClick={() => {document.getElementById("deleteaccountpopup")?.toggleAttribute("hidden");
            localStorage.clear();
            toast.loading("Deleting account...", {duration: 2000});
            window.location.reload()
            window.location.href = "http://localhost:3000/Dashboard";
          }} className='bg-red-700 hover:bg-red-600 active:bg-red-500 hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Yes, delete account</button>
        </div>
      </div>
    </main>
  )
}