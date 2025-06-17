'use client';

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import {
  HeroSectionWrapper,
  TextContentWrapper,
  FeaturesListStyled,
  FeatureItemStyled,
  ImageWrapper,
  CtaButtonWrapper,
} from './HeroSection.styles';
import Container from '../../../components/layout/Container'; 
import StyledText from '../../../components/atoms/StyledText';  
import Button from '../../../components/atoms/Button';        
// Icon component might not be needed in this file anymore if all icons become images
// import Icon from '@/components/atoms/Icon';
import QuizTeaser from '../../../components/sections/QuizTeaser';    
import TermsText from '../../../components/sections/TermsText';      
import Footer from '../../../components/organisms/Footer';          
// StyledFooterWrapperFromOrganism import is not used in this TSX file, only in HeroSection.styles.ts


interface Feature {
  id: string;
  text: string;
  // iconSrc: string; // Optional: if you want to pass icon source dynamically
  // iconAlt: string;
}

const featuresData: Feature[] = [
  { id: 'f1', text: 'Start growing your influence right away—no waiting required!' },
  { id: 'f2', text: 'Create viral TikToks and Reels step by step with easy-to-follow lessons' },
  { id: 'f3', text: 'Use a Personal AI Worker to boost your content' },
  { id: 'f4', text: 'Learn from expert-led courses designed for aspiring influencers' },
];

const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper id="hero">
      <Container className="hero-container">
        <TextContentWrapper>
          <StyledText as="h1" textStyle="HeroTitle">
            Want to Turn Social Media Into a Profitable Career?
          </StyledText>
          <StyledText as="p" textStyle="HeroSubtitle">
            Discover your way to success with Fametonic:
          </StyledText>

          <FeaturesListStyled aria-label="Key Features">
            {featuresData.map((feature) => (
              <FeatureItemStyled key={feature.id}>
                <div className="feature-icon"> {/* Wrapper for layout consistency if needed */}
                  <Image
                    src="/images/star.png" //  Path to your star.png
                    alt="Feature icon"    // More descriptive alt if icons differ
                    width={22}            //  Actual width of your star.png icon.
                                          // Previous SVG was 1.3em. If text is ~16px, 1.3em ~ 21px.
                    height={22}           //  Actual height of your star.png icon.
                  />
                </div>
                <StyledText textStyle="FeatureListItem">
                  {feature.text}
                </StyledText>
              </FeatureItemStyled>
            ))}
          </FeaturesListStyled>

          {/* Ordered items for mobile - DOM order is Terms, Footer, Button, Quiz */}
          <TermsText />
          <Footer displayContext="inlineMobile" />
          <CtaButtonWrapper>
            <Button
              variant="primary" // Using transient props
              size="large"    // Using transient props
              // onClick={() => console.log('Get Started Clicked!')}
              iconRight={
                <Image
                  src="/images/arrow-right.png" //  Path to your arrow-right.png
                  alt="Arrow right icon"
                  width={10} //  Actual width. Prev SVG was 1em. If button text is ~18px, 1em=18px.
                  height={10}//  Actual height.
                />
              }
            >
              GET STARTED
            </Button>
          </CtaButtonWrapper>
          <QuizTeaser />
        </TextContentWrapper>

        <ImageWrapper>
          <Image // Using Next.js Image component
            src="/images/PHONE.png" // Assuming PHONE.png is in the 'public' folder directly
            alt="Fametonic app interface on a smartphone"
            width={450} // FIGMA CHECK: Provide actual intrinsic width of PHONE.png
            height={900} // FIGMA CHECK: Provide actual intrinsic height of PHONE.png
                         // These are placeholders, adjust to your image's aspect ratio and desired render size.
            style={{ maxWidth: '100%', height: 'auto' }} // To maintain responsiveness
          />
        </ImageWrapper>

       
      </Container>
    </HeroSectionWrapper>
  );
};

export default HeroSection;