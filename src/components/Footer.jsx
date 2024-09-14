import React from 'react'
import CenterMenu from './CenterMenu'
import {Facebook, Twitter, YouTube, LinkedIn} from '@mui/icons-material'
function Footer() {
  return (
      <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[30rem] pt-[13rem] pb-[13rem]    mt-[-10rem] relative z-[-1]"> 
        <CenterMenu/>
        {/* socials icons */}
        <div className="flex w-[100%] justify-center mt-14">
            <div className="facebook  rounded-full border-2 border-white p-2 mr-[5rem]">
                <Facebook/>
            </div>{" "}
            <div className="facebook rounded-full border-2 border-white p-2 mr-[5rem]">
                <Twitter/>
            </div>{" "}
            <div className="facebook  rounded-full border-2 border-white p-2 mr-[5rem]">
                <YouTube/>
            </div>{" "}
            <div className="facebook  rounded-full border-2 border-white p-2 mr-[5rem]">
                <LinkedIn/>
            </div>
        </div>
        {/* detail */}
         <span className=' text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]'>
         ©AB MUSIC 2024, All Rights Reserved || Biswajit Sarkar
         </span>
      </div>
  )
}

export default Footer
