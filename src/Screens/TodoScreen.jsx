import { Box, Button, List, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoList from "../Components/TodoScreen/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { todoCreate, todoUpdate } from "../Redux/Todos/todoSlice";
import { RiEditFill } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";

const TodoScreen = () => {
  const { todoData, edit } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const { _id, _Feaid } = useParams();

  const dataTodo = todoData?.filter((item) => {
    if (item.feature_id == _Feaid && item.project_id == _id) {
      return item;
    }
  });

  // Todo Create And Update
  const [title, setTitle] = useState();
  const [editTitle, setEditTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title is mandatory!!");
    } else {
      dispatch(
        todoCreate({
          _id: crypto.randomUUID(),
          title: title,
          feature_id: _Feaid,
          project_id: _id,
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
        todoUpdate({
          _id: edit.todo._id,
          title: editTitle,
          project_id: _id,
          feature_id: _Feaid,
        })
      );
      setEditTitle("");
    }
  };
  useEffect(() => {
    setEditTitle(edit?.todo.title);
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
            TODO'S
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
                variant="filled"
                label="Enter Todo Name"
                type="text"
                fullWidth
                value={title || ""}
                name="title"
                required
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "1.5rem", height: "1.2rem" // Change this to your desired font size
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1rem", // Change this to your desired label font size
                  },
                }}
                // className="fs-5 fw-bold"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ paddingBlock: "1.5rem" }}
                onClick={handleSubmit}
              >
                <FiPlusCircle style={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
            <Box
              sx={{
                width: "85%",
                height: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                }}
              >
                {dataTodo.map((todo, index) => (
                  <TodoList key={index} todo={todo} index={index} />
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
                label="Update Todo Name"
                type="text"
                fullWidth
                value={editTitle || ""}
                name="editTitle"
                required
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ paddingBlock: "1.5rem" }}
                onClick={handleUpdate}
              >
                <RiEditFill style={{ fontSize: "1.5rem" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoScreen;
