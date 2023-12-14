import React from "react";
import "./Home.css";
import images from "../constants/images";
import icons from "../constants/icons";
import button from "../constants/button";
import Slider from "../components/layout/Slider";
import Card from "../components/layout/Card";
import ScrollableTabsButtonForce from "../components/layout/ScrollableTabsButtonAuto";
import Coursal from "../components/layout/Coursal";
import Footer from "../components/layout/Footer";
import Navbar from "../Navbar/Navbar";
import DashBoard from "../components/layout/DashBoard";

function Home() {
  let sliderData = [
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
    {
      sliderText: "Early Childhood Education",
    },
  ];
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
 
    
    
    

    // {images: [{name:'',src:'..///'},{name:'',src:'.//'}] }
    // "https://wallpapercave.com/wp/wp3386769.jpg",
    // "https://wallpaperaccess.com/full/809523.jpg",
    // "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",

   let Dboard = [
    {
      DashBoardImg:'../constants/images/HandShake.png',
      DashBoardTotal:4,
      DashBoardText:'Causes Raised'

    },
    {
      DashBoardImg:"https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      DashBoardTotal:'27 Lacs',
      DashBoardText:'Funds Raised'

    },
    {
      DashBoardImg:'../constants/images/HandShake.png',
      DashBoardTotal:'3000+',
      DashBoardText:'Donors'

    },
    {
      DashBoardImg:"https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      DashBoardTotal:4,
      DashBoardText:'Successful Campaigns'

    },
    {
      DashBoardImg:"https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      DashBoardTotal:3,
      DashBoardText:'Student Benefitted'

    }
   ];

  return (
    <>
      <div className="">
      <Navbar />
      </div>
      <div className="w-full ">
        <Coursal  />
      </div>

      <div style={{width: '100%', height: '100%', paddingLeft: 96, paddingRight: 96, paddingTop: 48, paddingBottom: 48, background: '#FFF6F5', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
      {Dboard?.map((item) => {
            return (
              <DashBoard
               DashBoardText={item.DashBoardText}
               DashBoardTotal={item.DashBoardTotal}
              />
            );
          })}
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
        <div className="flex  pt-[20px] ">
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
        <h1 className="font-bold pt-[4rem] text-4xl">How it Works</h1>
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
        <p className="text-black/40 mt-3 w-[33%]" >
          Be it for a personal need, social cause or a creative idea - you can
          count on us for the project that you want to raise funds for.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-[70px] gap-4 px-[50px] ">
        {sliderData?.map((item) => {
          return (
            <Slider sliderText={item?.sliderText} sliderImg={item?.sliderImg} />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;
