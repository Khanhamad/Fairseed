import React from "react";
import "./Home.css";
import images from "../constants/images";
// import icons from "../constants/icons";
import button from "../constants/button";
import Slider from "../components/layout/Slider";
import Card from "../components/layout/Card";
import ScrollableTabsButtonForce from "../components/layout/ScrollableTabsButtonAuto";
import Coursal from "../components/layout/Coursal";
import Footer from "../components/layout/Footer";
import Navbar from '../Navbar/Navbar';
import DashBoard from "../components/layout/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Campaigns from "../pages/Campaigns1";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [campaignData, setCampaignData] = useState(null);
  





  let bnk = [
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    }
    // {
    //   title: "Help me fund my College Fees for Harvard University",
    //   img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
    //   actualMoney: " 2700 ",
    //   totalMoney: " 64,000",
    //   userCount: "1003",
    //   daysLeft: "10 Days Left",
    // },
    // {
    //   title: "Help me fund my College Fees for Harvard University",
    //   img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
    //   actualMoney: " 2700 ",
    //   totalMoney: " 64,000",
    //   userCount: "1003",
    //   daysLeft: "10 Days Left",
    // },
    // {
    //   title: "Help me fund my College Fees for Harvard University",
    //   img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
    //   actualMoney: " 2700 ",
    //   totalMoney: " 64,000",
    //   userCount: "1003",
    //   daysLeft: "10 Days Left",
    // },
    // {
    //   title: "Help me fund my College Fees for Harvard University",
    //   img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
    //   actualMoney: " 2700 ",
    //   totalMoney: " 64,000",
    //   userCount: "1003",
    //   daysLeft: "10 Days Left",
    // },
    // {
    //   title: "Help me fund my College Fees for Harvard University",
    //   img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
    //   actualMoney: " 2700 ",
    //   totalMoney: " 64,000",
    //   userCount: "1003",
    //   daysLeft: "10 Days Left",
    // },
    // {
    //   title: "Help me fund my College Fees for Harvard University",
    //   img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
    //   actualMoney: " 2700 ",
    //   totalMoney: " 64,000",
    //   userCount: "1003",
    //   daysLeft: "10 Days Left",
    // },
    // {
    //   title: "Help me fund my College Fees for Harvard University",
    //   img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
    //   actualMoney: " 2700 ",
    //   totalMoney: " 64,000",
    //   userCount: "1003",
    //   daysLeft: "10 Days Left",
    // },
  ];

  

  // {images: [{name:'',src:'..///'},{name:'',src:'.//'}] }
  // "https://wallpapercave.com/wp/wp3386769.jpg",
  // "https://wallpaperaccess.com/full/809523.jpg",
  // "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",


  let Dboard = [
    {
      DashBoardImg: images.HandShake,
      DashBoardTotal: 4,
      DashBoardText: "Causes Raised",
    },
    {
      DashBoardImg: images.UsersThree,
      DashBoardTotal: "27 Lacs",
      DashBoardText: "Funds Raised",
    },
    {
      DashBoardImg: images.Student,
      DashBoardTotal: "3000+",
      DashBoardText: "Donors",
    },
    {
      DashBoardImg: images.HandCoins,
      DashBoardTotal: 4,
      DashBoardText: "Successful Campaigns",
    },
    {
      DashBoardImg: images.SedalCheck,
      DashBoardTotal: 3,
      DashBoardText: "Student Benefitted",
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className=" ">
        <Coursal />
      </div>
      <div
        className="bg-[#FFF6F5] md:flex lg:flex lg:flex-row md:flex-wrap lg:flex-nowrap lg:justify-between md:items-center md:justify-center md:py-5"
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 96,
          paddingRight: 96,
          paddingTop: 48,
          paddingBottom: 48,
          alignItems: "flex-start",
          display: "flex",
        }}
      >


        <DashBoard
        //  DashBoardText={item.DashBoardText}
        //  DashBoardTotal={item.DashBoardTotal}
        //  DashBoardImg={item?.DashBoardImg}

        />


      </div>
      <div className="flex pt-[100px] ">
        <div className="w-full flex-wrap flex flex-col items-center mx-10">
          <h1
            className="text-4xl font-bold pb-4"
            style={{ fontFamily: "Satoshi" }}
          >
            Ongoing Campaigns
          </h1>
          <div className="flex flex-col  text-center text-black/100 mb-6">
            <button
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
                wordWrap: "break-word",
                background:
                  "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                textDecoration: "underline",
                position: "relative",
              }}
            >
              <a href="/Campaigns" className="gradient-button mb-0">
                See all 724 active campaigns
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full  justify-center items-center  mb-11 ">


        <div className="lg:flex  lg:pt-[20px] ">
          <ScrollableTabsButtonForce />
          <button
            className="lg:flex lg:flex-row lg:items-center lg:ml-auto md:flex md:flex-column md:items-end md:ml-auto md:mx-5 md:mt-3 sm:flex sm:flex-column sm:items-end sm:ml-auto sm:mx-5 sm:mt-5"
            style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
          >
            <img src={images.Funnel} />
            <img src={images.Filter} />
          </button>
        </div>


        <div className="gap-4 mt-4 flex flex-wrap w-full justify-center ">
          {bnk?.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                cardImage={item.img}
                actualMoney={item.actualMoney}
                totalMoney={item.totalMoney}
                daysLeft={item.daysLeft}
                userCount={item.userCount}

              />

            );
          })}


        </div>
        <button
          className="pt-[68px]  mx-auto "

          style={{
            width: "fit-content",
            textAlign: "center",
            color: "#FF9F0A",
            fontSize: 24,
            fontFamily: "Satoshi",
            fontWeight: "500",
            textDecoration: "underline",
            wordWrap: "break-word",
            background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            textDecoration: "underline",
            position: "relative",

          }}
        >
          <p className="gradient-button mb-0 flex flex-wrap items-center md:text-center mx-auto">Load More</p>
        </button>
      </div>

      <section className="bg-[#FFF6F5]">
        <div
          className="flex flex-col flex-wrap w-full   py-8 px-7  items-center "
          style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
        >
          <h1
            className="font-bold pt-[4rem] text-4xl"
            style={{ fontFamily: "Satoshi", fontWeight: 800 }}
          >
            How it Works
          </h1>
          <div className="lg:grid lg:grid-cols-11  mt-12 place-items-center  w-full md:flex md:flex-col">
            <div className="col-span-3 grid grid-cols-1  place-items-center">
              <div className="">
                <img className="w-[65%]" src={images.person} alt="" />
              </div>
              {/* <div className="grid grid-cols-12 mt-4"> */}
              <div className="flex justify-between grid-cols-12 mt-4">
                <div>
                  <img className="mr-3 col-span-2" src={images.numberone} alt="" />
                </div>
                <div className=" ml-2 col-span-10">
                  <h1
                    className=""
                    style={{
                      color: "#4A4E5A",
                      fontSize: 28,
                      fontFamily: "Satoshi",
                      fontWeight: "900",
                      wordWrap: "break-word",
                    }}
                  >
                    Create your Profile
                  </h1>
                  <p
                    className=""
                    style={{
                      width: "100%",
                      color: "#6B7280",
                      fontSize: 20,
                      fontFamily: "Satoshi",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Start with the basics
                    <br /> Kick things off with your
                    <br /> name and location.
                  </p>
                </div>
              </div>
            </div>
            <img className="lg:col-span-1 md:rotate-90 lg:rotate-0 md:items-center md:py-5" src={images.Arrow} />
            <div className="col-span-3 grid grid-cols-1 place-items-center">
              <div className="">
                <img className="w-[65%]" src={images.pencicon} alt="" />
              </div>
              {/* <div className="grid grid-cols-12 mt-4"> */}
              <div className="flex justify-between grid-cols-12 mt-4">
                <div>
                  <img className=" mr-3 col-span-2" src={images.numbertwo} alt="" />
                </div>
                <div className=" ml-2 col-span-10">
                  <h1
                    className=""
                    style={{
                      color: "#4A4E5A",
                      fontSize: 28,
                      fontFamily: "Satoshi ",
                      fontWeight: "900",
                      wordWrap: "break-word",
                    }}
                  >
                    Fill Cause Information
                  </h1>
                  <p
                    className=""
                    style={{
                      width: "100%",
                      color: "#6B7280",
                      fontSize: 20,
                      fontFamily: "Satoshi",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Tell your story
                    <br /> We'll guide you with tips
                    <br /> along the way.
                  </p>
                </div>
              </div>
            </div>
            <img className="col-span-1 md:rotate-90 lg:rotate-0 md:py-5" src={images.Arrow} />
            <div className="col-span-3 grid grid-cols-1  place-items-center">
              <div className="">
                <img className="w-[65%]" src={images.Home} alt="" />
              </div>
              {/* <div className="grid grid-cols-12 mt-4"> */}
              <div className="flex justify-between grid-cols-12 mt-4">
                <div>
                  <img className="mr-3  col-span-2" src={images.numberthree} alt="" />
                </div>
                <div className=" ml-2 col-span-10">
                  <h1
                    className=""
                    style={{
                      color: "#4A4E5A",
                      fontSize: 28,
                      fontFamily: "Satoshi",
                      fontWeight: "900",
                      wordWrap: "break-word",
                    }}
                  >
                    Update Acc details
                  </h1>
                  <p
                    className=""
                    style={{
                      width: "100%",
                      color: "#6B7280",
                      fontSize: 20,
                      fontFamily: "Satoshi",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Upload ID and a valid
                    <br /> account number. Our team
                    <br /> will verify the same.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="p-2 my-10"
            style={{
              background: "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div style={{ width: 32, height: 32, position: "relative" }}>
              <img src={images.RocketLaunch} />
            </div>
            <div
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "Satoshi Variable",
                fontWeight: "900",
                wordWrap: "break-word",
                fontFamily: 'satoshi'
              }}
            >
              Launch a Campaign Now !
            </div>
          </button>
        </div>
      </section>
      <div className="flex-col pt-[60px] pb-[50px] flex-wrap container flex w-full text-center items-center">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Satoshi", fontWeight: 800 }}
        >
          Causes by Category
        </h1>
        <p
          className="text-black/40 font-bold mt-3 w-[33%]"
          style={{ fontFamily: "Satoshi" }}
        >
          Be it for a personal need, social cause or a creative idea - you can
          count on us for the project that you want to raise funds for.
        </p>
      </div>
      <div className="flexDirection:'row' mt-[80px] gap-5 px-[50px] ">

        <Slider />

      </div>
      <div className="md:flex md:flex-col md:max-w-screen-[774px]">
        <Footer />
      </div>


      {/* <BrowserRouter basename="">
      <Routes>
        <Route path="/Campaigns" element={<Campaigns/>}/> 
      </Routes>
    </BrowserRouter> */}
    </>
  );
}


export default Home;