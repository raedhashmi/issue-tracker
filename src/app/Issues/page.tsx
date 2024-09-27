'use client';

import React, { useState } from 'react'
import { Theme, ThemePanel , Text , Button } from '@radix-ui/themes';
import { toast } from 'react-hot-toast';

export default function CreateIssues() {
  const [ issues, setIssues ]:any = useState({});
  const [ description, setDescription ]:any = useState({});
  const addIssues = () => {
    setIssues(...issues, issues);
    setDescription(...description, description);
    localStorage.setItem("issues", issues);
    localStorage.setItem("description", description);
    if(issues && description) {
    toast.success("Issues Created!");
    }
    else{
      toast.error("Please fill out all fields.")
    }
  }
  return (
    <main>
      <div className='m-5'>
        <Text className='text-2xl font-semibold'>Create Issues<br/></Text>
        <form>
          <input className='border-2 rounded-xl p-2 mb-4' onChange={(e) => setIssues(e.target.value)} placeholder="Issue Title *" type="text" />
          <br />
          <input className='border-2 rounded-xl p-2' style={{width: "31%", paddingBottom: "7%"}} onChange={(e) => setDescription(e.target.value)} placeholder='Description *' type="text"/>
          <br />
          <Button color="blue" style={{width: "31%", marginTop: "10px"}} onClick={(e) => {e.preventDefault(); addIssues()}} className='m-5'>Submit</Button>
          <Button color="red" style={{position: "absolute", right: "1%", top: "16%"}} onClick={
            () => {
              if(confirm("Are you sure you want to delete all issues?")){
                localStorage.clear()
                window.location.reload()
              }
              else
                alert("Cancelled")
              }
            }>Delete All</Button>
        </form>
     </div>
    </main>
  )
}

