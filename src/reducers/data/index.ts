import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ls, LsKeys } from '../../data/ls';
import { DataState, Recipe } from '../../types';

const initialState: DataState = {
	isLoading: false,
	isError: false,
	data: ls.get(LsKeys.DATA) || [],
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		dataRequest(state: DataState) {
			state.isLoading = true;
			state.isError = false;
		},
		dataSuccess(state: DataState, action: PayloadAction<{ data: Recipe[] }>) {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload.data;
			ls.set(LsKeys.DATA, action.payload.data);
		},
		dataError(state: DataState) {
			state.isLoading = false;
			state.isError = true;
		},
	}
});

export const { dataRequest, dataSuccess, dataError } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
