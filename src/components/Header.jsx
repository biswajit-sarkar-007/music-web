import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
  return (
     <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.5rem]
     text-[0.8rem]">
      {/* logo
       { <img src=" https://img.freepik.com/premium-vector/m-logo-design_709632-14.jpg "  alt="" srcset="" className='w-[42px] h-[42px] bg-inherit' /> }  */}
       {/* sidemenu */}
      <CenterMenu/>
      {/* buttons */}
      <div className="buttons flex ">
        <button className='border-[2px] rounder-[25px] border-[#232A4E] px-[25px] py-[7px]  mr-[35px]  hover:bg-[#232A4E] '>Sign Up</button>
        <button className='border-[2px] rounder-[25px] border-[#232A4E] px-[25px] py-[7px]  hover:bg-[#232A4E] '>Log In</button>
      </div>
     </div>
  )
}

export default Header
