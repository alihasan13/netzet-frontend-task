// src/components/sections/TermsText/TermsText.styles.ts
import styled from 'styled-components';
import { ThemeType } from '../../../styles/theme'; // device import might not be needed here

export const TermsTextWrapper = styled.div<{ theme: ThemeType }>`
  width: 100%; /* It will take the width of its container (TextContentWrapper in HeroSection) */
  
  margin-top: ${({ theme }) => theme.spacing.md}; /* e.g., 16px, adjust as per Figma */
  padding: 0 ${({ theme }) => theme.spacing.sm}; // Add some horizontal padding if text is very close to edges on mobile

  a {
    color: ${({ theme }) => theme.colors.textSecondary}; /*  Link color - same as text or slightly different? */
    text-decoration: none; /* Common practice for terms links */
    font-weight: ${({ theme }) => theme.fontWeights.medium}; /* Links sometimes a bit bolder */

    &:hover {
      /*  Link hover color */
      color: ${({ theme }) => theme.colors.textPrimary}; /* Example: lighter on hover */
      text-decoration: none;
    }
  }
`;