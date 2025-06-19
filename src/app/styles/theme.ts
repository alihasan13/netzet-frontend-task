// src/styles/theme.ts

export const theme = {
  colors: {
    // Based on your Figma design:
    background: '#000000', // Predominantly black background
    textPrimary: '#FFFFFF', // White text
    textSecondary: '#A0A0A0', // Lighter gray text (adjust as needed)
    accentPrimary: '#FF005C', // Bright pink for buttons and highlights
    buttonPrimary: '#FC004E', // Bright pink for buttons and highlights
    accentSecondary: '#00C2FF', // Bright blue for the top banner
    gradientBlueStart: '#FC004E ',
    gradientBlueEnd: '#10CBE0 ',
    heroSubtitleColor: '#00E7F9', // <<< NEW: Color for Hero Subtitle
    heroSubtitleShadowColor: '#FC004E',
    btnColor: '#FC004E'
    // Add other colors you see in the design (e.g., for gradients, specific text sections)
    // Example:
    // gradientStart: '#SOME_COLOR',
    // gradientEnd: '#SOME_OTHER_COLOR',
  },
 
  
  fonts: {
    primary: 'var(--font-urbanist)', // Or whichever you choose as primary
    urbanist: 'var(--font-urbanist)',
    nunito: 'var(--font-nunito)',
    figtree: 'var(--font-figtree)',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    // Add other weights if your fonts.ts includes them (e.g., light: 300, extrabold: 800)
  },
  fontSizes: {
    // Specific names based on usage from your Figma:
    banner: '1rem',
    bannerDesktop: '1.375rem', //22px
    navLink: '1rem',

    heroTitleMobile: '1.5625rem',    // 25px Instead of a generic 'heroTitle'
    heroTitleDesktop: '2.1876rem', //35px

    

    listItem: '1rem',
    // listItem: '1red', 

    buttonText: '1.1rem', 
    heroSubtitleDesktop: '2.1876rem',
     heroSubtitleMobile: '1.5625rem' ,    // For 'medium' buttons or default button text
    
    smallText: '0.625rem', // For very small text, like terms, footers etc.
    smallTextDesktop: '0.75rem',
     mediumTextDesktop: '0.85rem',
    footerText: '0.75rem',
    large: '1.25rem', // Make sure this value is correct for your large buttons.
    medium: '1rem',     // 16px
    bttonSize: '1.25rem',  // 20px
    xlarge: '1.5rem',   // 24px
    xxlarge: '2rem',    // 32px
    heroTitle: '3rem',  // 48px (example for desktop, adjust for mobile)
  },
  layout: {
    containerWidth: '1280px', // Or your specific Figma width
    
  },
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
  spacing: {
    // Define common spacing units (examples below - use rem or px as per preference)
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    ssm: '0.625rem',  // 10px
    md: '1rem',    // 16px
    mmd: '1.25rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    buttonXL:'2.5rem' ,//40px
    xxl: '3rem',   // 48px
    xxxl: '5rem',  // 80px
    sectionPaddingYMobile: '3rem',
    sectionPaddingYDesktop: '5rem'
  },
  borderRadius: {
    default: '8px',        // General default
    button: '10px',        // For the pill-shaped "GET STARTED" button
    card: '12px',          // Example
    // Add any other specific border-radius values your design needs
  },
  transitions: {
    default: '0.3s ease-in-out',
    // button: 2px 2px 10px 0px #00E7F9;

  },
  
 
};

// TypeScript type for the theme
export type ThemeType = typeof theme;


// Helper for media queries
export const device = {
  mobileS: `(min-width: ${theme.breakpoints.mobileS})`,
  mobileM: `(min-width: ${theme.breakpoints.mobileM})`,
  mobileL: `(min-width: ${theme.breakpoints.mobileL})`,
  tablet: `(min-width: ${theme.breakpoints.tablet})`,
  laptop: `(min-width: ${theme.breakpoints.laptop})`,
  laptopL: `(min-width: ${theme.breakpoints.laptopL})`,
  desktop: `(min-width: ${theme.breakpoints.desktop})`,
  desktopL: `(min-width: ${theme.breakpoints.desktop})`
};