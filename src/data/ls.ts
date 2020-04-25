export enum LsKeys {
	DATA = 'data',
}

const prefix = 'recipes_';

const makeKey = (key: LsKeys) => `${prefix}${key}`;

const get = (key: LsKeys) => {
	const rawValue = localStorage.getItem(makeKey(key));
	return rawValue ? JSON.parse(rawValue) : null;
};

const set = (key: LsKeys, value: any) => {
	return localStorage.setItem(makeKey(key), JSON.stringify(value));
};

const rem = (key: LsKeys) => {
	return localStorage.removeItem(makeKey(key));
};

export const ls = {
	get,
	set,
	rem,
};
