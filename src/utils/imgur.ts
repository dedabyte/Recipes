export const isImgur = (imageUrl:  string) => imageUrl.includes('imgur.com');

export const getOriginal = (imageUrl: string) => imageUrl.replace('imgur.com', 'i.imgur.com') + '.jpg';

export const getThumbnail = (imageUrl: string) => imageUrl.replace('imgur.com', 'i.imgur.com') + 's.jpg';
