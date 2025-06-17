// src/components/organisms/Footer/Footer.tsx
'use client';

import React from 'react';
import { FooterWrapper } from './Footer.styles';
import StyledText from '../../../components/atoms/StyledText';
import Container from '../../../components/layout/Container';

interface FooterProps {
  /**
   * 'global' for the standard page footer (shows on desktop, hidden on mobile).
   * 'inlineMobile' for the footer that appears within HeroSection flow on mobile (hidden on desktop).
   */
  displayContext?: 'global' | 'inlineMobile';
}

const Footer: React.FC<FooterProps> = ({ displayContext = 'global' }) => {
  const currentYear = new Date().getFullYear();

  return (
    // Pass displayContext as a transient prop to Styled Components
    <FooterWrapper $displayContext={displayContext}>
      
      <Container className="footer-content-container">
        <StyledText
          textStyle="FooterText" // This preset handles responsive text-align
        >
          Fametonic {currentYear} &copy;All Rights Reserved.
        </StyledText>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
