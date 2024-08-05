import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featureData: [],
  eidt: { feature: {}, isEdit: false },
};

const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    // FEATURE CRUD
    featureRemove: (state, action) => {
      return {
        ...state,
        featureData: state.featureData.filter(
          (item) => item?._id !== action.payload
        ),
      };
    },
    featureRemoveByProject: (state, action) => {
      return {
        ...state,
        featureData: state.featureData.filter(
          (item) => item._id != action.payload
        ),
        featureData: state.featureData.filter(
          (item) => item.project_id != action.payload
        ),
      };
    },
    featureCreate: (state, action) => {
      const newProject = action.payload;
      return {
        ...state,
        featureData: [newProject, ...state.featureData],
      };
    },
    featureEdit: (state, action) => {
      return {
        ...state,
        edit: { feature: action.payload, isEdit: true },
      };
    },
    featureUpdate: (state, action) => {
      return {
        ...state,
        featureData: state.featureData.map((item) =>
          item?._id === action.payload?._id ? action.payload : item
        ),
        edit: { feature: {}, isEdit: false },
      };
    },
  },
  extraReducers: (builder) => {},
});

export const {featureCreate, featureEdit, featureRemove, featureUpdate, featureRemoveByProject} = featureSlice.actions;

export default featureSlice.reducer;
