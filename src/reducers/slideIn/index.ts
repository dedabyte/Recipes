import { createSlice } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { setComponent } from '../../components/SlideIn/service';
import { SlideInState } from '../../types';

const initialState: SlideInState = {
	isActive: false,
};

const slideInSlice = createSlice({
	name: 'slideIn',
	initialState,
	reducers: {
		activate: {
			reducer(state: SlideInState) {
				state.isActive = true;
			},
			prepare(component: ReactElement) {
				setComponent(component);
				return { payload: null };
			}
		},
		deactivate(state: SlideInState) {
			state.isActive = false;
		}
	}
});

export const { activate, deactivate } = slideInSlice.actions;

export const slideInReducer = slideInSlice.reducer;
