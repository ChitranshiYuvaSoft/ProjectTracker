import { Box, Button, ListItem, Typography } from "@mui/material";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { featureEdit, featureRemove } from "../../Redux/Features/featureSlice";
import { todoRemoveByFeature } from "../../Redux/Todos/todoSlice";

const FeatureList = ({feature, index, project_id}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project_id}/feature/${feature._id}/todo`);
  };

  const handleDelete = (_id) => {
    dispatch(featureRemove(_id));
    dispatch(todoRemoveByFeature(_id));
  };

  const handleEdit = (feature) => {
    dispatch(featureEdit(feature));
  };



  return (
    <>
      <ListItem sx={{ width: "100%", height:"5rem", border:".1rem solid #C1CADC", display:"flex", alignItems:"center", justifyContent:"space-between", marginBlock:".2rem"}}>
        <Box>
          <Typography onClick={() => handleClick()}>{feature.title}</Typography>
        </Box>
        <Box>
          <Button variant="outlined" onClick={() => handleEdit(feature)}>
            {" "}
            <FaEdit fontSize={"large"} />
          </Button>
          <Button variant="outlined" color="error"   onClick={() => handleDelete(feature._id)}>
            <MdDeleteForever fontSize={"large"}/>
          </Button>
          {/* <Button variant="outlined" color="success">
            {" "}
            <HiClipboardCheck fontSize={"large"} />
          </Button> */}
        </Box>
      </ListItem>
    </>
  );
};

export default FeatureList;
