import React from 'react'

function CenterMenu() {
  return (
    <div className="menu flex">
      <ul className='flex w-[100%]  justify-between'>
        <li className='mr-[3rem] hover:text-red-500  text-2xl'>Home</li>
        <li className='mr-[3rem] hover:text-red-500 text-2xl'>About</li>
        <li className='mr-[3rem] hover:text-red-500 text-2xl'>Performer</li>
        <li className='mr-[3rem] hover:text-red-500 text-2xl'>Event Shedule</li>
      </ul>
    </div>
  )
}

export default CenterMenu
