import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PlaylistT } from "../../types/Types"

interface InitialState {
  playlists : PlaylistT[]
  selectedPlaylist : PlaylistT | null
  modalVisibility : boolean
}

const initialState : InitialState = {
  playlists : [
    {
      id : "123123123123",
      url : '/assets/videos/video1.mp4',
      title : "video 1 title",
      description : "this is new video of how to",
      date : '2024-03-18',
      technologie : 'React js',
      img : "/assets/technologies/reactjs.png",
      videos : [
        {
          title : 'video 1',
          description : 'this is video 1',
          url : '/assets/videos/video1.mp4',
        }
      ],
    },
    {
      id : "456456456456",
      url : '/assets/videos/video2.mp4',
      title : "video 2 title",
      description : "what ever im just having fun",
      date : '2024-03-10',
      technologie : "Node js",
      img : "/assets/technologies/nodejs.png",
      videos : [
        {
          title : 'video 2',
          description : 'this is video2',
          url : '/assets/videos/video2.mp4',
        }
      ],
    }
  ],
  modalVisibility : false,
  selectedPlaylist : null,
}

const playlistSlice = createSlice({
  name : 'playlist',
  initialState,
  reducers : {
    showModal : (state, actions : PayloadAction) => {
      state.modalVisibility = !state.modalVisibility
    },
    selectPlaylist : (state, actions : PayloadAction<PlaylistT>) => {
      state.selectedPlaylist = actions.payload;
    },
  }
})

export const { selectPlaylist , showModal} = playlistSlice.actions;
export default playlistSlice.reducer;
