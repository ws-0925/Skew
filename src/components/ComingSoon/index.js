import styled from '@emotion/styled';
import { Box, Button, Link } from '@mui/material';
import ReactPlayer from 'react-player';

const VideoWrapper = styled('div')`
	margin: 30px 0;
	width: 550px;
	height: 330px;
	background-color: black;
	border-radius: 32px;

	${({ theme }) => theme.breakpoints.down('sm')} {
		width: 90%;
	}
`;

const ComingSoon = () => {
	return (
		<Box
			sx={{
				fontSize: '64px',
				fontWeight: 300,
				color: 'white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Box sx={{ textAlign: 'center' }}>Coming Soon</Box>
			<VideoWrapper>
				<ReactPlayer
					width={'100%'}
					height="100%"
					controls={true}
					url="https://www.youtube.com/watch?v=b0EbiUFzHzY"
				/>
			</VideoWrapper>
		</Box>
	);
};

export default ComingSoon;
