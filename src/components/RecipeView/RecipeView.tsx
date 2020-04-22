import React, { FC } from 'react';
import { Recipe, RecipeContent, RecipeContentType } from '../../types';
import { getOriginal } from '../../utils/imgur';
import { Image } from '../Image';
import { TagList } from '../TagList';
import { Ingredients } from './Ingredients';
import { Paragraph } from './Paragraph';
import c from './RecipeView.module.scss';
import { YouTube } from './YouTube';

interface Props {
	recipe: Recipe;
}

const renderRecipeContent = (recipeContent: RecipeContent) => {
	switch (recipeContent.type) {
		case RecipeContentType.INGREDIENTS:
			return <Ingredients recipeContent={recipeContent} key={recipeContent.key}/>;
		case RecipeContentType.YOUTUBE:
			return <YouTube recipeContent={recipeContent} key={recipeContent.key}/>;
		case RecipeContentType.PARAGRAPH:
			return <Paragraph recipeContent={recipeContent} key={recipeContent.key}/>;
		default:
			return null;
	}
};

export const RecipeView: FC<Props> = ({ recipe }) => {
	return (
		<div className={c.wrap}>
			<Image klass={c.image} url={getOriginal(recipe.imageUrl)}/>
			<div className={c.title}>{recipe.title}</div>
			<TagList keyPrefix={'recipe'} tags={recipe.tags} klass={c.tags}/>
			<div className={c.contentWrap}>
				{
					recipe.content.map(content => renderRecipeContent(content))
				}
			</div>
		</div>
	);
};
