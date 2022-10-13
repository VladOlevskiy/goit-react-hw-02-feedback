import React, { Children } from 'react';
import { Title, SectionEl } from './Section-styled';

export default function Section({ text, children }) {
  return (
    <SectionEl>
      <Title>{text}</Title>
      {children}
    </SectionEl>
  );
}
