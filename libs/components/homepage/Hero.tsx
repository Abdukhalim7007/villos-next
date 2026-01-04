import React from 'react';
import { Stack, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface HeroProps {
	title?: string;
	subtitle?: string;
	backgroundImage?: string;
	children?: React.ReactNode;
}

const Hero = (props: HeroProps) => {
	const device = useDeviceDetect();
	const { title = "LET'S MAKE YOUR STAY UNFORGETTABLE", subtitle = 'Checkout Beautiful Places Arround the World.', backgroundImage = '/assets/hero/banner.jpg', children } = props;
	
	// Use background image from reference if available
	const heroBgImage = backgroundImage || '/assets/hero/banner.jpg';

	if (device === 'mobile') {
		return (
			<Stack 
				className="hero-section"
				sx={{
					minHeight: 500,
					py: { xs: 6, md: 10 },
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<Box
					className="hero-bg"
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `url(${backgroundImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Box
					className="hero-overlay"
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						zIndex: 1,
					}}
				/>
				<IconButton
					className="hero-nav-arrow hero-nav-arrow--prev"
					sx={{
						position: 'absolute',
						left: 16,
						top: '50%',
						transform: 'translateY(-50%)',
						zIndex: 20,
						width: 48,
						height: 48,
						borderRadius: '50%',
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						color: '#666',
						'&:hover': {
							backgroundColor: '#fff',
						},
					}}
				>
					<ArrowBackIcon />
				</IconButton>
				<IconButton
					className="hero-nav-arrow hero-nav-arrow--next"
					sx={{
						position: 'absolute',
						right: 16,
						top: '50%',
						transform: 'translateY(-50%)',
						zIndex: 20,
						width: 48,
						height: 48,
						borderRadius: '50%',
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						color: '#666',
						'&:hover': {
							backgroundColor: '#fff',
						},
					}}
				>
					<ArrowForwardIcon />
				</IconButton>
				<Stack className="container" sx={{ position: 'relative', zIndex: 10, textAlign: 'center', py: { xs: 27.5, sm: 27.5 } }}>
					<Box className="hero-content-top" sx={{ mb: 4 }}>
						<Box
							className="hero-badge"
							sx={{
								display: 'inline-block',
								mb: 3,
								px: 2,
								py: 0.75,
								backgroundColor: 'rgba(22, 70, 193, 0.9)',
								color: '#fff',
								fontSize: '12px',
								fontWeight: 600,
								borderRadius: '4px',
								transform: 'rotate(-2deg)',
							}}
						>
							Happiness Guaranteed
						</Box>
						<Typography className="hero-title" variant="h1" sx={{ color: '#fff', fontWeight: 700, mb: 2, lineHeight: 1.2, fontSize: '32px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
							{title}
						</Typography>
						{subtitle && (
							<Typography className="hero-subtitle" variant="body1" sx={{ color: '#fff', fontSize: '16px', fontWeight: 400 }}>
								{subtitle}
							</Typography>
						)}
					</Box>
					{children && (
						<Box className="hero-filter-wrapper" sx={{ position: 'relative', zIndex: 10, mt: 2 }}>
							{children}
						</Box>
					)}
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack 
				className="hero-section"
				sx={{
					minHeight: 600,
					py: { xs: 6, md: 10 },
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<Box
					className="hero-bg"
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `url(${heroBgImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						zIndex: 0,
					}}
				/>
				<Box
					className="hero-overlay"
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						zIndex: 1,
					}}
				/>
				<IconButton
					className="hero-nav-arrow hero-nav-arrow--prev"
					sx={{
						position: 'absolute',
						left: { xs: 16, md: 40 },
						top: '50%',
						transform: 'translateY(-50%)',
						zIndex: 20,
						width: 56,
						height: 56,
						borderRadius: '50%',
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						color: '#666',
						'&:hover': {
							backgroundColor: '#fff',
						},
					}}
				>
					<ArrowBackIcon />
				</IconButton>
				<IconButton
					className="hero-nav-arrow hero-nav-arrow--next"
					sx={{
						position: 'absolute',
						right: { xs: 16, md: 40 },
						top: '50%',
						transform: 'translateY(-50%)',
						zIndex: 20,
						width: 56,
						height: 56,
						borderRadius: '50%',
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						color: '#666',
						'&:hover': {
							backgroundColor: '#fff',
						},
					}}
				>
					<ArrowForwardIcon />
				</IconButton>
				<Stack className="container" sx={{ position: 'relative', zIndex: 10, textAlign: 'center', py: { md: 19.25, lg: 19.25 } }}>
					<Box className="hero-content-top" sx={{ mb: 4 }}>
						<Box
							className="hero-badge"
							sx={{
								display: 'inline-block',
								mb: 3,
								px: 2,
								py: 0.75,
								backgroundColor: 'rgba(22, 70, 193, 0.9)',
								color: '#fff',
								fontSize: '14px',
								fontWeight: 600,
								borderRadius: '4px',
								transform: 'rotate(-2deg)',
							}}
						>
							Happiness Guaranteed
						</Box>
						<Typography className="hero-title" variant="h1" sx={{ color: '#fff', fontWeight: 700, mb: 2, lineHeight: 1.2, fontSize: { xs: '32px', md: '48px', lg: '56px' }, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
							{title}
						</Typography>
						{subtitle && (
							<Typography className="hero-subtitle" variant="body1" sx={{ color: '#fff', fontSize: '18px', fontWeight: 400 }}>
								{subtitle}
							</Typography>
						)}
					</Box>
					{children && (
						<Box className="hero-filter-wrapper" sx={{ position: 'relative', zIndex: 10, mt: 2 }}>
							{children}
						</Box>
					)}
				</Stack>
			</Stack>
		);
	}
};

export default Hero;

