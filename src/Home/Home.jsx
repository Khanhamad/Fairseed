import React from "react";
import "./Home.css";
import images from "../constants/images";
import icons from "../constants/icons";
import button from "../constants/button";
import Slider from "../components/layout/Slider";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/layout/Card";
import ScrollableTabsButtonForce from "../components/layout/ScrollableTabsButtonAuto";
import Coursal from '../components/layout/Coursal'
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Navbar from "../Navbar/Navbar"


function Home() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 4,
    speed: 1000,
    rows: 2,
    slidesPerRow: 2
  };
  let sliderData = [
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
    {
      sliderText: 'Early Childhood Education',
    },
  ]
  let bnk = [
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
  ];
  let slides = [
    {
      src: "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg", Component:
        <div className="">
          <h1 className="w-[699px] h-[136px] text-zinc-800 text-[46px] font-extrabold" style={{ fontFamily: 'Satoshi Variable' }} >Help rebuild earthquake hit schools in Morocco!</h1>
          <p className="w-[599px] text-gray-500 text-[18px] font-normal leading-9" style={{ fontFamily: 'Satoshi Variable' }}>Schools in Morocco are damaged severely with the recent earthquake. Help us rebuilt schools and get children back to School </p>
          <button className='px-3 cursor-pointer py-2 mt-3 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg justify-center items-center gap-2.5 inline-flex'>
            <p className=" text-white text-xl font-black  leading-9" style={{ fontFamily: 'Satoshi Variable' }}>Donate for the cause</p></button>
        </div>
    },

    // {images: [{name:'',src:'..///'},{name:'',src:'.//'}] }
    // "https://wallpapercave.com/wp/wp3386769.jpg",
    // "https://wallpaperaccess.com/full/809523.jpg",
    // "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full">
        <Coursal slides={slides} />
      </div>


      <div
        className="flex  items-center justify-between px-[80px] flex-wrap h-full"
        style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
      >
        <div className="w-auto  m-5 text-center  h-full" style={{fontFamily:'Satoshi Variable'}}>
          <div
            className=" pl-2 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.HandShake} />
          </div>
          <h1  style={{ fontFamily: 'Satoshi Variable' }} className="text-4xl text-black  font-bold">4</h1>
          <p className="text-black/40 text-[11px]" style={{ fontFamily: 'Satoshi Variable' }}>Causes Raised</p>
        </div>
        <div className="w-auto   text-center  h-full">
          <div
            className=" pl-9 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.HandCoins} />
          </div>
          <h1 className="text-4xl text-black  font-bold" style={{ fontFamily: 'Satoshi Variable' }}>27 Lacs</h1>
          <p className="text-black/40 text-[11px] ]" style={{ fontFamily: 'Satoshi Variable' }}>Funds Raised</p>
        </div>
        <div className="w-auto   text-center  h-full">
          <div
            className=" pl-5 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.UsersThree} />
          </div>
          <h1 className="text-4xl text-black  font-bold" style={{ fontFamily: 'Satoshi Variable' }}>3000+</h1>
          <p className="text-black/40 text-[11px] " style={{ fontFamily: 'Satoshi Variable' }}>Donors</p>
        </div>
        <div className="w-auto    text-center  h-full">
          <div
            className=" pl-7 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.SedalCheck} alt="Seal Cheak" />
          </div>
          <h1 className="text-4xl text-black  font-bold">4</h1>
          <p className="text-black/40 text-[11px] " style={{ fontFamily: 'Satoshi Variable' }}>Successful Campaings</p>
        </div>
        <div className="w-auto   text-center  h-full">
          <div
            className=" pl-5 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.Student} />
          </div>
          <h1 className="text-4xl text-black  font-bold">3</h1>
          <p className="text-black/40 text-[11px] " style={{ fontFamily: 'Satoshi Variable' }}>Students Benefitted</p>
        </div>
      </div>
      <div className="flex pt-[100px]">
        <div className="w-full flex-wrap flex flex-col items-center mx-10">
          <h1 className="text-4xl font-extrabold from-neutral-950 pb-4 " style={{ fontFamily: 'Satoshi Variable' }}>Ongoing Campaigns</h1>
          <div className="flex flex-col  text-center text-black/100 mb-6">
            <button>
              <img src={images.TextSeeAll} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap w-full   py-6 px-7 mb-11 items-center">
        <div className="flex  pt-[80px] ">
          {/* <div className="flex">
            <button className=" border-2 rounded-3xl border-red-300 px-3 py-1">
              <div className="flex">
                <img src={images.TrendUp} />
                <p className="pl-1  font-light">Trending</p>
              </div>
            </button>
            <button className=" border-2 ml-3 rounded-3xl border-red-300 px-3 py-1">
              <div className="flex">
                <img className="w-[23px] h-full" src={images.Student} />
                <p className="pl-1 font-light">Scholarship</p>
              </div>
            </button>
            <button className=" border-2 ml-3 rounded-3xl border-red-300 px-3 py-2">
              <div className="flex">
                <img className="w-[23px]" src={images.HandCoins} />
                <p className="pl-1 font-light">Most Supported</p>
              </div>
            </button>
            <button className=" border-2 ml-3 rounded-3xl border-red-300 px-3 py-1">
              <div className="flex">
                <img src={images.GenderFemale} />
                <p className="pl-1 font-light">Women Empowerment</p>
              </div>
            </button>
            <button className=" border-2 ml-3 rounded-3xl border-red-300 px-3 py-1">
              <div className="flex">
                <img src={images.Megaphonesimple} />
                <p className="pl-1 font-light">NGO Initiatives</p>
              </div>
            </button>
            <button className=" border-2 ml-3 rounded-3xl border-red-300 px-3 py-1">
              <div className="flex">
                <img src={images.Mosque} />
                <p className="pl-1 font-light">Religious Studies</p>
              </div>
            </button>
            <button className=" border-2 ml-3 rounded-3xl border-red-300 px-3 py-1">
              <div className="flex">
                <img src={images.Alarm} />
                <p className="pl-1 font-light">Expiring Soon</p>
              </div>
            </button>
            <button className=" border-2 ml-3 rounded-3xl border-red-300 px-3 py-1">
              <div className="flex">
                <img src={images.Heart} />
                <p className="pl-1 font-light">Needs Love</p>
              </div>
            </button>
            <button
              className="flex items-center ml-2 px-3 py-1.5"
              style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
            >
              <img src={images.Funnel} />
              <img src={images.Filter} />
            </button>
          </div> */}
          <ScrollableTabsButtonForce />
          <button
            className="flex items-center ml-2 px-3 py-1.5"
            style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
          >
            <img src={images.Funnel} />
            <img src={images.Filter} />
          </button>
        </div>
        <div className="gap-4 mt-4 flex flex-wrap w-full justify-center">
          {bnk?.map((item) => {
            return (
              <Card
                title={item?.title}
                cardImage={item?.img}
                actualMoney={item?.actualMoney}
                totalMoney={item?.totalMoney}
                daysLeft={item?.daysLeft}
                userCount={item?.userCount}
              />
            );
          })}
        </div>
        <button className="pt-[68px]">
          <img src={button.LoadMore} />
        </button>
      </div>
      <div
        className="flex flex-col flex-wrap w-full   py-8 px-7  items-center"
        style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
      >
        <h1 className="font-bold text-4xl from-neutral-950" style={{ fontFamily: 'Satoshi Variable' }}>How it Works</h1>
        <div className="flex-row p-5 flex justify-center gap-10 flex-wrap w-full ">
          <img className="w-[20%] h-[20%]" src={images.StepsTitle} />
          <img className="w-[60px] pt-[140px] h-[100%]" src={images.Arrow} />
          <img className="w-[20%] h-[20%]" src={images.StepsTitle2} />
          <img className="w-[60px] pt-[140px] h-[100%]" src={images.Arrow} />
          <img className="w-[20%] h-[20%]" src={images.StepsTitle3} />
        </div>
        <button className="my-[60px] w-[12%] ">
          <img className="w-full " src={button.Button2} />
        </button>
      </div>
      <div className="flex-col mt-[60px] flex-wrap flex w-full text-center items-center">
        <h1 className="text-4xl font-bold from-neutral-950" style={{ fontFamily: 'Satoshi Variable' }}>Causes by Category</h1>
        <p className="text-black/60 mt-3 w-[33%] " style={{ fontFamily: 'Satoshi Variable' }}>
          Be it for a personal need, social cause or a creative idea - you can
          count on us for the project that you want to raise funds for.
        </p>
      </div>
      <div className="flexDirection:'row' mt-[80px] gap-5 px-[50px]">
      
      <Slider />

          </div>
      <Footer />

    </>
  );
}

export default Home;