// src/components/sections/TermsText/TermsText.tsx
'use client';

import React from 'react';
import Link from 'next/link'; // For internal links
import { TermsTextWrapper } from './TermsText.styles';
import StyledText from '../../../components/atoms/StyledText';

const TermsText: React.FC = () => {
  return (
    <TermsTextWrapper>
      <StyledText
        textStyle="TermsSmall"
      >
        By clicking &ldquo;Get Started&rdquo;, you agree with{' '}
        <Link href="/terms-and-conditions" passHref legacyBehavior>
          <StyledText as="a" textDecoration='underline' color="textSecondary" hoverColor="textPrimary"> {/* Inline styling for link appearance if not handled by wrapper's 'a' */}
            Terms and Conditions
          </StyledText>
        </Link>
        ,{' '}
        <Link href="/privacy-policy" passHref legacyBehavior>
          <StyledText as="a" textDecoration='underline' color="textSecondary" hoverColor="textPrimary">
            Privacy Policy
          </StyledText>
        </Link>
        ,{' '}
        <Link href="/subscription-terms" passHref legacyBehavior>
          <StyledText as="a" textDecoration='underline' color="textSecondary" hoverColor="textPrimary">
            Subscription Terms
          </StyledText>
        </Link>
        .
      </StyledText>
    </TermsTextWrapper>
  );
};

export default TermsText;

