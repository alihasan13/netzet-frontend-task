
// src/components/layout/Container/Container.tsx
'use client'; 

import React, { JSX } from 'react';
import { StyledContainer } from './Container.styles';

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // Allow passing custom classNames
  as?: keyof JSX.IntrinsicElements; // Allow changing the underlying HTML element
  // e.g., fluid?: boolean;
  // e.g., maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as = 'div', // Default to a div element
  ...props // Pass any other props to StyledContainer
}) => {
  return (
    <StyledContainer className={className} as={as} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;