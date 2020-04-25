import axios from 'axios';

const makeUrl = (path: string) => `https://recipes-ccae2.firebaseio.com/${path}.json?auth=KdZC0TV3sNDv7pkNLfyYyT6um8bjFm84GUYqcxPl`;

export const fbget = (path: string = '') => axios.get(makeUrl(path));
