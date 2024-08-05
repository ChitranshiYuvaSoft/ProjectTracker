import { Box, Button, List, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectList from "../Components/ProjectScreen.jsx/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { projectCreate, projectUpdate } from "../Redux/Projects/projectSlice";
import { FiPlusCircle } from "react-icons/fi";
import { RiEditFill } from "react-icons/ri";

const ProjectScreen = () => {
  const { projectData , edit} = useSelector((state) => state.project);
  // console.log(projectData);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title is mandatory!!");
    } else {
      dispatch(
        projectCreate({
          _id: crypto.randomUUID(),
          title,
        })
      );
      setTitle("");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editTitle) {
      alert("Title is mandatory!!");
    } else {
      dispatch(
        projectUpdate({
          _id: edit.project._id,
          title: editTitle,
        })
      );
      setEditTitle("");
    }
  };
  useEffect(() => {
    setEditTitle(edit?.project?.title);
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
            PROJECTS
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
                value={title || ""}
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ paddingBlock: "1.5rem" }}
                onClick={handleSubmit}
              >
                <FiPlusCircle style={{fontSize : "1.5rem"}} />
              </Button>
            </Box>
            <Box
              sx={{
                width: "85%",
                height: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowY: "scroll",
              }}
            >
              <List
                sx={{
                  width: "90%",
                  height: "60%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "10rem",
                }}
              >
                {projectData.map((project) => (
                  <ProjectList key={project._id} project={project} />
                ))}
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
                value={editTitle || ""}
                name="editTitle"
                required
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <Button variant="contained" sx={{ paddingBlock: "1.5rem" }} onClick={handleUpdate}>
              <RiEditFill  style={{fontSize : "1.5rem"}} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectScreen;
