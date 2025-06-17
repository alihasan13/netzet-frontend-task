'use client'; 

import StyledComponentsRegistry from '../../lib/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '../app/styles/theme';
import GlobalStyles from '../app/styles/GlobalStyles';
import { urbanist, nunito, figtree } from './fonts'; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${nunito.variable} ${figtree.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles  />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}