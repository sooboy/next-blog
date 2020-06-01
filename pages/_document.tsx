import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html>
				<Head>
					{/* 中文站 */}
					{/* <link
						rel="shortcut icon"
						type="image/x-icon"
						href="https://static.smm.cn/common.smm.cn/images/favicon.ico"
					/> */}
					{/* 英文站 */}
					{/* <link
						rel="shortcut icon"
						type="image/x-icon"
						href="https://static.metal.com/common.metal.com/images/favicon.ico"
					/> */}
					{/* 中文站电脑端 */}
					{/* <link
						rel="stylesheet"
						href="https://static.smm.cn/common.smm.cn/css/antd@3.25.2.min.css"
					/> */}
					{/* 中文站手机端 */}
					{/* <link
						rel="stylesheet"
						href="https://static.smm.cn/common.smm.cn/css/antd-mobile@2.3.1.min.css"
					/> */}
					{/* 英文站电脑端 */}
					{/* <link
						rel="stylesheet"
						href="https://static.metal.com/common.metal.com/css/antd@3.25.2.min.css"
					/> */}
					{/* 英文站手机端 */}
					{/* <link
						rel="stylesheet"
						href="https://static.metal.com/common.metal.com/css/antd-mobile@2.3.1.min.css"
					/> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
