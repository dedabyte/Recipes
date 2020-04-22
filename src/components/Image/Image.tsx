import cls from 'classnames';
import React, { FC } from 'react';
import c from './Image.module.scss';

interface Props {
	url: string;
	klass?: string;
}

export const Image: FC<Props> = ({ url, klass }) => {
	const className = cls(c.wrap, klass);
	return (
		<div className={className} style={{ backgroundImage: `url(${url})` }}/>
	);
};
