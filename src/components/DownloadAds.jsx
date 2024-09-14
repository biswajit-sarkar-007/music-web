import React from 'react'

function DownloadAds() {
  return (
     <div className="download">
        <div className="download_images flex ">
            <img src={require("../images/App Store.png")} alt="" srcset="" className='border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem] mr-[2rem]' />
            <img src={require("../images/Google Play.png")} alt="" srcset="" className='border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem] '/>
        </div>
     </div>
  )
}

export default DownloadAds
