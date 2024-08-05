import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoData: [],
  eidt: { todo: {}, isEdit: false },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoRemove: (state, action) => {
      return {
        ...state,
        todoData: state.todoData.filter((item) => item._id !== action.payload),
      };
    },
    todoRemoveByFeature: (state, action) => {
      return {
        ...state,
        todoData: state.todoData.filter(
          (item) => item.feature_id !== action.payload
        ),
      };
    },
    todoRemoveByProject: (state, action) => {
      return {
        ...state,
        todoData: state.todoData.filter((item) => {
          if (
            (!item.project_id || item.project_id != action.payload) &&
            (!item.feature_id || item.feature_id != action.payload)
          ) {
            return item;
          }
        }),
      };
    },
    todoCreate: (state, action) => {
      return {
        ...state,
        todoData: [action.payload, ...state.todoData],
      };
    },
    todoEdit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },
    todoUpdate: (state, action) => {
      return {
        ...state,
        todoData: state.todoData.map((item) =>
          item?._id === action.payload?._id ? action.payload : item
        ),
        edit: { todo: {}, isEdit: false },
      };
    },
  },
  extraReducers: (builder) => {},
});

export const {
    todoCreate,
    todoRemove,
    todoEdit,
    todoRemoveByFeature,
    todoRemoveByProject,
    todoUpdate,
} = todoSlice.actions;

export default todoSlice.reducer;
