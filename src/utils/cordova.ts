export const initDeviceReady = () => {
	document.addEventListener('deviceready', onDeviceReady, false);
};

const onDeviceReady = () => {
	// console.log('onDeviceReady');
	document.addEventListener('backbutton', onBackKey, false);
};

const onBackKey = (e: any) => {
	// console.log('onBackKey');
	if (backKeyHandler !== noop) {
		// console.log('onBackKey IF');
		e.preventDefault();
		backKeyHandler();
		backKeyHandler = noop;
	} else {
		return true;
	}
};

const noop = () => {};

let backKeyHandler: () => void = noop;

export const setBackKeyHandler = (handler: () => void) => {
	backKeyHandler = handler;
};
