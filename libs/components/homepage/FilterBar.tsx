import React, { useState } from 'react';
import { Stack, Box, Container, TextField, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
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
	const [guests, setGuests] = useState<number>(1);

	const handleGuestsChange = (delta: number) => {
		setGuests((prev) => Math.max(1, prev + delta));
	};

	const handleSearch = () => {
		if (onSearch) {
			onSearch({ location, checkIn, checkOut, guests });
		}
	};

	if (device === 'mobile') {
		return (
			<Stack className="filter-bar" sx={{ width: '100%' }}>
				<Container>
					<Stack
						className="filter-bar__form"
						direction="column"
						spacing={2}
						sx={{
							py: 2,
							px: 2,
						}}
					>
						<TextField
							className="filter-bar__location"
							label="Location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							fullWidth
							placeholder="Where are you going?"
						/>
						<TextField
							className="filter-bar__checkin"
							label="Check-in"
							type="date"
							value={checkIn}
							onChange={(e) => setCheckIn(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							className="filter-bar__checkout"
							label="Check-out"
							type="date"
							value={checkOut}
							onChange={(e) => setCheckOut(e.target.value)}
							fullWidth
							InputLabelProps={{ shrink: true }}
						/>
						<Box className="filter-bar__guests" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
							<TextField
								label="Guests"
								type="number"
								value={guests}
								onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
								inputProps={{ min: 1 }}
								sx={{ flex: 1 }}
							/>
							<IconButton onClick={() => handleGuestsChange(-1)} size="small">
								<RemoveIcon />
							</IconButton>
							<IconButton onClick={() => handleGuestsChange(1)} size="small">
								<AddIcon />
							</IconButton>
						</Box>
						<Button
							className="filter-bar__submit"
							variant="contained"
							onClick={handleSearch}
							fullWidth
							startIcon={<SearchIcon />}
							sx={{ py: 1.5 }}
						>
							Search
						</Button>
					</Stack>
				</Container>
			</Stack>
		);
	} else {
		return (
			<Stack className="filter-bar" sx={{ width: '100%' }}>
				<Container>
					<Box
						className="filter-bar__form"
						sx={{
							py: 2,
							px: 3,
							display: 'flex',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<TextField
							className="filter-bar__location"
							label="Location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							placeholder="Where are you going?"
							sx={{ flex: 1 }}
						/>
						<TextField
							className="filter-bar__checkin"
							label="Check-in"
							type="date"
							value={checkIn}
							onChange={(e) => setCheckIn(e.target.value)}
							InputLabelProps={{ shrink: true }}
							sx={{ flex: 1, maxWidth: 180 }}
						/>
						<TextField
							className="filter-bar__checkout"
							label="Check-out"
							type="date"
							value={checkOut}
							onChange={(e) => setCheckOut(e.target.value)}
							InputLabelProps={{ shrink: true }}
							sx={{ flex: 1, maxWidth: 180 }}
						/>
						<Box className="filter-bar__guests" sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, maxWidth: 180 }}>
							<TextField
								label="Guests"
								type="number"
								value={guests}
								onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
								inputProps={{ min: 1 }}
								sx={{ flex: 1 }}
							/>
							<IconButton onClick={() => handleGuestsChange(-1)} size="small">
								<RemoveIcon />
							</IconButton>
							<IconButton onClick={() => handleGuestsChange(1)} size="small">
								<AddIcon />
							</IconButton>
						</Box>
						<Button
							className="filter-bar__submit"
							variant="contained"
							onClick={handleSearch}
							startIcon={<SearchIcon />}
							sx={{ px: 3, py: 1.5, minWidth: 120 }}
						>
							Search
						</Button>
					</Box>
				</Container>
			</Stack>
		);
	}
};

export default FilterBar;

