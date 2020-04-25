import { combineReducers } from 'redux';
import { dataReducer } from './data';
import { slideInReducer } from './slideIn';

export const rootReducer = combineReducers({
	slideIn: slideInReducer,
	data: dataReducer,
});
