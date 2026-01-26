    import {createSlice, current} from "@reduxjs/toolkit"
    const initialState={
        data: null,
    loading: false,
    error: null,
    }

    const userSlice=createSlice({
        name:"users",
        initialState,
        reducers:{
        fetchUserRequested(state) {
        state.loading = true;
        state.error = null;
        console.log("Updated State:", current(state));
    },
    fetchUserSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        // console.log("Updated State:", current(state));
        },
        fetchUserFailed(state, action) {
        state.loading = false;
        state.error = action.payload;
        },
        },
        

    });




    export const {
    fetchUserRequested,
    fetchUserSuccess,
    fetchUserFailed,
    } = userSlice.actions;
    export default userSlice.reducer