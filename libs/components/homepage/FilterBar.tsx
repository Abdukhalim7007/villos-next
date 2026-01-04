import React, { useState } from 'react';
import { Stack, Box, Container, InputBase, Button, IconButton, Typography, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface FilterBarProps {
	onSearch?: (filters: FilterValues) => void;
}

interface FilterValues {
	location: string;
	checkIn: string;
	checkOut: string;
	guests: number;
}

const FilterBar = (props: FilterBarProps) => {
	const device = useDeviceDetect();
	const { onSearch } = props;
	const [location, setLocation] = useState<string>('');
	const [checkIn, setCheckIn] = useState<string>('');
	const [checkOut, setCheckOut] = useState<string>('');
	const [guests, setGuests] = useState<number>(0);

	const handleGuestsChange = (delta: number) => {
		setGuests((prev) => Math.max(0, prev + delta));
	};

	const handleSearch = () => {
		if (onSearch) {
			onSearch({ location, checkIn, checkOut, guests });
		}
	};

	const FilterSegment = ({ label, icon, value, placeholder, onChange, children }: any) => (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flex: 1,
				position: 'relative',
				py: 1.5,
				px: 2,
			}}
		>
			<Typography
				variant="caption"
				sx={{
					color: '#666',
					fontSize: '11px',
					fontWeight: 600,
					textTransform: 'uppercase',
					mb: 0.5,
					letterSpacing: '0.5px',
				}}
			>
				{label}
			</Typography>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
				{icon && (
					<Box sx={{ color: '#999', display: 'flex', alignItems: 'center' }}>
						{icon}
					</Box>
				)}
				{children || (
					<InputBase
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						sx={{
							flex: 1,
							fontSize: '14px',
							color: '#212121',
							'&::placeholder': {
								color: '#999',
							},
						}}
					/>
				)}
			</Box>
		</Box>
	);

	if (device === 'mobile') {
		return (
			<Container maxWidth="lg" sx={{ px: 2 }}>
				<Box
					className="filter-bar__form"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						p: 2,
						bgcolor: '#fff',
						borderRadius: 2,
						boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
					}}
				>
					<FilterSegment
						label="Location"
						icon={<LocationOnIcon sx={{ fontSize: 20 }} />}
						value={location}
						placeholder="Where To Next?"
						onChange={(e: any) => setLocation(e.target.value)}
					/>
					<FilterSegment
						label="Checkin"
						icon={<CalendarTodayIcon sx={{ fontSize: 20 }} />}
						value={checkIn}
						placeholder="Add Date"
						onChange={(e: any) => setCheckIn(e.target.value)}
					/>
					<FilterSegment
						label="Checkin"
						icon={<CalendarTodayIcon sx={{ fontSize: 20 }} />}
						value={checkOut}
						placeholder="Add Date"
						onChange={(e: any) => setCheckOut(e.target.value)}
					/>
					<FilterSegment
						label="Guests"
						icon={<PersonIcon sx={{ fontSize: 20 }} />}
					>
						<InputBase
							value={guests.toString()}
							readOnly
							sx={{
								flex: 1,
								fontSize: '14px',
								color: '#212121',
							}}
						/>
						<IconButton
							onClick={() => handleGuestsChange(-1)}
							sx={{
								width: 28,
								height: 28,
								borderRadius: '50%',
								border: '1px solid #e0e0e0',
								color: '#666',
								p: 0,
							}}
						>
							<RemoveIcon sx={{ fontSize: 16 }} />
						</IconButton>
						<IconButton
							onClick={() => handleGuestsChange(1)}
							sx={{
								width: 28,
								height: 28,
								borderRadius: '50%',
								border: '1px solid #e0e0e0',
								color: '#666',
								p: 0,
							}}
						>
							<AddIcon sx={{ fontSize: 16 }} />
						</IconButton>
					</FilterSegment>
					<Button
						className="filter-bar__submit"
						variant="contained"
						onClick={handleSearch}
						fullWidth
						sx={{
							bgcolor: '#1646C1',
							color: '#fff',
							py: 1.5,
							minHeight: 56,
							'&:hover': {
								bgcolor: '#1239a0',
							},
						}}
					>
						<SearchIcon />
					</Button>
				</Box>
			</Container>
		);
	} else {
		return (
			<Container maxWidth="lg" sx={{ px: 3 }}>
				<Box
					className="filter-bar__form"
					sx={{
						display: 'flex',
						alignItems: 'stretch',
						bgcolor: '#fff',
						borderRadius: 2,
						boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
						overflow: 'hidden',
					}}
				>
					<FilterSegment
						label="Location"
						icon={<LocationOnIcon sx={{ fontSize: 20 }} />}
						value={location}
						placeholder="Where To Next?"
						onChange={(e: any) => setLocation(e.target.value)}
					/>
					<Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0', my: 1 }} />
					<FilterSegment
						label="Checkin"
						icon={<CalendarTodayIcon sx={{ fontSize: 20 }} />}
						value={checkIn}
						placeholder="Add Date"
						onChange={(e: any) => setCheckIn(e.target.value)}
					/>
					<Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0', my: 1 }} />
					<FilterSegment
						label="Checkin"
						icon={<CalendarTodayIcon sx={{ fontSize: 20 }} />}
						value={checkOut}
						placeholder="Add Date"
						onChange={(e: any) => setCheckOut(e.target.value)}
					/>
					<Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0', my: 1 }} />
					<FilterSegment
						label="Guests"
						icon={<PersonIcon sx={{ fontSize: 20 }} />}
					>
						<InputBase
							value={guests.toString()}
							readOnly
							sx={{
								flex: 1,
								fontSize: '14px',
								color: '#212121',
							}}
						/>
						<IconButton
							onClick={() => handleGuestsChange(-1)}
							sx={{
								width: 28,
								height: 28,
								borderRadius: '50%',
								border: '1px solid #e0e0e0',
								color: '#666',
								p: 0,
								mr: 0.5,
							}}
						>
							<RemoveIcon sx={{ fontSize: 16 }} />
						</IconButton>
						<IconButton
							onClick={() => handleGuestsChange(1)}
							sx={{
								width: 28,
								height: 28,
								borderRadius: '50%',
								border: '1px solid #e0e0e0',
								color: '#666',
								p: 0,
							}}
						>
							<AddIcon sx={{ fontSize: 16 }} />
						</IconButton>
					</FilterSegment>
					<Button
						className="filter-bar__submit"
						variant="contained"
						onClick={handleSearch}
						sx={{
							bgcolor: '#1646C1',
							color: '#fff',
							minWidth: 80,
							px: 2,
							borderRadius: 0,
							'&:hover': {
								bgcolor: '#1239a0',
							},
						}}
					>
						<SearchIcon sx={{ fontSize: 24 }} />
					</Button>
				</Box>
			</Container>
		);
	}
};

export default FilterBar;
