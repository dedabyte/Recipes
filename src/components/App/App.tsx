import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fbget } from '../../data/axios';
import { dataSuccess } from '../../reducers/data';
import { Recipe, ResponseAllRecipes, Store } from '../../types';
import { ListItem } from '../ListItem';
import { SlideIn } from '../SlideIn';
import c from './App.module.scss';

const selectData = (s: Store) => s.data.data;

export const App: FC = () => {
	const data = useSelector<Store, Recipe[]>(selectData);

	const dispatch = useDispatch();

	// to get fresh data from fb
	useEffect(
		() => {
			fbget('recipes')
				.then(({ data }: ResponseAllRecipes) => {
					console.log(data);
					dispatch(dataSuccess({ data: Object.values(data) }));
				})
				.catch((error) => console.log(error));
		},
		[]
	);

	return (
		<div className={c.app}>
			<header>
			</header>
			<section>
				{data.map((r, i) => <ListItem key={`list-${r.id}`} recipe={r}/>)}
			</section>
			<SlideIn/>
		</div>
	);
};
