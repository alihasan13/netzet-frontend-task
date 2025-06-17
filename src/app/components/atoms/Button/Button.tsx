// src/components/atoms/Button/Button.tsx
'use client';

import React, { JSX } from 'react';
import { StyledButton, StyledButtonProps } from './Button.styles';

const ButtonSpinner: React.FC = () => <div className="button-loader" />;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'>,
  Pick<StyledButtonProps, 'variant' | 'size' | 'fullWidth'> {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  href?: string;
  target?: string;
  rel?: string;
  htmlType?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  iconLeft,
  iconRight,
  className,
  as,
  htmlType = 'button',
  ...props
}) => {
  const isEffectivelyDisabled = isLoading || disabled;
  const Element = as || (props.href ? 'a' : 'button');

  const commonProps = {
    className,
    variant,
    size,
    fullWidth,
    disabled: isEffectivelyDisabled,
    isLoading,
    hasIconLeft: !!iconLeft && !isLoading,
    hasIconRight: !!iconRight && !isLoading,
    'data-loading': isLoading,
    ...props,
  };

  if (Element === 'button') {
    (commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>).type = htmlType;
  }

  return (
    <StyledButton as={Element} {...commonProps}>
      {isLoading && <ButtonSpinner />}
      {!isLoading && iconLeft && (
        <span className="button-icon icon-left">
          {React.cloneElement(iconLeft, {
            'aria-hidden': true,
           } as React.HTMLAttributes<HTMLElement> & { 'aria-hidden': boolean }
          )}
        </span>
      )}
      {!isLoading && <span className="button-text">{children}</span>}
      {!isLoading && iconRight && (
        <span className="button-icon icon-right">
          {React.cloneElement(iconRight, {
            'aria-hidden': true,
           } as React.HTMLAttributes<HTMLElement> & { 'aria-hidden': boolean }
          )}
        </span>
      )}
    </StyledButton>
  );
};

export default Button;