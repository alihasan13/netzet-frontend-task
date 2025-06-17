// src/components/sections/QuizTeaser/QuizTeaser.tsx
'use client';

import React from 'react';
import { QuizTeaserWrapper } from './QuizTeaser.styles';
import StyledText from '../../../components/atoms/StyledText';

const QuizTeaser: React.FC = () => {
  return (
    <QuizTeaserWrapper>
      <StyledText
        textStyle="QuizTeaserText" 
      >
        1-minute quiz for personalized Insights
      </StyledText>
    </QuizTeaserWrapper>
  );
};

export default QuizTeaser;