import { NextPage } from 'next';
import Head from 'next/head';
import { Stack } from '@mui/material';
import Hero from '../libs/components/homepage/Hero';
import FilterBar from '../libs/components/homepage/FilterBar';
import FeatureIcons from '../libs/components/homepage/FeatureIcons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale || 'en', ['common'])),
	},
});

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Villoz - Luxury Villas for Sale and Rent</title>
				<meta name="description" content="Discover luxury villas for sale and rent" />
			</Head>
			<Stack className="home-page">
				<Hero />
				<FilterBar />
				<FeatureIcons />
			</Stack>
		</>
	);
};

export default Home;
