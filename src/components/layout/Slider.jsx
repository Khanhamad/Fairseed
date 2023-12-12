import React from 'react'
import images from '../../constants/images'

function Slider({sliderText,sliderImg}) {
// firststarr =[]
// scndarr=[]
  return (
  
     <>
        <div className='text-center'>
            <img className='w-[200px] rounded-xl h-[200px]' src={images.Maskgroup2} />
            <p className='pt-3 w-[90%]'>{sliderText}</p>
        </div>

{/* <div className='flex gap-x-2 justify-between items-center'>
{firststarr?.map(item => {
  return <div> <img src={item?.src} alt="" /> <p>guefidwjefh</p> </div>
})}
</div>
<div className='flex gap-x-2 justify-between items-center'>
{scndarr?.map(item => {
  return <div> <img src={item?.src} alt="" /> <p>guefidwjefh</p> </div>
})}
</div> */}

    </>    
      

  )
}

export default Slider
