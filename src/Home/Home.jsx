import React from "react";
import "./Home.css";
import images from "../constants/images";
import icons from "../constants/icons";
import button from "../constants/button";
import Slider from "../components/layout/Slider";
import Card from "../components/layout/Card";
import ScrollableTabsButtonForce from "../components/layout/ScrollableTabsButtonAuto";
import Coursal from '../components/layout/Coursal'

function Home() {
  let sliderData = [
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
    },
    {
      sliderText:'Early Childhood Education',
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
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <>
        <div className="w-full">
        <Coursal slides={slides} />
        </div>

      <div
        className="flex  items-center justify-between px-[80px] flex-wrap h-full"
        style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
      >
        <div className="w-auto  m-5 text-center  h-full">
          <div
            className=" pl-2 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.HandShake} />
          </div>
          <h1 className="text-4xl text-black  font-bold">4</h1>
          <p className="text-black/40 text-[11px]">Causes Raised</p>
        </div>
        <div className="w-auto   text-center  h-full">
          <div
            className=" pl-9 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.HandCoins} />
          </div>
          <h1 className="text-4xl text-black  font-bold">27 Lacs</h1>
          <p className="text-black/40 text-[11px]">Funds Raised</p>
        </div>
        <div className="w-auto   text-center  h-full">
          <div
            className=" pl-5 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.UsersThree} />
          </div>
          <h1 className="text-4xl text-black  font-bold">3000+</h1>
          <p className="text-black/40 text-[11px]">Donors</p>
        </div>
        <div className="w-auto    text-center  h-full">
          <div
            className=" pl-7 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.SedalCheck} alt="Seal Cheak" />
          </div>
          <h1 className="text-4xl text-black  font-bold">4</h1>
          <p className="text-black/40 text-[11px]">Successful Campaings</p>
        </div>
        <div className="w-auto   text-center  h-full">
          <div
            className=" pl-5 text-5xl mb"
            style={{ color: "rgba(255, 55, 95, 1)" }}
          >
            <img src={images.Student} />
          </div>
          <h1 className="text-4xl text-black  font-bold">3</h1>
          <p className="text-black/40 text-[11px]">Students Benefitted</p>
        </div>
      </div>
      <div className="flex pt-[100px]">
        <div className="w-full flex-wrap flex flex-col items-center mx-10">
          <h1 className="text-4xl font-bold pb-4">Ongoing Campaigns</h1>
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
        <div className="gap-4 mt-4 flex flex-wrap w-[93%] px-5">
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
        <h1 className="font-bold text-4xl">How it Works</h1>
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
        <h1 className="text-4xl font-bold">Causes by Category</h1>
        <p className="text-black/40 mt-3 w-[33%]">
          Be it for a personal need, social cause or a creative idea - you can
          count on us for the project that you want to raise funds for.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-[70px] gap-4 px-[50px] ">
      {sliderData?.map((item) => {
            return (
              <Slider
                sliderText={item?.sliderText}
                sliderImg={item?.sliderImg}
              />
            );
          })}
      </div>
      <div className="flex mt-[140px] justify-center">
        <div className='footer  text-center'>
          <p className="footer_text w-[80%] ml-28">
          Ready to make an Impact? Join thousands of others today
          </p>
          <div className="flex justify-center my-10 gap-4">
            <button>
              <img src={images.Button4}/>
            </button>
            <button>
               <img src={images.Button3} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
