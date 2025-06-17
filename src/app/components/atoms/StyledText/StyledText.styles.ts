// src/components/atoms/StyledText/StyledText.styles.ts
import styled, { css } from 'styled-components';
import { ThemeType, theme as defaultTheme, device as themeDevice } from '../../../styles/theme'; // Import your theme type, theme object, and device helper
import { JSX } from 'react';

// Define potential prop types by inferring keys from your theme
// This provides better autocompletion and type safety.
type FontKeys = keyof ThemeType['fonts'];
type FontSizeKeys = keyof ThemeType['fontSizes'];
type FontWeightKeys = keyof ThemeType['fontWeights'];
type ColorKeys = keyof ThemeType['colors'];
type SpacingKeys = keyof ThemeType['spacing'];

// Interface for props that can directly influence text styling
export interface DynamicStyledTextProps {
  theme: ThemeType; // Injected by ThemeProvider
  fontFamily?: FontKeys | string;
  fontSize?: FontSizeKeys | string;
  fontWeight?: FontWeightKeys | number;
  color?: ColorKeys | string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  letterSpacing?: string;
  lineHeight?: string | number;
  margin?: SpacingKeys | string | number;
  marginTop?: SpacingKeys | string | number;
  marginRight?: SpacingKeys | string | number;
  marginBottom?: SpacingKeys | string | number;
  marginLeft?: SpacingKeys | string | number;
  padding?: SpacingKeys | string | number;
  paddingTop?: SpacingKeys | string | number;
  paddingRight?: SpacingKeys | string | number;
  paddingBottom?: SpacingKeys | string | number;
  paddingLeft?: SpacingKeys | string | number;
  truncate?: boolean | number; // true for single line, number for multi-line clamp
  fontStyle?: 'normal' | 'italic';
  textDecoration?: 'none' | 'underline' | 'line-through' | 'overline';
  // Add any other common text CSS properties you anticipate needing
}

// Helper function to resolve theme keys or use direct values
const getValue = (
  themePropertyObject: Record<string, any> | undefined,
  themeKeyOrDirectValue: string | number | undefined
): string | number | undefined => {
  if (themeKeyOrDirectValue === undefined) return undefined;
  if (
    themePropertyObject &&
    typeof themeKeyOrDirectValue === 'string' &&
    themePropertyObject[themeKeyOrDirectValue]
  ) {
    return themePropertyObject[themeKeyOrDirectValue];
  }
  return themeKeyOrDirectValue;
};

// Base styled component that applies styles dynamically from props
// Defaults to rendering as a <span> element
export const StyledTextBase = styled.span<DynamicStyledTextProps>`
  font-family: ${({ theme, fontFamily }) => getValue(theme.fonts, fontFamily)};
  font-size: ${({ theme, fontSize }) => getValue(theme.fontSizes, fontSize)};
  font-weight: ${({ theme, fontWeight }) => getValue(theme.fontWeights, fontWeight)};
  color: ${({ theme, color }) => getValue(theme.colors, color)};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  font-style: ${({ fontStyle }) => fontStyle};
  text-decoration: ${({ textDecoration }) => textDecoration};

  /* Margins - apply shorthand 'margin' first, then specific sides if provided */
  margin: ${({ theme, margin }) => getValue(theme.spacing, margin)};
  margin-top: ${({ theme, marginTop }) => getValue(theme.spacing, marginTop)};
  margin-right: ${({ theme, marginRight }) => getValue(theme.spacing, marginRight)};
  margin-bottom: ${({ theme, marginBottom }) => getValue(theme.spacing, marginBottom)};
  margin-left: ${({ theme, marginLeft }) => getValue(theme.spacing, marginLeft)};

  /* Paddings - apply shorthand 'padding' first, then specific sides */
  padding: ${({ theme, padding }) => getValue(theme.spacing, padding)};
  padding-top: ${({ theme, paddingTop }) => getValue(theme.spacing, paddingTop)};
  padding-right: ${({ theme, paddingRight }) => getValue(theme.spacing, paddingRight)};
  padding-bottom: ${({ theme, paddingBottom }) => getValue(theme.spacing, paddingBottom)};
  padding-left: ${({ theme, paddingLeft }) => getValue(theme.spacing, paddingLeft)};

  /* Text truncation */
  ${({ truncate }) =>
    truncate &&
    (typeof truncate === 'number' && truncate > 1
      ? css`
          display: -webkit-box;
          -webkit-line-clamp: ${truncate};
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          /* Ensure a max-width or width is set on the element or its parent for multi-line clamp to work effectively */
        `
      : css`
          display: block; /* Or inline-block, depending on context */
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          /* Ensure a max-width or width is set on the element or its parent for single-line truncate to work effectively */
        `)}
`;


