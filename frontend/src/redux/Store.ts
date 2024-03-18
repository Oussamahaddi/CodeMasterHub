import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Authentification/authSlice";
import PlaylistSlice from "../features/Playlist/PlaylistSlice";

const store = configureStore({
  reducer : {
    authentification : authSlice,
    playlist : PlaylistSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;