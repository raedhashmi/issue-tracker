'use client';

import React, { useState } from 'react'
import { Theme, ThemePanel , Text , Button } from '@radix-ui/themes';

export default function CreateIssues() {
  const issues = localStorage.getItem("issues");
  const description = localStorage.getItem("description");
  return (
    <main>
      <div className='m-5'>
      <Text className='text-2xl font-semibold'>Dashboard</Text>
      {issues && description ? (
        <div className='bg-gray-600 rounded-xl mb-2 mt-2 p-2'>
          <h1 className='text-2xl font-medium'>{issues}</h1>
          <h2 className='text-xl'>{description}</h2>
          <Button color="red" onClick={() => {localStorage.clear(); window.location.reload()}}>Delete Issues</Button>
        </div>
      ) : (
        <div className='bg-gray-600 rounded-xl mb-2 mt-2 p-2'>
          <h1 className='text-2xl font-medium'>No Issues</h1>
        </div>
      )}
      </div>
    </main>
  )
}
