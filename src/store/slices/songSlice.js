import {createSlice } from "@reduxjs/toolkit";
import  resetAction  from '../actions/resetAction';


const songSlice = createSlice({
    name:"song",
    initialState:[],
    reducers:{
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state,action){
          state.splice(state.indexOf(action.payload),1); 
        }
    },
    extraReducers(builder){
        builder.addCase(resetAction, (state,action) => {
            return [];
        })
    }
});

export const {addSong, removeSong} = songSlice.actions;
export const songsReducer = songSlice.reducer;
