import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: false,
        userData: {},
    },
    reducers: {
        setUserData(state, action) {
            state.userData = action.payload;
            state.login = true;
        }
    }
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
