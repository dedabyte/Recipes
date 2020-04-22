import { combineReducers } from 'redux';
import { slideInReducer } from './slideIn';

export const rootReducer = combineReducers({
	slideIn: slideInReducer,
});
