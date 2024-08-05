import { Box, Button, ListItem, Typography } from "@mui/material";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";

const FeatureList = () => {
  return (
    <>
      <ListItem sx={{ width: "100%", height:"5rem", border:".1rem solid #C1CADC", display:"flex", alignItems:"center", justifyContent:"space-between", marginBlock:".2rem"}}>
        <Box>
          <Typography>Feature Name</Typography>
        </Box>
        <Box>
          <Button variant="outlined">
            {" "}
            <FaEdit fontSize={"large"} />
          </Button>
          <Button variant="outlined" color="error">
            <MdDeleteForever fontSize={"large"}/>
          </Button>
          <Button variant="outlined" color="success">
            {" "}
            <HiClipboardCheck fontSize={"large"} />
          </Button>
        </Box>
      </ListItem>
    </>
  );
};

export default FeatureList;
