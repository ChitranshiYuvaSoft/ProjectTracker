import { Box, Button, List, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FeatureList from "../Components/FeatureScreen/FeatureList";
import { useDispatch, useSelector } from "react-redux";
import { featureCreate, featureUpdate } from "../Redux/Features/featureSlice";
import { useParams } from "react-router-dom";

const FeatureScreen = () => {
  const {featureData, edit} = useSelector(state => state.feature);

  // const {featureData} = useSelector((state)=>{
  //   return{
  //     featireData: state.featire,
  //     aitj: state.auth
  //   }
  // })
  // console.log(featureData);

  const dispatch = useDispatch();
  const { _id } = useParams();

  const dataFeature = featureData.filter((item) => item?.project_id == _id);


  // Feature Create and Update
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title){
      alert("Feature is mandatory!!");
    }else{
      dispatch(
        featureCreate({
          project_id: _id,
          _id: crypto.randomUUID(),
          title,
        })
      );
      setTitle("");
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    if(!editTitle){
      alert("Title is mandatory!!");
    }else{
      dispatch(
        featureUpdate({
          _id: edit.feature._id,
          title: editTitle,
          project_id: edit.feature.project_id,
        })
      );
      setEditTitle("");
    }
  };
  useEffect(() => {
    setEditTitle(edit?.feature?.title);
  }, [edit]);


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
                label="Enter Feature Name"
                type="text"
                fullWidth  value={title || ""}
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button type="submit" variant="contained" sx={{ paddingBlock: "1.5rem" }} onClick={handleSubmit}>
                Add
              </Button>
            </Box>
            <Box sx={{ width: "85%", height: "60%", display: "flex",alignItems: "center", justifyContent:"center"}}>
             <List sx={{ width: "90%", height: "60%", display: "flex",alignItems: "center", justifyContent:"center", flexDirection:"column"}}>
             {
              dataFeature.map((feature, index) => (
                <FeatureList
                  key={index}
                  index={index}
                  feature={feature}
                  project_id={_id}
                />
              ))
             }
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
                label="Update Feature Name"
                type="text"
                fullWidth
                value={editTitle || ""}
                name="editTitle"
                required
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <Button type="submit" variant="contained" sx={{ paddingBlock: "1.5rem" }}  onClick={handleUpdate}>
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
