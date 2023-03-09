import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routerConfig } from '../utils/constants';
import HomePage from '../pages/HomePage';

const RootRouter = () => {
	return (
		<Routes>
			<Route path={`/${routerConfig.landing}`} element={<HomePage />} />
		</Routes>
	);
};

export default RootRouter;
