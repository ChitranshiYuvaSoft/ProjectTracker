import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, EffectFlip, FreeMode, Scrollbar } from "swiper/modules";
import Banner from "../Components/HomeScreen/Banner1";
import Banner2 from "../Components/HomeScreen/Banner2";
import Footer from "../Components/HomeScreen/Footer";
import RatingUser from "../Components/HomeScreen/RatingUser";
import MarqueeData from "./MarqueeData";
import MapSec from "../Components/HomeScreen/MapSec";
import Banner3 from "../Components/HomeScreen/Banner3";
import { sliderImg } from "../Data/data";

const HomeScreen = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

 

  return (
    <>
      <Navbar />
      <Box className="homeScreen">
        <Box className="homeSlider">
          <Swiper
            modules={[Autoplay, FreeMode, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ height: "100%" }}
          >
            {sliderImg.map((item, index) => (
              <SwiperSlide
                key={index}
                className="d-flex align-items-center justify-content-center"
                style={{ width: "100%", height: "100%" }}
              >
                <img src={item} alt="noImg" width={"100%"} height={"100%"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <MarqueeData />

        <Banner />
        <Banner2 />
        <Banner3 />
        <Box className="mapSec">
          <MapSec />
        </Box>
        <RatingUser />
        <Footer />
      </Box>
    </>
  );
};

export default HomeScreen;
