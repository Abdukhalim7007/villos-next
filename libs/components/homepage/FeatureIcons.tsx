import React from 'react';
import { Stack, Box, Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import HomeIcon from '@mui/icons-material/Home';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface FeatureItem {
	icon: React.ReactNode;
	title: string;
	description?: string;
}

interface FeatureIconsProps {
	items?: FeatureItem[];
}

const FeatureIcons = (props: FeatureIconsProps) => {
	const device = useDeviceDetect();
	const { items } = props;

	const defaultItems: FeatureItem[] = [
		{
			icon: <CheckCircleIcon />,
			title: 'Best Price Guarantee',
			description: 'There are many variations of majority have simply free text.',
		},
		{
			icon: <SpeedIcon />,
			title: 'Easy & Quick Booking',
			description: 'There are many variations of majority have simply free text.',
		},
		{
			icon: <HomeIcon />,
			title: 'Best Villas Selection',
			description: 'There are many variations of majority have simply free text.',
		},
	];

	const features = items || defaultItems;

	if (device === 'mobile') {
		return (
			<Stack className="feature-icons" sx={{ width: '100%', py: { xs: 4, sm: 5 } }}>
				<Container>
					<Stack direction="column" spacing={3}>
						{features.map((feature, index) => (
							<Box key={index} className="feature-icons__item" sx={{ textAlign: 'center' }}>
								<Box className="feature-icons__icon" sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
									{feature.icon}
								</Box>
								<Typography className="feature-icons__title" variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
									{feature.title}
								</Typography>
								{feature.description && (
									<Typography className="feature-icons__description" variant="body2" sx={{ color: 'text.secondary' }}>
										{feature.description}
									</Typography>
								)}
							</Box>
						))}
					</Stack>
				</Container>
			</Stack>
		);
	} else {
		return (
			<Stack className="feature-icons" sx={{ width: '100%', py: { md: 6, lg: 8 } }}>
				<Container>
					<Stack
						direction="row"
						spacing={4}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
						}}
					>
						{features.map((feature, index) => (
							<Box key={index} className="feature-icons__item" sx={{ flex: 1, textAlign: 'center', maxWidth: 300 }}>
								<Box className="feature-icons__icon" sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
									{feature.icon}
								</Box>
								<Typography className="feature-icons__title" variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
									{feature.title}
								</Typography>
								{feature.description && (
									<Typography className="feature-icons__description" variant="body2" sx={{ color: 'text.secondary' }}>
										{feature.description}
									</Typography>
								)}
							</Box>
						))}
					</Stack>
				</Container>
			</Stack>
		);
	}
};

export default FeatureIcons;

