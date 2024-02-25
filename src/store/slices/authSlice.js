import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: false,
        userData: {},
    },
    reducers: {
        logIn(state, action) {
            state.userData = action.payload;
            state.login = true;
        }
    }
});

export const { logIn } = authSlice.actions;

export default authSlice.reducer;
