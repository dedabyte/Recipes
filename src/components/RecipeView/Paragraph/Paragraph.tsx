import React, { FC } from 'react';
import { RecipeContentProps } from '../types';
import c from './Paragraph.module.scss';

const parseContent = (content?: string) => {
	const parsedContent: string[] = [];

	if (!content) {
		return parsedContent;
	}

	content.split('\n').forEach(p => {
		p = p.trim();
		if (!p) {
			return;
		}
		parsedContent.push(p);
	});

	return parsedContent;
};

export const Paragraph: FC<RecipeContentProps> = ({ recipeContent }) => {
	const { title = 'Priprema', content } = recipeContent;
	const parsedContent = parseContent(content);

	return (
		<div className={c.wrap}>
			<div className={c.title}>{title}</div>
			{
				parsedContent.map((p, i) => <p key={`${recipeContent.key}-paragraph-${i}`} className={c.p}>{p}</p>)
			}
		</div>

	);
};
