'use client';

import React, { useEffect, useState } from 'react'
import { Theme, ThemePanel , Text , Button } from '@radix-ui/themes';
import { GiLabCoat } from 'react-icons/gi';

export default function CreateIssues() {
  const issue1 = localStorage.getItem("issue1");
  const issue2 = localStorage.getItem("issue2");
  const issue3 = localStorage.getItem("issue3");
  const issue4 = localStorage.getItem("issue4");
  const issue5 = localStorage.getItem("issue5");

  const description1 = localStorage.getItem("description1");
  const description2 = localStorage.getItem("description2");
  const description3 = localStorage.getItem("description3");
  const description4 = localStorage.getItem("description4");
  const description5 = localStorage.getItem("description5");

  console.log(issue2);
  return (
    <main>
      <div className='m-5'>
        <Text className='text-2xl font-semibold'>Dashboard</Text>

          <div className='bg-gray-600 rounded-xl mb-2 mt-2 p-2' hidden={issue1 == "" && issue2 == "" && issue3 == "" && issue4 == "" && issue5 == "" ? false : true}>
            <Text className='text-2xl font-medium'>No issues</Text>
          </div> 

          <div hidden={localStorage.getItem("issue1") == "" ? true : false} className='bg-gray-600 rounded-xl mb-2 mt-2 p-2'>
            <h1 className='text-2xl font-medium'>{issue1}</h1>
            <h2 className='text-xl'>{description1}</h2>
            <Button color="red" onClick={() => {
              localStorage.removeItem(`issue1`);
              localStorage.removeItem(`description1`);
              window.location.reload();
            }}>Delete Issue</Button>
          </div>
          
          <div hidden={localStorage.getItem("issue2") == "" ? true : false} className='bg-gray-600 rounded-xl mb-2 mt-2 p-2'>
            <h1 className='text-2xl font-medium'>{issue2}</h1>
            <h2 className='text-xl'>{description2}</h2>
            <Button color="red" onClick={() => {
              localStorage.removeItem(`issue2`);
              localStorage.removeItem(`description2`);
              window.location.reload();
            }}>Delete Issue</Button>
          </div>
          
          <div hidden={localStorage.getItem("issue3") == "" ? true : false} className='bg-gray-600 rounded-xl mb-2 mt-2 p-2'>
            <h1 className='text-2xl font-medium'>{issue3}</h1>
            <h2 className='text-xl'>{description3}</h2>
            <Button color="red" onClick={() => {
              localStorage.removeItem(`issue3`);
              localStorage.removeItem(`description3`);
              window.location.reload();
            }}>Delete Issue</Button>
          </div>

          <div hidden={localStorage.getItem("issue4") == "" ? true : false} className='bg-gray-600 rounded-xl mb-2 mt-2 p-2'>
            <h1 className='text-2xl font-medium'>{issue4}</h1>
            <h2 className='text-xl'>{description4}</h2>
            <Button color="red" onClick={() => {
              localStorage.removeItem(`issue4`);
              localStorage.removeItem(`description4`);
              window.location.reload();
            }}>Delete Issue</Button>
          </div>

          <div hidden={localStorage.getItem("issue5") == "" ? true : false} className='bg-gray-600 rounded-xl mb-2 mt-2 p-2'>
            <h1 className='text-2xl font-medium'>{issue5}</h1>
            <h2 className='text-xl'>{description5}</h2>
            <Button color="red" onClick={() => {
              localStorage.removeItem(`issue5`);
              localStorage.removeItem(`description5`);
              window.location.reload();
            }}>Delete Issue</Button>
          </div>
      </div>
    </main>
  )
}

