import { configureStore } from "@reduxjs/toolkit";
import {songsReducer, addSong, removeSong} from "./slices/songSlice";
import {moviesReducer, addMovie, removeMovie} from "./slices/movieSlice";
import  resetAction  from './actions/resetAction';


const store = configureStore({
    reducer :{
        songs: songsReducer,
        movies: moviesReducer
    }
});

/*instead of manually creating action types we create dispatch using actions
store.dispatch({
    type: "song/addSong",
    payload:"new song",
}); */

// store.dispatch(songSlice.actions.addSong("sample song"));
// store.dispatch(movieSlice.actions.addMovie());

export {store};
export {addSong, removeSong, addMovie, removeMovie};
export {resetAction};


