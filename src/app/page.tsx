'use client';

import React, { useState } from 'react'
import { Theme, ThemePanel , Text , Button } from '@radix-ui/themes';

export default function Home() {
  localStorage.setItem("loggedIn", "false");
  return (
    <main>
        <div className='m-5'>
          <Text className='text-2xl'>Whats On Your Mind?<br/></Text>
          <Button color="blue" onClick={() => {document.querySelector("input")?.toggleAttribute("hidden")}}>Create Issues</Button>
          <br/>
          <Button color="red">View Issues</Button>
          <br/>
          <Button color="red">Delete Issues</Button>
          <br/>
        </div>
    </main>
  )
}
