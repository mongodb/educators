import { ReactNode } from 'react';
import { Global, css } from '@emotion/react';
import { UnifiedNav, UnifiedFooter } from '@mdb/consistent-nav';
import { GlobalStyles } from 'styles/globals';

interface LayoutProps {
  children: ReactNode;
  isFormOpen: boolean;
}

export default function Layout({
  children,
  isFormOpen,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Global
        styles={css`
          ${GlobalStyles}
          ${isFormOpen &&
          `
            html {
              overflow: hidden;
            }
          `}
        `}
      />
      <UnifiedNav position="sticky" />
      {children}
      <UnifiedFooter hideLocale />
    </>
  );
}
