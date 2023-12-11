import React from 'react'
import images from '../../constants/images'

function Slider({sliderText,sliderImg}) {
  return (
  
     <>
        <div className='text-center'>
            <img className='w-[200px] rounded-xl h-[200px]' src={images.Maskgroup2} />
            <p className='pt-3 w-[90%]'>{sliderText}</p>
        </div>

    </>    
      

  )
}

export default Slider
