import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import images from "../../constants/images";
import LinearWithValueLabel from "../../components/LinearWithValueLabel";
import { LinearProgress } from "@mui/material";
import CampaignsTabs from "../../components/layout/CampaignsTabs";
import Doner from "../../components/layout/Doner";

function OnGoingCampaigns({ actualMoney }) {
   
  
  return (
    <>
      <Navbar />
      <div
        className="px-5"
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 48,
          display: "inline-flex",
        }}
      >
        <h1
          className="text-5xl text-black   mt-[10rem] font-bold"
          style={{ fontFamily: "satoshi" }}
        >
          Help eradicate illiteracy from the Balkan region !
        </h1>
        <div className="w-full h-full  flex  gap-5">
          <img
            className="w-[65%]  rounded-3xl"
            src={images.sliderimg}
            alt="Img"
          />
          <div
            className="flex flex-col rounded-3xl justify-center items-center w-[35%] "
            style={{ border: "1px solid red" }}
          >
            <img className="mt-24" src={images.Logo} alt="Logo" />
            <div
              className="m-10"
              style={{
                paddingLeft: 12,
                paddingRight: 12,

                background: "#FAF7F0",
                borderRadius: 9,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div style={{ width: 12, height: 12, position: "relative" }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#FF8A00",
                    borderRadius: 5,
                  }}
                />
              </div>
              <div
                style={{
                  color: "#FF8A00",
                  fontSize: 24,
                  fontFamily: "Satoshi ",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Campaign Ongoing
              </div>
            </div>
            <h1
              className="text-6xl  font-bold"
              style={{ fontFamily: "satoshi" }}
            >
              ₹ 49,743
            </h1>
            <p
              className="m-3"
              style={{
                width: "100%",
                textAlign: "center",
                color: "#8E95A2",
                fontSize: 30,
                fontFamily: "Satoshi ",
                fontWeight: "500",
              }}
            >
              funded of ₹ 1,24,000
            </p>

            <div className="mb-5 w-3/4">
              {/* <LinearWithValueLabel className='!h-9' height={'30px'} value={30} /> */}
              <LinearProgress
                color="success"
                variant="determinate"
                style={{ height: "30px", borderRadius: "16px" }}
                value={40}
              />
            </div>
            <div className="flex  " style={{ display: "inline-flex" }}>
              <img
                className="w-[17%] pr-2 "
                src={images.SedalCheck}
                alt=""
              />
              <h1
                style={{
                  background:
                    "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                <p className="text-2xl">Zakah Eligible !</p>
              </h1>
            </div>
            <p
              className="text-black/40 w-[54%] text-3xl text-center py-20"
              style={{ fontFamily: "satoshi" }}
            >
              <span className="font-bold " style={{ color: " #25272C" }}>
                Partial Funding
              </span>
              - This campaign will collect all funds raised by Mar 24, 2023 5:30
              AM.
            </p>
          </div>
        </div>
        <div className="flex justify-start w-full">
          <div className="flex flex-col w-[63%]">
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                <div className="grid grid-cols-8">
                  <img className="col-span-1 w-[100%]" src={images.Airlogo} alt="" />
                  <h1 className="col-span-7 text-5xl flex items-center pl-7 font-bold" style={{fontFamily:'satoshi'}}>
                  Teach for India Foundation
                  </h1> 
                </div>
              </div>
              <div className="col-span-2 flex justify-center items-center ">
                <div className="justify-center items-center  px-4 py-2" style={{background: '#FFF6F5', borderRadius: 8, border: '1px red solid',  gap: 12, display: 'inline-flex'}}>
                  <div style={{width: 32, height: 32, position: 'relative'}}>
                     <img src={images.ShareNetwork} alt="" />
                  </div>
                  <div style={{color: '#FF9F0A', fontSize: 30, fontFamily: 'Satoshi ', fontWeight: '700', background:
                    "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent" }}>Share</div>
                </div>
              </div>  
            </div>
            <div className="pt-16">
              <CampaignsTabs/>
            </div>
          </div>
          <div className="w-[37%] flex  items-center px-12 pb-12 pt-40" style={{background: 'white', borderRadius: 20, flexDirection: 'column', gap: 24, display: 'inline-flex'}}>

            <h1 className="text-3xl flex justify-items-start  pb-2  " style={{fontFamily:'satoshi',fontWeight:700,background:"linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)","-webkit-background-clip": "text","-webkit-text-fill-color": "transparent" }}>Recent Donors:</h1>
            <div className="">
            {

             <Doner/>
            }  
            
            </div>
          </div> 
         

        </div>

      </div>

      <Footer />
    </>
  );
}

export default OnGoingCampaigns;
