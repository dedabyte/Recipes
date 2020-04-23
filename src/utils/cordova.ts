export const initDeviceReady = () => {
	document.addEventListener('deviceready', onDeviceReady, false);
};

const onDeviceReady = () => {
	document.addEventListener('backbutton', onBackKey, false);
};

const onBackKey = (e: any) => {
	if (backKeyHandler !== noop) {
		e.preventDefault();
		backKeyHandler();
		backKeyHandler = noop;
	}
};

const noop = () => {};

let backKeyHandler: () => void = noop;

export const setBackKeyHandler = (handler: () => void) => {
	backKeyHandler = handler;
};
