import { Button } from '@mdb/flora';
import Hero from 'components/hero';
import Statistic from 'components/statistic';
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
					<Statistic
						count="140K"
						description="Open positions for professionals with MongoDB skills"
					/>
					<Statistic count="100K" description="Companies use MongoDB" />
					<Statistic
						count="300+"
						description="Universities in the MongoDB for Academia educator community"
					/>
				</section>
			</main>
		</>
	);
}
