// src/components/atoms/Icon/Icon.styles.ts
import styled, { css } from 'styled-components';
import { ThemeType } from '../../../styles/theme';

type ColorKeys = keyof ThemeType['colors'];
type FontSizeKeys = keyof ThemeType['fontSizes']; // For 'em' based sizing relative to text

export interface StyledIconProps {
  theme: ThemeType;
  color?: ColorKeys | string; // Theme color key or direct CSS color string
  size?: FontSizeKeys | string; // Theme font size key (for 'em' units) or direct CSS size (e.g., '24px', '1.5em')
  strokeWidth?: number | string; // For icons that use stroke
}

export const StyledIconWrapper = styled.span<StyledIconProps>`
  display: inline-flex; // Ensures proper alignment and sizing
  align-items: center;
  justify-content: center;
  line-height: 0; // Prevents extra space if the SVG has a line-height

  svg {
    display: block; // Removes any potential extra space below the SVG
    /*
      Determine size:
      1. If 'size' prop is a key in theme.fontSizes, use that value (likely 'rem' or 'em').
      2. If 'size' prop is a direct CSS unit (e.g., '24px', '1.5em'), use that.
      3. Default to '1em' to inherit size from parent font-size if 'size' is not provided.
    */
    width: ${({ theme, size }) =>
      size
        ? typeof size === 'string' && theme.fontSizes[size as FontSizeKeys]
          ? theme.fontSizes[size as FontSizeKeys]
          : size
        : '1em'};
    height: ${({ theme, size }) =>
      size
        ? typeof size === 'string' && theme.fontSizes[size as FontSizeKeys]
          ? theme.fontSizes[size as FontSizeKeys]
          : size
        : '1em'};

    /*
      Determine color:
      1. If 'color' prop is a key in theme.colors, use that theme color.
      2. If 'color' prop is a direct CSS color string, use that.
      3. Default to 'currentColor' to inherit color from parent text color.
         This is often desired for icons that should match text color.
    */
    fill: ${({ theme, color }) =>
      color
        ? typeof color === 'string' && theme.colors[color as ColorKeys]
          ? theme.colors[color as ColorKeys]
          : color
        : 'currentColor'};

    /*
      Allow stroke color to also be controlled by the 'color' prop,
      or set it to 'none' if you primarily use filled icons and don't want strokes by default.
      If your icons use stroke predominantly, you might set stroke: currentColor; and fill: none;
    */
    stroke: ${({ theme, color, strokeWidth }) =>
      strokeWidth // Only apply stroke if strokeWidth is explicitly provided
        ? color
          ? typeof color === 'string' && theme.colors[color as ColorKeys]
            ? theme.colors[color as ColorKeys]
            : color
          : 'currentColor'
        : 'none'}; // Default to no stroke if strokeWidth isn't set

    stroke-width: ${({ strokeWidth }) => (strokeWidth ? String(strokeWidth) : undefined)};

    transition: fill ${({ theme }) => theme.transitions.default},
                stroke ${({ theme }) => theme.transitions.default};
  }
`;