export const TextStyles = {

  HeroSubtitle: css`
    font-family: ${defaultTheme.fonts.urbanist}; /* CHANGED from Nunito */
    font-weight: ${defaultTheme.fontWeights.extraBold}; /* CHANGED from regular, uses 800 */
    
    font-size: ${defaultTheme.fontSizes.heroSubtitleMobile}; /* e.g., 1.2rem or define a new mobile size for this */
    line-height: 100%; /* CHANGED from 1.6, 100% can be 1 or 1.2 for better readability */
    letter-spacing: 'normal'; /* '0%' usually means normal spacing */
    color: ${defaultTheme.colors.heroSubtitleColor}; /* CHANGED to #00E7F9 */
    text-shadow: 0px 4px 4px ${defaultTheme.colors.heroSubtitleShadowColor}; /* CHANGED to use text-shadow for a similar effect to box-shadow on text */
    

    text-align: center; /* Default for mobile */
    margin-bottom: ${defaultTheme.spacing.lg}; /* Keep existing margin or adjust per Figma */
    max-width: 500px; /* Keep existing max-width for mobile if needed, or adjust */

    @media ${themeDevice.laptop} { /* Or your specific desktop breakpoint e.g. themeDevice.tablet */
      font-size: ${defaultTheme.fontSizes.heroSubtitleDesktop}; 
      font-weight: ${defaultTheme.fontWeights.bold};
      text-align: left;
    }
    
  `,

  HeroTitle: css`
    font-family: ${defaultTheme.fonts.urbanist}; 
    font-size: ${defaultTheme.fontSizes.heroTitleMobile}; 
    font-weight: ${defaultTheme.fontWeights.bold}; 
    color: ${defaultTheme.colors.textPrimary}; 
    line-height: 1.1; 
    text-align: center; /* From design */
    margin-bottom: ${defaultTheme.spacing.sm}; 

    @media ${themeDevice.tablet} {
      font-size: ${defaultTheme.fontSizes.heroTitleDesktop}; 
      text-align: left; /* From design */
    }
  `,

  FeatureListItem: css`
    font-family: ${defaultTheme.fonts.nunito}; 
    font-size: ${defaultTheme.fontSizes.listItem}; 
    font-weight: ${defaultTheme.fontWeights.medium}; 
    color: ${defaultTheme.colors.textPrimary}; 
    line-height: 22px; 

    @media ${themeDevice.tablet} {
      font-size: ${defaultTheme.fontSizes.listItem}; 
      font-weight: ${defaultTheme.fontWeights.semibold};
    }
  `,
  BannerText: css`
    font-family: ${defaultTheme.fonts.urbanist}; 
    font-size: ${defaultTheme.fontSizes.banner}; 
    font-weight: ${defaultTheme.fontWeights.extraBold}; 
    color: ${defaultTheme.colors.textPrimary};
    text-align: center;
    line-height: 100%;

    @media ${themeDevice.tablet} {
      font-size: ${defaultTheme.fontSizes.bannerDesktop}; 
    }
  `,
  TermsSmall: css`
    font-family: ${defaultTheme.fonts.nunito}; 
    font-size: ${defaultTheme.fontSizes.smallTextDesktop}; 
    font-weight: ${defaultTheme.fontWeights.medium}; 
    color: ${defaultTheme.colors.textSecondary}; 
    line-height: 1.4; 
    text-align: center;

    @media ${themeDevice.tablet} {
      font-size: ${defaultTheme.fontSizes.smallTextDesktop}; 
    }
    
  `,
  
  FooterText: css`
  font-family: ${defaultTheme.fonts.nunito}; 
  font-size: ${defaultTheme.fontSizes.smallText}; 
  font-weight: ${defaultTheme.fontWeights.medium}; 
  color: ${defaultTheme.colors.textSecondary}; 
  text-align: center; // Good to have in preset for reusability
  line-height: 100%; // FIGMA CHECK
`,
 
  QuizTeaserText: css`
  font-family: ${defaultTheme.fonts.nunito}; 
  font-size: ${defaultTheme.fontSizes.smallTextDesktop}; 
  font-weight: ${defaultTheme.fontWeights.regular}; 
  color: ${defaultTheme.colors.textPrimary}; 
  line-height: 16px; /* Or as per Figma */
  display: block; // Ensure it takes its own block for alignment if needed
  text-align: center; /* Default for mobile */

  @media ${themeDevice.laptop} { 
    font-size: ${defaultTheme.fontSizes.smallTextDesktop}; 
    text-align: left; /* Align with the left-aligned button on desktop */
    
  }
`,
  
};

// Interface for the final StyledText component, allowing a textStyle preset
export interface StyledTextWithPresetProps extends DynamicStyledTextProps {
  $textStyle?: keyof typeof TextStyles;  // Allows choosing a preset
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>; // Allow changing the rendered HTML tag
}

// Final styled component that combines base dynamic styles and optional preset styles
export const StyledTextContainer = styled(StyledTextBase)<StyledTextWithPresetProps>`
  /* Apply preset styles first, so specific props can override them if needed */
  ${({ $textStyle }) => $textStyle && TextStyles[$textStyle]}
`;