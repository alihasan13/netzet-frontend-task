// // src/components/atoms/Icon/Icon.tsx
// 'use client';

// import React from 'react';
// import { StyledIconWrapper, StyledIconProps } from './Icon.styles';

// // Define the props for the public Icon component
// // Omit 'theme' as it's injected by styled-components
// export interface IconProps extends Omit<StyledIconProps, 'theme'> {
//   children: React.ReactElement<React.SVGProps<SVGSVGElement>>; // Expect an SVG element as children
//   className?: string;
//   title?: string; // For accessibility if the icon is not purely decorative
//   ariaHidden?: boolean; // Explicitly set aria-hidden
// }

// const Icon: React.FC<IconProps> = ({
//   children,
//   className,
//   color,
//   size,
//   strokeWidth,
//   title,
//   ariaHidden = true, // Default to true for decorative icons
//   ...props // other potential HTML attributes for the span
// }) => {

//   const svgChild = React.Children.only(children);
//   const svgProps: React.SVGProps<SVGSVGElement> & { 'aria-hidden'?: boolean } = {};

//   if (title && !ariaHidden) { 
//   }
//   if (ariaHidden && svgChild.props['aria-hidden'] === undefined) {
//     svgProps['aria-hidden'] = true;
//   }


//   const clonedSvg = React.cloneElement(svgChild, svgProps);

//   return (
//     <StyledIconWrapper
//       className={className}
//       color={color}
//       size={size}
//       strokeWidth={strokeWidth}
//       role={title && !ariaHidden ? "img" : undefined} // Role 'img' if it has a title and isn't hidden
//       aria-label={title && !ariaHidden ? title : undefined}
//       {...props}
//     >
//       {clonedSvg}
      
//     </StyledIconWrapper>
//   );
// };

// export default Icon;
