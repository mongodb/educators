import { Button } from '@mdb/flora';

import Hero from 'components/hero';
import Statistic from 'components/statistic';
import ContentPreview from 'components/content-preview';

import styles from 'styles/home';

export default function Home(): JSX.Element {
	return (
		<>
			<Hero
				cta={
					<Button
						onClick={() => alert('modal coming soon')}
						sx={styles.HomePageHeroButton}
					>
						Join MongoDB{"'"}s Educator Community
					</Button>
				}
			/>
			<main sx={styles.HomePageMainStyles}>
				<section sx={styles.HomePageStatsSection}>
					{statistics.map(stat => (
						<Statistic
							key={stat.count} // TODO: better keys when actual data used
							count={stat.count}
							description={stat.description}
						/>
					))}
				</section>
				<ContentPreview title="Lecture Slides" content={lectureSlides} />
				<ContentPreview
					title="Additional Content"
					content={additionalContent}
				/>
			</main>
		</>
	);
}

/* ********* TEMP: MOCK DATA FOR MOCKUP BUILDOUT ********* */

const statistics = [
	{
		count: '140K',
		description: 'Open positions for professionals with MongoDB skills',
	},
	{
		count: '100K',
		description: 'Companies use MongoDB',
	},
	{
		count: '300+',
		description: 'Universities in the MongoDB for Academia educator community',
	},
];

const lectureSlides = [
	{
		tag: 'Lecture Slides',
		title: 'Introduction to Modern Databases',
		description: 'Anyone can paint. Lets get wild today.',
		count: 22,
	},
	{
		tag: 'Lecture Slides',
		title: 'MongoDB in 60 Minutes',
		description: 'Anyone can paint. Lets get wild today.',
		count: 1,
	},
	{
		tag: 'Lecture Slides',
		title: 'Querying non-relational Databases',
		description: 'Anyone can paint. Lets get wild today.',
		count: 4,
	},
	{
		tag: 'Lecture Slides',
		title: 'MongoDB Aggregation Framework',
		description: 'Anyone can paint. Lets get wild today.',
		count: 2,
	},
	{
		tag: 'Lecture Slides',
		title: 'MongoDB an Application Data Platform',
		description: 'Anyone can paint. Lets get wild today.',
		count: 22,
	},
];

const additionalContent = [
	{
		tag: 'PDF',
		title: 'Little Book of MongoDB',
		description:
			'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
	},
	{
		tag: 'PDF',
		title: 'Suggested Reading List',
		description:
			'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
	},
	{
		tag: 'PDF',
		title: 'Cheatsheet',
		description:
			'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
	},
	{
		tag: 'Lab',
		title: 'Python Lab',
		description:
			'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
	},
	{
		tag: 'Case Study',
		title: 'Case Study 1',
		description:
			'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
	},
];
