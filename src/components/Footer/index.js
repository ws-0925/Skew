import { Box, Button, Grid, IconButton, Link, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useStore } from '../../Context/StoreContext';
import Logo from '../../assets/images/footer_logo.svg';
import LogoDark from '../../assets/images/footer-logo-dark.svg';
import Telegram from '../../assets/images/Telegram.svg';
import Twitter from '../../assets/images/Twitter.svg';
import Discord from '../../assets/images/Discord.svg';
import Reddit from '../../assets/images/Reddit.svg';
import Instagram from '../../assets/images/Instagram.svg';
import Tiktok from '../../assets/images/Tiktok.svg';
import Youtube from '../../assets/images/Youtube.svg';
import Facebook from '../../assets/images/Facebook.svg';

const SocialLink = styled(Link)`
	padding: 10px;
`;

const Footer = () => {
	const { isMode } = useStore();
	return (
		<>
			<Box margin="auto" mt="50px" width="90%">
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<img src={isMode === 'light' ? Logo : LogoDark} alt="logo"></img>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<SocialLink href="https://t.me/+l7XekS2BSho0YzJk">
							<img src={Telegram} alt="Telegram" />
						</SocialLink>
						<SocialLink href="https://twitter.com/skew_fi">
							<img src={Twitter} alt="Twitter" />
						</SocialLink>
						<SocialLink href="https://discord.gg/4PGJmtvx4W">
							<img src={Discord} alt="Discord" />
						</SocialLink>
						<SocialLink href="https://www.facebook.com/profile.php?id=100089794132173">
							<img src={Facebook} alt="Facebook" />
						</SocialLink>
						<SocialLink href="https://www.tiktok.com/@skew_fi/">
							<img src={Tiktok} alt="Tiktok" />
						</SocialLink>
						<SocialLink href="https://www.instagram.com/skew_fi/">
							<img src={Instagram} alt="Instagram" />
						</SocialLink>
						<SocialLink href="https://www.youtube.com/channel/UCgmnISyf4rh-v1fgTZEChHg">
							<img src={Youtube} alt="Youtube" />
						</SocialLink>
						<SocialLink href="https://www.reddit.com/r/SkewCrypto/">
							<img src={Reddit} alt="Reddit" />
						</SocialLink>
						<Button
							variant="contained"
							sx={{
								backgroundColor: '#38B6FF',
								p: '10px 25px',
								borderRadius: '64px',
								color: 'white',
								textTransform: 'none',
								fontSize: '16px',
								fontWeight: 400,
								lineHeight: '24px',
							}}
						>
							Learn more
						</Button>
					</Box>
				</Box>
				<Grid
					container
					columns={30}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					rowSpacing={3}
					my="50px"
				>
					<Grid item md={6} sm={10} ls={15}>
						<Typography fontSize="16px" fontWeight={700}>
							Strategies
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Arbitrage
						</Typography>
					</Grid>
					<Grid item md={6} sm={10} ls={15}>
						<Typography fontSize="16px" fontWeight={700}>
							Analytics
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Strategy Data
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Vaults
						</Typography>
					</Grid>
					<Grid item md={6} sm={10} ls={15}>
						<Typography fontSize="16px" fontWeight={700}>
							Lottery
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Tickets
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							How to Play
						</Typography>
					</Grid>
					<Grid item md={6} sm={10} ls={15}>
						<Typography fontSize="16px" fontWeight={700}>
							Resources
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Blog
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Contact
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Docs
						</Typography>
					</Grid>
					<Grid item md={6} sm={10} ls={15}>
						<Typography fontSize="16px" fontWeight={700}>
							Dashboard
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Summary
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Pairing
						</Typography>
						<Typography fontSize="16px" fontWeight={400}>
							Refferrals
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box
				textAlign="center"
				py="20px"
				bgcolor={isMode === 'dark' ? '#242424' : '#2D3237'}
				color="white"
			>
				<Typography fontSize="20px" fontWeight={500}>
					@2023 Skew. All rights reserved.
				</Typography>
			</Box>
		</>
	);
};

export default Footer;
