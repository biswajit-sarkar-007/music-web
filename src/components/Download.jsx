import React from 'react'
import DownloadAds from './DownloadAds'

function Download() {
  return (
     <div className="flex  items-start justify-start px-[5rem] bg-[#020917] opacity-0.5 h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
        {/* tild icon or path icon */}
         
         
        {/* heading */}
        <div className="headline mt-7 flex flex-col px-5  text-[2rem]">
        <img src={require("../images/Path 318.png")} alt="" srcset="" className='w-[5rem]' /> 
            <span>Download The Best Music</span>
            <span><b>App Now!</b></span>
            <span className='text-[1rem] text-gray-400   text-center mt-[1rem]'> 
            Download your favorite tracks, albums, and playlists to enjoy anytime,<br />
             anywhere—even without an internet connection. </span>
             <div className="mt-14">
                {/* download ads */}
             <DownloadAds/>
             </div>   
        </div>
        <div className="piv items-end  ">
     <img src="https://images.unsplash.com/photo-1693434998054-2784e49ca563?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwYXBwfGVufDB8fDB8fHww" alt="" srcset=""
     className='h-[480px] w-[1000px] '
     />
    </div>
     </div>
     

   
  )
}

export default Download
