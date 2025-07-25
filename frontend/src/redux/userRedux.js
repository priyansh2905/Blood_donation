import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
	name : "user",
	initialState : {
		currentUser : null,
		isFetching : false,
		error : false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
			// state.error = false;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
			state.error = false;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logout: (state) => {
			state.currentUser = null;
			state.isFetching = false;
			state.error = false;
		}
	}
})
export const {loginFailure, loginStart, loginSuccess, logout} = userSlice.actions;
export default userSlice.reducer;