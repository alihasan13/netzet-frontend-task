// src/components/layout/Container/Container.styles.ts
import styled from 'styled-components';
import { ThemeType,device } from '../../../styles/theme'; 

interface StyledContainerProps {
  theme: ThemeType;
  fluid?: boolean; 
  maxWidth?: string;
  // fluid?: boolean; // If you want a full-width container sometimes
  // maxWidth?: string; // To override default max-width
}

export const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing.md}; // Default horizontal padding (e.g., 16px)
  padding-right: ${({ theme }) => theme.spacing.md}; // Default horizontal padding
  max-width: ${({ theme }) => theme.layout.containerWidth};
  max-width: 1280px; 
  @media ${({ theme }) => device.tablet} {
    padding-left: ${({ theme }) => theme.spacing.lg}; 
    padding-right: ${({ theme }) => theme.spacing.lg};
  }

  @media ${({ theme }) => device.desktop} {
    padding-left: ${({ theme }) => theme.spacing.xl}; // Even larger padding on desktops (e.g., 32px)
    padding-right: ${({ theme }) => theme.spacing.xl};
  }

   ${({ fluid }) =>
    fluid &&
    `
    max-width: 100%;
  `}

   ${({ maxWidth }) =>
    maxWidth &&
    `
    max-width: ${maxWidth};
  `}
  
`;
