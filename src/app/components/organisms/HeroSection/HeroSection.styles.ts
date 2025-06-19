// src/components/organisms/HeroSection/HeroSection.styles.ts
import styled from 'styled-components';
import { ThemeType, device } from '../../../styles/theme';


import { QuizTeaserWrapper } from '../../../components/sections/QuizTeaser/QuizTeaser.styles';
import { TermsTextWrapper } from '../../../components/sections/TermsText/TermsText.styles';
import { FooterWrapper as StyledFooterWrapperFromOrganism } from '../../../components/organisms/Footer/Footer.styles';

// Forward declare or define TextContentWrapper and ImageWrapper if not already
// For simplicity, I'm assuming they are defined further down in THIS file.
// If they were defined before .hero-container, no forward declaration needed.


// Define CtaButtonWrapper here if not already defined
export const CtaButtonWrapper = styled.div<{ theme: ThemeType }>`
  width: 100%;   
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;


// Define TextContentWrapper and ImageWrapper (simplified here, use your full definitions)
export const TextContentWrapper = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  width: 100%;

  /* Mobile Order for items INSIDE TextContentWrapper */
  > ${TermsTextWrapper} { order: 1; margin-top: 0; }
  > ${StyledFooterWrapperFromOrganism} { order: 2; margin-bottom: ${({ theme }) => theme.spacing.md} }
  > ${CtaButtonWrapper} { order: 3;  }
  > ${QuizTeaserWrapper} { order: 4; }

  @media ${device.laptop} {
    flex: 1 1 50%;
    max-width: 580px;
    align-items: flex-start;
    text-align: left;

    /* Desktop Order for items INSIDE TextContentWrapper */
    > ${CtaButtonWrapper} { order: 1; }
    > ${QuizTeaserWrapper} { order: 2; }
    > ${TermsTextWrapper} { order: 3; margin-top: ${({ theme }) => theme.spacing.md} }
  }

     @media ${device.laptopL} {
    flex: 1 1 50%;
    max-width: 580px;
    align-items: flex-start;
    text-align: left;
    

    /* Desktop Order for items INSIDE TextContentWrapper */
    > ${CtaButtonWrapper} { order: 1; }
    > ${QuizTeaserWrapper} { order: 2;}
    > ${TermsTextWrapper} { order: 3; margin-top: ${({ theme }) => theme.spacing.md }
  }
`;

export const ImageWrapper = styled.div<{ theme: ThemeType }>`
display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media ${device.laptop} {
    flex: 1 1 50%;
    justify-content: left;
    max-width: none;
  }
 
`;


// Now, HeroSectionWrapper which contains the .hero-container
export const HeroSectionWrapper = styled.section<{ theme: ThemeType }>`
  width: 100%;
  padding:  0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${device.tablet} {
    padding:  0;
  }
    @media ${device.laptopL} {
    padding:  0; //change from md to xs 
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};

    /* Mobile Order: Image on top */
    > ${ImageWrapper} { /* Targeting by styled-component type */
      order: 1;
    }
    > ${TextContentWrapper} {
      order: 2;
    }

    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.xs};

      /* Desktop Order: Text on left, Image on right */
      > ${TextContentWrapper} {
        order: 1;
      }
      > ${ImageWrapper} {
        order: 2;
      }
    }
  }
`;


// ... (FeaturesListStyled, FeatureItemStyled should also be in this file)
export const FeaturesListStyled = styled.ul<{ theme: ThemeType }>`
  list-style: none;
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.ssm};
  width: 100%;
  max-width: 450px;

   @media ${device.laptop} {
     max-width: none;
   }
`;


export const FeatureItemStyled = styled.li<{ theme: ThemeType }>`
  display: flex;
  align-items: flex-start; // This will vertically align the top of the image and the text
  gap: ${({ theme }) => theme.spacing.ssm}; // This will still provide space between the image and text
  text-align: left;

  // .feature-icon { // This class is on the div wrapping the <Image> for the star
    margin-top: 0.15em; // You MIGHT need to adjust this for the PNG
  // }
`;