import { Box, Button, List, TextField, Typography } from "@mui/material";
import React from "react";
import FeatureList from "../Components/FeatureScreen/FeatureList";

const FeatureScreen = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#031D36",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "90%",
          backgroundColor: "#D8E0E7",
          borderRadius: "2rem",
          boxShadow: "0px 0px 10px #9BBEDF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" textAlign="center" fontWeight={"bold"}>
            FEATURES
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: ".2rem solid #031D36",
              borderRadius: "2rem",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "85%",
                height: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="outlined-password-input"
                label="Enter Project Name"
                type="text"
                fullWidth
              />
              <Button variant="contained" sx={{ paddingBlock: "1.5rem" }}>
                Add
              </Button>
            </Box>
            <Box sx={{ width: "85%", height: "60%", display: "flex",alignItems: "center", justifyContent:"center"}}>
             <List sx={{ width: "90%", height: "60%", display: "flex",alignItems: "center", justifyContent:"center", flexDirection:"column"}}>
              {/* { */}
                <FeatureList/>
                <FeatureList/>
                <FeatureList/>
                <FeatureList/>
              {/* } */}
             </List>
            </Box>
            <Box
              sx={{
                width: "85%",
                height: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
               <TextField
                id="outlined-password-input"
                label="Update Project Name"
                type="text"
                fullWidth
              />
              <Button variant="contained" sx={{ paddingBlock: "1.5rem" }}>
                Edit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureScreen;
