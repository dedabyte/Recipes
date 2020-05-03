import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sortBy from 'lodash/sortBy';
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
			const sortedData = sortBy(action.payload.data, ['title']);
			state.isLoading = false;
			state.isError = false;
			state.data = sortedData;
			ls.set(LsKeys.DATA, sortedData);
		},
		dataError(state: DataState) {
			state.isLoading = false;
			state.isError = true;
		},
	}
});

export const { dataRequest, dataSuccess, dataError } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
