import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deactivate } from '../../reducers/slideIn';
import { Store } from '../../types';
import { getComponent } from './service';

export const useSlideInModel = () => {
	const dispatch = useDispatch();

	const isActive = useSelector<Store, boolean>(state => state.slideIn.isActive);

	return {
		isActive,
		component: getComponent(),
		deactivate: useCallback(() => dispatch(deactivate()), [dispatch]),
	};
};
