import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { recipes } from '../../data';
import { activate } from '../../reducers/slideIn';
import { Recipe } from '../../types';
import { getThumbnail } from '../../utils/imgur';
import { Image } from '../Image';
import { RecipeView } from '../RecipeView';
import { TagList } from '../TagList';
import c from './ListItem.module.scss';

interface Props {
	id: string;
	title: string;
	imageUrl: string;
	tags?: string[];
}

export const ListItem: FC<Props> = (
	{
		id,
		title,
		imageUrl,
		tags = [],
	}
) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		const recipe = recipes.find(r => r.id === id) as Recipe;
		dispatch(activate(<RecipeView recipe={recipe}/>));
	};

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
