import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CoursesT } from "../../types/Types"
import { createCourseThunk, fetchAllCoursesThunk, fetchAllCoursesbyInstructor, updateCourseThunk } from "./CourseApi"

interface InitialState {
  AllCourses : CoursesT[]
  instructorCourses : CoursesT[]
  selectedCourse : CoursesT | null
  modalVisibility : boolean
  formType : "ADD" | "UPDATE"
  loading : boolean
}

const initialState : InitialState = {
  AllCourses : [],
  instructorCourses: [],
  modalVisibility : false,
  selectedCourse : null,
  formType : "ADD",
  loading : false,
}

const CoursesSlice = createSlice({
  name : 'playlist',
  initialState,
  reducers : {
    closeModal : (state, actions : PayloadAction) => {
      state.modalVisibility = !state.modalVisibility
    },
    selectPlaylist : (state, actions : PayloadAction<CoursesT>) => {
      state.selectedCourse = actions.payload;
    },
    updatePlaylit : (state, actions : PayloadAction) => {
      state.formType = "UPDATE"
      state.modalVisibility = !state.modalVisibility
    },
    addPlaylist : (state, actions : PayloadAction) => {
      state.formType = "ADD"
      state.modalVisibility = !state.modalVisibility
    }
  },
  extraReducers : (builder) => {
    builder.addCase(fetchAllCoursesThunk.pending, (state, action) => {
      console.log("pending")
      state.loading = true
    })
    .addCase(fetchAllCoursesThunk.fulfilled, (state, action) => {
      console.log('fulfilled');
      state.loading = false
      state.AllCourses = action.payload
    })
    .addCase(fetchAllCoursesThunk.rejected, (state, action) => {
      state.loading = false
    })
    .addCase(fetchAllCoursesbyInstructor.pending, (state, action) => {
      state.loading = true
    })
    .addCase(fetchAllCoursesbyInstructor.fulfilled, (state, action) => {
      state.loading = false
      state.instructorCourses = action.payload
    })
    .addCase(fetchAllCoursesbyInstructor.rejected, (state, action) => {
      state.loading = false
      console.log(action.error)
    })
  }
})

export const { selectPlaylist, addPlaylist, updatePlaylit, closeModal} = CoursesSlice.actions;
export default CoursesSlice.reducer;
