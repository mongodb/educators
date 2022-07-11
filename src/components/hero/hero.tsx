import { TypographyScale } from '@mdb/flora';
import { HeroProps } from './types';
import styles from './styles';

const defaultDescription =
	'These resources are for educators who want to prepare students for careers that require in-demand database skills that power modern applications.';

export default function Hero({
	title = 'MongoDB for Educators',
	description = defaultDescription,
	cta = <></>,
}: HeroProps): JSX.Element {
	return (
		<header sx={styles.HeroWrapper}>
			{/* @ts-ignore */}
			<TypographyScale inverse variant="heading1" sx={styles.HeroTitle}>
				{title}
			</TypographyScale>
			<div sx={styles.HeroContent}>
				{/* @ts-ignore */}
				<TypographyScale inverse variant="body1">
					{description}
				</TypographyScale>
				{cta}
			</div>
		</header>
	);
}
