import getConfig from 'next/config';

export const cdn = (): string => {
	const { host, version, cdn } = getConfig().publicRuntimeConfig;
	return cdn ? host + version : '';
};
