// src/components/atoms/StyledText/StyledText.tsx
'use client';

import React, { JSX } from 'react';
import {
  StyledTextContainer,
  StyledTextWithPresetProps,
  TextStyles, // This now includes 'as'
  // TextStyles, // Only if you need to reference keys directly in component logic, usually not
} from './StyledText.styles';

// Props for the public StyledText component
// It largely inherits from StyledTextWithPresetProps
export interface TextProps
  extends Omit<StyledTextWithPresetProps, 'theme' | '$textStyle' | 'as'>,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
  className?: string;
  textStyle?: keyof typeof TextStyles; // Public prop name remains 'textStyle'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>; // Add 'as' here for the public API
  hoverColor?:string;

}
const StyledText: React.FC<TextProps> = ({
  children,
  as = 'span', // Default HTML tag
  className,
  textStyle,
  // All other props from DynamicStyledTextProps (fontFamily, fontSize, color, etc.)
  // will be passed down via {...props}
  ...props
}) => {

  return (
    <StyledTextContainer
      as={as}
      className={className}
      $textStyle={textStyle}
      {...props} // Pass down all other dynamic styling props
    >
      {children}
    </StyledTextContainer>
  );
};

export default StyledText;
