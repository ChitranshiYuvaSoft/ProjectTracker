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
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#D5E2EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            marginBottom: "3rem",
          }}
        >
          <Swiper
            modules={[Autoplay, FreeMode, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ height: "100%", backgroundColor: "gray" }}
          >
            <SwiperSlide
              className="d-flex align-items-center justify-content-center"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src="https://www.nokiasaudi.com/assets/script/mlib-uploads/full/project-management-slider-5a37c952d94f7.jpg"
                alt="moImg"
                width={"100%"}
                height={"100%"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://t3.ftcdn.net/jpg/04/51/39/92/360_F_451399234_4ue5KX3bU2XKlgqFCJPd3Tsgv6cuLDLM.jpg"
                alt="moImg"
                width={"100%"}
                height={"100%"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://smawins.com/wp-content/uploads/2022/02/ProjectManagement.jpg"
                alt="moImg"
                width={"100%"}
                height={"100%"}
              />
            </SwiperSlide>
            ...
          </Swiper>
        </Box>
        <MarqueeData />

        <Banner />
        <Banner2 />
        <Banner />
        <MapSec />
        <RatingUser />
        <Footer />
      </Box>
    </>
  );
};

export default HomeScreen;
