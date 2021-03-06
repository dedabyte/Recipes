import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../types';
import { Image } from '../../Image';
import { RecipeContentProps } from '../types';
import c from './YouTube.module.scss';

const getYTId = (url: string) => {
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	const match = url.match(regExp);

	return (match && match[2].length === 11)
		? match[2]
		: null;
};

const getEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`;

const getCoverUrl = (id: string) => `https://i1.ytimg.com/vi/${id}/0.jpg`;

const selectIsActive = (s: Store) => s.slideIn.isActive;

export const YouTube: FC<RecipeContentProps> = ({ recipeContent }) => {
	const isActive = useSelector<Store, boolean>(selectIsActive);

	const [play, setPlay] = useState(false);

	// to stop video when slideIn is closed
	useEffect(() => {
		if (!isActive) {
			setPlay(false);
		}
	}, [isActive]);

	const { content } = recipeContent;

	if (!content) {
		return null;
	}

	const id = getYTId(content);

	if (!id) {
		return null;
	}

	const playVideo = () => setPlay(true);

	const renderCover = () => (
		<div className={c.cover} onClick={playVideo}>
			<Image url={getCoverUrl(id)} klass={c.coverImage}/>
			<div className={c.coverOverlay}>
				<div className={c.playIcon}/>
			</div>
		</div>
	);

	const renderIframe = () => <iframe src={getEmbedUrl(id)} frameBorder="0"
																		 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
																		 allowFullScreen
																		 title="youtube iframe"/>;

	return (
		<div className={c.wrap}>
			<div className={c.videoContainer}>
				{play ? renderIframe() : renderCover()}
			</div>
		</div>
	);
};
