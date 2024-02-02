import { configureStore } from "@reduxjs/toolkit";
import userPublicInfoSlice from "./slices/userPublicInfoSlice";

export const store = configureStore({
    reducer: {
        userPublicInfo: userPublicInfoSlice
    }
});