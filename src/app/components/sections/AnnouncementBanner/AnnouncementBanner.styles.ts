import styled from 'styled-components';
import { ThemeType } from '../../../styles/theme';

interface StyledBannerProps {
  theme: ThemeType;
}

export const BannerWrapper = styled.section<StyledBannerProps>`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gradientBlueStart},
    ${({ theme }) => theme.colors.gradientBlueEnd}
  );
  padding: ${({ theme }) => theme.spacing.sm} 0;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .banner-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm}; /* Space between icon and text */
  }
`;

export const RocketImageStyles = styled.div`
  display: flex; // Helps with vertical alignment if the image has extra space
  align-items: center;
  /*
    The Next.js Image component will handle the dimensions.
    If you need to adjust its positioning relative to the text further,
    you can add styles here. For example, a slight margin-bottom or top if needed
    to perfectly align with the text's baseline or cap height.
    e.g., margin-bottom: 2px;
  */
`;