import React, { FC } from 'react';
import { recipes } from '../../data';
import { ListItem } from '../ListItem';
import { SlideIn } from '../SlideIn';
import c from './App.module.scss';

export const App: FC = () => {
	return (
		<div className={c.app}>
			<header>
			</header>
			<section>
				{recipes.map((r, i) => <ListItem key={`list-${i}-${r.id}`} id={r.id} title={r.title} tags={r.tags}
																				 imageUrl={r.imageUrl}/>)}
			</section>
			<SlideIn/>
		</div>
	);
};
