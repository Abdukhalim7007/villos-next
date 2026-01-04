import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface HeroProps {
	title?: string;
	subtitle?: string;
	backgroundImage?: string;
}

const Hero = (props: HeroProps) => {
	const device = useDeviceDetect();
	const { title = 'Find Your Perfect Villa', subtitle = 'Discover luxury villas for sale and rent', backgroundImage } = props;

	if (device === 'mobile') {
		return (
			<Stack 
				className="hero-section"
				sx={{
					backgroundColor: '#132742',
					color: '#fff',
					minHeight: { xs: 260, md: 420 },
					py: { xs: 6, md: 10 },
					position: 'relative',
				}}
			>
				{backgroundImage && (
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
							opacity: 0.3,
						}}
					/>
				)}
				<Stack className="container" sx={{ position: 'relative', zIndex: 10, textAlign: 'center', py: { xs: 27.5, sm: 27.5 } }}>
					<Typography className="hero-title" variant="h1" sx={{ color: '#fff', fontWeight: 600, mb: 2 }}>
						{title}
					</Typography>
					{subtitle && (
						<Typography className="hero-subtitle" variant="body1" sx={{ color: '#fff' }}>
							{subtitle}
						</Typography>
					)}
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack 
				className="hero-section"
				sx={{
					backgroundColor: '#132742',
					color: '#fff',
					minHeight: { xs: 260, md: 420 },
					py: { xs: 6, md: 10 },
					position: 'relative',
				}}
			>
				{backgroundImage && (
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
							opacity: 0.3,
						}}
					/>
				)}
				<Stack className="container" sx={{ position: 'relative', zIndex: 10, textAlign: 'center', py: { md: 19.25, lg: 19.25 } }}>
					<Typography className="hero-title" variant="h1" sx={{ color: '#fff', fontWeight: 600, mb: 2 }}>
						{title}
					</Typography>
					{subtitle && (
						<Typography className="hero-subtitle" variant="body1" sx={{ color: '#fff' }}>
							{subtitle}
						</Typography>
					)}
				</Stack>
			</Stack>
		);
	}
};

export default Hero;

