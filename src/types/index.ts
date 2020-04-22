export interface Store {
	search: SearchState,
	slideIn: SlideInState;
}

export interface SearchState {
	isActive: boolean;
	text?: string;
	tags?: string[];
	time?: number;
	results: Recipe[]; // mozda ne ceo rezultat, samo id
}

export interface SlideInState {
	isActive: boolean;
}

export enum RecipeContentType {
	INGREDIENTS = 'ingredients',
	PARAGRAPH = 'paragraph',
	YOUTUBE = 'youtube',
	LINK = 'link',
}

export interface RecipeContent {
	type: RecipeContentType;
	key?: string;
	title?: string;
	content?: string;
}

export interface Recipe {
	id: string;
	title: string;
	titleAlt: string; // generisan i normalizovan za search
	subtitle?: string;
	imageUrl: string;
	time?: number;
	tags: string[];
	content: RecipeContent[];
}
