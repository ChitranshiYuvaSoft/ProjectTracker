import { Box, List, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const {user} = useSelector(state => state.auth);
  console.log(user, "formData")
  return (
    <>
      <List
        sx={{
          width: "100%",
          height: "9rem",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "33%",
            height: "94%",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <img src="./Image/profile.png" alt="noImg" width={"80%"} height={"100%"} style={{borderRadius:"50%",border:"1px solid white"}}/>
        </Box>
        <Box
          sx={{
            width: "65%",
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" , marginLeft:"1rem",color:"#B1BDC7"}}>
           {user.name}
          </Typography>
        </Box>
      </List>
      <List
        sx={{
          width: "100%",
          height: "25%",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" sx={{color:"#B1BDC7"}}>
            <span style={{ fontWeight: "550"}}>Email :</span> {user.email}
          </Typography>
          <Typography variant="h6" sx={{color:"#B1BDC7"}}>
            <span style={{ fontWeight: "550" }}>Phone :</span> +91 9676343453
          </Typography>
          <Typography variant="h6" sx={{color:"#B1BDC7"}}>
            <span style={{ fontWeight: "550" }}>Address :</span> D-8888 , Near
            Raj Hotel, Bhopal,(Madhya Pradesh)
          </Typography>
          <Typography variant="h6" sx={{color:"#B1BDC7"}}>
            <span style={{ fontWeight: "550" }}>Position :</span> React.JS
            Developer
          </Typography>
          <Typography variant="h6" sx={{color:"#B1BDC7"}}>
            <span style={{ fontWeight: "550" }}>Project :</span> 8
          </Typography>
        </Box>
      </List>
    </>
  );
};

export default UserProfile;
