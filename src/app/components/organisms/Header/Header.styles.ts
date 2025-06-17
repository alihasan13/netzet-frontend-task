// src/components/organisms/Header/Header.styles.ts
import styled from 'styled-components';
import { ThemeType, device } from '../../../styles/theme'; // Import device helper

export const HeaderWrapper = styled.header<{ theme: ThemeType }>`
  width: 100%;
   background-color: ${({ theme }) => theme.colors.background}; 
  padding: ${({ theme }) => theme.spacing.md} 0; /* Vertical padding, e.g., 16px top/bottom */
  position: relative; // For potential absolute positioning of mobile menu
  z-index: 1000; // Ensure header stays on top

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div<{ theme: ThemeType }>`
  
  .logo-text-fame {
    /*  Font, size, weight, color for "fame" */
    font-family: ${({ theme }) => theme.fonts.urbanist}; 
    font-size: ${({ theme }) => theme.fontSizes.xlarge}; /* Example, e.g., 24px */
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .logo-text-tonic {
    /*  Font, size, weight, color for "tonic" */
    font-family: ${({ theme }) => theme.fonts.urbanist}; 
    font-size: ${({ theme }) => theme.fontSizes.xlarge}; 
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.accentPrimary}; /* Pink color */
  }

  display: flex;
  align-items: right;
`;

export const StyledLogoImage = styled.img`
  /* Mobile-first approach: Define mobile styles first */
  height: 55px; /* Example mobile height */
  width: 141px;  /* Maintain aspect ratio, or set specific mobile width */

  /* Laptop styles */
  @media ${device.laptop} {
    height: 45px; /* Your original laptop height */
    width: auto; /* Your original laptop width */
    /* Or use 'auto' for one dimension to maintain aspect ratio if original SVG is well-defined */
  }

  /* You could also add styles for other breakpoints if needed */
  /*
  @media ${device.tablet} {
    height: 60px;
    width: 350px;
  }
  */
`;

// export const NavDesktop = styled.nav<{ theme: ThemeType }>`
//   display: none; /* Hidden on mobile by default */
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing.xl}; /* Space between nav links, e.g., 32px */

//   @media ${device.tablet} { /* FIGMA CHECK: Breakpoint for showing desktop nav (e.g., tablet or desktop) */
//     display: flex;
//   }

//   a { /* Styling for the NavLink component if it renders an 'a' tag */
//     text-decoration: none;
//     /*
//       The NavLink itself will use StyledText or Button (variant='link' or 'ghost').
//       Refer to theme.fontSizes.navLink for text size.
//       Color will be theme.colors.textPrimary, hover might be accentPrimary.
//     */
//     /* Example if NavLink is a simple 'a' tag styled here: */
//     /*
//     font-family: ${({ theme }) => theme.fonts.nunito}; // FIGMA CHECK
//     font-size: ${({ theme }) => theme.fontSizes.navLink}; // FIGMA CHECK
//     font-weight: ${({ theme }) => theme.fontWeights.medium}; // FIGMA CHECK
//     color: ${({ theme }) => theme.colors.textPrimary};
//     transition: color ${({ theme }) => theme.transitions.default};

//     &:hover {
//       color: ${({ theme }) => theme.colors.accentPrimary};
//     }
//     */
//   }
// `;

export const MobileMenuButtonWrapper = styled.div<{ theme: ThemeType }>`
  display: flex; /* Use flex for button alignment if needed */
  align-items: center;

  @media ${device.tablet} { /* FIGMA CHECK: Breakpoint for hiding mobile menu button */
    display: none; /* Hidden on larger screens */
  }
  /* The button itself will be our Button atom with an Icon atom inside */
`;



export const NavDesktop = styled.nav<{ theme: ThemeType }>`
  display: none; /* Hidden on mobile by default */
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl}; /* Space between nav links */

  @media ${device.tablet} { /* FIGMA CHECK: Breakpoint for showing desktop nav */
    display: flex;
  }

  /* Styling for the <a> tags rendered by Next.js Link within NavLink */
  a {
    text-decoration: none;
   
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.accentPrimary} !important; /* Override StyledText color on hover */
    }
  }
`;

export const MobileNavMenu = styled.nav<{ theme: ThemeType; isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.textSecondary}33;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  /* Styling for the <a> tags rendered by Next.js Link within NavLink in the mobile menu */
  a {
    text-decoration: none;
    width: 100%;
    text-align: center;
    /* StyledText handles actual text styling (font, size, base color) */
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.accentPrimary} !important; /* Override StyledText color on hover */
    }
  }
`;