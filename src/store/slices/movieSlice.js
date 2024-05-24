import {createSlice } from "@reduxjs/toolkit";
import  resetAction  from '../actions/resetAction';


const movieSlice = createSlice({
    name:"movie",
    initialState:[],
    reducers:{
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state,action){
          state.splice(state.indexOf(action.payload),1); 
        }
    },
    extraReducers(builder){
        builder.addCase(resetAction, (state,action) => {
        // builder.addCase(songSlice.actions.reset, (state,action) => {
            // builder.addCase("song/reset", (state,action) => { // since we can make typos for adding song/reset we can use the above method
            return [];
        })
    }
});

export const {addMovie, removeMovie} = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;