import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userPublicInfoSlice = createSlice({
    name: "userPublicInfo",
    initialState,
    reducers: {
        setUserPublicInfo: (state, action) => {
            return action.payload;
        }
    },
})

export const { setUserPublicInfo } = userPublicInfoSlice.actions;

export default userPublicInfoSlice.reducer;