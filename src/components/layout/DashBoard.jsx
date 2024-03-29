import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../../constants/images';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalCampaign: 0,
    totalDonation: 0,
    donorCount: 0,
    successfulCampaign: 0,
    studentBenefited: 0,
  });

  useEffect(() => {
    // Fetch dashboard data from your API endpoint
    axios.get('http://azroddin.pythonanywhere.com/campaign/landing-page')
      .then(response => {
        const responseData = response.data.data;
        setDashboardData({
          totalCampaign: responseData.total_campaign || 0,
          totalDonation: responseData.total_donation || 0,
          donorCount: responseData.donor_count || 0,
          successfulCampaign: responseData.successfull_campaign || 0,
          studentBenefited: responseData.student_benifited || 0,
        });
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  const dashboards = [
    {
      DashBoardImg: images.HandShake,
      DashBoardTotal: dashboardData.totalCampaign,
      DashBoardText: "Causes Raised",
    },
    {
      DashBoardImg: images.UsersThree,
      DashBoardTotal: dashboardData.totalDonation,
      DashBoardText: "Funds Raised",
    },
    {
      DashBoardImg: images.Student,
      DashBoardTotal: dashboardData.donorCount,
      DashBoardText: "Donors",
    },
    {
      DashBoardImg: images.HandCoins,
      DashBoardTotal: dashboardData.successfulCampaign,
      DashBoardText: "Successful Campaigns",
    },
    {
      DashBoardImg: images.SedalCheck,
      DashBoardTotal: dashboardData.studentBenefited,
      DashBoardText: "Student Benefitted",
    },
  ];

  return (
    <>
      {dashboards.map((data, index) => (
        <div className="md:w-20 md:gap-4 md:py-3" key={index} style={{ width: 235, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
          <div
            style={{ width: 56, height: 56, position: 'relative' }}
          >
            <img src={data.DashBoardImg} alt={`dashboard-${index}`} />
          </div>
          <h1 style={{ textAlign: 'center', color: '#25272C', fontSize: 36, fontWeight: '900', fontFamily: 'satoshi', wordWrap: 'break-word' }}>{data.DashBoardTotal}</h1>
          <p style={{ flex: '1 1 0', alignSelf: 'stretch', textAlign: 'center', color: '#8E95A2', fontSize: 17, fontWeight: '500', fontFamily: 'satoshi', wordWrap: 'break-word' }}>{data.DashBoardText}</p>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
