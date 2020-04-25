import { Recipe } from '../types';

export const prepareData = (data: Recipe[]) => {
	data.forEach(recipe => {
		recipe.content.forEach((content, i) => {
			content.key = `recipe-${recipe.id}-${content.type}-${i}`;
			content.content = content.content?.replace(/\t/gi, '');
		});
	});
	return data;
};
