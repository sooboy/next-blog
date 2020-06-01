import React from 'react';
import { NextPage } from 'next';

import { cdn } from '@Common/utils/cdn';

const IndexPage: NextPage = () => {
	return <img src={`${cdn()}/static/images/test.png`} />;
};

export default IndexPage;
