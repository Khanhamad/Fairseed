import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const MultipleRows = () => {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        // Replace 'API_ENDPOINT' with your actual API endpoint
        const API_ENDPOINT = "http://192.168.1.53:8000/campaign/campaign-category";
        const response = await axios.get(API_ENDPOINT);
        setSliderData(response.data.rows);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  const settings = {
    dots: true,
    className: "center overflow:hidden",
    centerMode: false,
    infinite: false,
    slidesToShow: 6,
    speed: 1000,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          rows: 4,
        },
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
          rows: 4,
        },
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading &&
          !error &&
          sliderData.map((item, index) => (
            <div key={index}>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  background: "linear-gradient(0deg, #EBEBEB 0%, #EBEBEB 100%)",
                  borderRadius: 12,
                }}
                src={'http://192.168.1.53:8000' +item.image}
                alt={`Slider Image ${index + 1}`}
              />
              <div
                className="p-3"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontSize: "24",
                  color: "#383A42",
                  fontWeight: "500",
                }}
              >
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MultipleRows;
