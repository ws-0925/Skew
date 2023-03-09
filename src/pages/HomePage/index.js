import { Box, Button, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AuditImage from '../../assets/images/audit.svg';
import LaptopImage from '../../assets/images/laptop.png';
import LaptopLightImage from '../../assets/images/laptop-light.png';
import PhoneImage from '../../assets/images/phone.png';
import PhoneLightImage from '../../assets/images/phone-light.png';
import SolImage from '../../assets/images/sol.svg';
import EthImage from '../../assets/images/eth.svg';
import ChartImage from '../../assets/images/Chart.svg';
import RectImage from '../../assets/images/Rectangle.svg';
import AvatarImage from '../../assets/images/avatar.png';
import HandImage from '../../assets/images/handshake.svg';
import ForumImage from '../../assets/images/forum.svg';
import DonutImage from '../../assets/images/donut_small.svg';
import TodayImage from '../../assets/images/today.svg';
import RectangleImage from '../../assets/images/Rectangle_small.svg';
import ArrwoIcon from '../../assets/images/arrow_icon.svg';
import ChatIcon from '../../assets/images/chat_bubble.svg';
import AutoRenewIcon from '../../assets/images/autorenew.svg';
import FavoriteIcon from '../../assets/images/favorite.svg';
import MoreIcon from '../../assets/images/more_horiz.svg';
import CircleImage from '../../assets/images/circle_blue.svg';
import CircleImage1 from '../../assets/images/circle_red.svg';
import StarRateIcon from '@mui/icons-material/StarRate';
import styled from '@emotion/styled';
import { Favorite, InfoOutlined, TempleHindu, Today } from '@mui/icons-material';
import { CustomBox } from '../../utils/CustomBox';
import { useStore } from '../../Context/StoreContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../../components/Footer';

const StarRate = styled(StarRateIcon)`
	fill: ${({ theme }) => theme.palette.secondary.contrastText};
`;

const RoundedImage = styled('img')`
	border-radius: 100px;
`;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const HomePage = () => {
	const { isMode } = useStore();
	const mode = isMode;
	const [tab, setTab] = useState(0);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
			}}
		>
			<Grid
				container
				sx={{ py: '100px', display: 'flex' }}
				width={{ ls: '90%', sm: '80%', md: '70%' }}
			>
				<Grid
					item
					md={6}
					sx={{
						alignContent: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							color: 'white',
							opacity: 0.4,
							fontSize: '14px',
							alignItems: 'start',
						}}
					>
						Audited By
						<img src={AuditImage} alt="audit" style={{ marginLeft: '20px', width: '182px' }} />
					</Box>
					<Typography
						sx={{
							fontSize: '50px',
							fontWeight: 700,
							mt: '10px',
						}}
					>
						Our Difference
					</Typography>
					<Typography
						sx={{
							fontSize: '50px',
							fontWeight: 700,
							color: '#38B6FF',
						}}
					>
						Your Value
					</Typography>
					<Typography
						sx={{
							fontSize: '16px',
							fontWeight: 400,
							mt: '20px',
						}}
					>
						Skew vaults pay rewards in the same cryptocurrency you deposit. Less risk, more
						potential returns.
					</Typography>
					<Box
						sx={{
							display: 'flex',
							mt: '40px',
						}}
					>
						<Button
							variant="contained"
							sx={{
								backgroundColor: '#38B6FF',
								borderRadius: '64px',
								color: 'white',
								p: '10px 25px',
								textTransform: 'none',
								gap: '10px',
							}}
						>
							Get Started
						</Button>
						<Button
							variant="contained"
							sx={{
								borderRadius: '64px',
								border: '1px solid grey',
								p: '10px 30px',
								fontSize: '16px',
								fontWeight: 400,
								textTransform: 'none',
								ml: '20px',
							}}
						>
							Learn More
						</Button>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							mt: '40px',
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: '32px',
									fontWeight: 700,
								}}
							>
								40M +
							</Typography>
							<Typography
								sx={{
									fontSize: '16px',
									fontWeight: 400,
									opacity: 0.48,
								}}
							>
								Total User Profits
							</Typography>
						</Box>
						<Box
							sx={{
								borderLeft: '2px solid white',
								opacity: 0.48,
								height: '27px',
								mx: '70px',
							}}
						/>
						<Box>
							<Typography
								sx={{
									fontSize: '32px',
									fontWeight: 700,
								}}
							>
								24K +
							</Typography>
							<Typography
								sx={{
									fontSize: '16px',
									fontWeight: 400,
									opacity: 0.48,
								}}
							>
								Total Users
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					md={6}
					sx={{
						alignItems: 'center',
						display: 'flex',
					}}
				>
					<img
						src={mode === 'dark' ? LaptopImage : LaptopLightImage}
						alt="computer"
						style={{
							width: '100%',
						}}
					/>
					<img
						src={mode === 'dark' ? PhoneImage : PhoneLightImage}
						alt="phone"
						style={{
							width: '40%',
							marginLeft: '-60%',
						}}
					/>
				</Grid>
			</Grid>
			<CustomBox
				sx={{
					p: '20px 0',
					backgroundColor: '#282828',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<CustomBox sx={{ color: 'white', fontSize: '32px', m: 'auto', pt: '40px' }}>
					YOUR SOLUTION
				</CustomBox>
				<CustomBox
					sx={{
						color: 'white',
						fontSize: '48px',
						fontWeight: 700,
						m: 'auto',
						p: '10px 10px',
						textAlign: 'center',
					}}
				>
					Select a strategy vault that matches
					<br /> your risk appetite in <span style={{ color: '#38B6FF' }}>three easy steps</span>.
				</CustomBox>
				<CustomBox
					sx={{
						color: 'white',
						opacity: 0.75,
						fontSize: '16px',
						fontWeight: 400,
						m: 'auto',
						textAlign: 'center',
					}}
				>
					Determining your risk tolerance is critical to designing an appropriate asset allocation
					for your portfolio.
					<br />
					Risk tolerance is as much art as a science. In order to help you assess it, follow the
					steps below:
				</CustomBox>
				<CustomBox
					sx={{ display: 'flex', justifyContent: 'center', mt: '50px', mb: '40px' }}
					flexDirection={{ ls: 'column', md: 'row' }}
				>
					<CustomBox sx={{ px: '20px' }}>
						<Box
							sx={{
								p: '20px',
								fontSize: '48px',
								fontWeight: 700,
								borderRadius: 1000,
								backgroundColor: mode == 'light' ? '#E7F7FE' : '#484D50',
								width: '112px',
								textAlign: 'center',
								m: 'auto',
							}}
						>
							01
						</Box>
						<CustomBox
							sx={{
								fontSize: '32px',
								color: 'white',
								fontWeight: 700,
								py: '15px',
								textAlign: 'center',
							}}
						>
							Connect Wallet
						</CustomBox>
						<CustomBox
							sx={{ fontSize: '16px', color: 'white', fontWeight: 400, textAlign: 'center' }}
						>
							Click the "connect wallet"
							<br /> button in the top right corner,
							<br /> select your wallet (e.g.
							<br /> MetaMask) in the pop-up
							<br /> window, and click "connect."
						</CustomBox>
					</CustomBox>
					<CustomBox sx={{ px: '20px' }}>
						<Box
							sx={{
								p: '20px',
								fontSize: '48px',
								fontWeight: 700,
								borderRadius: 1000,
								backgroundColor: mode == 'light' ? '#E7F7FE' : '#484D50',
								width: '112px',
								textAlign: 'center',
								m: 'auto',
							}}
						>
							02
						</Box>
						<CustomBox
							sx={{
								fontSize: '32px',
								color: 'white',
								fontWeight: 700,
								py: '15px',
								textAlign: 'center',
							}}
						>
							Risk Appetite
						</CustomBox>
						<CustomBox
							sx={{ fontSize: '16px', color: 'white', fontWeight: 400, textAlign: 'center' }}
						>
							Whether you’re an Aggressive,
							<br /> Moderate, or Conservative
							<br /> investor, Skew has options for
							<br /> you.
						</CustomBox>
					</CustomBox>
					<CustomBox sx={{ px: '20px' }}>
						<Box
							sx={{
								p: '20px',
								fontSize: '48px',
								fontWeight: 700,
								borderRadius: 1000,
								backgroundColor: mode == 'light' ? '#E7F7FE' : '#484D50',
								width: '112px',
								textAlign: 'center',
								m: 'auto',
							}}
						>
							03
						</Box>
						<CustomBox
							sx={{
								fontSize: '32px',
								color: 'white',
								fontWeight: 700,
								py: '15px',
								textAlign: 'center',
							}}
						>
							Get Rewarded
						</CustomBox>
						<CustomBox
							sx={{ fontSize: '16px', color: 'white', fontWeight: 400, textAlign: 'center' }}
						>
							Make passive income on Skew
							<br /> in more ways than just on
							<br /> deposits. Earn rewards on with
							<br /> user feedback surveys,
							<br /> random live events, and more!
						</CustomBox>
					</CustomBox>
				</CustomBox>
			</CustomBox>
			<Grid container width={{ ls: '90%', xl: '80%' }} py="50px" spacing={5}>
				<Grid item md={6} ls={12} display="flex">
					<Box mt="20px" zIndex={10}>
						<CustomBox
							sx={{
								display: 'flex',
								p: '20px',
								boxShadow: '0px 7.32171px 30.3328px rgba(100, 100, 111, 0.2)',
								borderRadius: '16.73px',
							}}
							alignItems="center"
							justifyContent="space-between"
							zIndex={10}
							// position="absolute"
							// top={20}
						>
							<CustomBox display="flex" alignItems="center">
								<CustomBox sx={{ p: '6px', background: '#434B50', borderRadius: '8.36px' }}>
									<img src={SolImage} alt="sol" />
								</CustomBox>
								<CustomBox ml="15px" alignItems="center">
									<CustomBox fontSize={14} fontWeight={700} color="white">
										SOL
									</CustomBox>
									<CustomBox fontSize={14} fontWeight={400} color="white">
										Solana
									</CustomBox>
								</CustomBox>
							</CustomBox>
							<CustomBox ml="20px">
								<img src={ChartImage} alt="chart" />
							</CustomBox>
						</CustomBox>
					</Box>

					<Box ml="-150px" zIndex={0}>
						<CustomBox
							borderRadius="24.22px"
							boxShadow="0px 7.32171px 30.3328px rgba(100, 100, 111, 0.2)"
							p="20px"
							zIndex={0}
							// position="absolute"
							// left={150}
							// top={0}
						>
							<img src={RectImage} alt="rect" />
							<CustomBox display="flex">
								<StarRate color="primary" />
								<StarRate color="primary" />
								<StarRate color="primary" />
								<StarRate color="primary" />
								<StarRate color="primary" />
							</CustomBox>
							<Typography fontWeight={700} fontSize="28px">
								Funding Rate
								<br />
								Arbitrage
							</Typography>
							<Typography fontWeight={400} fontSize="14px">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet tortor id
								ultricies egestas. Maecenas convallis nisi lobortis velit mattis venenatis. Lorem
								ipsum dolor sit amet, consectetur adipiscing elit.
							</Typography>
							<CustomBox flex mt="15px">
								<Button
									sx={{
										background: '#5EE394',
										borderRadius: '24.22px',
										color: '#2F8351',
										fontWeight: 600,
										fontSize: '10.59px',
										p: '10px 15px',
									}}
									endIcon={<InfoOutlined />}
								>
									Low Risk
								</Button>
								<Button
									sx={{
										background: '#484D50',
										color: '#7DCFFF',
										fontWeight: 600,
										fontSize: '10.59px',
										borderRadius: '24.22px',
										p: '10px 15px',
										ml: '20px',
									}}
								>
									30% APY
								</Button>
							</CustomBox>
						</CustomBox>
					</Box>

					<Box zIndex={10} ml="-150px" mt="130px">
						<CustomBox
							sx={{
								display: 'flex',
								p: '20px',
								background: '#282828',
								boxShadow: '0px 7.32171px 30.3328px rgba(100, 100, 111, 0.2)',
								borderRadius: '16.73px',
							}}
							alignItems="center"
							justifyContent="space-between"
							zIndex={10}
							// position="absolute"
							// top={150}
							// right={0}
						>
							<CustomBox display="flex" alignItems="center">
								<CustomBox sx={{ p: '6px', background: '#434B50', borderRadius: '8.36px' }}>
									<img src={EthImage} alt="eth" />
								</CustomBox>
								<CustomBox ml="15px" alignItems="center">
									<CustomBox fontSize={14} fontWeight={700} color="white">
										ETH
									</CustomBox>
									<CustomBox fontSize={14} fontWeight={400} color="white">
										Ethereum
									</CustomBox>
								</CustomBox>
							</CustomBox>
							<CustomBox ml="20px">
								<img src={ChartImage} alt="chart" />
							</CustomBox>
						</CustomBox>
					</Box>
				</Grid>
				<Grid item md={6} ls={12} p="40px" color={(theme) => theme.palette.secondary.contrastText}>
					<Typography fontSize="48px" fontWeight={700}>
						Explore
					</Typography>
					<Typography fontSize="48px" fontWeight={700}>
						Our Strategies
					</Typography>
					<Typography fontSize="16px" fontWeight={400} mt="20px">
						Our vaults are automated trading strategies designed to earn yield through various
						market cycles. They can be used to generate profit in bullish, bearish, volatile or
						range-bound markets. Staking rewards are paid in the same crypto deposited, avoiding
						many of the problems facing DeFi today.
					</Typography>
					<Button
						variant="contained"
						sx={{
							borderRadius: '64px',
							border: '1px solid grey',
							fontSize: '16px',
							fontWeight: 400,
							textTransform: 'none',
							mt: '20px',
						}}
					>
						Learn More
					</Button>
				</Grid>
				<Grid
					item
					md={6}
					ls={12}
					color={(theme) => theme.palette.secondary.contrastText}
					py="100px"
				>
					<Typography fontSize="48px" fontWeight={700}>
						Participate in the Lottery
					</Typography>
					<Typography fontSize="16px" fontWeight={400} mt="20px">
						Our lottery is funded by platform operation funds and user ticket purchases. It is a way
						to reward loyal users with a portion of the platform's profits. Users can also receive
						free tickets through various means such as live events, surprise promotions, referrals,
						and more.
					</Typography>
					<Button
						variant="contained"
						sx={{
							borderRadius: '64px',
							border: '1px solid grey',
							fontSize: '16px',
							fontWeight: 400,
							textTransform: 'none',
							mt: '20px',
						}}
					>
						Learn More
					</Button>
				</Grid>
				<Grid
					item
					md={6}
					ls={12}
					color={(theme) => theme.palette.secondary.contrastText}
					display="flex"
				>
					<Box zIndex={10} mt="200px">
						<CustomBox
							borderRadius="38px"
							boxShadow="0px 8.31849px 34.4623px rgba(100, 100, 111, 0.2)"
							p="30px 20px"
							width="380px"
						>
							<Typography fontSize="32px" fontWeight={700}>
								Top Winner
							</Typography>
							<Box display="flex" alignItems="center" justifyContent="space-between" mt="20px">
								<Box display="flex" justifyContent="center" alignItems="center">
									<RoundedImage src={AvatarImage} alt="avatar" width={80} height={80} />
									<Box ml="10px">
										<Typography fontWeight={700} fontSize="16px">
											@thebeard
										</Typography>
										<Typography fontWeight={400} fontSize="14px">
											0x36...256z
										</Typography>
									</Box>
								</Box>
								<Typography fontSize="16px" fontWeight={700} color="#5EE394">
									$2,300.00
								</Typography>
							</Box>
						</CustomBox>
					</Box>
					<Box zIndex={0} ml="-300px">
						<CustomBox
							textAlign="center"
							borderRadius="38px"
							boxShadow="0px 8.31849px 34.4623px rgba(100, 100, 111, 0.2)"
							p="30px 80px 120px 80px"
						>
							<Typography fontSize="38px" fontWeight={700}>
								Prize Pool
							</Typography>
							<Typography fontSize="48px" fontWeight={700} mt="30px">
								$3,000.00
							</Typography>
						</CustomBox>
					</Box>
				</Grid>
			</Grid>
			<CustomBox
				sx={{
					p: '20px 0',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						fontSize: '48px',
						fontWeight: '700',
						m: 'auto',
						p: '10px 10px',
						textAlign: 'center',
					}}
				>
					Designed for you,
					<br />
					built for our <span style={{ color: '#38B6FF' }}>community</span>
				</Box>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					sx={{ py: '80px' }}
					width={{ ls: '90%', lg: '80%' }}
				>
					<Grid item ls={12} md={6} style={{ mr: '100px' }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								p: '32px',
								border: mode === 'light' ? '2px solid #EFF0F2' : '2px solid #424242',
								borderRadius: '16px',
							}}
						>
							<Box
								sx={{
									p: '20px',
									fontSize: '48px',
									fontWeight: 700,
									borderRadius: '50%',
									backgroundColor: mode == 'light' ? '#E7F7FE' : '#484D50',
									width: '96px',
									height: '96px',
									textAlign: 'center',
								}}
							>
								<img src={HandImage} alt="hand"></img>
							</Box>
							<Box sx={{ pl: '15px' }}>
								<Box sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '48px', pb: '32px' }}>
									Refer friends
								</Box>
								<Typography>
									With Skew's referral program, you'll earn rewards for each friend that becomes a
									depositer.
								</Typography>
								<Box sx={{ display: 'flex', pt: '25px' }}>
									<Typography sx={{ color: '#38B6FF', pr: '10px' }}>Learn more</Typography>
									<img src={ArrwoIcon} alt="icon"></img>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item ls={12} md={6}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								p: '32px',
								border: mode === 'light' ? '2px solid #EFF0F2' : '2px solid #424242',
								borderRadius: '16px',
							}}
						>
							<Box
								sx={{
									p: '20px',
									fontSize: '48px',
									fontWeight: 700,
									borderRadius: '50%',
									backgroundColor: mode == 'light' ? '#E7F7FE' : '#484D50',
									width: '96px',
									height: '96px',
									textAlign: 'center',
								}}
							>
								<img src={ForumImage} alt="hand"></img>
							</Box>
							<Box sx={{ pl: '15px' }}>
								<Box sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '48px', pb: '32px' }}>
									Join the conversation
								</Box>
								<Typography>
									Whether you have a question, suggestion, or just want to chat, join us on Telegram
									or Twitter.
								</Typography>
								<Box sx={{ display: 'flex', pt: '25px' }}>
									<Typography sx={{ color: '#38B6FF', pr: '10px' }}>Learn more</Typography>
									<img src={ArrwoIcon} alt="icon"></img>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item ls={12} md={6}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								p: '32px',
								border: mode === 'light' ? '2px solid #EFF0F2' : '2px solid #424242',
								borderRadius: '16px',
							}}
						>
							<Box
								sx={{
									p: '20px',
									fontSize: '48px',
									fontWeight: 700,
									borderRadius: '50%',
									backgroundColor: mode == 'light' ? '#E7F7FE' : '#484D50',
									width: '96px',
									height: '96px',
									textAlign: 'center',
								}}
							>
								<img src={DonutImage} alt="hand"></img>
							</Box>
							<Box sx={{ pl: '15px' }}>
								<Box sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '48px', pb: '32px' }}>
									Assess analytics
								</Box>
								<Typography>
									Track and analyze the performance and activity of our protocols to make informed
									decisions about your investments.
								</Typography>
								<Box sx={{ display: 'flex', pt: '25px' }}>
									<Typography sx={{ color: '#38B6FF', pr: '10px' }}>Learn more</Typography>
									<img src={ArrwoIcon} alt="icon"></img>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item ls={12} md={6}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								p: '32px',
								border: mode === 'light' ? '2px solid #EFF0F2' : '2px solid #424242',
								borderRadius: '16px',
							}}
						>
							<Box
								sx={{
									p: '20px',
									fontSize: '48px',
									fontWeight: 700,
									borderRadius: '50%',
									backgroundColor: mode == 'light' ? '#E7F7FE' : '#484D50',
									width: '96px',
									height: '96px',
									textAlign: 'center',
								}}
							>
								<img src={TodayImage} alt="hand"></img>
							</Box>
							<Box sx={{ pl: '15px' }}>
								<Box sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '48px', pb: '32px' }}>
									Track live events
								</Box>
								<Typography>
									Stay up-to-date with panel discussions, webinars from industry experts, DeFI
									workshops, prize opportunities and more.
								</Typography>
								<Box sx={{ display: 'flex', pt: '25px' }}>
									<Typography sx={{ color: '#38B6FF', pr: '10px' }}>Learn more</Typography>
									<img src={ArrwoIcon} alt="icon"></img>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</CustomBox>
			<Box
				sx={{
					mt: '80px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				width={{ ls: '90%', lg: '70%' }}
			>
				<Box sx={{ fontSize: '48px', fontWeight: '700', lineHeightL: '72px', pb: '32px' }}>
					Live Feed
				</Box>
				<Grid container spacing={2}>
					<Grid item sx={12} md={6}>
						<Box sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '48px', pt: '16px' }}>
							Blog
						</Box>
						<CustomBox
							sx={{
								display: 'flex',
								alignItems: 'center',
								p: '32px',
								borderRadius: '32px',
								mt: '32px',
							}}
						>
							<img src={RectangleImage} alt="rectangle_image"></img>
							<Box sx={{ pl: '35px' }}>
								<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '21px' }}>
										Crypto <span style={{ fontSize: '14px', fontWeight: '400' }}>Oct 13 2022</span>
									</Box>
									<Box>5 MIN READ</Box>
								</Box>
								<Box sx={{ pt: '8px', fontSize: '16px', color: '#38B6FF', fontWeight: '700' }}>
									Maximize Your Crypto Investment with the Low-Risk Skew Funding Rate Arbitrage
									Vault: A Comparison to Sports Betting Lines
								</Box>
							</Box>
						</CustomBox>
						<CustomBox
							sx={{
								display: 'flex',
								alignItems: 'center',
								p: '32px',
								borderRadius: '32px',
								mt: '32px',
							}}
						>
							<img src={RectangleImage} alt="rectangle_image"></img>
							<Box sx={{ pl: '35px' }}>
								<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '21px' }}>
										Crypto <span style={{ fontSize: '14px', fontWeight: '400' }}>Oct 13 2022</span>
									</Box>
									<Box>5 MIN READ</Box>
								</Box>
								<Box sx={{ pt: '8px', fontSize: '16px', color: '#38B6FF', fontWeight: '700' }}>
									What is the Difference Between APR vs. APY: Win the Bitcoin Battle Using Compound
									Interest!
								</Box>
							</Box>
						</CustomBox>
						<CustomBox
							sx={{
								display: 'flex',
								alignItems: 'center',
								p: '32px',
								borderRadius: '32px',
								mt: '32px',
							}}
						>
							<img src={RectangleImage} alt="rectangle_image"></img>
							<Box sx={{ pl: '35px' }}>
								<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '21px' }}>
										Crypto <span style={{ fontSize: '14px', fontWeight: '400' }}>Oct 13 2022</span>
									</Box>
									<Box>5 MIN READ</Box>
								</Box>
								<Box sx={{ pt: '8px', fontSize: '16px', color: '#38B6FF', fontWeight: '700' }}>
									May 22nd!: Celebrating the Legendary Bitcoin Pizza Day: 10,000 BTC for Two Pizza
									Pies!
								</Box>
							</Box>
						</CustomBox>
					</Grid>
					<Grid item sx={12} md={6}>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<Box sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '48px', pt: '16px' }}>
								Twitter
							</Box>
							<Box sx={{ display: 'flex', pt: '25px' }}>
								<Typography sx={{ color: '#38B6FF', pr: '10px' }}>Learn more</Typography>
								<img src={ArrwoIcon} alt="icon"></img>
							</Box>
						</Box>
						<CustomBox
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'flex-start',
								borderRadius: '32px',
								p: '32px',
								mt: '32px',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									p: '32px',
									width: '100%',
									borderRadius: '32px',
									backgroundColor: (theme) => theme.palette.primary.main,
								}}
							>
								<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<RoundedImage src={CircleImage} alt="circle" width={60} height={60} />
									<Box sx={{ pl: '8px' }}>
										<Box sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>Skew</Box>
										<Typography sx={{ fontSize: '14px' }}>2M Followers</Typography>
									</Box>
								</Box>
								<Button
									variant="contained"
									sx={{
										backgroundColor: '#38B6FF',
										p: '10px 25px',
										borderRadius: '64px',
										color: 'white',
									}}
									startIcon={<DeleteIcon />}
								>
									Follow
								</Button>
							</Box>
							<Box borderBottom="divider">
								<Tabs
									value={tab}
									onChange={(e, v) => setTab(v)}
									variant="fullWidth"
									textColor="secondary.contrastText"
									TabIndicatorProps={{ style: { background: '#38B6FF' } }}
								>
									<Tab
										label="Top"
										id="full-width-tab-0"
										aria-controls="full-width-tabpanel-0"
									></Tab>
									<Tab
										label="Latest"
										id="full-width-tab-1"
										aria-controls="full-width-tabpanel-1"
									></Tab>
								</Tabs>
							</Box>
							<TabPanel value={tab} index={0}>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'flex-start',
										border: mode === 'light' ? '1px solid #E3E5E9' : '1px solid #424242',
										borderRadius: '32px',
										p: '32px',
										mt: '32px',
									}}
								>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<RoundedImage src={CircleImage1} alt="circle" width={60} height={60} />

										<Box sx={{ pl: '8px' }}>
											<Box sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>
												Hawkeye{' '}
												<span style={{ fontSize: '14px', fontWeightL: '400', lineHeight: '21px' }}>
													17h
												</span>
											</Box>
											<Typography sx={{ fontSize: '14px' }}>@hawkeye</Typography>
										</Box>
									</Box>
									<Box sx={{ pt: '16px' }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id enim velit.
										Duis a accumsan diam. Etiam vitae auctor lorem. Vivamus tincidunt lacus mauris,
										interdum rhoncus metus gravida quis. Praesent aliquam sem diam, nec fringilla
										lacus pharetra in.
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-around',
											width: '100%',
											pt: '16px',
										}}
									>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={ChatIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={AutoRenewIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={FavoriteIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={MoreIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
									</Box>
								</Box>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'flex-start',
										border: mode === 'light' ? '1px solid #E3E5E9' : '1px solid #424242',
										borderRadius: '32px',
										p: '32px',
										mt: '32px',
									}}
								>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<RoundedImage src={CircleImage1} alt="circle" width={60} height={60} />
										<Box sx={{ pl: '8px' }}>
											<Box sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>
												Hawkeye{' '}
												<span style={{ fontSize: '14px', fontWeightL: '400', lineHeight: '21px' }}>
													17h
												</span>
											</Box>
											<Typography sx={{ fontSize: '14px' }}>@hawkeye</Typography>
										</Box>
									</Box>
									<Box sx={{ pt: '16px' }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id enim velit.
										Duis a accumsan diam. Etiam vitae auctor lorem. Vivamus tincidunt lacus mauris,
										interdum rhoncus metus gravida quis. Praesent aliquam sem diam, nec fringilla
										lacus pharetra in.
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-around',
											width: '100%',
											pt: '16px',
										}}
									>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={ChatIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={AutoRenewIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={FavoriteIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={MoreIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
									</Box>
								</Box>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'flex-start',
										border: mode === 'light' ? '1px solid #E3E5E9' : '1px solid #424242',
										borderRadius: '32px',
										p: '32px',
										mt: '32px',
									}}
								>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<RoundedImage src={CircleImage1} alt="circle" width={60} height={60} />

										<Box sx={{ pl: '8px' }}>
											<Box sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>
												Hawkeye{' '}
												<span style={{ fontSize: '14px', fontWeightL: '400', lineHeight: '21px' }}>
													17h
												</span>
											</Box>
											<Typography sx={{ fontSize: '14px' }}>@hawkeye</Typography>
										</Box>
									</Box>
									<Box sx={{ pt: '16px' }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id enim velit
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-around',
											width: '100%',
											pt: '16px',
										}}
									>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={ChatIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={AutoRenewIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={FavoriteIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={MoreIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
									</Box>
								</Box>
							</TabPanel>
							<TabPanel value={tab} index={1}>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'flex-start',
										border: mode === 'light' ? '1px solid #E3E5E9' : '1px solid #424242',
										borderRadius: '32px',
										p: '32px',
										mt: '32px',
									}}
								>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<RoundedImage src={CircleImage1} alt="circle" width={60} height={60} />

										<Box sx={{ pl: '8px' }}>
											<Box sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>
												Hawkeye{' '}
												<span style={{ fontSize: '14px', fontWeightL: '400', lineHeight: '21px' }}>
													17h
												</span>
											</Box>
											<Typography sx={{ fontSize: '14px' }}>@hawkeye</Typography>
										</Box>
									</Box>
									<Box sx={{ pt: '16px' }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id enim velit.
										Duis a accumsan diam. Etiam vitae auctor lorem. Vivamus tincidunt lacus mauris,
										interdum rhoncus metus gravida quis. Praesent aliquam sem diam, nec fringilla
										lacus pharetra in.
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-around',
											width: '100%',
											pt: '16px',
										}}
									>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={ChatIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={AutoRenewIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={FavoriteIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={MoreIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
									</Box>
								</Box>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'flex-start',
										border: mode === 'light' ? '1px solid #E3E5E9' : '1px solid #424242',
										borderRadius: '32px',
										p: '32px',
										mt: '32px',
									}}
								>
									<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<RoundedImage src={CircleImage1} alt="circle" width={60} height={60} />
										<Box sx={{ pl: '8px' }}>
											<Box sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>
												Hawkeye{' '}
												<span style={{ fontSize: '14px', fontWeightL: '400', lineHeight: '21px' }}>
													17h
												</span>
											</Box>
											<Typography sx={{ fontSize: '14px' }}>@hawkeye</Typography>
										</Box>
									</Box>
									<Box sx={{ pt: '16px' }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id enim velit.
										Duis a accumsan diam. Etiam vitae auctor lorem. Vivamus tincidunt lacus mauris,
										interdum rhoncus metus gravida quis. Praesent aliquam sem diam, nec fringilla
										lacus pharetra in.
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-around',
											width: '100%',
											pt: '16px',
										}}
									>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={ChatIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={AutoRenewIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={FavoriteIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<img src={MoreIcon} alt="chat"></img>
											<Box sx={{ pl: '5px' }}>57</Box>
										</Box>
									</Box>
								</Box>
							</TabPanel>
						</CustomBox>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default HomePage;
