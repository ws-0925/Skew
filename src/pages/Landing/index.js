import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import BackgroundImage from '../../assets/images/Landing-Background.png';
import BackgroundImageMob from '../../assets/images/Landing-Background-Mobile.png';
import ComingSoon from '../../components/ComingSoon';
import Subscribe from '../../components/Subscribe';
import SocialLinks from '../../components/SocialLinks';

const LandingPage = () => {
	return (
		<Box
			sx={{
				backgroundImage: { xs: `url(${BackgroundImageMob})`, md: `url(${BackgroundImage})` },
				backgroundSize: 'cover',
				pt: '32px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
			}}
		>
			<Header />
			<Box
				sx={{
					width: '100px',
					height: '32px',
				}}
			/>
			<ComingSoon />
			{/* <Subscribe /> */}
			<SocialLinks />
			<Box
				sx={{
					width: '100px',
					height: '200px',
				}}
			/>
			<Typography
				sx={{
					color: 'white',
					fontSize: '20px',
					fontWeight: 500,
					py: '25px',
				}}
			>
				@ 2023 Skew. All rights reserved.
			</Typography>
		</Box>
	);
};

export default LandingPage;
