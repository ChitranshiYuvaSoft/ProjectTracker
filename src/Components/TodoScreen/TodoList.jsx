import { Box, Button, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { todoEdit, todoRemove } from "../../Redux/Todos/todoSlice";

const TodoList = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const handleDelete = (_id) => {
    dispatch(todoRemove(_id));
  };
  const handleEdit = (todo) => {
    dispatch(todoEdit(todo));
  };
  const handleCheck = () => {
    setIsChecked(true);
  };
  return (
    <>
      <ListItem
        sx={{
          width: "100%",
          height: "5rem",
          border: ".1rem solid #C1CADC",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBlock: ".2rem",
        }}
      >
        <Box>
          <Typography  variant="h6" className={`${isChecked?"text-decoration-line-through":""}`}>{todo.title}</Typography>
        </Box>
        <Box>
          <Button variant="contained" className={`${!isChecked?"btn btn-warning m-2":"btn btn-warning m-2 disabled"}`} onClick={() => handleEdit(todo)}>
            {" "}
            <FaEdit fontSize={"large"} />
          </Button>
          <Button
            variant="contained"
            color="error"
            className={`${!isChecked?"btn btn-danger m-2":"btn btn-danger m-2 disabled"}`}
            onClick={() => handleDelete(todo._id)}
          >
            <MdDeleteForever fontSize={"large"} />
          </Button>
          <Button variant="contained" color="success" className={`${!isChecked?"btn btn-success m-2":"btn btn-success m-2 disabled"}`}>
            {" "}
            <HiClipboardCheck fontSize={"large"} onClick={handleCheck} />
          </Button>
        </Box>
      </ListItem>
    </>
  );
};

export default TodoList;
