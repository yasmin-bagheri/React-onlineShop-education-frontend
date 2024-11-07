import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice= createSlice({
    name:"theme",
    initialState:{
        darkMode:JSON.parse(localStorage.getItem("darkMode"))
    },
    reducers:{
        toggleDarkMode(state){
            state.darkMode= !state.darkMode
            localStorage.setItem("darkMode",JSON.stringify(state.darkMode))
        }
    }

})

export const {toggleDarkMode} = ThemeSlice.actions
export default ThemeSlice.reducer