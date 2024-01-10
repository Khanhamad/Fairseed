import { Navigation, Pagination,  A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./Carousal.css"
import images from "../../constants/images";
// let slides = [
//   {
//     src: "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
//     Component: (
//       <div className="w-[100%]">
//         <h1 className="w-[799px]  h-[136px] text-white/70 text-[56px] font-extrabold font-['Plus Jakarta Sans'] ">
//           Help rebuild earthquake hit schools in Morocco!
//         </h1>
//         <p className="w-[699px] text-gray-500 text-[24px] font-normal font-['Encode Sans'] leading-8">
//           Schools in Morocco are damaged severely with the recent earthquake.
//           Help us rebuilt schools and get children back to School
//         </p>
//         <button className="px-3 cursor-pointer py-2 mt-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
//           <a className=" text-white text-xl font-black font-['Satoshi'] leading-9">
//             Donate for the cause
//           </a>
//         </button>
//       </div>
//     ),
//   },
// ];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      
    >
      <SwiperSlide>
        <div className="flex lg:flex-row relative w-full h-full md:flex flex-col">
          <div className="w-full md:h-50 lg:h-full lg:w-1/2">
           
          </div>
          <div className="w-full md:h-50 lg:h-full lg:w-1/2 md:right-5 md:w-full md:items-center">
            <img src={images.sliderimg} />
          </div>
          <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full sm:w-full md:w-full md:flex-col" style={{  background:'linear-gradient(to right,    rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 45%,rgba(255, 255, 255, 0.8) 45.01%,  rgba(255, 255, 255, 0.8) 70%,rgba(255, 255, 255, 0) 100%)'}}>
                            <img src={images.HeaderColor} alt="" />
          </div>
          <div className="absolute z-[2]  w-full h-1/2 lg:h-full top-0 left-0 !bottom-[auto] lg:bottom-0 lg:flex lg:flex-row px-10 justify-center md:w-full lg:w-1/2 md:flex md:flex-col md:h-auto">
            
            <div className="h-fit my-auto pt-4"> <p className="text- mb-2 mt-12" style={{ height: 106, color: '#25272C', fontSize: 46, fontFamily: 'Satoshi', fontWeight: '900'}}>
             Help rebuild earthquake hit 
            <p className="text-4xl " style={{ height: 106, color: '#25272C', fontSize: 46, fontFamily: 'Satoshi', fontWeight: '900'}}>
            schools in Morocco! 
            </p></p>
            <p style={{ color: '#8E95A2', fontSize: 24, fontFamily: 'Satoshi', fontWeight: '500',}} className="md:flex md:flex-col mt-5 pt-4">
            Schools in Morocco are damaged severely with the recent earthquake.</p>
            <p style={{ color: '#8E95A2', fontSize: 24, fontFamily: 'Satoshi', fontWeight: '500',}}>
             Help us rebuilt schools and get children back to School.
             </p>
            <button className="p-3 text-white mt-2 font-bold text-xl " style={{ background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)', borderRadius: 8}}>
              Donate for the Cause
            </button></div>
            
             </div>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="flex lg:flex-row flex-col relative w-full h-full md:flex md:flex-col" >
          <div className="w-[100%] sm:w-[100%]">
           
          </div>
          <div className="w-[50%] sm:w-[100%] md:flex md:flex-col">
            <img src={images.sliderimg}/>
          </div>
          <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full sm:w-[100%]" style={{  background:'linear-gradient(to right,    rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 45%,rgba(255, 255, 255, 0.8) 45.01%,  rgba(255, 255, 255, 0.8) 70%,rgba(255, 255, 255, 0) 100%)'}}>
                            <img src={images.HeaderColor} alt=""/>
          </div>
          <div className="absolute z-[2] w-1/2 h-full top-0 left-0 bottom-0 flex flex-col px-10 justify-center">
            
            <div className="h-fit my-auto pt-4"> <p className="text- mb-2 mt-12" style={{ height: 106, color: '#25272C', fontSize: 46, fontFamily: 'Satoshi', fontWeight: '900'}}>
             Help rebuild earthquake hit 
            <p className="text-4xl " style={{ height: 106, color: '#25272C', fontSize: 46, fontFamily: 'Satoshi', fontWeight: '900'}}>
            schools in Morocco! 
            </p></p>
            <p style={{ color: '#8E95A2', fontSize: 24, fontFamily: 'Satoshi', fontWeight: '500',}} className="md:flex md:flex-col mt-5 pt-4">
            Schools in Morocco are damaged severely with the recent earthquake.</p>
            <p style={{ color: '#8E95A2', fontSize: 24, fontFamily: 'Satoshi', fontWeight: '500',}}>
             Help us rebuilt schools and get children back to School.
             </p>
            <button className="p-3 text-white mt-2 font-bold text-xl " style={{ background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)', borderRadius: 8}}>
              Donate for the Cause
            </button></div>
            
             </div>
        </div>
      </SwiperSlide>

      
      <SwiperSlide>
        <div className="flex lg:flex-row flex-col relative w-full h-full md:flex md:flex-col" >
          <div className="w-[100%] sm:w-[100%]">
           
          </div>
          <div className="w-[50%] sm:w-[100%] md:flex md:flex-col">
            <img src={images.sliderimg}/>
          </div>
          <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full sm:w-[100%]" style={{  background:'linear-gradient(to right,    rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 45%,rgba(255, 255, 255, 0.8) 45.01%,  rgba(255, 255, 255, 0.8) 70%,rgba(255, 255, 255, 0) 100%)'}}>
                            <img src={images.HeaderColor} alt=""/>
          </div>
          <div className="absolute z-[2] w-1/2 h-full top-0 left-0 bottom-0 flex flex-col px-10 justify-center">
            
            <div className="h-fit my-auto pt-4"> <p className="text- mb-2 mt-12" style={{ height: 106, color: '#25272C', fontSize: 46, fontFamily: 'Satoshi', fontWeight: '900'}}>
             Help rebuild earthquake hit 
            <p className="text-4xl " style={{ height: 106, color: '#25272C', fontSize: 46, fontFamily: 'Satoshi', fontWeight: '900'}}>
            schools in Morocco! 
            </p></p>
            <p style={{ color: '#8E95A2', fontSize: 24, fontFamily: 'Satoshi', fontWeight: '500',}} className="md:flex md:flex-col mt-5 pt-4">
            Schools in Morocco are damaged severely with the recent earthquake.</p>
            <p style={{ color: '#8E95A2', fontSize: 24, fontFamily: 'Satoshi', fontWeight: '500',}}>
             Help us rebuilt schools and get children back to School.
             </p>
            <button className="p-3 text-white mt-2 font-bold text-xl " style={{ background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)', borderRadius: 8}}>
              Donate for the Cause
            </button></div>
            
             </div>
        </div>
      </SwiperSlide>

                              {/* {Last Slide} */}


                              <SwiperSlide>
  <div className="flex lg:flex-row relative w-full h-full md:flex flex-col">
    <div className="w-full md:h-1/2 lg:h-full lg:w-1/2">
      {/* Image goes here */}
      <img src={images.sliderimg} alt="Slider Image" className="w-full h-full object-cover" />
    </div>
    <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full sm:w-full md:w-full md:flex-col" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 0.8) 45.01%, rgba(255, 255, 255, 0.8) 70%, rgba(255, 255, 255, 0) 100%)' }}>
      {/* Gradient background goes here */}
      <img src={images.HeaderColor} alt="Header Color" className="w-full h-full object-cover" />
    </div>
    <div className="absolute z-[2] w-full h-1/2 lg:h-full top-0 left-0 lg:bottom-0 lg:flex lg:flex-row px-10 justify-center md:w-full lg:w-1/2 md:flex md:flex-col md:h-auto md:mt-25">
      <div className="h-fit my-auto md:pt-4 md:text-center md:mt-5">
        <p className="text-4xl md:text-5xl lg:text-6xl mb-2 md:mt-5" style={{ color: '#25272C', fontFamily: 'Satoshi', fontWeight: '900' }}>
          Help rebuild earthquake-hit schools in Morocco!
        </p>
        <p style={{ color: '#8E95A2', fontSize: 24, fontFamily: 'Satoshi', fontWeight: '500' }} className="md:flex md:flex-col mt-5 pt-4">
          Schools in Morocco are damaged severely with the recent earthquake. Help us rebuild schools and get children back to school.
        </p>
        <button className="p-3 text-white mt-2 font-bold text-xl" style={{ background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)', borderRadius: 8 }}>
          Donate for the Cause
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>


      
    </Swiper>
  );
};