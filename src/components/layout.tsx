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
      {/* Fix for the sticky nav having lower z-index than some elements and showing over nav when scrolling */}
      <div
        sx={{
          position: 'sticky',
          top: '0',
          zIndex: '3',
          width: '100%',
        }}
      >
        <UnifiedNav position="sticky" />
      </div>
      {children}
      <UnifiedFooter hideLocale />
    </>
  );
}
