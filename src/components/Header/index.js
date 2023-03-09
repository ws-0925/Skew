import LogoDark from '../../assets/images/logo.png';
import LogoLight from '../../assets/images/logo-light.svg';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import styled from '@emotion/styled';
import DefaultProfileImage from '../../assets/images/default-profile.png';
import { CustomSwitch } from '../Swtich';
import { CustomBox } from '../../utils/CustomBox';
import { useStore } from '../../Context/StoreContext';

const NavWrapper = styled('div')`
	display: flex;
	justify-content: space-around;

	${({ theme }) => theme.breakpoints.down('md')} {
		display: none;
	}
`;

const ProfileButton = styled(Button)`
	display: flex;

	${({ theme }) => theme.breakpoints.down('md')} {
		display: none;
	}
`;

const CustomButton = styled(Button)`
	display: flex;

	${({ theme }) => theme.breakpoints.down('md')} {
		display: none;
	}
`;

const NavItem = ({ children }) => {
	return (
		<Link
			sx={{
				color: '#37485D',
				px: '10px',
				fontSize: '16px',
				textDecoration: 'none',
				fontWeight: 400,
			}}
		>
			{children}
		</Link>
	);
};

const Header = () => {
	const { isMode } = useStore();
	return (
		<CustomBox
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				padding: '10px',
				maxWidth: '1600px',
				borderRadius: '32px',
				px: '20px',
			}}
			width={{ md: '90%', lg: '80%', xs: '80%' }}
		>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<img src={isMode === 'dark' ? LogoDark : LogoLight} alt="logo" />
				<Typography
					sx={{
						color: '#38B6FF',
						fontSize: '16px',
						fontWeight: 700,
						py: '25px',
						verticalAlign: 'Bottom',
						alignItems: 'left',
						pb: '0px',
						pl: '16px',
						pr: '25px',
					}}
				>
					TVL $5.91M
				</Typography>
			</Box>
			<CustomSwitch title={'toggle1'} />
			<NavWrapper>
				<NavItem>Vaults</NavItem>
				<NavItem>Analytics</NavItem>
				<NavItem>Lottery</NavItem>
				<NavItem>Community</NavItem>
				<NavItem>Resources</NavItem>
			</NavWrapper>
			<CustomButton
				sx={{
					borderRadius: '64px',
					padding: '10px 25px',
					color: '#38B6FF',
					border: '1px solid grey',
					fontSize: '16px',
					fontWeight: 400,
					textTransform: 'none',
				}}
			>
				Connect Wallet
			</CustomButton>
		</CustomBox>
	);
};

export default Header;
