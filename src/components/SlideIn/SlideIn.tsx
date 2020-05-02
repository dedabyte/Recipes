import cls from 'classnames';
import React, { FC, useEffect, useRef } from 'react';
import { setBackKeyHandler } from '../../utils/cordova';
import { useSlideInModel } from './SlideIn.model';
import c from './SlideIn.module.scss';

export const SlideIn: FC = () => {
	const { isActive, component, deactivate } = useSlideInModel();

	const wrapRef = useRef(null);

	const handleBack = () => {
		deactivate();
		setBackKeyHandler();
	};

	// on component change, scroll up and attach back-key handler
	useEffect(
		() => {
			if (wrapRef && wrapRef.current) {
				// @ts-ignore
				wrapRef.current.scrollTo(0, 0);
			}
			setBackKeyHandler(handleBack);
		},
		[component]
	);

	const classNameComponent = cls(c.wrap, isActive && c.active);
	const classNameBack = cls(c.back, isActive && c.active);

	return (
		<>
			<div className={classNameComponent} ref={wrapRef}>{component}</div>
			<div className={classNameBack} onClick={handleBack}/>
		</>
	);
};
