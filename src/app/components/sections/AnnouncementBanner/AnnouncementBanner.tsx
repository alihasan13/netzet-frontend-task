'use client';

import React from 'react';
// import Image from 'next/image'; // Import Next.js Image component
import { BannerWrapper } from './AnnouncementBanner.styles'; // We'll add RocketImageStyles
import StyledText from '../../../components/atoms/StyledText'; // Corrected path based on your error message context


interface AnnouncementBannerProps {
  // Props for dynamic content if needed in the future
  text?: string;
  link?: string;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = () => {
  return (
    <BannerWrapper aria-label="Site Announcement">
      <div className="banner-content-wrapper">
      

        <StyledText textStyle="BannerText"> {/* Uses preset from StyledText.styles.ts */}
          🚀 FRESH BEGINNINGS SALE: Extra 25% OFF,{' '}
          <StyledText as="span" color="saleTextGreen" fontWeight="bold">
            Limited Spots - start your journey today!
          </StyledText>
        </StyledText>
      </div>
    </BannerWrapper>
  );
};
export default AnnouncementBanner;