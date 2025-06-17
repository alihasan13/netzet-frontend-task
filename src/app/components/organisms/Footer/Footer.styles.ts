// src/components/organisms/Footer/Footer.styles.ts
import styled, { css } from 'styled-components';
import { ThemeType, device } from '../../../styles/theme';

interface FooterWrapperProps {
  theme: ThemeType;
  $displayContext: 'global' | 'inlineMobile'; // Transient prop
}

export const FooterWrapper = styled.footer<FooterWrapperProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  /* Text alignment is handled by the StyledText preset within the Container */

  ${({ $displayContext, theme }) =>
    $displayContext === 'global' &&
    css`
      display: none; /* Hidden on mobile by default */
      padding: ${theme.spacing.ssm} 0; /* Desktop vertical padding */

      @media ${device.laptop} { /* FIGMA CHECK: Desktop breakpoint */
        display: block; /* Shown only on desktop */
      }

      /* Ensure its Container uses standard page width */
      .footer-content-container {
        /* Standard container behavior */
      }
    `}

  ${({ $displayContext, theme }) =>
    $displayContext === 'inlineMobile' &&
    css`
      display: block; /* Shown on mobile by default */
      padding: ${theme.spacing.xs} 0; /* Padding for when it's inline on mobile */
                                      /* Or maybe less if TextContentWrapper has enough gap */
      width: 100%; /* Takes width of its parent (TextContentWrapper) */
    

      .footer-content-container {
        padding-left: 0; /* Remove container padding if TextContentWrapper handles it */
        padding-right: 0;
        max-width: 100%; /* Allow it to fill TextContentWrapper's width */
      }


      @media ${device.laptop} { /* FIGMA CHECK: Desktop breakpoint */
        display: none; /* Hidden on desktop */
      }
    `}
`;
