import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden  relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex  text-black/50 px-10 text-3xl">
        <button className='bg-white/30 pl-1 w-10 h-10 rounded-full' onClick={previousSlide}>
        <FaChevronLeft />
        </button>
        <button className='bg-white/30 pl-1.5 w-10 h-10 rounded-full'  onClick={nextSlide}>
        <FaChevronRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer  ${
                i == current ? "bg-red-400" : "bg-red-100"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
