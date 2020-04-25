import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deactivate } from '../../reducers/slideIn';
import { Store } from '../../types';
import { getComponent } from './service';

const selectIsActive = (s: Store) => s.slideIn.isActive;

export const useSlideInModel = () => {
	const dispatch = useDispatch();

	const isActive = useSelector<Store, boolean>(selectIsActive);

	return {
		isActive,
		component: getComponent(),
		deactivate: useCallback(() => dispatch(deactivate()), [dispatch]),
	};
};
