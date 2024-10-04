'use client';

import React, { useEffect, useState } from 'react'
import { Theme, ThemePanel , Text , Button } from '@radix-ui/themes';
import { toast } from 'react-hot-toast';

export default function CreateIssues() {
  let [issue1, setIssue1] = useState<any>();
  let [issue2, setIssue2] = useState<any>();
  let [issue3, setIssue3] = useState<any>();
  let [issue4, setIssue4] = useState<any>();
  let [issue5, setIssue5] = useState<any>();

  let [description1, setDescription1] = useState<any>(null);
  let [description2, setDescription2] = useState<any>(null);
  let [description3, setDescription3] = useState<any>(null);
  let [description4, setDescription4] = useState<any>(null);
  let [description5, setDescription5] = useState<any>(null);

  useEffect(() => {
    setIssue1(document.getElementById("issue1") ?? null);
    setIssue2(document.getElementById("issue2") ?? null);
    setIssue3(document.getElementById("issue3") ?? null);
    setIssue4(document.getElementById("issue4") ?? null);
    setIssue5(document.getElementById("issue5") ?? null);

    setDescription1(document.getElementById("description1") ?? null);
    setDescription2(document.getElementById("description2") ?? null);
    setDescription3(document.getElementById("description3") ?? null);
    setDescription4(document.getElementById("description4") ?? null);
    setDescription5(document.getElementById("description5") ?? null);
  }, [])

  function Submit(e: any) {
    e.preventDefault();
    localStorage.setItem("issue1", issue1?.value.toString());
    localStorage.setItem("issue2", issue2?.value.toString());
    localStorage.setItem("issue3", issue3?.value.toString());
    localStorage.setItem("issue4", issue4?.value.toString());
    localStorage.setItem("issue5", issue5?.value.toString());
    localStorage.setItem("description1", description1?.value.toString());
    localStorage.setItem("description2", description2?.value.toString());
    localStorage.setItem("description3", description3?.value.toString());
    localStorage.setItem("description4", description4?.value.toString());
    localStorage.setItem("description5", description5?.value.toString());

    if (localStorage.getItem("issue1") == "") {
      issue1.toggleAttribute("hidden");
      description1.toggleAttribute("hidden");
      issue2.setAttribute("hidden", true);
      description2.setAttribute("hidden", true);
      issue3.setAttribute("hidden", true);
      description3.setAttribute("hidden", true);
      issue4.setAttribute("hidden", true);
      description4.setAttribute("hidden", true);
      issue5.setAttribute("hidden", true);
      description5.setAttribute("hidden", true);
    }

    if (localStorage.getItem("issue1") != "") {
      issue1.setAttribute("hidden", true);
      description1.setAttribute("hidden", true);
      issue2.toggleAttribute("hidden");
      description2.toggleAttribute("hidden");
      issue3.setAttribute("hidden", true);
      description3.setAttribute("hidden", true);
      issue4.setAttribute("hidden", true);
      description4.setAttribute("hidden", true);
      issue5.setAttribute("hidden", true);
      description5.setAttribute("hidden", true);
    }
  
    if (localStorage.getItem("issue2") != "") {
      issue1.setAttribute("hidden", true);
      description1.setAttribute("hidden", true);
      issue2.setAttribute("hidden", true);
      description2.setAttribute("hidden", true);
      issue3.toggleAttribute("hidden");
      description3.toggleAttribute("hidden");
      issue4.setAttribute("hidden", true);
      description4.setAttribute("hidden", true);
      issue5.setAttribute("hidden", true);
      description5.setAttribute("hidden", true);
    }
  
    if (localStorage.getItem("issue3") != "") {
      issue1.setAttribute("hidden", true);
      description1.setAttribute("hidden", true);
      issue2.setAttribute("hidden", true);
      description2.setAttribute("hidden", true);
      issue3.setAttribute("hidden", true);
      description3.setAttribute("hidden", true);
      issue4.toggleAttribute("hidden");
      description4.toggleAttribute("hidden");
      issue5.setAttribute("hidden", true);
      description5.setAttribute("hidden", true);
    }
  
    if (localStorage.getItem("issue4") != "") {
      issue1.setAttribute("hidden", true);
      description1.setAttribute("hidden", true);
      issue2.setAttribute("hidden", true);
      description2.setAttribute("hidden", true);
      issue3.setAttribute("hidden", true);
      description3.setAttribute("hidden", true);
      issue4.setAttribute("hidden", true);
      description4.setAttribute("hidden", true);
      issue5.toggleAttribute("hidden");
      description5.toggleAttribute("hidden");
    }
    toast.success("Issue Created!");
  }
  return (
    <main>
      <div className='m-5'>
        <Text className='text-2xl font-semibold'>Create Issues<br/></Text>
        <form onSubmit={Submit}>
          <input className='border-2 rounded-xl p-2 mb-4' id='issue1' placeholder="Issue 1 Title *" type="text" />
          <input className='border-2 rounded-xl p-2 mb-4' hidden id='issue2' placeholder="Issue 2 Title *" type="text" />
          <input className='border-2 rounded-xl p-2 mb-4' hidden id='issue3' placeholder="Issue 3 Title *" type="text" />
          <input className='border-2 rounded-xl p-2 mb-4' hidden id='issue4' placeholder="Issue 4 Title *" type="text" />
          <input className='border-2 rounded-xl p-2 mb-4' hidden id='issue5' placeholder="Issue 5 Title *" type="text" />
          <br />
          <input className='border-2 rounded-xl p-2' style={{width: "31%", paddingBottom: "7%"}} id="description1" placeholder='Description 1 *' type="text"/>
          <input className='border-2 rounded-xl p-2' style={{width: "31%", paddingBottom: "7%"}} hidden id="description2" placeholder='Description 2 *' type="text"/>
          <input className='border-2 rounded-xl p-2' style={{width: "31%", paddingBottom: "7%"}} hidden id="description3" placeholder='Description 3 *' type="text"/>
          <input className='border-2 rounded-xl p-2' style={{width: "31%", paddingBottom: "7%"}} hidden id="description4" placeholder='Description 4 *' type="text"/>
          <input className='border-2 rounded-xl p-2' style={{width: "31%", paddingBottom: "7%"}} hidden id="description5" placeholder='Description 5 *' type="text"/>
          <br />
          <Button id='submit' color="blue" style={{width: "31%", marginTop: "10px"}} type='submit' className='m-5'>Submit</Button>
          <Button color="red" type='button' style={{position: "absolute", right: "1%", top: "16%"}} onClick={() => {
            document.getElementById("deleteissues")?.toggleAttribute("hidden");
          }}>Delete All</Button>

          {localStorage.getItem("darkMode") == "true" ? (
            <div id='deleteissues' hidden className='z-50 w-screen h-screen' style={{position: "absolute", top: "0", left: "0", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
              <div style={{position: "absolute",  top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`bg-[rgb(18,18,18)] text-white z-50 shadow-slate-600 p-4 m-4 rounded-xl w-auto`}>
                <Text className='text-2xl ml-4 font-bold'>Are you absolutley sure?</Text>
                <br />
                <Text className='text-lg ml-5 text-zinc-600'>Do you want to delete all issues?</Text>
                <br />
                <button type="button" onClick={() => document.getElementById("deleteissues")?.toggleAttribute("hidden")} className='bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Cancel</button>
                <button type="button" onClick={() => {
                  document.getElementById("deleteissues")?.toggleAttribute("hidden");
                  for(let i = 1; i <= 5; i++) {
                    localStorage.setItem(`issue${i}`, "");
                    localStorage.setItem(`description${i}`, "");
                    toast.loading(`Deleting Issue ${i}...`,{duration: 2000});
                  }
                  window.location.reload();
                }} className='bg-red-700 hover:bg-red-600 active:bg-red-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Delete All Issues</button>
              </div>
            </div>
          ) : (
            <div id='deleteissues' hidden className='z-50 w-screen h-screen' style={{position: "absolute", top: "0", left: "0", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
              <div style={{position: "absolute",  top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`bg-white text-black z-50 shadow-slate-600 p-4 m-4 rounded-xl w-auto`}>
                <Text className='text-2xl ml-4 font-bold'>Are you absolutley sure?</Text>
                <br />
                <Text className='text-lg ml-5 text-zinc-600'>Do you want to delete all issues?</Text>
                <br />
                <button type="button" onClick={() => document.getElementById("deleteissues")?.toggleAttribute("hidden")} className='bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Cancel</button>
                <button type="button" onClick={() => {
                  document.getElementById("deleteissues")?.toggleAttribute("hidden");
                  for(let i = 1; i <= 5; i++) {
                    localStorage.removeItem(`issue${i}`);
                    localStorage.removeItem(`description${i}`);
                    toast.loading(`Deleting Issue${i}...`,{duration: 2000});
                  }
                  window.location.reload();
                }} className='bg-red-700 hover:bg-red-600 active:bg-red-500 text-white hover:transition-all rounded-xl m-1 ml-4 p-2 font-medium'>Delete All Issues</button>
              </div>
            </div>
          )}
        </form>
     </div>
    </main>
  )
}


