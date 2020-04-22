import cls from 'classnames';
import React, { FC } from 'react';
import c from './TagList.module.scss';

interface Props {
	tags?: string[];
	keyPrefix: string,
	klass?: string;
}

export const TagList: FC<Props> = ({ tags = [], keyPrefix, klass }) => {
	if (!tags.length) {
		return null;
	}

	const className = cls(c.wrap, klass);

	return (
		<div className={className}>{tags.map((tag, i) => <span className={c.tag}
																													 key={`tag-${keyPrefix}-${i}`}>{tag}</span>)}</div>
	);
};
