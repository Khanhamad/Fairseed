import React from 'react'
import icons from '../../constants/icons';
import images from '../../constants/images';
import LinearWithValueLabel from '../LinearWithValueLabel';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { LinearProgress } from "@mui/material";
// import ProgressBar from '../ProgressBar' 


    // let val= [
    //     {actualvalue:64000,
    //     totalValue:2700}
    // ]


    // function Card({title,totalMoney,actualMoney,daysLeft,userCount,cardImage,avatarImage,avatarName}) 
    // {
     
// function CampaignList() {
//   const [campaignData, setCampaignData] = useState([]);
function Card() {
  const [campaignData, setCampaignData] = useState([]);


  useEffect(() => {
    const apiUrl = 'http://192.168.1.53:8000/campaign/campaign';

    axios.get(apiUrl)
      .then(response => {
        console.log('Received data:', response.data.rows);
        setCampaignData(response.data.rows);
      })
      .catch(error => {
        console.error('Error fetching campaign data:', error);
      });
  }, []);

    return (
        <>
            {campaignData.map((campaign, index) => (
            <div key={index} className="card rounded-xl sm:float-left" style={{ width: "22rem" }}>
                {/* <div style={{backgroundImage:'url{blob:https://www.figma.com/23aaba04-b230-4e67-98b4-b1e815583174}'}} className="card-img-top" alt="..." >
                 <div className=' flex m-3 bg-transparent'>
                     <img src={images.TrendUp}/>
                     <p>Trending</p>
                 </div>
                 </div>    */}
                  {/* <img src={campaign.campaign_image} className="card-img-top" alt="..." /> */}
                <img src={'http://192.168.1.53:8000' + campaign.campaign_image} className="card-img-top h-80" alt="..." />
                <div className="card-body">
                <div className='flex flex-row'>
                    <img className='w-[6%] h-[6%]' src={images.Airlogo}/>
                    <p className="text-black/40 pl-2 text-[15px] " style={{fontFamily:'Satoshi Variable'}}>{campaign.user.username}</p>
                </div>
                <p className="card-text w-[80%] pt-2 pb-4  text-1xl font-bold " style={{fontFamily:'Satoshi Variable'}}>
                {campaign.title}
                </p>
                <p className="text-black/50 font-bold" style={{fontFamily:'Satoshi Variable'}}>
                    <span className="font-bold text-black " style={{fontFamily:'Satoshi Variable'}}> ₹{campaign.goal_amount}</span>
                     funded of ₹{campaign.fund_raised}
                </p>
                {/* <img className="pt-1 pb-6" src={images?.range2}></img> */}
                {/* <div className='pt-1 pb-4 '>
                {val?.map((item) => {
                   return <LinearWithValueLabel actualvalue={item?.actualvalue} totalValue={item?.totalValue}/>
                })}
                {/* <ProgressBar/> */}
                
                {/* </div> */} 

                <div className="pt-1 pb-4">
              {/* <LinearWithValueLabel className='!h-9' height={'30px'} value={30} /> */}
              <LinearProgress
                color="success"
                variant="determinate"
                style={{ height: "10px", borderRadius: "16px" }}
                value={(campaign.actualMoney / campaign.totalMoney) * 100}
              />
            </div>

                <div className="flex  overflow-hidden w-full">
                    <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} /> 
                    <p className="text-black/40 pt-1.5 pl-1 text-[15px]" style={{fontFamily:'Satoshi Variable'}}>{campaign.donor_count}</p>
                    <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                    <p className="text-black/40 pt-1.5 pl-1 text-[15px]" style={{fontFamily:'Satoshi Variable'}}>
                    {campaign.days_left}
                    </p>
                    <button
                    className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images?.Coins1} />
                    <p className="pl-0.5    text-[15px] " style={{fontFamily:'Satoshi Variable'}}>Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

 
             ) )
},
</>
 );
}

export default Card;
