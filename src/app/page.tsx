'use client';

import React, { useState } from 'react'
import { Theme, ThemePanel , Text , Button } from '@radix-ui/themes';

export default function Home() {
  localStorage.setItem("loggedIn", "false");
  return (
    <main>
        <div className='m-5'>
          <Text className='text-2xl'>Whats On Your Mind?<br/></Text>
          <Button color="blue" onClick={() => window.location.href = "/Issues"}>Create Issues</Button>
          <br/>
          <Button color="red" onClick={() => window.location.href = "/Dashboard"}>View Issues</Button>
          <br/>
          <Button color="red" onClick={() => window.location.href = "/Dashboard"}>Delete Issues</Button>
          <br/>
        </div>
    </main>
  )
}
