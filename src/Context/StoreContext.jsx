import React, { createContext, useState, useContext, useEffect } from 'react';
import { localStorageGet, localStorageSet } from '../utils/LocalStorage';

const StoreContext = createContext(null);

const StoreProvider = (props) => {
	const [isMode, setMode] = useState(localStorageGet('colorMode'));

	const loadMode = () => {
		setMode(localStorageGet('colorMode') === '' ? 'dark' : localStorageGet('colorMode'));
	};

	const setColorMode = (val) => {
		setMode(val);
		localStorageSet('colorMode', val);
	};

	useEffect(() => {
		loadMode();
	}, []);

	return (
		<StoreContext.Provider
			value={{
				isMode,
				setMode: setColorMode,
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};

export default StoreProvider;

export const useStore = () => {
	const context = useContext(StoreContext);
	if (context === null) {
		throw new Error("can't find context");
	}
	return context;
};
