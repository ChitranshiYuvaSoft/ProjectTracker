import { Box, Button, ListItem, Typography } from "@mui/material";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { projectEdit, projectRemove } from "../../Redux/Projects/projectSlice";

const ProjectList = ({project}) => {

  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    // dispatch(todoRemoveByProject(_id));
    // dispatch(featureRemoveByProject(_id));
    dispatch(projectRemove(_id));
  };
  const handleEdit = (project) => {
    dispatch(projectEdit(project));
  };

  return (
    <>
      <ListItem sx={{ width: "100%", height:"5rem", border:".1rem solid #C1CADC", display:"flex", alignItems:"center", justifyContent:"space-between", marginBlock:".2rem"}}>
        <Box>
          <Typography>{project.title}</Typography>
        </Box>
        <Box>
          <Button variant="outlined"  onClick={() => handleEdit(project)}>
            {" "}
            <FaEdit fontSize={"large"} />
          </Button>
          <Button variant="outlined"  color="error"  onClick={() => handleDelete(project._id)}>
            <MdDeleteForever fontSize={"large"}/>
          </Button>
          <Button variant="outlined" color="success">
            {" "}
            <HiClipboardCheck fontSize={"large"} />
          </Button>
        </Box>
      </ListItem>
      {/* <Box
      sx={{
        width: "24%",
        height: "60%",
        backgroundColor: "#7Ao3F5",
        boxShadow: "0px 0px 10px #031D36",
      }}
    >
        <Typography variant="h4" align="center">Lorem, ipsum dolor.</Typography>
        <Box>
            <Button variant="outlined"> <FaEdit fontSize={"large"}/></Button>
            <Button variant="outlined"><MdDeleteForever fontSize={"large"}/></Button>
            <Button variant="outlined"> <HiClipboardCheck fontSize={"large"}/></Button>
        </Box>
    </Box> */}
    </>
  );
};

export default ProjectList;
