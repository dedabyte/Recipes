import React, { FC } from 'react';
import { RecipeContentProps } from '../types';
import c from './Ingredients.module.scss';

const parseContent = (content?: string) => {
	const parsedContent: Array<{ quantity: string | null, value: string }> = [];

	if (!content) {
		return parsedContent;
	}

	content.split('\n').forEach(row => {
		row = row.trim();
		if (!row) {
			return;
		}

		const split = row.split(':');
		if (split.length === 1) {
			parsedContent.push({ quantity: null, value: split[0] });
		} else {
			const quantity = split[0].trim();
			split.shift();
			const value = split.join(':').trim();
			parsedContent.push({ quantity, value });
		}
	});

	return parsedContent;
};

export const Ingredients: FC<RecipeContentProps> = ({ recipeContent }) => {
	const { title = 'Sastojci', content } = recipeContent;
	const parsedContent = parseContent(content);

	return (
		<div className={c.wrap}>
			<div className={c.title}>{title}</div>
			<table className={c.table}>
				<tbody>
				{
					parsedContent.map((row, i) => (
						<tr key={`${recipeContent.id}-ingredient-${i}`}>
							<td className={c.quantity}>{row.quantity}</td>
							<td className={c.value}>{row.value}</td>
						</tr>
					))
				}
				</tbody>
			</table>
		</div>
	);
};
