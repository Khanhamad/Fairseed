import React from "react";
import images from "../../constants/images";
import { TiSocialTwitter } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { RiPinterestLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";






function Footer() {
  return (
    <>
   
      <div className="flex flex-col relative mt-[20rem]"
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 300,
          paddingBottom: 60,
          paddingLeft: 90,
          paddingRight: 90,
          background: "#22262F",
          gap:100,
        
        }}
      >

<div className="flex mt-[140px] justify-center absolute -top-[50%] left-[50%] -translate-x-[50%]">
        <div className="footer  text-center">
          <p className="footer_text w-[80%] ml-28">
            Ready to make an Impact? Join thousands of others today
          </p>
          <div className="flex justify-center my-10 gap-4">
            <button>
              <img src={images.Button4} />
            </button>
            <button>
              <img src={images.Button3} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between"
      >
        <img className="w-[350px] h-full " src={images.LogoFooter} />
        <div className="flex flex-col justify-start">
          <a
            className="text-white font-bold"
            style={{
              fontSize: 16,
              fontFamily: "Satoshi Variable",
              fontWeight: "700",
            }}
          >
            Quik Link
          </a>
          <ul className="mt-3">
            <li>
              <a
                className="text-white/80"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white/80"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-white/80"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
                Blog Post
              </a>
            </li>
            <li>
              <a
                className="text-white/80"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
                Photo Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start">
          <a
            className="text-white font-bold"
            style={{
              fontSize: 16,
              fontFamily: "Satoshi Variable",
              fontWeight: "700",
            }}
          >
            Get In Touch
          </a>
          <ul className="mt-3">
            <li>
              <a
                className="text-white/80"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                className="text-white/80"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
                Our services
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-wrap justify-start">
          <a
            className="text-white font-bold"
            style={{
              fontSize: 16,
              fontFamily: "Satoshi Variable",
              fontWeight: "700",
            }}
          >
            Address
          </a>
          <p
            className="text-white/80 mt-3 w-[70%]"
            style={{
              fontFamily: "Satoshi Variable",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            2464 Royal Ln. Mesa, New Jersey 45463
          </p>
        </div>
        <div className="flex flex-col flex-wrap justify-start">
          <a
            className="text-white  font-bold"
            style={{
              fontSize: 16,
              fontFamily: "Satoshi Variable",
              fontWeight: "700",
            }}
          >
            Newsletter
          </a>
          <div className="flex mt-3 flex-row rounded-lg w-[40%] h-8">
            <input
              className="text-[15px] pl-4"
              aria-label="Demo input"
              multiline
              placeholder="Enter your email"
            />
            <div
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 1,
                paddingBottom: 12,
                background: "#219D80",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <button
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Satoshi Variable",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                }}
                className="pt-2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <p
            className="text-white/80 mt-2 w-full"
            style={{
              fontFamily: "Satoshi Variable",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            Your email is safe with us,we don’t spam.
          </p>
        
          <a
            className="text-white mt-3 font-bold"
            style={{
              fontSize: 16,
              fontFamily: "Satoshi Variable",
              fontWeight: "700",
            }}
          >
            Follow Us
          </a>
          <div className="flex mt-2 flex-row">
              <a
                className="text-white/80 text-3xl"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
                <TiSocialTwitter />
              </a>
              <a
                className="text-white/80 ml-3 text-2xl"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
              <GrInstagram />
              </a>
              <a
                className="text-white/80 ml-3  text-3xl"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
              <RiPinterestLine />
              </a>
              <a
                className="text-white/80 ml-3 text-3xl"
                style={{
                  fontFamily: "Satoshi Variable",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                href="#"
              >
              <RiYoutubeLine />
              </a>
              
          </div>
        </div>
      </div>
      <div>
       <hr className="text-white/50 pb-2"></hr>
       <p className="text-white/40 text-1xl">Copyright © Fairseed 2023</p>
      </div>
      </div>
    </>
  );
}

export default Footer;
