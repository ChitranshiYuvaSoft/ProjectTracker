import { Box } from "@mui/material";
import React from "react";

const comapanyLogo = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5SZEO67LnmoJSKZfAxxtfrVtMeMNWysIwQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9X1qgNxkWuozBrk1xeJGnbSVj8VfZ6OJTclk5z-dhUc1fhO5Dm57_byBQWH6iF0Tb3Q&usqp=CAU",
  "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  "https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
  "https://st2.depositphotos.com/1065578/7533/i/450/depositphotos_75333451-stock-photo-abstract-geometric-company-logo.jpg",
];

const MarqueeData = () => {
  return (
    <marquee>
      <Box
        sx={{
          width: "100%",
          height: "8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          behavior=""
          direction=""
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {comapanyLogo.map((item) => (
            <Box
              key={item.index}
              sx={{
                width: "20%",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={item} width={"50%"} height={"90%"} alt="" />
            </Box>
          ))}
        </Box>
      </Box>
    </marquee>
  );
};

export default MarqueeData;
