import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { activate } from '../../reducers/slideIn';
import { Recipe } from '../../types';
import { getThumbnail } from '../../utils/imgur';
import { Image } from '../Image';
import { RecipeView } from '../RecipeView';
import { TagList } from '../TagList';
import c from './ListItem.module.scss';

interface Props {
	recipe: Recipe;
}

export const ListItem: FC<Props> = ({ recipe }) => {
	const {
		title,
		imageUrl,
		tags = [],
	} = recipe;

	const dispatch = useDispatch();

	const handleClick = () => dispatch(activate(<RecipeView recipe={recipe}/>));

	return (
		<div className={c.wrap} onClick={handleClick}>
			<Image klass={c.image} url={getThumbnail(imageUrl)}/>
			<div className={c.data}>
				<div className={c.title}>{title}</div>
				<TagList tags={tags} keyPrefix={'listItem'} klass={c.tags}/>
			</div>
		</div>
	);
};
