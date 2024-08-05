import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    projectData : [],
    eidt: {project : {}, isEdit : false}
}

const projectSlice = createSlice({
    name : "project",
    initialState,
    reducers : {
        projectRemove: (state, action) => {
            return {
              ...state,
              projectData: state.projectData.filter(
                (item) => item._id !== action.payload
              ),
            };
          },
          projectCreate: (state, action) => {
            const newProject = action.payload;
            return {
              ...state,
              projectData: [...state.projectData,newProject],
            };
          },
          projectEdit: (state, action) => {
            return {
              ...state,
              edit: { project: action.payload, isEdit: true },
            };
          },
          projectUpdate: (state, action) => {
            return {
              ...state,
              projectData: state.projectData.map((item) =>
                item._id === action.payload._id ? action.payload : item
              ),
              edit: { project: {}, isEdit: false },
            };
          },
      
    },
    extraReducers : builder => {}
})


export const {projectCreate, projectEdit, projectRemove, projectUpdate} = projectSlice.actions;


export default projectSlice.reducer;