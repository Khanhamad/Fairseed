import React from 'react'

function Header() {
  return (
    <div className='flex'>
          <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
        <div className="h-[408px] justify-start items-center gap-8 flex">
            <div className="w-[100px] h-[100px] p-[26px] origin-top-left -rotate-180 rounded-[90px] justify-center items-center flex">
                <div className="w-12 h-12 relative flex-col justify-start items-start flex" />
            </div>
            <div className="flex-col justify-start items-start gap-7 inline-flex">
                <div className="w-[815px] px-2 py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 h-[136px] text-zinc-800 text-[56px] font-extrabold font-['Plus Jakarta Sans'] leading-[78.40px]">Help rebuild earthquake hit schools in Morocco!</div>
                </div>
                <div className="w-[815px] px-2 py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-gray-500 text-[28px] font-normal font-['Encode Sans'] leading-9">Schools in Morocco are damaged severely with the recent earthquake. Help us rebuilt schools and get children back to School</div>
                </div>
                <div className="pl-2 flex-col justify-start items-start gap-2.5 flex">
                    <div className="px-7 py-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-2xl font-black font-['Satoshi'] leading-9">Donate for the Cause</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[100px] h-[100px] p-[26px] bg-gradient-to-b from-white to-white rounded-[90px] backdrop-blur-[14px] justify-center items-center flex">
            <div className="w-12 h-12 relative flex-col justify-start items-start flex" />
        </div>  
    </div>
    </div>
  )
}

export default Header
