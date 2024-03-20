import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CoursesT } from "../../types/Types"
import { fetchAllCoursesThunk } from "./CourseApi"

interface InitialState {
  courses : CoursesT[]
  selectedCourse : CoursesT | null
  modalVisibility : boolean
  formType : "ADD" | "UPDATE"
  loading : boolean
}

const initialState : InitialState = {
  courses : [],
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
      state.courses = action.payload
    })
    .addCase(fetchAllCoursesThunk.rejected, (state, action) => {
      console.log('rejected');
      state.loading = false
    })
  }
})

export const { selectPlaylist, addPlaylist, updatePlaylit, closeModal} = CoursesSlice.actions;
export default CoursesSlice.reducer;
