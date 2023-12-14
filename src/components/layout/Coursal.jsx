// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
let slides = [
  {
    src: "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    Component: (
      <div className="w-[100%]">
        <h1 className="w-[799px]  h-[136px] text-white/70 text-[56px] font-extrabold font-['Plus Jakarta Sans'] ">
          Help rebuild earthquake hit schools in Morocco!
        </h1>
        <p className="w-[699px] text-gray-500 text-[24px] font-normal font-['Encode Sans'] leading-8">
          Schools in Morocco are damaged severely with the recent earthquake.
          Help us rebuilt schools and get children back to School
        </p>
        <button className="px-3 cursor-pointer py-2 mt-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <a className=" text-white text-xl font-black font-['Satoshi Variable'] leading-9">
            Donate for the cause
          </a>
        </button>
      </div>
    ),
  },
];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div>
          {slides.map((s) => {
            return (
              <div className="flex w-[100%]  justify-center relative h-full">
                <img src={s?.src} />

                <div className="w-[45%] absolute top-[22rem] left-[4rem] ml-6 ">{s.Component}</div>
                <div className="w-[55%]"></div>
              </div>
            );
            // return <S />;
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          {slides.map((s) => {
            return (
              <div className="flex w-[100%] justify-center relative h-full">
                <img src={s?.src} />

                <div className="w-[45%] absolute top-[22rem] left-[4rem]  ml-6 ">{s.Component}</div>
                <div className="w-[55%]"></div>
              </div>
            );
            // return <S />;
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          {slides.map((s) => {
            return (
              <div className="flex w-[100%] justify-center relative h-full">
                <img src={s?.src} />

                <div className="w-[45%] absolute top-[22rem] left-[4rem]  ml-6 ">{s.Component}</div>
                <div className="w-[55%]"></div>
              </div>
            );
            // return <S />;
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          {slides.map((s) => {
            return (
              <div className="flex w-[100%] justify-center relative h-full">
                <img src={s?.src} />

                <div className="w-[45%] absolute top-[22rem] left-[4rem]  ml-6 ">{s.Component}</div>
                <div className="w-[55%]"></div>
              </div>
            );
            // return <S />;
          })}
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
