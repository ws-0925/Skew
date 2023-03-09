import styled from '@emotion/styled';
import { Box, Link, Typography } from '@mui/material';
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

const TypoWrapper = styled('div')`
	display: none;

	${({ theme }) => theme.breakpoints.down('md')} {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const SocialLinks = () => {
	return (
		<Box
			sx={{
				paddingTop: '160px',
			}}
		>
			<Box
				sx={{
					color: 'white',
					fontSize: { xs: '16px', md: '24px' },
					fontWeight: 400,
					textAlign: 'center',
					fontFamily: 'Poppins',
					flexWrap: 'wrap',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				To stay up to date, follow us on our social media platforms
			</Box>
			<Box
				sx={{
					display: 'flex',
					marginTop: '40px',
					flexWrap: 'wrap',
					flexDirection: 'row',
					justifyContent: 'center',
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
			</Box>
		</Box>
	);
};

export default SocialLinks;
