import App, { AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import GoogleAnalysis from 'react-gtm-module';

import Style from './_app.scss';

type Props = {};
type State = {};

export default class Frame extends App<Props, {}, State> {
	static async getInitialProps({ Component, ctx }: AppContext) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = (await Component.getInitialProps(ctx)) || pageProps;
		}
		return { pageProps };
	}

	componentDidMount() {
		if (process.browser) {
			var Sa = require('@smm/sa/dist/sa/sa');
			Sa.DefaultSa.send_log_events();
		}
		// GoogleAnalysis.initialize({ gtmId: 'GTM-MJB3CXF' });  // 中文站
		// GoogleAnalysis.initialize({ gtmId: 'GTM-T43JWSX' });  // 英文站
	}

	render() {
		const { pageProps, Component } = this.props;

		return (
			<>
				<Head>
					<title>SMM</title>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
					/>
				</Head>
				<div className={Style.frame}>
					<Component {...pageProps} />
				</div>
			</>
		);
	}
}
