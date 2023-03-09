/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';
import { useStore } from './Context/StoreContext';
/**
 * Material UI theme "front" colors, "back" colors are different for Light and Dark modes
 */
// allow configuration using `createTheme`
const FRONT_COLORS_LIGHT = {
	primary: {
		main: '#EEF2F4',
		contrastText: '#505B64',
	},
	secondary: {
		main: '#F6FCFE',
		contrastText: '#505B64',
	},
	info: {
		main: '#D7CBFF',
		contrastText: '#505B64',
	},
	success: {
		main: '#F5F0FC',
		contrastText: '#37086E',
	},
	warning: {
		main: '#FFA16F',
		contrastText: '#FFFFFF',
	},
	error: {
		main: '#FF6F6F',
		contrastText: '#FFFFFF',
	},
	danger: {
		main: '#FFFFFF',
		contrastText: '#12002E',
	},
	dark: {
		main: '#FAFAFA',
		contrastText: '#1A003E',
	},
	indicator: {
		main: '#38B6FF',
	},
};

const FRONT_COLORS_DARK = {
	primary: {
		main: '#1F1F1F',
		contrastText: '#FFFFFF',
	},
	secondary: {
		main: '#282828',
		contrastText: '#FFFFFF',
	},
	info: {
		main: '#12002E',
		contrastText: '#FFFFFF',
	},
	success: {
		main: '#37086E',
		contrastText: '#FFFFFF',
	},
	warning: {
		main: '#FFA16F',
		contrastText: '#FFFFFF',
	},
	error: {
		main: '#FF6F6F',
		contrastText: '#FFFFFF',
	},
	danger: {
		main: '#12002E',
		contrastText: '#FFFFFF',
	},
	dark: {
		main: '#1A003E',
		contrastText: '#FAFAFA',
	},
	indicator: {
		main: '#38B6FF',
	},
};

/**
 * Material UI theme config for "Light Mode"
 */
const LIGHT_THEME = {
	breakpoints: {
		values: {
			ls: 320,
			xs: 390,
			sm: 540,
			md: 768,
			lg: 1024,
			xl: 1366,
			mobile: 450,
			tablet: 640,
			laptop: 890,
			desktop: 1200,
		},
	},
	palette: {
		mode: 'light',
		background: {
			paper: '#EEF2F4',
			default: '#EEF2F4',
		},
		...FRONT_COLORS_LIGHT,
	},
};

/**
 * Material UI theme config for "Dark Mode"
 */
const DARK_THEME = {
	breakpoints: {
		values: {
			ls: 320,
			xs: 390,
			sm: 540,
			md: 768,
			lg: 1024,
			xl: 1366,
			mobile: 450,
			tablet: 640,
			laptop: 890,
			desktop: 1200,
		},
	},
	palette: {
		mode: 'dark',
		background: {
			paper: '#1F1F1F', // Gray 800 - Background of "Paper" based component
			default: '#1F1F1F',
		},
		...FRONT_COLORS_DARK,
	},
};

/**
 * Material UI Provider with Light and Dark themes depending on global "state.darkMode"
 */

const AppThemeProvider = (props) => {
	const { isMode } = useStore();
	// const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)));
	const theme = isMode === 'dark' ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /* Material UI Styles */ />
			{props.children}
		</ThemeProvider>
	);
};

export { AppThemeProvider, LIGHT_THEME, DARK_THEME };
