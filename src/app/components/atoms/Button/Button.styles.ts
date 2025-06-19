// src/components/atoms/Button/Button.styles.ts
import styled, { css } from 'styled-components';
import { ThemeType } from '../../../styles/theme';

// Define possible button variants and sizes based on your Figma and theme
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface StyledButtonProps {
  theme: ThemeType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean; // To manage loading state for styling
  disabled?: boolean;  // To manage disabled state for styling
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
}

// Define base styles that are common to all buttons
const baseButtonStyles = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // padding: 40px 8px;

  font-family: ${({ theme }) => theme.fonts.figtree}; // FIGMA CHECK: Font for 'GET STARTED'
  font-weight: ${({ theme }) => theme.fontWeights.bold}; // FIGMA CHECK: Weight for 'GET STARTED'
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.default},
              color ${({ theme }) => theme.transitions.default},
              border-color ${({ theme }) => theme.transitions.default},
              opacity ${({ theme }) => theme.transitions.default},
              box-shadow ${({ theme }) => theme.transitions.default};
  text-decoration: none; // For <Button as="a">
  border: 2px solid transparent;
  white-space: nowrap;
  appearance: none; // Removes default browser styling

  &:focus {
    outline: none; // We'll use focus-visible
  }

  &:focus-visible {
    /* FIGMA CHECK: Ensure this focus style aligns with your design's accessibility considerations */
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.background}, 0 0 0 4px ${({ theme }) => theme.colors.accentPrimary};
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  /* Styling for disabled state */
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6; // FIGMA CHECK: Disabled opacity
    `}
`;

// Define styles for different variants
const variantStyles = (theme: ThemeType, variant: ButtonVariant = 'primary') => {
  switch (variant) {
    case 'primary': // For "GET STARTED"
      return css`
        background-color: ${theme.colors.buttonPrimary}; /* Pink */
        color: ${theme.colors.textPrimary}; /* White text */
        border-color: ${theme.colors.btnColor};
        box-shadow: 2px 2px 10px 0px #00E7F9;


        &:hover:not(:disabled) {
          background-color: #E60053; 
          border-color: #E60053;
        }
        &:active:not(:disabled) {
          background-color: #CC004A; 
          border-color: #CC004A;
        }
      `;
    case 'secondary':
      return css`
        background-color: ${theme.colors.textSecondary}; 
        color: ${theme.colors.background};
        border-color: ${theme.colors.textSecondary}; 
        &:hover:not(:disabled) {
          opacity: 0.85;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.accentPrimary};
        border-color: ${theme.colors.accentPrimary};
        &:hover:not(:disabled) {
          background-color: ${theme.colors.accentPrimary};
          color: ${theme.colors.textPrimary};
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.colors.textPrimary};
        border-color: transparent;
        &:hover:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.08); /* Subtle hover */
          color: ${theme.colors.accentPrimary};
        }
      `;
    case 'link':
      return css`
        background-color: transparent;
        color: ${theme.colors.accentPrimary};
        border: none;
        padding-left: ${theme.spacing.xs};
        padding-right: ${theme.spacing.xs};
        font-weight: ${theme.fontWeights.medium};
        border-radius: ${theme.borderRadius.default};
        height: auto; // Allow natural height
        min-height: unset; // Reset min-height if set elsewhere
        &:hover:not(:disabled) {
          text-decoration: underline;
          color: ${theme.colors.accentPrimary};
          opacity: 0.8;
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px ${theme.colors.accentPrimary}33; /* Lighter focus for links */
        }
      `;
    default:
      return css``;
  }
};

// Define styles for different sizes
const sizeStyles = (theme: ThemeType, size: ButtonSize = 'medium') => {
  let horizontalPaddingBase: string;
  let verticalPadding: string;
  let fontSizeValue: string;
  let iconMargin: string;

  switch (size) {
    case 'small':
      /*  Font size, vertical/horizontal padding for small buttons */
      fontSizeValue = theme.fontSizes.smallText; /* e.g., 0.875rem */
      horizontalPaddingBase = theme.spacing.md; /* e.g., 16px */
      verticalPadding = theme.spacing.xs;     /* e.g., 8px */
      iconMargin = theme.spacing.xs;          /* e.g., 4px */
      break;
    case 'large': /* Likely for "GET STARTED" */
      fontSizeValue = theme.fontSizes.buttonText; /* e.g., 1.125rem (18px) or theme.fontSizes.ctaButton */
      horizontalPaddingBase = theme.spacing.xxxl;   /* e.g., 32px */
      verticalPadding = theme.spacing.xs;       /* e.g., 16px */
      iconMargin = theme.spacing.xs;            /* e.g., 8px */
      break;
    case 'medium':
    default:
      /* Font size, vertical/horizontal padding for medium buttons */
      fontSizeValue = theme.fontSizes.bttonSize;  /* e.g., 1rem (16px) */
      horizontalPaddingBase = theme.spacing.buttonXL; /* e.g., 24px */
      verticalPadding = theme.spacing.sm;     /* e.g., 12px */
      iconMargin = theme.spacing.sm;          /* e.g., 8px */
      break;
  }

  return css`
    font-size: ${fontSizeValue};
    padding-top: ${verticalPadding};
    padding-bottom: ${verticalPadding};
    /* Adjust padding if icons are present to maintain balance */
    padding-left: ${horizontalPaddingBase};
    padding-right: ${horizontalPaddingBase};
    .button-icon {
      &.icon-left {
        margin-right: ${iconMargin};
      }
      &.icon-right {
        margin-left: ${iconMargin};
      }
    }
  `;
};

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative; /* For absolute positioning of loader */
  ${baseButtonStyles}
  ${({ theme, variant }) => variantStyles(theme, variant)}
  ${({ theme, size }) => sizeStyles(theme, size)}

  .button-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0; /* Helps align SVGs better if they have inherent line-height */

    svg {
      /*  Icon size relative to button text or fixed size */
      width: 1.1em; /* Example: scales with font-size. Adjust as needed. */
      height: 1.1em; /* Example */
      display: block;
    }
  }

  /* Visually hide text when loading, but keep it for screen readers if needed, or replace entirely */
  &[data-loading="true"] .button-text {
     visibility: hidden;
     opacity: 0;
  }

  .button-loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); // Centering the loader
    /*
      CRITICAL: Implement a proper SVG spinner or CSS animation.
      The color should adapt to the button variant (e.g., white for primary, pink for outline).
    */
    width: 1.2em; /* Size relative to button font-size */
    height: 1.2em;
    border: 2px solid currentColor; /* Inherits color, but might need specific overrides */
    border-bottom-color: transparent; /* Makes it a spinner, not a full circle */
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    opacity: 0.7; // Loader opacity
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
