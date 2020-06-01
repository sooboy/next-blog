export const isPC = (ua: string | undefined): boolean => {
	if (!ua) {
		return true;
	}
	const Agents: string[] = new Array(
		'SymbianOS',
		'Windows Phone',
		'Android',
		'iPhone',
		'iPad',
		'iPod'
	);
	let flag = true;
	Agents.map(item => {
		if (ua.indexOf(item) > 0) {
			flag = false;
		}
	});
	return flag;
};

export const getMobileSystem = (ua: string): string => {
	if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
		return 'Android';
	} else if (
		ua.indexOf('iPhone') > -1 ||
		ua.indexOf('iPod') > -1 ||
		ua.indexOf('iPad') > -1 ||
		ua.indexOf('iOS') > -1
	) {
		return 'iOS';
	} else {
		return 'Other';
	}
};
