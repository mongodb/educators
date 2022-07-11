import { ReactNode } from 'react';
import { Global } from '@emotion/react';
import { UnifiedNav, UnifiedFooter } from '@mdb/consistent-nav';
import { GlobalStyles } from 'styles/globals';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<>
			<Global styles={GlobalStyles} />
			<UnifiedNav position="sticky" />
			{children}
			<UnifiedFooter hideLocale />
		</>
	);
}
