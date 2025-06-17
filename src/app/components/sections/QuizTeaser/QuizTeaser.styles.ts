// src/components/sections/QuizTeaser/QuizTeaser.styles.ts
import styled from 'styled-components';
import { ThemeType } from '../../../styles/theme'; // device import might not be needed here anymore

export const QuizTeaserWrapper = styled.div<{ theme: ThemeType }>`
  width: 100%; /* It will take the width of its container (TextContentWrapper) */
  margin-top: ${({ theme }) => theme.spacing.sm}; /* e.g., 8px or 12px - adjust as per Figma */

`;
