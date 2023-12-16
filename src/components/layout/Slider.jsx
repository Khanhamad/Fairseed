import React, { Component } from "react";
import Home from "../../Home/Home";
// import sliderData from "../../Home/Home";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

let sliderData = [
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
  {
    sliderText: 'Early Childhood Education',
    Image: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg"
  },
]

export default class MultipleRows extends Component {
  render() {
    // this.props.data
    const settings = {
      dots: true,
      className: "center overflow:hidden ",
      centerMode: false,
      infinite: false,
      
      // variableWidth: true,
      // centerPadding: "100px",
      slidesToShow: 6,
      speed: 1000,
      rows: 2,
      slidesPerRow: 1
    };

    return (
      <div className="slider-container">
        <Slider {...settings} >
          {sliderData.map((items) => {
            return (
              <>

                <div>
                <img style={{ width: '250px', height: '200px', background: 'linear-gradient(0deg, #EBEBEB 0%, #EBEBEB 100%)', borderRadius: 12 }} src={items.Image} />
                  
                </div>
                <div className="p-3" style={{ fontFamily: 'Satoshi Variable' ,fontSize: '24',color: '#383A42',fontWeight: '500' }}>
                <h3>{items.sliderText}</h3>
                </div>
                




              </>
            )
          })}
          {/* <h2>Multiple Rows</h2> */}
        </Slider>
      </div>
    );
  }
}